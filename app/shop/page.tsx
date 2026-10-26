'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronDown, SlidersHorizontal, Sparkles } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import ProductFilters from '@/components/catalogue/ProductFilters';
import { products, CATEGORIES } from '@/lib/products';
import { Product } from '@/types/product';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialOccasion = searchParams.get('occasion') || 'All';
  const initialQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedOccasion, setSelectedOccasion] = useState(initialOccasion);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [displayCount, setDisplayCount] = useState(24);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filtered and Sorted products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // Category filter
      if (selectedCategory !== 'All' && !p.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
        return false;
      }
      // Occasion filter
      if (selectedOccasion !== 'All' && p.occasion !== selectedOccasion) {
        return false;
      }
      // Search query
      if (initialQuery) {
        const q = initialQuery.toLowerCase();
        if (!p.title.toLowerCase().includes(q) && !p.code.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) {
          return false;
        }
      }
      // Price range
      if (p.priceInr > priceRange[1]) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.priceInr - b.priceInr;
      if (sortBy === 'price-high') return b.priceInr - a.priceInr;
      if (sortBy === 'code') return a.code.localeCompare(b.code);
      return (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0);
    });
  }, [selectedCategory, selectedOccasion, priceRange, sortBy, initialQuery]);

  const visibleProducts = filteredProducts.slice(0, displayCount);

  const handleReset = () => {
    setSelectedCategory('All');
    setSelectedOccasion('All');
    setPriceRange([0, 3000]);
    setInStockOnly(false);
    setSortBy('featured');
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Category Editorial Hero Banner */}
      <div className="relative bg-[#29231F] text-[#FAF7F2] py-16 lg:py-20 border-b border-[#3D3530] overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="https://www.indiacz.com/image/cache/catalog/NECKLACE SET/STARLIGHT/S020001237-768x768.jpg"
            alt="Showroom Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#211B18] border border-[#C6A56B]/40 text-[10px] uppercase tracking-[0.25em] text-[#C6A56B] font-semibold mb-3">
            <Sparkles className="w-3 h-3 text-[#C6A56B]" />
            <span>Digital Haute Joaillerie Showroom</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#FAF7F2]">
            {selectedCategory === 'All' ? 'Complete Jewellery Catalogue' : selectedCategory}
          </h1>
          <p className="text-xs sm:text-sm text-[#EDE4D8] max-w-xl mx-auto font-light mt-3 leading-relaxed">
            Explore 270+ manufactured brass Cubic Zirconia masterworks. Direct factory pricing, verified design codes, and worldwide B2B export dispatch from Zaveri Bazaar, Mumbai.
          </p>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#8C8178] mt-6">
            <Link href="/" className="hover:text-[#C6A56B]">Home</Link>
            <span>/</span>
            <span className="text-[#FAF7F2]">Showroom</span>
            {selectedCategory !== 'All' && (
              <>
                <span>/</span>
                <span className="text-[#C6A56B]">{selectedCategory}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-[#E8DFD5] gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-3 py-2 bg-white border border-[#E8DFD5] text-xs font-semibold text-[#29231F]"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#C6A56B]" />
              <span>Filters ({filteredProducts.length})</span>
            </button>
            <div className="text-xs text-[#8C8178]">
              Showing <strong className="text-[#29231F]">{visibleProducts.length}</strong> of{' '}
              <strong className="text-[#29231F]">{filteredProducts.length}</strong> designs
            </div>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-[#8C8178]">Sort By:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-white border border-[#E8DFD5] text-xs font-medium text-[#29231F] px-3 py-2 pr-8 appearance-none cursor-pointer outline-none hover:border-[#C6A56B]"
              >
                <option value="featured">Featured / Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="code">Design Code (A-Z)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#8C8178]" />
            </div>
          </div>
        </div>

        {/* Mobile Filters Dropdown */}
        {isMobileFilterOpen && (
          <div className="lg:hidden mb-8">
            <ProductFilters
              selectedCategory={selectedCategory}
              onSelectCategory={cat => {
                setSelectedCategory(cat);
                setIsMobileFilterOpen(false);
              }}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedOccasion={selectedOccasion}
              onSelectOccasion={occ => {
                setSelectedOccasion(occ);
                setIsMobileFilterOpen(false);
              }}
              inStockOnly={inStockOnly}
              onToggleInStock={setInStockOnly}
              onReset={handleReset}
              totalFilteredCount={filteredProducts.length}
            />
          </div>
        )}

        {/* 2-Column Layout: Left Filters + Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28">
              <ProductFilters
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                priceRange={priceRange}
                onPriceChange={setPriceRange}
                selectedOccasion={selectedOccasion}
                onSelectOccasion={setSelectedOccasion}
                inStockOnly={inStockOnly}
                onToggleInStock={setInStockOnly}
                onReset={handleReset}
                totalFilteredCount={filteredProducts.length}
              />
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="bg-white p-12 border border-[#E8DFD5] text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center mx-auto text-[#C6A56B]">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-medium text-[#29231F]">
                  No Designs Matched Your Filters
                </h3>
                <p className="text-xs text-[#8C8178] max-w-sm mx-auto">
                  Try adjusting the price range, clearing your search query, or selecting &ldquo;All Categories&rdquo; to browse all 270+ designs.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-[#29231F] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold px-6 py-2.5 hover:bg-[#542432] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {visibleProducts.map((product, idx) => (
                    <ProductCard key={product.id} product={product} priority={idx < 6} />
                  ))}
                </div>

                {/* Load More Button */}
                {visibleProducts.length < filteredProducts.length && (
                  <div className="text-center mt-12 pt-8 border-t border-[#E8DFD5]">
                    <button
                      onClick={() => setDisplayCount(prev => prev + 24)}
                      className="bg-white hover:bg-[#FAF7F2] text-[#29231F] border border-[#E8DFD5] hover:border-[#C6A56B] text-xs uppercase tracking-[0.2em] font-semibold py-3.5 px-8 transition-colors shadow-xs"
                    >
                      Load More Designs ({filteredProducts.length - visibleProducts.length} Remaining)
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-12">Loading showroom catalogue...</div>}>
      <ShopContent />
    </Suspense>
  );
}

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CATEGORIES, getProductsByCategory, formatPrice } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import { Sparkles, ArrowLeft } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES.find(c => c.slug === slug);
  const categoryProducts = getProductsByCategory(slug);

  if (!category && categoryProducts.length === 0) {
    notFound();
  }

  const categoryName = category ? category.name : slug.replace(/-/g, ' ').toUpperCase();
  const categoryDesc = category
    ? category.description
    : `Explore our handcrafted ${categoryName} manufactured in Zaveri Bazaar, Mumbai.`;

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Editorial Category Hero */}
      <div className="relative bg-[#29231F] text-[#FAF7F2] py-16 lg:py-24 border-b border-[#3D3530] overflow-hidden">
        {category?.image && (
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src={category.image}
              alt={categoryName}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#211B18] border border-[#C6A56B]/40 text-[10px] uppercase tracking-[0.25em] text-[#C6A56B] font-semibold mb-3">
            <Sparkles className="w-3 h-3 text-[#C6A56B]" />
            <span>Curated Collection</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2]">
            {categoryName}
          </h1>

          <p className="text-xs sm:text-sm text-[#EDE4D8] max-w-xl mx-auto font-light mt-3 leading-relaxed">
            {categoryDesc}
          </p>

          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#8C8178] mt-6">
            <Link href="/" className="hover:text-[#C6A56B]">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#C6A56B]">Showroom</Link>
            <span>/</span>
            <span className="text-[#C6A56B]">{categoryName}</span>
          </div>
        </div>
      </div>

      {/* Grid of Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E8DFD5]">
          <Link
            href="/shop"
            className="text-xs uppercase tracking-wider text-[#542432] hover:text-[#C6A56B] flex items-center gap-1.5 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Collections</span>
          </Link>
          <div className="text-xs text-[#8C8178]">
            <strong className="text-[#29231F]">{categoryProducts.length}</strong> Designs Available in {categoryName}
          </div>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="bg-white p-12 border border-[#E8DFD5] text-center space-y-4">
            <h3 className="font-serif-luxury text-2xl font-medium text-[#29231F]">
              Currently Crafting New Designs
            </h3>
            <p className="text-xs text-[#8C8178]">
              New pieces for this category are in casting. Explore our complete showroom catalogue in the meantime.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#29231F] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold px-6 py-2.5 hover:bg-[#542432]"
            >
              Browse All Designs
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categoryProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 4} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { getNewArrivals, products } from '@/lib/products';

export default function NewArrivalsSection() {
  const [activeTab, setActiveTab] = useState('All');
  const allArrivals = getNewArrivals(16);

  const tabs = ['All', 'Necklace Set', 'Earrings', 'Bangles & Kadas', 'Rings', 'Mangalsutra'];

  const filtered = activeTab === 'All'
    ? allArrivals
    : allArrivals.filter(p => p.category === activeTab);

  return (
    <section id="new-arrivals" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold block mb-2">
            Fresh From The Atelier
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#29231F] tracking-tight">
            New Arrivals Catalogue
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#8C8178] font-light leading-relaxed">
            Recently manufactured brass cubic zirconia pieces straight from our Mumbai production unit. Available for wholesale order and export.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs uppercase tracking-wider px-4 py-2 border transition-all ${
                activeTab === tab
                  ? 'bg-[#29231F] text-[#FAF7F2] border-[#29231F] shadow-xs'
                  : 'bg-white text-[#8C8178] border-[#E8DFD5] hover:border-[#C6A56B] hover:text-[#29231F]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 4-column Product Grid (3 tablet, 2 mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 4} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 bg-[#542432] hover:bg-[#3E1A25] text-[#FAF7F2] hover:text-[#C6A56B] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-9 border border-transparent transition-all shadow-md hover:shadow-lg"
          >
            <span>View All Designs In Showroom ({products.length} Products)</span>
            <ArrowRight className="w-4 h-4 text-[#C6A56B]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

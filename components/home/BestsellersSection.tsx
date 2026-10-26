'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { getBestsellers } from '@/lib/products';

export default function BestsellersSection() {
  const bestsellers = getBestsellers(8);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#542432] font-semibold mb-2">
            <Star className="w-3.5 h-3.5 fill-[#C6A56B] text-[#C6A56B]" />
            <span>High-Demand Boutique Re-Orders</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#29231F] tracking-tight">
            Featured Bestsellers
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#8C8178] font-light leading-relaxed">
            Consistently selected by premier retail jewelers and bridal stylists for exceptional diamond brilliance and fast turnaround times.
          </p>
        </div>

        {/* 4-column Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Action Link */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#29231F] hover:text-[#542432] border-b border-[#29231F] pb-1 hover:border-[#542432] transition-colors"
          >
            <span>Browse Complete Wholesale Showroom</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

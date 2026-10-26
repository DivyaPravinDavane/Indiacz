'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '@/lib/products';

export default function CategoryGrid() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold block mb-2">
            The Haute Joaillerie Repertoire
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#29231F] tracking-tight">
            Curated Jewellery Categories
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#8C8178] font-light leading-relaxed">
            From imperial wedding chokers to delicate everyday solitaires, discover our wholesale manufactured collections crafted for jewellery connoisseurs worldwide.
          </p>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.slice(0, 8).map((cat, idx) => {
            const isFeatured = idx === 0 || idx === 3;
            return (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className={`group relative overflow-hidden bg-white border border-[#E8DFD5] hover:border-[#C6A56B] transition-all duration-500 shadow-xs hover:shadow-xl flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-2 md:row-span-1' : ''
                }`}
              >
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden bg-[#FAF7F2] ${isFeatured ? 'aspect-16/9 sm:aspect-2/1' : 'aspect-square'}`}>
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity group-hover:opacity-80" />

                  {/* Category Title Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white flex items-end justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-[#C6A56B] font-semibold block mb-0.5">
                        {cat.itemCount} Designs
                      </span>
                      <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium tracking-wide leading-tight group-hover:text-[#F4EFE6] transition-colors">
                        {cat.name}
                      </h3>
                      {isFeatured && (
                        <p className="hidden sm:block text-xs text-[#EDE4D8] mt-1 max-w-sm line-clamp-1 font-light">
                          {cat.description}
                        </p>
                      )}
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs border border-white/40 flex items-center justify-center shrink-0 group-hover:bg-[#542432] group-hover:border-[#C6A56B] transition-all">
                      <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Sub-bar */}
                <div className="p-3 bg-white border-t border-[#E8DFD5] flex items-center justify-between text-[11px] text-[#8C8178]">
                  <span className="font-light truncate">{cat.name} Showroom</span>
                  <span className="text-[#C6A56B] font-semibold uppercase tracking-wider group-hover:underline flex items-center gap-1">
                    Explore &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Categories Link */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#542432] hover:text-[#C6A56B] border-b border-[#542432] pb-1 hover:border-[#C6A56B] transition-colors"
          >
            <span>View All Collections & Product Catalogues (270+ Designs)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

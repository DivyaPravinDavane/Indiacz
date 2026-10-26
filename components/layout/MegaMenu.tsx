'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/lib/products';

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const mainCategories = CATEGORIES.slice(0, 8);

  return (
    <nav className="hidden lg:flex items-center justify-center gap-8 relative z-40">
      {/* Home link */}
      <Link
        href="/"
        className="text-[13px] tracking-widest uppercase font-medium text-[#29231F] hover:text-[#C6A56B] py-4 transition-colors"
      >
        Home
      </Link>

      {/* All Jewellery Mega Dropdown */}
      <div
        className="group py-4"
        onMouseEnter={() => setActiveMenu('categories')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <Link
          href="/shop"
          className="flex items-center gap-1 text-[13px] tracking-widest uppercase font-medium text-[#29231F] group-hover:text-[#C6A56B] transition-colors"
        >
          <span>Showroom Catalogue</span>
          <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-[#8C8178]" />
        </Link>

        {/* Mega Menu Dropdown Panel */}
        {activeMenu === 'categories' && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-[92vw] max-w-6xl bg-white border border-[#E8DFD5] shadow-2xl p-8 grid grid-cols-4 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Col 1 & 2: Primary Categories */}
            <div className="col-span-2">
              <div className="text-[11px] uppercase tracking-widest text-[#C6A56B] font-semibold mb-4 pb-1 border-b border-[#E8DFD5] flex items-center justify-between">
                <span>Fine Brass CZ Categories</span>
                <Link
                  href="/shop"
                  className="text-[10px] text-[#542432] hover:text-[#C6A56B] lowercase font-normal"
                >
                  view all (270+ designs) &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {mainCategories.map(cat => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between p-2 hover:bg-[#FAF7F2] transition-colors group/item border border-transparent hover:border-[#E8DFD5]"
                  >
                    <div>
                      <div className="font-serif-luxury text-[15px] font-medium text-[#29231F] group-hover/item:text-[#542432]">
                        {cat.name}
                      </div>
                      <div className="text-[11px] text-[#8C8178]">
                        {cat.itemCount} Designs Available
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A56B] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 3: Editorial Feature 1 (Bridal) */}
            <div className="col-span-1 bg-[#FAF7F2] p-4 border border-[#E8DFD5] flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-widest font-semibold text-[#542432] bg-[#FAF7F2] border border-[#C6A56B] px-2 py-0.5">
                  Curated Edit
                </span>
                <h4 className="font-serif-luxury text-lg font-medium text-[#29231F] mt-2 mb-1">
                  The Imperial Bridal Edit
                </h4>
                <p className="text-xs text-[#8C8178] leading-relaxed mb-3">
                  Royal chokers and grand multi-tier necklace sets handcrafted for Indian weddings.
                </p>
              </div>
              <div className="relative aspect-4/3 w-full overflow-hidden border border-[#E8DFD5] mb-3">
                <Image
                  src="https://www.indiacz.com/image/cache/catalog/NECKLACE SET/STARLIGHT/S020001237-768x768.jpg"
                  alt="Bridal Jewellery"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <Link
                href="/category/necklace-sets"
                className="text-[11px] uppercase tracking-wider text-[#542432] font-semibold hover:text-[#C6A56B] flex items-center gap-1"
              >
                <span>Explore Bridal</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Col 4: Editorial Feature 2 (Earrings & Solitaires) */}
            <div className="col-span-1 bg-[#FAF7F2] p-4 border border-[#E8DFD5] flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-widest font-semibold text-[#542432] bg-[#FAF7F2] border border-[#C6A56B] px-2 py-0.5">
                  New Season
                </span>
                <h4 className="font-serif-luxury text-lg font-medium text-[#29231F] mt-2 mb-1">
                  Royal Solitaire Drops
                </h4>
                <p className="text-xs text-[#8C8178] leading-relaxed mb-3">
                  Chandelier drops and pavé huggies in 24K dual micron gold and rhodium finish.
                </p>
              </div>
              <div className="relative aspect-4/3 w-full overflow-hidden border border-[#E8DFD5] mb-3">
                <Image
                  src="https://www.indiacz.com/image/cache/catalog/DRUZY/EARINGS/BASEL/B012001500-768x768.jpg"
                  alt="Earrings Collection"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <Link
                href="/category/wholesale-earrings"
                className="text-[11px] uppercase tracking-wider text-[#542432] font-semibold hover:text-[#C6A56B] flex items-center gap-1"
              >
                <span>Shop Earrings</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Top category direct links */}
      <Link
        href="/category/necklace-sets"
        className="text-[13px] tracking-widest uppercase font-medium text-[#29231F] hover:text-[#C6A56B] py-4 transition-colors"
      >
        Necklace Sets
      </Link>
      <Link
        href="/category/wholesale-earrings"
        className="text-[13px] tracking-widest uppercase font-medium text-[#29231F] hover:text-[#C6A56B] py-4 transition-colors"
      >
        Earrings
      </Link>
      <Link
        href="/category/wholesale-bangles"
        className="text-[13px] tracking-widest uppercase font-medium text-[#29231F] hover:text-[#C6A56B] py-4 transition-colors"
      >
        Bangles & Kadas
      </Link>
      <Link
        href="/category/wholesale-rings"
        className="text-[13px] tracking-widest uppercase font-medium text-[#29231F] hover:text-[#C6A56B] py-4 transition-colors"
      >
        Rings
      </Link>
      <Link
        href="/category/mangalsutra"
        className="text-[13px] tracking-widest uppercase font-medium text-[#29231F] hover:text-[#C6A56B] py-4 transition-colors"
      >
        Mangalsutra
      </Link>
      <Link
        href="/about"
        className="text-[13px] tracking-widest uppercase font-medium text-[#29231F] hover:text-[#C6A56B] py-4 transition-colors"
      >
        Our Heritage
      </Link>
      <Link
        href="/contact"
        className="text-[13px] tracking-widest uppercase font-medium text-[#29231F] hover:text-[#C6A56B] py-4 transition-colors"
      >
        Contact & Hotline
      </Link>
    </nav>
  );
}

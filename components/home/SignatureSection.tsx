'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Gem, ShieldCheck } from 'lucide-react';

export default function SignatureSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#29231F] text-[#FAF7F2] border-b border-[#3D3530] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-square sm:aspect-4/3 overflow-hidden border-2 border-[#C6A56B]/40 bg-[#211B18] shadow-2xl p-4">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://www.indiacz.com/image/cache/catalog/DRUZY/NECKLACE/BASEL/B012001652-768x768.jpg"
                    alt="IndiaCZ Signature Basel Druzy CZ Haram"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-106 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#29231F]/90 backdrop-blur-xs text-[#C6A56B] border border-[#C6A56B]/40 text-[10px] uppercase tracking-widest font-mono px-2.5 py-1">
                      Atelier Signature • DN B012001652
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Gold Accent Border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C6A56B]/20 pointer-events-none -z-0 hidden sm:block" />
            </div>
          </div>

          {/* Narrative Side */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#211B18] border border-[#C6A56B]/40 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />
              <span>Signature Design Spotlight</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight text-[#FAF7F2]">
              The Basel Druzy & <span className="italic text-[#C6A56B]">American Diamond</span> Grand Suite
            </h2>

            <p className="text-sm sm:text-base text-[#EDE4D8] leading-relaxed font-light">
              A tour de force of Indian imitation fine jewellery. Incorporating hand-selected natural iridescent druzy crystals framed within concentric micro-pavé CZ halos, this signature creation captures the soul of royal Mughal court regalia with contemporary lightweight ergonomics.
            </p>

            {/* Quality Points */}
            <div className="grid grid-cols-2 gap-4 py-2 border-y border-[#3D3530] text-xs">
              <div className="flex items-center gap-2">
                <Gem className="w-4 h-4 text-[#C6A56B] shrink-0" />
                <span>Hand-cut Natural Druzy</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6A56B] shrink-0" />
                <span>Hypoallergenic Brass Alloy</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C6A56B]" />
                <span>24K Micron Gold Micron Dip</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-[#C6A56B] shrink-0" />
                <span>Custom Resizing Available</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/product/38179"
                className="w-full sm:w-auto bg-[#C6A56B] hover:bg-[#B39257] text-[#29231F] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>View Signature Design</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/category/long-necklace"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 border border-[#EDE4D8]/30 hover:border-[#C6A56B] transition-colors flex items-center justify-center"
              >
                <span>Explore Long Necklaces</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

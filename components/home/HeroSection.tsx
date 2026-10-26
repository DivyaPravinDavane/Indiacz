'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, ShieldCheck, Gem } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#FAF7F2] overflow-hidden border-b border-[#E8DFD5]">
      {/* Subtle luxury ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6A56B]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 sm:pt-2 lg:pt-3 pb-10 sm:pb-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Bold, Dramatic Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left pt-1 sm:pt-2 lg:pt-3">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#C6A56B] shadow-xs text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#542432] font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A56B] fill-[#C6A56B]" />
              <span>Haute Joaillerie • 2026 Wholesale Campaign</span>
            </div>

            {/* Dramatic Bold Headline */}
            <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-bold text-[#29231F] leading-[0.98] tracking-[-0.02em]">
              Discover the Art of{' '}
              <span className="relative inline-block mt-1 sm:mt-2">
                <span className="italic font-bold text-[#542432] pr-2">Adornment</span>
                <span className="text-[#C6A56B] not-italic">.</span>
                <span className="absolute -bottom-1.5 left-0 w-full h-[4px] bg-gradient-to-r from-[#C6A56B] via-[#DFCFB9] to-transparent rounded-full" />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#3D3530] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed pt-1">
              Explore exquisite jewellery designs for celebrations, special occasions, and everyday elegance. Precision micro-pavé Cubic Zirconia set in fine hypoallergenic brass with 24K dual micron gold finish.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop"
                className="w-full sm:w-auto bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] hover:text-[#C6A56B] text-xs uppercase tracking-[0.22em] font-bold py-4 px-8 border border-transparent transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl active:scale-98"
              >
                <span>Explore the Collection</span>
                <ArrowRight className="w-4 h-4 text-[#C6A56B]" />
              </Link>

              <Link
                href="#new-arrivals"
                className="w-full sm:w-auto bg-white hover:bg-[#FAF7F2] text-[#29231F] text-xs uppercase tracking-[0.22em] font-bold py-4 px-8 border-2 border-[#E8DFD5] hover:border-[#C6A56B] transition-all flex items-center justify-center shadow-xs"
              >
                <span>Shop New Arrivals</span>
              </Link>
            </div>

            {/* Micro Proof Badges */}
            <div className="pt-6 border-t border-[#E8DFD5] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="font-serif-luxury text-3xl font-bold text-[#29231F]">270+</div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C8178] font-semibold mt-0.5">Exclusive Designs</div>
              </div>
              <div>
                <div className="font-serif-luxury text-3xl font-bold text-[#29231F]">2013</div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C8178] font-semibold mt-0.5">Zaveri Bazaar HQ</div>
              </div>
              <div>
                <div className="font-serif-luxury text-3xl font-bold text-[#29231F]">Global</div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C8178] font-semibold mt-0.5">B2B Wholesale Export</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Editorial Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Grand Image Frame */}
              <div
                className="relative aspect-[4/5] overflow-hidden border-2 border-[#E8DFD5] bg-white shadow-2xl p-3"
                style={{ position: 'relative', width: '100%', aspectRatio: '4 / 5' }}
              >
                <div className="relative w-full h-full overflow-hidden bg-[#FAF7F2]" style={{ position: 'relative' }}>
                  <Image
                    src="https://www.indiacz.com/image/cache/catalog/NECKLACE%20SET/STARLIGHT/S020001237-768x768.jpg"
                    alt="IndiaCZ Grand Bridal Starlight CZ Necklace Set"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                  {/* Floating caption on hero image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#C6A56B] font-bold block mb-0.5">
                      Featured Masterpiece • DN S020001237
                    </span>
                    <h3 className="font-serif-luxury text-2xl font-bold leading-snug">
                      Starlight Pavé Royal Bridal Suite
                    </h3>
                  </div>
                </div>
              </div>

              {/* Inset Secondary Asymmetric Floating Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md p-3.5 border-2 border-[#E8DFD5] shadow-2xl max-w-xs">
                <div
                  className="relative w-16 h-16 bg-[#FAF7F2] border border-[#E8DFD5] shrink-0 overflow-hidden"
                  style={{ position: 'relative' }}
                >
                  <Image
                    src="https://www.indiacz.com/image/cache/catalog/DRUZY/EARINGS/BASEL/B012001500-768x768.jpg"
                    alt="Earrings Preview"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#C6A56B] font-bold block">
                    Royal Drop Earrings
                  </span>
                  <div className="font-serif-luxury text-sm font-bold text-[#29231F] leading-tight">
                    Basel Druzy B012001500
                  </div>
                  <div className="text-xs font-bold text-[#542432] mt-0.5">
                    Rs. 1,114 ($16.9)
                  </div>
                </div>
              </div>

              {/* Hallmark Badge */}
              <div className="absolute -top-4 -right-4 bg-[#542432] text-[#FAF7F2] p-3 border-2 border-[#C6A56B] rounded-full shadow-xl flex flex-col items-center justify-center w-22 h-22 text-center">
                <Sparkles className="w-5 h-5 text-[#C6A56B] mb-0.5" />
                <span className="text-[9px] uppercase tracking-widest font-bold leading-tight">
                  Handset<br />CZ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, ShieldCheck, Gem } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#FAF7F2] overflow-hidden border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E8DFD5] text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#542432] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />
              <span>Haute Joaillerie • 2026 Wholesale Campaign</span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-[#29231F] leading-[1.1] tracking-tight">
              Discover the Art of <span className="italic font-light text-[#542432]">Adornment</span>
            </h1>

            <p className="text-base sm:text-lg text-[#544F4B] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Explore exquisite jewellery designs for celebrations, special occasions, and everyday elegance. Precision micro-pavé Cubic Zirconia set in fine hypoallergenic brass with 24K dual micron gold finish.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop"
                className="w-full sm:w-auto bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] hover:text-[#C6A56B] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 border border-transparent transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Explore the Collection</span>
                <ArrowRight className="w-4 h-4 text-[#C6A56B]" />
              </Link>

              <Link
                href="#new-arrivals"
                className="w-full sm:w-auto bg-transparent hover:bg-white text-[#29231F] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 border border-[#E8DFD5] hover:border-[#C6A56B] transition-all flex items-center justify-center"
              >
                <span>Shop New Arrivals</span>
              </Link>
            </div>

            {/* Micro proof badges */}
            <div className="pt-6 border-t border-[#E8DFD5] grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="font-serif-luxury text-2xl font-semibold text-[#29231F]">270+</div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C8178]">Exclusive Designs</div>
              </div>
              <div>
                <div className="font-serif-luxury text-2xl font-semibold text-[#29231F]">2013</div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C8178]">Zaveri Bazaar HQ</div>
              </div>
              <div>
                <div className="font-serif-luxury text-2xl font-semibold text-[#29231F]">Global</div>
                <div className="text-[10px] uppercase tracking-wider text-[#8C8178]">B2B Wholesale Export</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Editorial Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Grand Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-[#E8DFD5] bg-white shadow-2xl p-3">
                <div className="relative w-full h-full overflow-hidden bg-[#FAF7F2]">
                  <Image
                    src="https://www.indiacz.com/image/cache/catalog/NECKLACE%20SET/STARLIGHT/S020001237-768x768.jpg"
                    alt="IndiaCZ Grand Bridal Starlight CZ Necklace Set"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating caption on hero image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#C6A56B] font-semibold block">
                      Featured Masterpiece • DN S020001237
                    </span>
                    <h3 className="font-serif-luxury text-xl font-medium leading-snug">
                      Starlight Pavé Royal Bridal Suite
                    </h3>
                  </div>
                </div>
              </div>

              {/* Inset Secondary Asymmetric Floating Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white/95 backdrop-blur-md p-3 border border-[#E8DFD5] shadow-xl max-w-xs">
                <div className="relative w-16 h-16 bg-[#FAF7F2] border border-[#E8DFD5] shrink-0 overflow-hidden">
                  <Image
                    src="https://www.indiacz.com/image/cache/catalog/DRUZY/EARINGS/BASEL/B012001500-768x768.jpg"
                    alt="Earrings Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-[#C6A56B] font-semibold block">
                    Royal Drop Earrings
                  </span>
                  <div className="font-serif-luxury text-sm font-medium text-[#29231F] leading-tight">
                    Basel Druzy B012001500
                  </div>
                  <div className="text-xs font-semibold text-[#542432] mt-0.5">
                    Rs. 1,114 ($16.9)
                  </div>
                </div>
              </div>

              {/* Hallmark Badge */}
              <div className="absolute -top-4 -right-4 bg-[#542432] text-[#FAF7F2] p-3 border border-[#C6A56B] rounded-full shadow-lg flex flex-col items-center justify-center w-20 h-20 text-center">
                <Sparkles className="w-4 h-4 text-[#C6A56B] mb-0.5" />
                <span className="text-[8px] uppercase tracking-widest font-semibold leading-tight">
                  Handset<br/>CZ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

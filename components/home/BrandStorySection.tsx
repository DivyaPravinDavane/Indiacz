'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Award, Users, CheckCircle } from 'lucide-react';

export default function BrandStorySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold block">
              Zaveri Bazaar Heritage • Since 2013
            </span>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#29231F] leading-tight tracking-tight">
              Crafted in Mumbai’s <br className="hidden sm:inline" />
              <span className="italic text-[#542432]">Legendary Jewellery Quarter</span>
            </h2>

            <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto lg:mx-0" />

            <p className="text-sm sm:text-base text-[#544F4B] leading-relaxed font-light">
              Known for manufacturing, supplying, and wholesaling premier imitation and brass Cubic Zirconia jewellery, <strong className="text-[#29231F] font-semibold">Blue Petel Diamond (IndiaCZ)</strong> commenced operations in <strong className="text-[#29231F] font-semibold">2013</strong> under the leadership of partner <strong className="text-[#29231F] font-semibold">Mr. Paresh Jain</strong>.
            </p>

            <p className="text-xs sm:text-sm text-[#8C8178] leading-relaxed font-light">
              Located at Shop 5, Fida Mansion near Jumma Masjid in Zaveri Bazaar, our skilled craftsmen merge generations of traditional gemstone polishing with cutting-edge micro-pavé setting tools. We serve jewellery retailers, wholesalers, and international boutique brands with ethically finished, pocket-friendly luxury jewellery.
            </p>

            {/* Credibility highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2 text-left">
              <div className="p-3 bg-white border border-[#E8DFD5]">
                <div className="font-serif-luxury text-xl font-semibold text-[#29231F]">In-House Unit</div>
                <div className="text-[11px] text-[#8C8178] mt-0.5">Strict multi-tier quality testing & polishing unit</div>
              </div>
              <div className="p-3 bg-white border border-[#E8DFD5]">
                <div className="font-serif-luxury text-xl font-semibold text-[#29231F]">Global Reach</div>
                <div className="text-[11px] text-[#8C8178] mt-0.5">Seamless export to USA, UK, Europe, & UAE</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] hover:text-[#C6A56B] text-xs uppercase tracking-[0.2em] font-semibold py-3.5 px-7 border border-transparent transition-all shadow-sm"
              >
                <span>Discover Our Complete Story</span>
                <ArrowRight className="w-4 h-4 text-[#C6A56B]" />
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-4/3 overflow-hidden border-2 border-[#E8DFD5] bg-white shadow-xl p-3">
                <div className="relative w-full h-full overflow-hidden bg-[#FAF7F2]">
                  <Image
                    src="https://www.indiacz.com/image/cache/catalog/NECKLACE SET/STARLIGHT/S020001236-768x768.jpg"
                    alt="IndiaCZ Craftsmanship Zaveri Bazaar"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[9px] uppercase tracking-widest text-[#C6A56B] font-semibold block">
                      Zaveri Bazaar Foundry • Mumbai
                    </span>
                    <h3 className="font-serif-luxury text-lg font-medium">
                      Blue Petel Diamond / IndiaCZ
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Quote badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white p-4 border border-[#E8DFD5] shadow-xl max-w-xs text-left">
                <p className="font-serif-luxury italic text-xs text-[#29231F] leading-snug">
                  &ldquo;Ensuring that the premium quality of our Cubic Zirconia and brass jewellery is never compromised.&rdquo;
                </p>
                <span className="text-[10px] uppercase tracking-widest text-[#8C8178] font-semibold block mt-1">
                  — Mr. Paresh Jain, Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

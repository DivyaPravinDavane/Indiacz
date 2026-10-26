'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function OccasionSection() {
  const occasions = [
    {
      title: 'Wedding Jewellery',
      subtitle: 'Imperial Grandeur for Nuptial Vows',
      image: 'https://www.indiacz.com/image/cache/catalog/NECKLACE%20SET/STARLIGHT/S020001237-768x768.jpg',
      link: '/shop?occasion=Wedding',
      count: '65+ Designs',
    },
    {
      title: 'Festive Jewellery',
      subtitle: 'Diwali, Eid, & Auspicious Celebrations',
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/NECKLACE/MEENAS/M021001853-768x768.jpg',
      link: '/shop?occasion=Celebration',
      count: '48+ Designs',
    },
    {
      title: 'Party Wear',
      subtitle: 'Black-Tie Soirees & Cocktail Nights',
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/EARINGS/BASEL/B012001500-768x768.jpg',
      link: '/shop?occasion=Party%20Wear',
      count: '54+ Designs',
    },
    {
      title: 'Everyday Wear',
      subtitle: 'Subtle Solitaires & Graceful Studs',
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/EARINGS/khusi/K996000142-768x768.jpg',
      link: '/shop?category=Studs',
      count: '32+ Designs',
    },
    {
      title: 'Traditional Designs',
      subtitle: 'Heritage Kundan & Temple Motifs',
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/KADA/khusi/K996000148-768x768.jpg',
      link: '/shop?category=Bangles%20%26%20Kadas',
      count: '42+ Designs',
    },
    {
      title: 'Contemporary Styles',
      subtitle: 'Modern Geometric Solitaire Artistry',
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/FINGER RING/KHUSHI/K996000134-768x768.jpg',
      link: '/shop?category=Rings',
      count: '46+ Designs',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold block mb-2">
            The Calendar of Celebrations
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#29231F] tracking-tight">
            Shop By Occasion
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#8C8178] font-light leading-relaxed">
            Every memorable milestone calls for bespoke brilliance. Discover hand-set cubic zirconia designed for life’s most celebrated chapters.
          </p>
        </div>

        {/* 6 Occasion Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occ, idx) => (
            <Link
              key={occ.title}
              href={occ.link}
              className="group relative overflow-hidden bg-white border border-[#E8DFD5] hover:border-[#C6A56B] transition-all duration-500 shadow-xs hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={occ.image}
                  alt={occ.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-opacity group-hover:opacity-80" />

                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-xs text-[#29231F] text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 border border-[#E8DFD5]">
                    {occ.count}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-serif-luxury text-2xl font-medium tracking-wide leading-tight group-hover:text-[#F4EFE6] transition-colors">
                    {occ.title}
                  </h3>
                  <p className="text-xs text-[#EDE4D8] font-light mt-1">
                    {occ.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-white border-t border-[#E8DFD5] flex items-center justify-between text-xs text-[#29231F]">
                <span className="font-medium text-[11px] uppercase tracking-wider text-[#8C8178] group-hover:text-[#542432]">
                  Explore Occasion Edit
                </span>
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] group-hover:border-[#C6A56B] flex items-center justify-center text-[#29231F] group-hover:text-[#C6A56B] transition-colors">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

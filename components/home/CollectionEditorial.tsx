'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CollectionEditorial() {
  const collections = [
    {
      id: 'bridal-edit',
      tag: 'Couture Wedding',
      title: 'The Imperial Bridal Edit',
      subtitle: 'Opulent ceremonial chokers & cascading harams',
      description: 'Crafted for the majestic modern bride. Meticulous hand-set AAA+ American Diamond CZ and uncut polki motifs crafted in 24K micron gold finish for timeless matrimonial grandeur.',
      image: 'https://www.indiacz.com/image/cache/catalog/NECKLACE SET/STARLIGHT/S020001237-768x768.jpg',
      link: '/category/necklace-sets',
      dnCode: 'S020001237',
    },
    {
      id: 'modern-elegance',
      tag: 'Contemporary Chic',
      title: 'Modern Pavé Elegance',
      subtitle: 'Geometric solitaires & fluid drop silhouettes',
      description: 'Sculpted with sleek architectural contours and high-refraction cubic zirconia stones, designed to seamlessly transition from cocktail soirees to black-tie galas.',
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/EARINGS/BASEL/B012001500-768x768.jpg',
      link: '/category/wholesale-earrings',
      dnCode: 'B012001500',
    },
    {
      id: 'statement-jewellery',
      tag: 'Bespoke Atelier',
      title: 'Statement Heritage Kadas',
      subtitle: 'Intricate openable cuffs & natural druzy stones',
      description: 'Bold statement bangles and openable kadas adorned with genuine sparkling druzy stones and micro-pavé halos, celebrating five generations of Zaveri Bazaar craftsmanship.',
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/KADA/khusi/K996000148-768x768.jpg',
      link: '/category/wholesale-bangles',
      dnCode: 'K996000148',
    },
    {
      id: 'festive-collection',
      tag: 'Auspicious Heritage',
      title: 'The Festive Mangalsutra & Rings',
      subtitle: 'Reimagined traditional motifs for celebrations',
      description: 'Delicate black-bead mangalsutras and brilliant-cut solitaire cocktail rings uniting cultural devotion with contemporary refinement.',
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/NECKLACE/MEENAS/M021001853-768x768.jpg',
      link: '/category/mangalsutra',
      dnCode: 'M021001853',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold block mb-2">
            Editorial Perspectives
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#29231F] tracking-tight">
            Curated Collection Edits
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#8C8178] font-light leading-relaxed">
            Delve into thematic jewellery stories curated by our master designers, pairing traditional Indian grandeur with European fine jewellery sensibilities.
          </p>
        </div>

        {/* Alternating Panels */}
        <div className="space-y-16 lg:space-y-24">
          {collections.map((col, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={col.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative group bg-white p-3 sm:p-4 border border-[#E8DFD5] shadow-lg hover:shadow-2xl transition-all duration-700">
                    <div className="relative aspect-16/10 overflow-hidden bg-[#FAF7F2]">
                      <Image
                        src={col.image}
                        alt={col.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-106"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-[#FAF7F2]/90 backdrop-blur-xs text-[#29231F] border border-[#E8DFD5] text-[10px] uppercase tracking-widest font-mono px-2 py-0.5">
                          DN: {col.dnCode}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-5 space-y-4 text-center lg:text-left ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#542432] font-semibold border-b border-[#C6A56B] pb-1">
                    <Sparkles className="w-3 h-3 text-[#C6A56B]" />
                    <span>{col.tag}</span>
                  </div>

                  <h3 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#29231F] leading-tight">
                    {col.title}
                  </h3>

                  <p className="font-serif-luxury italic text-base text-[#8C8178]">
                    {col.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#544F4B] leading-relaxed font-light">
                    {col.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={col.link}
                      className="inline-flex items-center gap-2 bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] hover:text-[#C6A56B] text-xs uppercase tracking-[0.2em] font-semibold py-3.5 px-6 border border-transparent transition-all shadow-sm"
                    >
                      <span>Explore This Edit</span>
                      <ArrowRight className="w-4 h-4 text-[#C6A56B]" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

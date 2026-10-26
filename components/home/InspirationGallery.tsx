'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function InspirationGallery() {
  const galleryItems = [
    {
      id: 1,
      image: 'https://www.indiacz.com/image/cache/catalog/NECKLACE SET/STARLIGHT/S020001237-768x768.jpg',
      title: 'Starlight Choker Layering',
      category: 'Bridal Couture',
      aspect: 'aspect-square',
    },
    {
      id: 2,
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/EARINGS/BASEL/B012001500-768x768.jpg',
      title: 'Emerald Green Basel Chandelier',
      category: 'Earring Styling',
      aspect: 'aspect-3/4',
    },
    {
      id: 3,
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/KADA/khusi/K996000148-768x768.jpg',
      title: 'Druzy Solitaire Kada Stack',
      category: 'Wrist Adornment',
      aspect: 'aspect-square',
    },
    {
      id: 4,
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/FINGER RING/KHUSHI/K996000134-768x768.jpg',
      title: 'Marquise Halo Cocktail Ring',
      category: 'Statement Rings',
      aspect: 'aspect-3/4',
    },
    {
      id: 5,
      image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/NECKLACE/MEENAS/M021001853-768x768.jpg',
      title: 'Heritage Meenakari Mangalsutra',
      category: 'Festive Essentials',
      aspect: 'aspect-square',
    },
    {
      id: 6,
      image: 'https://www.indiacz.com/image/cache/catalog/NECKLACE SET/STARLIGHT/S020001236-768x768.jpg',
      title: 'Collar Choker Elegance',
      category: 'Red Carpet Gala',
      aspect: 'aspect-square',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold block mb-2">
            Jewellery Inspiration & Editorial Gallery
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#29231F] tracking-tight">
            The Zaveri Bazaar Atelier
          </h2>
          <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#8C8178] font-light leading-relaxed">
            Inspirational styling, backstage photography, and handcrafted brass CZ compositions captured at our workshops in Mumbai.
          </p>
        </div>

        {/* Varied Editorial Collage */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryItems.map(item => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-white border border-[#E8DFD5] shadow-xs hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white text-center">
                  <span className="text-[9px] uppercase tracking-widest text-[#C6A56B] font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-serif-luxury text-xs font-medium leading-tight mt-0.5 line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Disclaimer and WhatsApp Consultation */}
        <div className="mt-8 pt-6 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8178] gap-4">
          <p className="text-[11px] text-center sm:text-left">
            *Inspirational styling gallery. All portrayed pieces can be manufactured with custom CZ cut, metal finish, and stone color variations.
          </p>
          <a
            href="https://wa.me/919987345600?text=Hi%2C%20I%20want%20to%20discuss%20custom%20manufacturing%20designs%20with%20your%20atelier."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#542432] hover:text-[#C6A56B] font-semibold uppercase tracking-wider flex items-center gap-1.5 shrink-0"
          >
            <span>Request Custom Atelier Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

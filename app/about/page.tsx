'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, ShieldCheck, Gem, Users, Award, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Header */}
      <div className="relative bg-[#29231F] text-[#FAF7F2] py-20 lg:py-28 border-b border-[#3D3530] overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image
            src="https://www.indiacz.com/image/cache/catalog/NECKLACE SET/STARLIGHT/S020001237-768x768.jpg"
            alt="About Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#C6A56B] font-semibold block mb-3">
            Since 2013 • Zaveri Bazaar, Mumbai
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF7F2] leading-tight">
            The Heritage of <span className="italic text-[#C6A56B]">IndiaCZ</span>
          </h1>
          <p className="text-sm sm:text-base text-[#EDE4D8] font-light max-w-2xl mx-auto mt-4 leading-relaxed">
            Known as Blue Petel Diamond, we are a world-class manufacturer, wholesaler, and exporter of luxury brass Cubic Zirconia and American Diamond jewellery.
          </p>
        </div>
      </div>

      {/* Main Story Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-16">
        {/* Section 1: Inception & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 space-y-4 text-xs sm:text-sm text-[#544F4B] leading-relaxed font-light">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#542432] font-semibold block">
              Our Inception
            </span>
            <h2 className="font-serif-luxury text-3xl font-medium text-[#29231F] leading-snug">
              A Decade of Diamond-Standard Innovation
            </h2>
            <p>
              Started operations in the year <strong className="text-[#29231F] font-semibold">2013</strong> in Mumbai&rsquo;s historic jewellery hub, Zaveri Bazaar, <strong className="text-[#29231F] font-semibold">Blue Petel Diamond</strong> set out to bridge the gap between high-end diamond house aesthetics and accessible wholesale fine fashion jewellery.
            </p>
            <p>
              Under this range, we manufacture a comprehensive selection of imitation jewellery including CZ Necklace Sets, CZ Finger Rings, CZ Earrings, Druzy Bangles, Kundan suites, and Baroque Pearl creations. These pieces are designed in strict alignment with modern international fashion trends, using only top-grade imitation stones, jewels, and gems.
            </p>
          </div>

          <div className="md:col-span-6">
            <div className="relative aspect-4/3 overflow-hidden border-2 border-[#E8DFD5] bg-white p-3 shadow-xl">
              <Image
                src="https://www.indiacz.com/image/cache/catalog/DRUZY/EARINGS/BASEL/B012001500-768x768.jpg"
                alt="Jewellery Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Foundry & Leadership */}
        <div className="bg-white p-8 sm:p-12 border border-[#E8DFD5] shadow-xs">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-semibold block">
              Leadership & Craftsmanship
            </span>
            <h3 className="font-serif-luxury text-3xl font-normal text-[#29231F]">
              Led by Mr. Paresh Jain
            </h3>
            <p className="text-xs sm:text-sm text-[#544F4B] font-light leading-relaxed">
              <strong className="text-[#29231F] font-semibold">Mr. Paresh Jain</strong>, our partner, has steered our foundry to a commendable and remarkable position in the industry. With innovative production workflows, in-depth gemological acumen, and dedication to ethical manufacturing, our facility caters to an esteemed clientele across India, North America, the United Kingdom, Europe, and the Middle East.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-[#8C8178]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6A56B]" />
                <span>Huge In-House Quality Testing Unit</span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="w-4 h-4 text-[#C6A56B]" />
                <span>Micro-Pavé Casting Equipment</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#C6A56B]" />
                <span>Skilled Master Silversmiths</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Key Contacts & Address */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#FAF7F2] border border-[#E8DFD5] text-center space-y-2">
            <MapPin className="w-6 h-6 text-[#C6A56B] mx-auto" />
            <h4 className="font-serif-luxury text-lg font-semibold text-[#29231F]">Zaveri Bazaar Showroom</h4>
            <p className="text-xs text-[#8C8178]">
              Shop No. 5, Fida Mansion, Near Jumma Masjid, Zaveri Bazaar, Mumbai - 400002, India
            </p>
          </div>

          <div className="p-6 bg-[#FAF7F2] border border-[#E8DFD5] text-center space-y-2">
            <Phone className="w-6 h-6 text-[#C6A56B] mx-auto" />
            <h4 className="font-serif-luxury text-lg font-semibold text-[#29231F]">Hotline Desk</h4>
            <p className="text-xs text-[#8C8178]">
              +91 9987345600 (Nirav Jain)<br />
              +91 9892655588 (Anil Jain)<br />
              +91 9892701534 (Paresh Jain)
            </p>
          </div>

          <div className="p-6 bg-[#FAF7F2] border border-[#E8DFD5] text-center space-y-2">
            <MessageCircle className="w-6 h-6 text-[#25D366] mx-auto fill-[#25D366]" />
            <h4 className="font-serif-luxury text-lg font-semibold text-[#29231F]">WhatsApp Video Consult</h4>
            <p className="text-xs text-[#8C8178] mb-2">
              Book a live showroom video tour to inspect finish and weight before ordering.
            </p>
            <a
              href="https://wa.me/919987345600?text=Hello%20IndiaCZ%2C%20I%20would%20like%20to%20schedule%20a%20video%20call%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#542432] hover:text-[#C6A56B] underline"
            >
              Connect On WhatsApp &rarr;
            </a>
          </div>
        </div>

        {/* Explore CTA */}
        <div className="text-center pt-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] hover:text-[#C6A56B] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 transition-colors shadow-md"
          >
            <span>Explore The 2026 Wholesale Catalogue</span>
            <ArrowRight className="w-4 h-4 text-[#C6A56B]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

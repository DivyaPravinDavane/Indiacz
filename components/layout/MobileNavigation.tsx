'use client';

import React from 'react';
import Link from 'next/link';
import { X, Phone, MessageCircle, Globe, ChevronRight, ShoppingBag, Heart } from 'lucide-react';
import { CATEGORIES } from '@/lib/products';
import { useStore } from '@/context/StoreContext';
import { Currency } from '@/types/product';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const { currency, setCurrency, enquiryCount, wishlist, setIsEnquiryDrawerOpen, setIsWishlistDrawerOpen } = useStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div className="w-screen max-w-xs bg-white border-r border-[#E8DFD5] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div>
            <div className="p-4 border-b border-[#E8DFD5] flex items-center justify-between bg-[#FAF7F2]">
              <div>
                <span className="font-serif-luxury text-xl font-bold tracking-widest text-[#29231F] block">
                  INDIA<span className="text-[#C6A56B]">CZ</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#8C8178] block">
                  Luxury Brass CZ Showroom
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-[#8C8178] hover:text-[#29231F] rounded-full hover:bg-white border border-transparent hover:border-[#E8DFD5]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions Row */}
            <div className="grid grid-cols-2 p-3 bg-[#FAF7F2] border-b border-[#E8DFD5] gap-2">
              <button
                onClick={() => {
                  onClose();
                  setIsEnquiryDrawerOpen(true);
                }}
                className="flex items-center justify-center gap-1.5 p-2 bg-white border border-[#E8DFD5] text-xs font-semibold text-[#29231F]"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span>Enquiry ({enquiryCount})</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  setIsWishlistDrawerOpen(true);
                }}
                className="flex items-center justify-center gap-1.5 p-2 bg-white border border-[#E8DFD5] text-xs font-semibold text-[#29231F]"
              >
                <Heart className="w-3.5 h-3.5 text-[#542432]" />
                <span>Wishlist ({wishlist.length})</span>
              </button>
            </div>

            {/* Navigation links */}
            <div className="overflow-y-auto max-h-[60vh] p-4 space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-[#C6A56B] font-semibold px-2 py-1">
                Jewellery Showroom
              </div>
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center justify-between p-2 text-sm text-[#29231F] font-medium hover:bg-[#FAF7F2]"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-[#8C8178]" />
              </Link>
              <Link
                href="/shop"
                onClick={onClose}
                className="flex items-center justify-between p-2 text-sm text-[#29231F] font-medium hover:bg-[#FAF7F2]"
              >
                <span>All Designs (270+ Products)</span>
                <ChevronRight className="w-4 h-4 text-[#8C8178]" />
              </Link>

              <div className="text-[10px] uppercase tracking-widest text-[#C6A56B] font-semibold px-2 pt-3 pb-1">
                Browse By Category
              </div>
              {CATEGORIES.map(cat => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between p-2 text-xs text-[#29231F] hover:bg-[#FAF7F2]"
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] text-[#8C8178] bg-[#FAF7F2] px-1.5 py-0.5 border border-[#E8DFD5]">
                    {cat.itemCount}
                  </span>
                </Link>
              ))}

              <div className="text-[10px] uppercase tracking-widest text-[#C6A56B] font-semibold px-2 pt-3 pb-1">
                Company & Contact
              </div>
              <Link
                href="/about"
                onClick={onClose}
                className="flex items-center justify-between p-2 text-xs text-[#29231F] hover:bg-[#FAF7F2]"
              >
                <span>Our Heritage (Since 2013)</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#8C8178]" />
              </Link>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-between p-2 text-xs text-[#29231F] hover:bg-[#FAF7F2]"
              >
                <span>Contact & Hotline</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#8C8178]" />
              </Link>
            </div>
          </div>

          {/* Footer inside mobile menu */}
          <div className="p-4 border-t border-[#E8DFD5] bg-[#FAF7F2] space-y-3">
            <a
              href="https://wa.me/919987345600?text=Hi%2C%20I%20have%20visited%20IndiaCZ%20and%20want%20to%20do%20business%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold py-2.5 px-3 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Hotline</span>
            </a>

            <div className="flex items-center justify-between text-xs text-[#8C8178] pt-1">
              <span>Currency:</span>
              <div className="flex gap-2">
                {(['INR', 'USD', 'EUR', 'GBP'] as Currency[]).map(c => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`px-2 py-0.5 text-[11px] font-semibold border ${
                      currency === c
                        ? 'bg-[#29231F] text-white border-[#29231F]'
                        : 'bg-white text-[#29231F] border-[#E8DFD5]'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

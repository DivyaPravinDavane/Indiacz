'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, Menu, Sparkles, MessageCircle } from 'lucide-react';
import AnnouncementBar from './AnnouncementBar';
import MegaMenu from './MegaMenu';
import SearchBar from './SearchBar';
import MobileNavigation from './MobileNavigation';
import { useStore } from '@/context/StoreContext';

export default function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { enquiryCount, wishlist, setIsEnquiryDrawerOpen, setIsWishlistDrawerOpen } = useStore();

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD5] transition-all">
      {/* Top Announcement & Hotline */}
      <AnnouncementBar />

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Mobile Menu Trigger & Search */}
          <div className="flex items-center gap-3 lg:w-1/4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#29231F] hover:text-[#C6A56B] transition-colors"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <button
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8C8178] hover:text-[#29231F] p-2 hover:bg-[#EDE4D8]/50 transition-colors border border-transparent hover:border-[#E8DFD5]"
            >
              <Search className="w-4 h-4 text-[#C6A56B]" />
              <span className="hidden sm:inline">Search Designs...</span>
            </button>
          </div>

          {/* Center: Brand Logo & Insignia */}
          <div className="flex-1 text-center lg:w-2/4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center justify-center gap-2">
                <span className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.25em] text-[#29231F] group-hover:text-[#542432] transition-colors">
                  INDIA<span className="text-[#C6A56B] font-semibold">CZ</span>
                </span>
              </div>
              <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.35em] text-[#8C8178] font-light mt-0.5">
                High Brass Cubic Zirconia • Zaveri Bazaar
              </span>
            </Link>
          </div>

          {/* Right: Actions (Wishlist & Enquiry Basket) */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 lg:w-1/4">
            {/* WhatsApp Quick Icon */}
            <a
              href="https://wa.me/919987345600?text=Hi%2C%20I%20have%20visited%20IndiaCZ%20and%20want%20to%20do%20business%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-xs text-[#29231F] hover:text-[#25D366] transition-colors py-1.5 px-2.5 border border-[#E8DFD5] bg-white"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
              <span className="text-[11px] font-semibold">WhatsApp</span>
            </a>

            {/* Wishlist */}
            <button
              onClick={() => setIsWishlistDrawerOpen(true)}
              className="relative p-2 text-[#29231F] hover:text-[#542432] transition-colors"
              aria-label="Wishlist"
              title="View Wishlist"
            >
              <Heart className="w-5 h-5 text-[#29231F]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#542432] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Enquiry Basket */}
            <button
              onClick={() => setIsEnquiryDrawerOpen(true)}
              className="relative bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] hover:text-[#C6A56B] py-2 px-3 sm:px-4 text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-all shadow-xs"
              aria-label="Enquiry Basket"
            >
              <ShoppingBag className="w-4 h-4 text-[#C6A56B]" />
              <span className="hidden sm:inline">Enquiry</span>
              <span className="bg-[#C6A56B] text-[#29231F] text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {enquiryCount}
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Bar */}
        <div className="border-t border-[#E8DFD5]/80">
          <MegaMenu />
        </div>
      </div>

      {/* Modals & Drawers */}
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileNavigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}

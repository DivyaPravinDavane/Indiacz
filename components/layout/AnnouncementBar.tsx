'use client';

import React from 'react';
import { Phone, MessageCircle, Globe, ChevronDown } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { Currency } from '@/types/product';

export default function AnnouncementBar() {
  const { currency, setCurrency } = useStore();

  const currencies: { code: Currency; label: string; symbol: string }[] = [
    { code: 'INR', label: 'INR (Rs.)', symbol: '₹' },
    { code: 'USD', label: 'USD ($)', symbol: '$' },
    { code: 'EUR', label: 'EUR (€)', symbol: '€' },
    { code: 'GBP', label: 'GBP (£)', symbol: '£' },
  ];

  return (
    <div className="bg-[#29231F] text-[#EDE4D8] text-xs py-2 px-4 border-b border-[#3D3530]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Contact Hotline */}
        <div className="flex items-center gap-4 text-[11px] tracking-wide">
          <a
            href="tel:+919987345600"
            className="flex items-center gap-1.5 hover:text-[#C6A56B] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C6A56B]" />
            <span>HOTLINE: +91 9987345600 / +91 9892655588</span>
          </a>
          <span className="hidden md:inline text-[#8C8178]">|</span>
          <span className="hidden md:inline text-[#C6A56B] tracking-widest uppercase text-[10px]">
            Zaveri Bazaar, Mumbai • Worldwide B2B Export
          </span>
        </div>

        {/* Right: Currency & WhatsApp Direct */}
        <div className="flex items-center gap-5">
          <a
            href="https://wa.me/919987345600?text=Hi%2C%20I%20have%20visited%20IndiaCZ%20and%20want%20to%20do%20business%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#C6A56B] hover:text-[#D4BA85] font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
            <span className="hidden sm:inline">WhatsApp Order Desk</span>
          </a>

          {/* Currency Switcher */}
          <div className="relative flex items-center gap-1 text-[11px] group">
            <Globe className="w-3 h-3 text-[#8C8178]" />
            <span className="text-[#8C8178]">Currency:</span>
            <div className="relative">
              <select
                value={currency}
                onChange={e => setCurrency(e.target.value as Currency)}
                className="bg-transparent text-[#EDE4D8] font-semibold cursor-pointer pl-1 pr-4 py-0.5 outline-none hover:text-[#C6A56B] appearance-none"
              >
                {currencies.map(c => (
                  <option key={c.code} value={c.code} className="bg-[#29231F] text-[#EDE4D8]">
                    {c.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-2.5 h-2.5 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#8C8178]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

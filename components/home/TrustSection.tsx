'use client';

import React from 'react';
import { ShieldCheck, Truck, MessageCircle, Phone, Sparkles, RefreshCw } from 'lucide-react';

export default function TrustSection() {
  const advantages = [
    {
      icon: ShieldCheck,
      title: 'Verified Zaveri Bazaar Manufacturer',
      desc: 'Direct factory pricing ex-Mumbai without intermediaries or distributor markups.',
    },
    {
      icon: Sparkles,
      title: 'AAA+ Cubic Zirconia Setting',
      desc: 'Precision micro-pavé prongs ensuring stone security and maximum optical brilliance.',
    },
    {
      icon: Truck,
      title: 'Worldwide Doorstep Air Courier',
      desc: 'Fast tracked international dispatch via DHL, FedEx, and secured air cargo.',
    },
    {
      icon: MessageCircle,
      title: 'Dedicated WhatsApp Order Desk',
      desc: 'Real-time video call catalog viewing and design selection with our senior team.',
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 bg-white border border-[#E8DFD5] hover:border-[#C6A56B] transition-colors flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#542432] group-hover:bg-[#542432] group-hover:text-[#C6A56B] group-hover:border-[#C6A56B] transition-all mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif-luxury text-base font-semibold text-[#29231F] mb-1.5 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#8C8178] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

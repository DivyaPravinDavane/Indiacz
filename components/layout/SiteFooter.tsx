'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle2, ShieldCheck, Gem, Globe } from 'lucide-react';
import { CATEGORIES } from '@/lib/products';

export default function SiteFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#29231F] text-[#EDE4D8] border-t border-[#3D3530]">
      {/* Top Value Badges Section */}
      <div className="border-b border-[#3D3530] py-10 bg-[#211B18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#C6A56B]/30 flex items-center justify-center shrink-0 text-[#C6A56B]">
              <Gem className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-base font-semibold text-[#FAF7F2]">
                AAA+ Cubic Zirconia
              </h4>
              <p className="text-xs text-[#8C8178]">
                Precision micro-pavé hand setting on fine brass alloy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#C6A56B]/30 flex items-center justify-center shrink-0 text-[#C6A56B]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-base font-semibold text-[#FAF7F2]">
                Zaveri Bazaar Heritage
              </h4>
              <p className="text-xs text-[#8C8178]">
                Historic heart of Mumbai&rsquo;s jewellery craftsmanship since 2013
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#C6A56B]/30 flex items-center justify-center shrink-0 text-[#C6A56B]">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-base font-semibold text-[#FAF7F2]">
                Worldwide B2B Export
              </h4>
              <p className="text-xs text-[#8C8178]">
                Supplying premier jewellery boutiques across USA, UK, UAE & worldwide
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#C6A56B]/30 flex items-center justify-center shrink-0 text-[#C6A56B]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-base font-semibold text-[#FAF7F2]">
                24K Micron Gold Plating
              </h4>
              <p className="text-xs text-[#8C8178]">
                Anti-tarnish hypoallergenic dual micron rhodium & gold finish
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand & Zaveri Bazaar HQ */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="font-serif-luxury text-3xl font-normal tracking-[0.2em] text-[#FAF7F2] block">
                INDIA<span className="text-[#C6A56B]">CZ</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C8178] block">
                Blue Petel Diamond • Established 2013
              </span>
            </div>

            <p className="text-xs text-[#8C8178] leading-relaxed max-w-sm">
              Renowned manufacturer, wholesaler, and exporter of luxury brass American Diamond jewellery, Druzy stones, Kundan suites, and Baroque Pearl creations. Crafted with master artisans in the iconic jewellery district of Zaveri Bazaar, Mumbai.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-[#EDE4D8]">
                <MapPin className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                <span>Shop No. 5, Fida Mansion, Near Jumma Masjid, Zaveri Bazaar, Mumbai - 400002, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#EDE4D8]">
                <Phone className="w-4 h-4 text-[#C6A56B] shrink-0" />
                <span>+91 9987345600 / +91 9892655588</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#EDE4D8]">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 fill-[#25D366]" />
                <span>WhatsApp: +91 9987345600 (Nirav Jain)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Categories */}
          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#FAF7F2] uppercase tracking-wider mb-4 pb-1 border-b border-[#3D3530]">
              Jewellery Catalogue
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.slice(0, 7).map(cat => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-[#8C8178] hover:text-[#C6A56B] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop"
                  className="text-[#C6A56B] hover:text-[#FAF7F2] font-medium"
                >
                  View All 270+ Designs &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Support */}
          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#FAF7F2] uppercase tracking-wider mb-4 pb-1 border-b border-[#3D3530]">
              Wholesale & Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-[#8C8178] hover:text-[#C6A56B] transition-colors">
                  About Our Foundry
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#8C8178] hover:text-[#C6A56B] transition-colors">
                  B2B Trade Enquiries
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-[#8C8178] hover:text-[#C6A56B] transition-colors">
                  Worldwide Shipping & Export
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#8C8178] hover:text-[#C6A56B] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#8C8178] hover:text-[#C6A56B] transition-colors">
                  Terms & Wholesale Conditions
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919987345600?text=Hi%2C%20I%20want%20to%20schedule%20a%20video%20call%20to%20view%20designs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline flex items-center gap-1 font-medium pt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>Book Video Call Appointment</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: VIP Newsletter */}
          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#FAF7F2] uppercase tracking-wider mb-4 pb-1 border-b border-[#3D3530]">
              Design Catalogue Alert
            </h4>
            <p className="text-xs text-[#8C8178] leading-relaxed mb-4">
              Receive monthly wholesale catalogue updates with newly launched CZ designs and seasonal festival collections.
            </p>

            {subscribed ? (
              <div className="bg-[#542432] p-3 text-xs text-[#FAF7F2] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6A56B]" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter business email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#211B18] text-xs px-3 py-2.5 border border-[#3D3530] focus:border-[#C6A56B] text-[#FAF7F2] outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#C6A56B] hover:bg-[#B39257] text-[#29231F] text-xs uppercase tracking-widest font-semibold py-2.5 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-4 mt-4 border-t border-[#3D3530] text-[11px] text-[#8C8178]">
              WhatsApp Order Desk available 10:00 AM – 8:00 PM IST (Mon–Sat)
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-[#3D3530] py-6 bg-[#1F1916] text-xs text-[#8C8178]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} IndiaCZ (Blue Petel Diamond). All Rights Reserved. Mumbai, India.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Secured B2B Invoicing</span>
            <span>•</span>
            <span>Bank Wire (NEFT/RTGS/SWIFT)</span>
            <span>•</span>
            <span>PayPal Approved Exporter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

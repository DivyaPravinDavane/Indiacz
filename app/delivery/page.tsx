import React from 'react';
import Link from 'next/link';
import { Truck, ShieldCheck, Globe, Clock, PackageCheck, ArrowRight } from 'lucide-react';

export default function DeliveryPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold block mb-2">
            Logistics & Fulfilment
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-[#29231F]">
            Worldwide Shipping & Delivery
          </h1>
          <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#8C8178]">
            Direct export from Zaveri Bazaar, Mumbai to over 60 countries across the globe.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 border border-[#E8DFD5] space-y-8 text-xs sm:text-sm text-[#544F4B] leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl font-semibold text-[#29231F]">
              1. Domestic Shipping within India
            </h2>
            <p>
              All domestic B2B wholesale consignments are insured and dispatched through Blue Dart, DTDC, or dedicated cargo within 24 to 48 hours of order verification. Transit time is typically 2 to 4 business days to major metros (Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Ahmedabad, Jaipur) and 3 to 5 days to tier-2/3 cities.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#E8DFD5]">
            <h2 className="font-serif-luxury text-2xl font-semibold text-[#29231F]">
              2. International Air Export
            </h2>
            <p>
              We routinely export to retailers and wholesalers in the United States, United Kingdom, Canada, United Arab Emirates, Australia, Germany, and Singapore. International orders are fulfilled through DHL Express, FedEx International Priority, and Aramex.
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs text-[#8C8178]">
              <li><strong className="text-[#29231F]">USA & Canada:</strong> 4 to 6 business days with door-to-door tracking.</li>
              <li><strong className="text-[#29231F]">UK & Europe:</strong> 3 to 5 business days.</li>
              <li><strong className="text-[#29231F]">UAE & GCC:</strong> 2 to 4 business days.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#E8DFD5]">
            <h2 className="font-serif-luxury text-2xl font-semibold text-[#29231F]">
              3. Packaging & Transit Safety
            </h2>
            <p>
              Every jewellery piece is individually enclosed in anti-tarnish moisture-barrier jewel pouches, nestled in bubble-cushioned shock-absorbent layers, and packed in heavy-gauge corrugated cartons sealed with tamper-evident security tape.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#E8DFD5]">
            <h2 className="font-serif-luxury text-2xl font-semibold text-[#29231F]">
              4. Custom Clearance & Invoicing
            </h2>
            <p>
              All commercial shipments are accompanied by official GST/export tax invoices, packing lists, and Certificate of Origin documents where required, ensuring expedited customs clearance.
            </p>
          </section>

          <div className="pt-6 border-t border-[#E8DFD5] text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#29231F] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold px-6 py-3 hover:bg-[#542432] transition-colors"
            >
              <span>Have Shipping Questions? Contact Our Desk</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C6A56B]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

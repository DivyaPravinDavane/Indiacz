import React from 'react';

export default function TermsPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold block mb-2">
            Legal & Trade Terms
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-[#29231F]">
            Terms & Wholesale Conditions
          </h1>
          <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto mt-4 mb-3" />
        </div>

        <div className="bg-white p-8 sm:p-12 border border-[#E8DFD5] space-y-6 text-xs sm:text-sm text-[#544F4B] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif-luxury text-xl font-semibold text-[#29231F]">
              1. Business Overview
            </h2>
            <p>
              IndiaCZ (Blue Petel Diamond) is a specialized manufacturer, wholesaler, and exporter of brass fashion jewellery, American Diamond CZ jewellery, Druzy stones, and Kundan suites based in Zaveri Bazaar, Mumbai. All orders placed through our digital showroom or WhatsApp desk are subject to mutual quotation confirmation.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E8DFD5]">
            <h2 className="font-serif-luxury text-xl font-semibold text-[#29231F]">
              2. Pricing & Currency
            </h2>
            <p>
              Prices shown in INR (Rs.) or converted foreign currencies (USD, EUR, GBP) are estimated wholesale rates based on factory ex-Mumbai dispatch. Prices exclude applicable statutory taxes, customs duties, and courier freight, which are quoted explicitly upon order receipt.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E8DFD5]">
            <h2 className="font-serif-luxury text-xl font-semibold text-[#29231F]">
              3. Quality Assurance
            </h2>
            <p>
              Every production batch undergoes strict quality audits for prong tightness, stone alignment, and micron gold plating consistency. In the rare event of transit damage, clients are requested to report with photographic verification within 48 hours of parcel receipt.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

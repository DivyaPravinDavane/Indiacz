import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold block mb-2">
            Data & Privacy
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-[#29231F]">
            Privacy Policy
          </h1>
          <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto mt-4 mb-3" />
        </div>

        <div className="bg-white p-8 sm:p-12 border border-[#E8DFD5] space-y-6 text-xs sm:text-sm text-[#544F4B] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif-luxury text-xl font-semibold text-[#29231F]">
              1. Information Collection
            </h2>
            <p>
              We collect trade contact details (name, email address, phone/WhatsApp number, business title, and destination city) exclusively to process B2B jewellery enquiries, prepare wholesale proforma invoices, and communicate dispatch tracking details.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E8DFD5]">
            <h2 className="font-serif-luxury text-xl font-semibold text-[#29231F]">
              2. Data Protection
            </h2>
            <p>
              IndiaCZ / Blue Petel Diamond respects your trade privacy. We do not sell, rent, or lease our client directory to third-party marketing entities.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

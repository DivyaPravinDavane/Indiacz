'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, MessageCircle, Send, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function EnquiryDrawer() {
  const {
    enquiryItems,
    isEnquiryDrawerOpen,
    setIsEnquiryDrawerOpen,
    removeFromEnquiry,
    updateQuantity,
    clearEnquiry,
    formatPrice,
    generateWhatsAppEnquiryUrl,
  } = useStore();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: 'India',
    notes: '',
  });

  if (!isEnquiryDrawerOpen) return null;

  const totalInr = enquiryItems.reduce(
    (acc, item) => acc + item.product.priceInr * item.quantity,
    0
  );

  const handleFormalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        clearEnquiry();
        setIsEnquiryDrawerOpen(false);
      }, 3500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsEnquiryDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E8DFD5] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#E8DFD5] flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C6A56B]" />
              <h2 className="font-serif-luxury text-xl font-medium text-[#29231F]">
                Enquiry Basket ({enquiryItems.length})
              </h2>
            </div>
            <button
              onClick={() => setIsEnquiryDrawerOpen(false)}
              className="p-1.5 text-[#8C8178] hover:text-[#29231F] hover:bg-white rounded-full transition-colors border border-transparent hover:border-[#E8DFD5]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#C6A56B]" />
                <h3 className="font-serif-luxury text-2xl font-semibold text-[#29231F]">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-[#8C8178] max-w-xs">
                  Thank you, <span className="font-semibold text-[#29231F]">{formData.name}</span>. Our Zaveri Bazaar wholesale desk will review your {enquiryItems.length} selected designs and reach out within 2 hours.
                </p>
                <div className="bg-[#FAF7F2] p-3 text-xs border border-[#E8DFD5] w-full text-left">
                  <div className="font-medium text-[#29231F]">Hotline Assistance:</div>
                  <div className="text-[#8C8178]">+91 9987345600 / +91 9892655588</div>
                </div>
              </div>
            ) : enquiryItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#C6A56B]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-xl font-medium text-[#29231F]">
                  Your Basket is Empty
                </h3>
                <p className="text-xs text-[#8C8178] max-w-xs leading-relaxed">
                  Browse our showroom catalogue and click &ldquo;Add to Enquiry&rdquo; to build your wholesale order or custom quotation.
                </p>
                <button
                  onClick={() => setIsEnquiryDrawerOpen(false)}
                  className="mt-2 bg-[#29231F] text-[#FAF7F2] hover:bg-[#542432] text-xs uppercase tracking-widest font-semibold px-6 py-2.5 transition-colors"
                >
                  Explore Jewellery
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-[11px] text-[#8C8178] flex items-center justify-between pb-2 border-b border-[#FAF7F2]">
                  <span>SELECTED DESIGNS</span>
                  <button
                    onClick={clearEnquiry}
                    className="text-[#8C8178] hover:text-[#542432] underline"
                  >
                    Clear All
                  </button>
                </div>

                {enquiryItems.map(item => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 p-3 bg-[#FAF7F2] border border-[#E8DFD5] relative group"
                  >
                    <div className="relative w-20 h-20 bg-white border border-[#E8DFD5] shrink-0 overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-mono text-[10px] bg-white px-1.5 py-0.5 border border-[#E8DFD5] text-[#29231F]">
                            DN: {item.product.code}
                          </span>
                          <span className="text-[11px] font-semibold text-[#29231F]">
                            {formatPrice(item.product.priceInr * item.quantity)}
                          </span>
                        </div>
                        <h4 className="font-serif-luxury text-sm font-medium text-[#29231F] truncate mt-1">
                          {item.product.title}
                        </h4>
                        <div className="text-[10px] text-[#8C8178]">
                          Rate: {formatPrice(item.product.priceInr)} / pc
                        </div>
                      </div>

                      {/* Stepper & remove */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E8DFD5]/60">
                        <div className="flex items-center border border-[#E8DFD5] bg-white">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs hover:bg-[#FAF7F2]"
                          >
                            -
                          </button>
                          <span className="px-2.5 py-0.5 text-[11px] font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs hover:bg-[#FAF7F2]"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromEnquiry(item.product.id)}
                          className="text-[#8C8178] hover:text-[#542432] p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Direct submission form */}
                <div className="mt-6 pt-4 border-t border-[#E8DFD5]">
                  <h4 className="font-serif-luxury text-sm font-semibold text-[#29231F] mb-3">
                    Fast B2B Enquiry Details
                  </h4>
                  <form onSubmit={handleFormalSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs p-2.5 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        required
                        placeholder="WhatsApp / Phone *"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs p-2.5 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Business Email *"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs p-2.5 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Boutique / Store Name"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full text-xs p-2.5 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none"
                      />
                      <input
                        type="text"
                        placeholder="City / Country"
                        value={formData.country}
                        onChange={e => setFormData({ ...formData, country: e.target.value })}
                        className="w-full text-xs p-2.5 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#542432] hover:bg-[#3E1A25] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold py-3 flex items-center justify-center gap-2 transition-colors border border-transparent shadow-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#C6A56B]" />
                          <span>Submit Official B2B Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Footer with WhatsApp Direct Action */}
          {!submitted && enquiryItems.length > 0 && (
            <div className="p-5 border-t border-[#E8DFD5] bg-[#FAF7F2] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8C8178]">Estimated Wholesale Value:</span>
                <span className="text-base font-semibold text-[#29231F]">
                  {formatPrice(totalInr)}
                </span>
              </div>

              {/* Instant WhatsApp Enquiry Button */}
              <a
                href={generateWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20BA59] text-white text-xs uppercase tracking-widest font-semibold py-3 px-4 flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Enquiry (Direct)</span>
              </a>

              <p className="text-[10px] text-center text-[#8C8178]">
                Dispatched directly to Blue Petel Diamond / IndiaCZ, Zaveri Bazaar, Mumbai.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

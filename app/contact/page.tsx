'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', city: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C6A56B] font-semibold block mb-2">
            Zaveri Bazaar, Mumbai Showroom
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-[#29231F] tracking-tight">
            Contact & B2B Trade Desk
          </h1>
          <div className="w-16 h-0.5 bg-[#C6A56B] mx-auto mt-4 mb-3" />
          <p className="text-xs sm:text-sm text-[#8C8178] font-light leading-relaxed">
            Connect directly with Blue Petel Diamond / IndiaCZ. We welcome wholesale inquiries, boutique distribution requests, and custom atelier orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="p-6 bg-white border border-[#E8DFD5] space-y-4">
              <h3 className="font-serif-luxury text-xl font-medium text-[#29231F] border-b border-[#FAF7F2] pb-2">
                Manufacturing Unit & Showroom
              </h3>
              <div className="space-y-3 text-xs text-[#544F4B]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#29231F] block">BLUE PETEL DIAMOND / INDIACZ</strong>
                    Shop Number 5, Fida Mansion,<br />
                    Near Jumma Masjid, Zaveri Bazaar,<br />
                    Mumbai - 400002, Maharashtra, India
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#C6A56B] shrink-0" />
                  <span>Monday – Saturday: 10:30 AM – 8:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Hotlines */}
            <div className="p-6 bg-white border border-[#E8DFD5] space-y-4">
              <h3 className="font-serif-luxury text-xl font-medium text-[#29231F] border-b border-[#FAF7F2] pb-2">
                Key Executives & WhatsApp Hotlines
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-2.5 bg-[#FAF7F2] border border-[#E8DFD5]">
                  <div>
                    <div className="font-semibold text-[#29231F]">Nirav Jain</div>
                    <div className="text-[11px] text-[#8C8178]">Wholesale & Export Desk</div>
                  </div>
                  <a
                    href="https://wa.me/919987345600"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-[#25D366] text-white text-[11px] font-semibold px-2.5 py-1"
                  >
                    <MessageCircle className="w-3 h-3 fill-white" />
                    <span>+91 9987345600</span>
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-[#FAF7F2] border border-[#E8DFD5]">
                  <div>
                    <div className="font-semibold text-[#29231F]">Anil Jain</div>
                    <div className="text-[11px] text-[#8C8178]">Production & Accounts</div>
                  </div>
                  <a
                    href="https://wa.me/919892655588"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-[#25D366] text-white text-[11px] font-semibold px-2.5 py-1"
                  >
                    <MessageCircle className="w-3 h-3 fill-white" />
                    <span>+91 9892655588</span>
                  </a>
                </div>

                <div className="flex items-center justify-between p-2.5 bg-[#FAF7F2] border border-[#E8DFD5]">
                  <div>
                    <div className="font-semibold text-[#29231F]">Paresh Jain</div>
                    <div className="text-[11px] text-[#8C8178]">Partner / Management</div>
                  </div>
                  <a
                    href="https://wa.me/919892701534"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-[#25D366] text-white text-[11px] font-semibold px-2.5 py-1"
                  >
                    <MessageCircle className="w-3 h-3 fill-white" />
                    <span>+91 9892701534</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#E8DFD5] shadow-sm">
            <h3 className="font-serif-luxury text-2xl font-normal text-[#29231F] mb-2">
              Send Trade Message
            </h3>
            <p className="text-xs text-[#8C8178] mb-6">
              Fill in your business details below to request sample shipments, full wholesale price lists, or appointment schedules.
            </p>

            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-[#FAF7F2] border border-[#E8DFD5]">
                <CheckCircle2 className="w-12 h-12 text-[#C6A56B] mx-auto" />
                <h4 className="font-serif-luxury text-xl font-medium text-[#29231F]">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-[#8C8178]">
                  Thank you, {formData.name}. Our executive team will respond within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8C8178] mb-1 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full text-xs p-3 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8C8178] mb-1 font-semibold">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@jewelboutique.com"
                      className="w-full text-xs p-3 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8C8178] mb-1 font-semibold">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 / International Code"
                      className="w-full text-xs p-3 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8C8178] mb-1 font-semibold">
                      Boutique / Store / Business Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Royal Gems LLC"
                      className="w-full text-xs p-3 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8C8178] mb-1 font-semibold">
                    City & Country
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. London, UK / New Delhi, India"
                    className="w-full text-xs p-3 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8C8178] mb-1 font-semibold">
                    Inquiry Details / Specific Design Codes *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirement (quantities, design codes, desired finish, export destination)..."
                    className="w-full text-xs p-3 bg-white border border-[#E8DFD5] focus:border-[#C6A56B] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] hover:text-[#C6A56B] text-xs uppercase tracking-[0.2em] font-semibold py-4 flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Send className="w-4 h-4 text-[#C6A56B]" />
                  <span>Submit Wholesale Trade Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

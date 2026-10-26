'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Heart, MessageCircle, ShoppingBag, ShieldCheck, Truck, Sparkles, ArrowRight } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export default function QuickViewModal() {
  const {
    quickViewProduct,
    closeQuickView,
    formatPrice,
    addToEnquiry,
    toggleWishlist,
    isWishlisted,
  } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setImageError(false);
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const wishlisted = isWishlisted(quickViewProduct.id);
  const displayImage = imageError
    ? 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    : quickViewProduct.image;

  const whatsappDirectUrl = `https://wa.me/919987345600?text=${encodeURIComponent(
    `Hello IndiaCZ, I want to enquire about Design Code: ${quickViewProduct.code} (${quickViewProduct.title}), Price: Rs. ${quickViewProduct.priceInr}. Qty needed: ${quantity} pcs.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity"
      onClick={closeQuickView}
    >
      <div
        className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#E8DFD5] shadow-2xl transition-all"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 hover:bg-[#FAF7F2] border border-[#E8DFD5] rounded-full flex items-center justify-center text-[#29231F] hover:text-[#542432] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-[#FAF7F2] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E8DFD5]">
            <div className="relative w-full h-[320px] md:h-[450px]">
              <Image
                src={displayImage}
                alt={quickViewProduct.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImageError(true)}
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-[#FAF7F2] border border-[#E8DFD5] text-[#8C8178] text-[10px] uppercase tracking-wider px-2 py-1">
                Authentic IndiaCZ Creation
              </span>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-[#8C8178] mb-2">
                <span className="text-[#C6A56B] uppercase tracking-widest font-semibold text-[11px]">
                  {quickViewProduct.category}
                </span>
                <span className="font-mono bg-[#FAF7F2] px-2 py-0.5 border border-[#E8DFD5] text-[#29231F]">
                  DN: {quickViewProduct.code}
                </span>
              </div>

              <h2 className="font-serif-luxury text-2xl md:text-3xl font-medium text-[#29231F] leading-tight mb-3">
                {quickViewProduct.title}
              </h2>

              <div className="flex items-baseline gap-3 pb-4 mb-4 border-b border-[#E8DFD5]">
                <div className="text-2xl font-semibold text-[#29231F]">
                  {formatPrice(quickViewProduct.priceInr)}
                </div>
                <div className="text-xs text-[#8C8178]">
                  Wholesale Factory Rate (Ex-Mumbai)
                </div>
              </div>

              <p className="text-sm text-[#544F4B] leading-relaxed mb-6 font-light">
                {quickViewProduct.description}
              </p>

              {/* Specifications snippet */}
              <div className="bg-[#FAF7F2] p-4 border border-[#E8DFD5] mb-6 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8C8178]">Craftsmanship:</span>
                  <span className="font-medium text-[#29231F]">Hand-Set Micro Pavé CZ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C8178]">Base Metal:</span>
                  <span className="font-medium text-[#29231F]">Hypoallergenic Brass Alloy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C8178]">Plating:</span>
                  <span className="font-medium text-[#29231F]">{quickViewProduct.finish}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C8178]">Manufacturing:</span>
                  <span className="font-medium text-[#29231F]">Zaveri Bazaar, Mumbai</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs uppercase tracking-wider text-[#8C8178] font-medium">
                  Quantity:
                </span>
                <div className="flex items-center border border-[#E8DFD5] bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-sm hover:bg-[#FAF7F2] text-[#29231F]"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-semibold min-w-[32px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-sm hover:bg-[#FAF7F2] text-[#29231F]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button
                  onClick={() => {
                    addToEnquiry(quickViewProduct, quantity);
                    closeQuickView();
                  }}
                  className="flex-1 bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] hover:text-[#C6A56B] py-3 px-4 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors border border-transparent shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C6A56B]" />
                  <span>Add To Enquiry Basket</span>
                </button>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BA59] text-white py-3 px-4 text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Desk</span>
                </a>

                <button
                  onClick={() => toggleWishlist(quickViewProduct.id)}
                  className={`p-3 border flex items-center justify-center transition-colors ${
                    wishlisted
                      ? 'border-[#542432] bg-[#542432]/5 text-[#542432]'
                      : 'border-[#E8DFD5] hover:border-[#29231F] text-[#8C8178]'
                  }`}
                  title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-4 h-4 ${wishlisted ? 'fill-[#542432]' : ''}`} />
                </button>
              </div>
            </div>

            {/* Bottom link */}
            <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between text-xs">
              <span className="text-[#8C8178] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A56B]" />
                100% Guaranteed Brass & CZ
              </span>
              <Link
                href={`/product/${quickViewProduct.id}`}
                onClick={closeQuickView}
                className="text-[#542432] hover:text-[#C6A56B] font-medium flex items-center gap-1 hover:underline"
              >
                <span>View Full Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

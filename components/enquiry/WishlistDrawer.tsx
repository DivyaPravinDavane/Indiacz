'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import { getAllProducts } from '@/lib/products';

export default function WishlistDrawer() {
  const {
    wishlist,
    isWishlistDrawerOpen,
    setIsWishlistDrawerOpen,
    toggleWishlist,
    addToEnquiry,
    formatPrice,
  } = useStore();

  if (!isWishlistDrawerOpen) return null;

  const allProducts = getAllProducts();
  const wishlistedProducts = allProducts.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E8DFD5] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#E8DFD5] flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#542432] fill-[#542432]" />
              <h2 className="font-serif-luxury text-xl font-medium text-[#29231F]">
                Curated Wishlist ({wishlistedProducts.length})
              </h2>
            </div>
            <button
              onClick={() => setIsWishlistDrawerOpen(false)}
              className="p-1.5 text-[#8C8178] hover:text-[#29231F] hover:bg-white rounded-full transition-colors border border-transparent hover:border-[#E8DFD5]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center text-[#542432]">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-xl font-medium text-[#29231F]">
                  Your Wishlist is Empty
                </h3>
                <p className="text-xs text-[#8C8178] max-w-xs leading-relaxed">
                  Save your favourite jewellery designs by clicking the heart icon on any product card.
                </p>
                <button
                  onClick={() => setIsWishlistDrawerOpen(false)}
                  className="mt-2 bg-[#29231F] text-[#FAF7F2] hover:bg-[#542432] text-xs uppercase tracking-widest font-semibold px-6 py-2.5 transition-colors"
                >
                  Discover Collections
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlistedProducts.map(product => (
                  <div
                    key={product.id}
                    className="flex gap-3 p-3 bg-[#FAF7F2] border border-[#E8DFD5] relative group"
                  >
                    <div className="relative w-20 h-20 bg-white border border-[#E8DFD5] shrink-0 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-mono text-[10px] bg-white px-1.5 py-0.5 border border-[#E8DFD5] text-[#29231F]">
                            DN: {product.code}
                          </span>
                          <span className="text-[11px] font-semibold text-[#29231F]">
                            {formatPrice(product.priceInr)}
                          </span>
                        </div>
                        <Link
                          href={`/product/${product.id}`}
                          onClick={() => setIsWishlistDrawerOpen(false)}
                          className="hover:text-[#542432]"
                        >
                          <h4 className="font-serif-luxury text-sm font-medium text-[#29231F] truncate mt-1">
                            {product.title}
                          </h4>
                        </Link>
                        <div className="text-[10px] text-[#C6A56B] uppercase tracking-wider">
                          {product.category}
                        </div>
                      </div>

                      {/* Move to enquiry & remove */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E8DFD5]/60">
                        <button
                          onClick={() => {
                            addToEnquiry(product, 1);
                            setIsWishlistDrawerOpen(false);
                          }}
                          className="bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 flex items-center gap-1 transition-colors"
                        >
                          <ShoppingBag className="w-3 h-3 text-[#C6A56B]" />
                          <span>Move to Enquiry</span>
                        </button>

                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-[#8C8178] hover:text-[#542432] p-1"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

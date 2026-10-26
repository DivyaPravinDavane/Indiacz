'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Eye, ShoppingBag, Sparkles } from 'lucide-react';
import { Product } from '@/types/product';
import { useStore } from '@/context/StoreContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { formatPrice, toggleWishlist, isWishlisted, addToEnquiry, openQuickView } = useStore();
  const wishlisted = isWishlisted(product.id);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Fallback image if indiacz CDN image fails
  const displayImage = imageError
    ? 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=768&q=80'
    : product.image;

  return (
    <div
      className="group relative bg-white border border-[#E8DFD5] hover:border-[#C6A56B] transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top badges */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 pointer-events-none">
        {product.bestseller && (
          <span className="bg-[#542432] text-[#FAF7F2] text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5">
            Bestseller
          </span>
        )}
        <span className="bg-[#FAF7F2]/90 backdrop-blur-xs text-[#29231F] border border-[#E8DFD5] text-[9px] uppercase tracking-wider font-medium px-1.5 py-0.5">
          DN: {product.code}
        </span>
      </div>

      {/* Wishlist Button */}
      <button
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          toggleWishlist(product.id);
        }}
        title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs border border-[#E8DFD5] flex items-center justify-center text-[#29231F] hover:text-[#542432] hover:border-[#542432] transition-colors shadow-xs"
        aria-label="Wishlist"
      >
        <Heart
          className={`w-4 h-4 transition-transform active:scale-125 ${
            wishlisted ? 'fill-[#542432] text-[#542432]' : 'text-[#8C8178]'
          }`}
        />
      </button>

      {/* Image Container with zoom */}
      <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-[#FAF7F2]">
        <Image
          src={displayImage}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          priority={priority}
          onError={() => setImageError(true)}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
        />

        {/* Quick View Overlay Button */}
        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              openQuickView(product);
            }}
            className="w-full bg-white/95 hover:bg-white text-[#29231F] text-xs font-medium py-2 px-3 tracking-wider uppercase border border-[#E8DFD5] shadow-sm flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#C6A56B]" />
            <span>Quick View</span>
          </button>
        </div>
      </Link>

      {/* Card Info */}
      <div className="p-3.5 flex flex-col flex-grow justify-between border-t border-[#E8DFD5]">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#8C8178] mb-1">
            <span className="uppercase tracking-widest text-[10px] text-[#C6A56B] font-medium">
              {product.category}
            </span>
            <span className="text-[10px] text-[#A89F96]">In Stock</span>
          </div>

          <Link href={`/product/${product.id}`} className="block group-hover:text-[#542432] transition-colors">
            <h3 className="font-serif-luxury text-[15px] font-medium text-[#29231F] line-clamp-1 leading-snug">
              {product.title}
            </h3>
          </Link>

          <p className="text-[11px] text-[#8C8178] line-clamp-1 mt-0.5 font-light">
            {product.finish}
          </p>
        </div>

        {/* Price and CTA */}
        <div className="pt-3 mt-2 border-t border-[#FAF7F2] flex items-center justify-between gap-2">
          <div>
            <div className="text-[14px] font-semibold text-[#29231F]">
              {formatPrice(product.priceInr)}
            </div>
            <div className="text-[10px] text-[#8C8178]">
              Wholesale / B2B Export
            </div>
          </div>

          <button
            onClick={() => addToEnquiry(product, 1)}
            className="bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] hover:text-[#C6A56B] text-[11px] uppercase tracking-wider font-medium py-1.5 px-3 border border-transparent transition-all flex items-center gap-1 shadow-xs active:scale-95"
            title="Add to Enquiry Basket"
          >
            <ShoppingBag className="w-3 h-3 text-[#C6A56B]" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Heart, MessageCircle, ShoppingBag, ShieldCheck, Truck, Sparkles, ArrowLeft, Check, Share2, Phone } from 'lucide-react';
import { getProductById, getRelatedProducts } from '@/lib/products';
import ProductCard from '@/components/product/ProductCard';
import { useStore } from '@/context/StoreContext';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = getProductById(slug);

  if (!product) {
    notFound();
  }

  const {
    formatPrice,
    addToEnquiry,
    toggleWishlist,
    isWishlisted,
  } = useStore();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'shipping' | 'enquiry'>('specs');
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  const wishlisted = isWishlisted(product.id);
  const relatedProducts = getRelatedProducts(product, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappDirectUrl = `https://wa.me/919987345600?text=${encodeURIComponent(
    `Hello IndiaCZ / Blue Petel Diamond, I want to place a wholesale enquiry for Design Code: ${product.code} (${product.title}). Price: Rs. ${product.priceInr}. Quantity: ${quantity} pcs.`
  )}`;

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center justify-between text-xs text-[#8C8178] mb-8 pb-4 border-b border-[#E8DFD5]">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#C6A56B]">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#C6A56B]">Showroom</Link>
            <span>/</span>
            <Link href={`/category/${product.category.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#C6A56B]">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-[#29231F] font-mono font-medium">{product.code}</span>
          </div>

          <Link
            href="/shop"
            className="text-[#542432] hover:text-[#C6A56B] flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Catalogue</span>
          </Link>
        </div>

        {/* 2-Column Product Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 bg-white p-6 sm:p-10 border border-[#E8DFD5] shadow-sm mb-16">
          {/* Left: Gallery & Zoom */}
          <div className="lg:col-span-7 space-y-4">
            <div
              className="relative aspect-square w-full bg-[#FAF7F2] border border-[#E8DFD5] overflow-hidden cursor-crosshair group"
              style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1' }}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className={`object-contain p-6 transition-transform duration-500 ${
                  isZoomed ? 'scale-150' : 'group-hover:scale-110'
                }`}
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#542432] text-white text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1">
                  DN: {product.code}
                </span>
                <span className="bg-white border border-[#E8DFD5] text-[#29231F] text-[10px] uppercase tracking-wider px-2 py-1">
                  High-Res 768px
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs text-[10px] text-[#8C8178] px-2.5 py-1 border border-[#E8DFD5]">
                Click or Hover to Zoom
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-3">
              <div className="relative w-20 h-20 bg-[#FAF7F2] border-2 border-[#542432] p-1 shrink-0 overflow-hidden cursor-pointer">
                <Image src={product.image} alt="Thumbnail Primary" fill className="object-contain p-1" />
              </div>
              <div className="relative w-20 h-20 bg-[#FAF7F2] border border-[#E8DFD5] p-1 shrink-0 overflow-hidden opacity-75 hover:opacity-100 cursor-pointer">
                <Image src={product.image} alt="Thumbnail Angle" fill className="object-contain p-1" />
              </div>
            </div>
          </div>

          {/* Right: Specifications & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-[#8C8178] mb-2">
                <span className="text-[#C6A56B] uppercase tracking-[0.2em] font-semibold text-[11px]">
                  {product.category}
                </span>
                <span className="text-[#25D366] font-medium flex items-center gap-1">
                  ● In Stock (Factory Ex-Mumbai)
                </span>
              </div>

              <h1 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#29231F] leading-tight mb-4">
                {product.title}
              </h1>

              {/* Price & B2B tag */}
              <div className="p-4 bg-[#FAF7F2] border border-[#E8DFD5] mb-6 flex items-baseline justify-between">
                <div>
                  <div className="text-3xl font-semibold text-[#29231F]">
                    {formatPrice(product.priceInr)}
                  </div>
                  <div className="text-[11px] text-[#8C8178] mt-0.5">
                    Estimated Wholesale Factory Price (Excl. Local Taxes & Freight)
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono bg-white border border-[#E8DFD5] px-2 py-1 text-[#542432]">
                  USD ~${product.priceUsd}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#544F4B] leading-relaxed font-light mb-6">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="border border-[#E8DFD5] divide-y divide-[#E8DFD5] text-xs mb-6">
                <div className="flex justify-between p-2.5 bg-[#FAF7F2]">
                  <span className="text-[#8C8178]">Design Code:</span>
                  <span className="font-mono font-semibold text-[#29231F]">{product.code}</span>
                </div>
                <div className="flex justify-between p-2.5">
                  <span className="text-[#8C8178]">Base Metal:</span>
                  <span className="font-medium text-[#29231F]">Hypoallergenic Brass Alloy</span>
                </div>
                <div className="flex justify-between p-2.5 bg-[#FAF7F2]">
                  <span className="text-[#8C8178]">Stone Setting:</span>
                  <span className="font-medium text-[#29231F]">AAA+ Micro-Pavé Cubic Zirconia</span>
                </div>
                <div className="flex justify-between p-2.5">
                  <span className="text-[#8C8178]">Surface Finish:</span>
                  <span className="font-medium text-[#29231F]">{product.finish}</span>
                </div>
                <div className="flex justify-between p-2.5 bg-[#FAF7F2]">
                  <span className="text-[#8C8178]">Approx. Weight:</span>
                  <span className="font-medium text-[#29231F]">{product.weight || '35g'}</span>
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs uppercase tracking-wider text-[#8C8178] font-semibold">
                  Wholesale Quantity:
                </span>
                <div className="flex items-center border border-[#E8DFD5] bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 text-sm hover:bg-[#FAF7F2] text-[#29231F]"
                  >
                    -
                  </button>
                  <span className="px-4 py-1.5 text-xs font-semibold min-w-[36px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 text-sm hover:bg-[#FAF7F2] text-[#29231F]"
                  >
                    +
                  </button>
                </div>
                <span className="text-[11px] text-[#8C8178]">(Single or Bulk Sets)</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => addToEnquiry(product, quantity)}
                  className="w-full bg-[#29231F] hover:bg-[#542432] text-[#FAF7F2] hover:text-[#C6A56B] py-4 px-6 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4 text-[#C6A56B]" />
                  <span>Add To Enquiry Basket ({quantity} pcs)</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20BA59] text-white py-3 px-4 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Desk</span>
                  </a>

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`py-3 px-4 border text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-colors ${
                      wishlisted
                        ? 'border-[#542432] bg-[#542432] text-white'
                        : 'border-[#E8DFD5] hover:border-[#29231F] text-[#29231F]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${wishlisted ? 'fill-white text-white' : ''}`} />
                    <span>{wishlisted ? 'Wishlisted' : 'Save Design'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Direct Factory Assistance */}
            <div className="pt-6 mt-6 border-t border-[#E8DFD5] text-xs text-[#8C8178] space-y-2">
              <div className="flex items-center gap-2 text-[#29231F]">
                <Phone className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span className="font-semibold">B2B Trade Helpline:</span>
                <a href="tel:+919987345600" className="hover:text-[#542432] underline">
                  +91 9987345600
                </a>
                <span>/</span>
                <a href="tel:+919892655588" className="hover:text-[#542432] underline">
                  +91 9892655588
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span>Manufactured by Blue Petel Diamond, Zaveri Bazaar, Mumbai (Est. 2013)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Specifications & Delivery */}
        <div className="bg-white border border-[#E8DFD5] p-6 sm:p-8 mb-16">
          <div className="flex border-b border-[#E8DFD5] gap-8 mb-6">
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 text-xs uppercase tracking-[0.15em] font-semibold transition-colors border-b-2 ${
                activeTab === 'specs'
                  ? 'border-[#542432] text-[#542432]'
                  : 'border-transparent text-[#8C8178] hover:text-[#29231F]'
              }`}
            >
              Craftsmanship & Technical Specifications
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`pb-3 text-xs uppercase tracking-[0.15em] font-semibold transition-colors border-b-2 ${
                activeTab === 'shipping'
                  ? 'border-[#542432] text-[#542432]'
                  : 'border-transparent text-[#8C8178] hover:text-[#29231F]'
              }`}
            >
              Worldwide Shipping & Packaging
            </button>
          </div>

          {activeTab === 'specs' ? (
            <div className="space-y-4 text-xs sm:text-sm text-[#544F4B] leading-relaxed">
              <p>
                Each piece bearing Design Code <strong className="text-[#29231F]">{product.code}</strong> is manufactured in strict compliance with international fashion jewellery standards. Our artisans employ cold casting and lost-wax brass injection followed by multi-stage galvanic bath plating.
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs text-[#8C8178]">
                <li><strong className="text-[#29231F]">Stones:</strong> AAA+ grade calibrated Cubic Zirconia with 57 optical facets duplicating natural diamond dispersion.</li>
                <li><strong className="text-[#29231F]">Plating:</strong> Electroplated with high-micron 24K gold and rhodium protective seal to prevent oxidation and tarnish.</li>
                <li><strong className="text-[#29231F]">Safety:</strong> 100% lead-free, nickel-safe, and hypoallergenic for prolonged event wear.</li>
                <li><strong className="text-[#29231F]">Origin:</strong> Authentically created in Zaveri Bazaar, Mumbai, India.</li>
              </ul>
            </div>
          ) : (
            <div className="space-y-4 text-xs sm:text-sm text-[#544F4B] leading-relaxed">
              <p>
                We dispatch wholesale shipments worldwide via DHL Express, FedEx Priority, and secured air cargo. All orders are packed in protective foam jewel sleeves and tamper-proof corrugated export cartons.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 bg-[#FAF7F2] border border-[#E8DFD5]">
                  <div className="font-semibold text-[#29231F] text-xs">Domestic India</div>
                  <div className="text-[11px] text-[#8C8178] mt-1">2–4 business days via Bluedart / DTDC</div>
                </div>
                <div className="p-3 bg-[#FAF7F2] border border-[#E8DFD5]">
                  <div className="font-semibold text-[#29231F] text-xs">USA & Canada</div>
                  <div className="text-[11px] text-[#8C8178] mt-1">4–6 business days via DHL / FedEx Express</div>
                </div>
                <div className="p-3 bg-[#FAF7F2] border border-[#E8DFD5]">
                  <div className="font-semibold text-[#29231F] text-xs">UK, Europe & UAE</div>
                  <div className="text-[11px] text-[#8C8178] mt-1">3–5 business days with customs clearance assistance</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Designs Section */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-semibold block mb-1">
                Complementary Pieces
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#29231F]">
                Similar Designs in {product.category}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

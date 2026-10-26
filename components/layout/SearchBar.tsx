'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X, ArrowRight } from 'lucide-react';
import { searchProducts } from '@/lib/products';
import { Product } from '@/types/product';
import { useStore } from '@/context/StoreContext';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const { formatPrice } = useStore();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const res = searchProducts(query);
      setResults(res.slice(0, 8));
    } else {
      setResults([]);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
      <div
        className="w-full max-w-2xl bg-white border border-[#E8DFD5] shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E8DFD5] flex items-center gap-3 bg-[#FAF7F2]">
          <Search className="w-5 h-5 text-[#C6A56B] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by Design Code (e.g. S020001237, B012001500), Category, or Style..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-[#29231F] text-sm md:text-base outline-none font-sans-clean placeholder:text-[#8C8178]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#8C8178] hover:text-[#29231F] text-xs uppercase"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#8C8178] hover:text-[#29231F] rounded-full hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results dropdown */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {query.trim().length < 2 ? (
            <div className="text-center py-6 text-xs text-[#8C8178]">
              <p className="font-serif-luxury text-base text-[#29231F] mb-1">
                Explore 270+ Luxury Brass CZ Designs
              </p>
              <p>Type at least 2 characters or search popular terms like &ldquo;Necklace&rdquo;, &ldquo;Earrings&rdquo;, &ldquo;Bangles&rdquo;, or design codes.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Necklace Set', 'Earrings', 'Bangles & Kadas', 'Rings', 'Mangalsutra', 'Bridal'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setQuery(cat)}
                    className="bg-[#FAF7F2] hover:bg-[#EDE4D8] border border-[#E8DFD5] px-3 py-1 text-[11px] text-[#29231F] transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#8C8178]">
              No jewellery designs found matching &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-[#8C8178] font-medium px-2 pb-1 border-b border-[#FAF7F2]">
                Matching Designs ({results.length})
              </div>
              {results.map(product => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center gap-3 p-2 hover:bg-[#FAF7F2] border border-transparent hover:border-[#E8DFD5] transition-colors group"
                >
                  <div
                    className="relative w-14 h-14 bg-[#FAF7F2] border border-[#E8DFD5] shrink-0 overflow-hidden"
                    style={{ position: 'relative' }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] bg-white px-1.5 py-0.5 border border-[#E8DFD5] text-[#29231F]">
                        DN: {product.code}
                      </span>
                      <span className="text-[10px] text-[#C6A56B] uppercase font-medium">
                        {product.category}
                      </span>
                    </div>
                    <h4 className="font-serif-luxury text-sm font-medium text-[#29231F] truncate group-hover:text-[#542432]">
                      {product.title}
                    </h4>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-semibold text-[#29231F]">
                      {formatPrice(product.priceInr)}
                    </div>
                    <div className="text-[10px] text-[#8C8178]">Wholesale</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* View All link */}
        {results.length > 0 && (
          <div className="p-3 bg-[#FAF7F2] border-t border-[#E8DFD5] text-center">
            <Link
              href={`/shop?q=${encodeURIComponent(query)}`}
              onClick={onClose}
              className="text-xs font-semibold text-[#542432] hover:text-[#C6A56B] uppercase tracking-wider inline-flex items-center gap-1.5"
            >
              <span>View All Matching Designs in Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

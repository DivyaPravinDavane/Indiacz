'use client';

import React from 'react';
import { Filter, X, RotateCcw } from 'lucide-react';
import { CATEGORIES } from '@/lib/products';

interface ProductFiltersProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  selectedOccasion: string;
  onSelectOccasion: (occ: string) => void;
  inStockOnly: boolean;
  onToggleInStock: (val: boolean) => void;
  onReset: () => void;
  totalFilteredCount: number;
}

export default function ProductFilters({
  selectedCategory,
  onSelectCategory,
  priceRange,
  onPriceChange,
  selectedOccasion,
  onSelectOccasion,
  inStockOnly,
  onToggleInStock,
  onReset,
  totalFilteredCount,
}: ProductFiltersProps) {
  const occasions = ['All', 'Wedding', 'Party Wear', 'Celebration', 'Everyday Wear'];

  return (
    <aside className="bg-white p-5 border border-[#E8DFD5] space-y-6">
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E8DFD5]">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#C6A56B]" />
          <span className="font-serif-luxury text-base font-semibold text-[#29231F]">
            Refine Catalogue
          </span>
        </div>
        <button
          onClick={onReset}
          className="text-[11px] text-[#8C8178] hover:text-[#542432] flex items-center gap-1 transition-colors"
          title="Reset all filters"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="text-xs uppercase tracking-wider text-[#C6A56B] font-semibold mb-3">
          Jewellery Category
        </h4>
        <div className="space-y-1.5 text-xs">
          <button
            onClick={() => onSelectCategory('All')}
            className={`w-full text-left py-1 px-2 transition-colors flex items-center justify-between ${
              selectedCategory === 'All'
                ? 'bg-[#FAF7F2] font-semibold text-[#542432] border-l-2 border-[#542432]'
                : 'text-[#8C8178] hover:text-[#29231F]'
            }`}
          >
            <span>All Categories</span>
            <span className="text-[10px] text-[#A89F96]">270+</span>
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className={`w-full text-left py-1 px-2 transition-colors flex items-center justify-between ${
                selectedCategory === cat.name
                  ? 'bg-[#FAF7F2] font-semibold text-[#542432] border-l-2 border-[#542432]'
                  : 'text-[#8C8178] hover:text-[#29231F]'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] text-[#A89F96]">{cat.itemCount}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Occasion Filter */}
      <div className="pt-4 border-t border-[#E8DFD5]">
        <h4 className="text-xs uppercase tracking-wider text-[#C6A56B] font-semibold mb-3">
          Occasion / Setting
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {occasions.map(occ => (
            <button
              key={occ}
              onClick={() => onSelectOccasion(occ)}
              className={`text-[11px] px-2.5 py-1 border transition-all ${
                selectedOccasion === occ
                  ? 'bg-[#29231F] text-white border-[#29231F]'
                  : 'bg-white text-[#8C8178] border-[#E8DFD5] hover:border-[#C6A56B]'
              }`}
            >
              {occ}
            </button>
          ))}
        </div>
      </div>

      {/* Price Slider */}
      <div className="pt-4 border-t border-[#E8DFD5]">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-xs uppercase tracking-wider text-[#C6A56B] font-semibold">
            Max Wholesale Price
          </h4>
          <span className="text-xs font-semibold text-[#29231F]">
            Rs. {priceRange[1].toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min={200}
          max={3000}
          step={50}
          value={priceRange[1]}
          onChange={e => onPriceChange([priceRange[0], parseInt(e.target.value)])}
          className="w-full accent-[#542432] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-[#8C8178] mt-1">
          <span>Rs. 200</span>
          <span>Rs. 3,000+</span>
        </div>
      </div>

      {/* In-Stock Toggle */}
      <div className="pt-4 border-t border-[#E8DFD5]">
        <label className="flex items-center gap-2 cursor-pointer text-xs text-[#29231F]">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={e => onToggleInStock(e.target.checked)}
            className="rounded-xs accent-[#542432]"
          />
          <span>Ready for Immediate Dispatch Only</span>
        </label>
      </div>

      {/* Filter Summary */}
      <div className="p-3 bg-[#FAF7F2] border border-[#E8DFD5] text-[11px] text-[#8C8178] text-center">
        Showing <strong className="text-[#29231F]">{totalFilteredCount}</strong> matching luxury designs
      </div>
    </aside>
  );
}

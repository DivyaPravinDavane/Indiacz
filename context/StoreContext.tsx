'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Currency, EnquiryItem } from '@/types/product';
import { formatPrice } from '@/lib/products';

interface StoreContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountInr: number) => string;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  enquiryItems: EnquiryItem[];
  addToEnquiry: (product: Product, quantity?: number) => void;
  removeFromEnquiry: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearEnquiry: () => void;
  enquiryCount: number;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  isEnquiryDrawerOpen: boolean;
  setIsEnquiryDrawerOpen: (open: boolean) => void;
  isWishlistDrawerOpen: boolean;
  setIsWishlistDrawerOpen: (open: boolean) => void;
  generateWhatsAppEnquiryUrl: (note?: string) => string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('INR');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isEnquiryDrawerOpen, setIsEnquiryDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem('indiacz_wishlist');
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedEnquiry = localStorage.getItem('indiacz_enquiry');
      if (savedEnquiry) setEnquiryItems(JSON.parse(savedEnquiry));

      const savedCurrency = localStorage.getItem('indiacz_currency');
      if (savedCurrency) setCurrency(savedCurrency as Currency);
    } catch {
      // ignore SSR or storage exceptions
    }
  }, []);

  const handleSetCurrency = (c: Currency) => {
    setCurrency(c);
    try {
      localStorage.setItem('indiacz_currency', c);
    } catch {}
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const next = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      try {
        localStorage.setItem('indiacz_wishlist', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const addToEnquiry = (product: Product, quantity = 1) => {
    setEnquiryItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      let updated: EnquiryItem[];
      if (existing) {
        updated = prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updated = [...prev, { product, quantity }];
      }
      try {
        localStorage.setItem('indiacz_enquiry', JSON.stringify(updated));
      } catch {}
      return updated;
    });
    setIsEnquiryDrawerOpen(true);
  };

  const removeFromEnquiry = (productId: string) => {
    setEnquiryItems(prev => {
      const updated = prev.filter(item => item.product.id !== productId);
      try {
        localStorage.setItem('indiacz_enquiry', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromEnquiry(productId);
      return;
    }
    setEnquiryItems(prev => {
      const updated = prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      try {
        localStorage.setItem('indiacz_enquiry', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const clearEnquiry = () => {
    setEnquiryItems([]);
    try {
      localStorage.removeItem('indiacz_enquiry');
    } catch {}
  };

  const enquiryCount = enquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  const generateWhatsAppEnquiryUrl = (note = '') => {
    const phone = '919987345600';
    if (enquiryItems.length === 0) {
      return `https://wa.me/${phone}?text=${encodeURIComponent(
        'Hello IndiaCZ / Blue Petel Diamond, I am inquiring about your luxury brass CZ jewellery catalogue.'
      )}`;
    }
    let message = `Hello IndiaCZ / Blue Petel Diamond, I would like to place a B2B enquiry for the following designs:\n\n`;
    enquiryItems.forEach((item, i) => {
      message += `${i + 1}. Design Code: ${item.product.code} (${item.product.category})\n   Qty: ${item.quantity} pcs\n   Price: Rs. ${item.product.priceInr}\n   Link: ${item.product.url}\n\n`;
    });
    if (note) {
      message += `Note: ${note}\n`;
    }
    message += `Please share wholesale pricing, availability, and export delivery schedule.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <StoreContext.Provider
      value={{
        currency,
        setCurrency: handleSetCurrency,
        formatPrice: (amountInr: number) => formatPrice(amountInr, currency),
        wishlist,
        toggleWishlist,
        isWishlisted,
        enquiryItems,
        addToEnquiry,
        removeFromEnquiry,
        updateQuantity,
        clearEnquiry,
        enquiryCount,
        quickViewProduct,
        openQuickView: setQuickViewProduct,
        closeQuickView: () => setQuickViewProduct(null),
        isEnquiryDrawerOpen,
        setIsEnquiryDrawerOpen,
        isWishlistDrawerOpen,
        setIsWishlistDrawerOpen,
        generateWhatsAppEnquiryUrl,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}

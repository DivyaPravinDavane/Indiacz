export interface Product {
  id: string;
  code: string;
  title: string;
  category: string;
  priceInr: number;
  priceUsd: number;
  image: string;
  secondaryImage?: string;
  inStock: boolean;
  rating?: number;
  reviewsCount?: number;
  material: string;
  finish: string;
  weight?: string;
  collection: string;
  occasion: string;
  description: string;
  url: string;
  featured?: boolean;
  bestseller?: boolean;
}

export type Currency = 'INR' | 'USD' | 'EUR' | 'GBP';

export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  itemCount: number;
  featured?: boolean;
}

export interface EnquiryItem {
  product: Product;
  quantity: number;
}

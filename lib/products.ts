import { Product, Currency, CategoryInfo } from '@/types/product';
import rawProducts from './data/products.json';

// Curated list of all genuine products
export const products: Product[] = (rawProducts as Product[]).map((p, idx) => ({
  ...p,
  featured: idx % 7 === 0 || idx < 12,
  bestseller: idx % 5 === 0 || (idx >= 12 && idx < 24),
}));

export const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number }> = {
  INR: { symbol: 'Rs.', rate: 1 },
  USD: { symbol: '$', rate: 0.012 }, // 1 USD ~ 83 INR
  EUR: { symbol: '€', rate: 0.011 },
  GBP: { symbol: '£', rate: 0.0095 },
};

export function formatPrice(amountInr: number, currency: Currency = 'INR'): string {
  const { symbol, rate } = CURRENCY_RATES[currency];
  if (currency === 'INR') {
    return `${symbol} ${amountInr.toLocaleString('en-IN')}`;
  }
  const converted = Math.round(amountInr * rate * 10) / 10;
  return `${symbol}${converted.toFixed(currency === 'USD' ? 2 : 2)}`;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'necklace-sets',
    name: 'Necklace Sets',
    slug: 'necklace-sets',
    image: 'https://www.indiacz.com/image/cache/catalog/NECKLACE SET/STARLIGHT/S020001237-768x768.jpg',
    description: 'Bespoke grand chokers and bridal necklace sets handcrafted with micro-pavé Cubic Zirconia.',
    itemCount: products.filter(p => p.category === 'Necklace Set').length,
    featured: true,
  },
  {
    id: 'wholesale-earrings',
    name: 'Earrings',
    slug: 'wholesale-earrings',
    image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/EARINGS/BASEL/B012001500-768x768.jpg',
    description: 'Chandelier drops, jhumkis, and dazzling CZ danglers for black-tie soirees and festive galas.',
    itemCount: products.filter(p => p.category === 'Earrings').length,
    featured: true,
  },
  {
    id: 'bangles-kadas',
    name: 'Bangles & Kadas',
    slug: 'wholesale-bangles',
    image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/KADA/khusi/K996000148-768x768.jpg',
    description: 'Handcrafted openable kadas, natural druzy cuffs, and eternity bangles in 24K gold finish.',
    itemCount: products.filter(p => p.category === 'Bangles & Kadas').length,
    featured: true,
  },
  {
    id: 'wholesale-rings',
    name: 'Rings',
    slug: 'wholesale-rings',
    image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/FINGER RING/KHUSHI/K996000134-768x768.jpg',
    description: 'Cocktail statement solitaires, marquise halos, and vintage cluster rings in fine brass setting.',
    itemCount: products.filter(p => p.category === 'Rings').length,
    featured: true,
  },
  {
    id: 'pendant-sets',
    name: 'Pendant Sets',
    slug: 'pendant-sets',
    image: 'https://www.indiacz.com/image/cache/catalog/NECKLACE SET/STARLIGHT/S020001236-768x768.jpg',
    description: 'Refined American Diamond pendant and matching earring pairings for graceful everyday luxury.',
    itemCount: products.filter(p => p.category === 'Pendant Set').length,
    featured: true,
  },
  {
    id: 'mangalsutra',
    name: 'Mangalsutra',
    slug: 'mangalsutra',
    image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/NECKLACE/MEENAS/M021001853-768x768.jpg',
    description: 'Auspicious black-bead craftsmanship married with modern brilliant solitaire CZ motifs.',
    itemCount: products.filter(p => p.category === 'Mangalsutra').length,
    featured: true,
  },
  {
    id: 'long-necklace',
    name: 'Long Necklaces',
    slug: 'long-necklace',
    image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/NECKLACE/BASEL/B012001652-768x768.jpg',
    description: 'Grand royal harams and cascading bridal layers set with uncut druzy and sparkling CZ.',
    itemCount: 14,
    featured: true,
  },
  {
    id: 'wholesale-studs',
    name: 'Studs',
    slug: 'wholesale-studs',
    image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/EARINGS/khusi/K996000142-768x768.jpg',
    description: 'Subtle daily sophistication — brilliant cut solitaire studs crafted for lasting sparkle.',
    itemCount: products.filter(p => p.category === 'Studs').length || 12,
    featured: true,
  },
  {
    id: 'bridal-jewellery',
    name: 'Bridal Jewellery',
    slug: 'bridal',
    image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/NECKLACE/VAIDEHI/V011001597-768x768.jpg',
    description: 'The pinnacle of wedding grandeur — complete bridal suites designed for regal ceremonies.',
    itemCount: 38,
    featured: true,
  },
  {
    id: 'chains-accessories',
    name: 'Chains & Brooches',
    slug: 'accessories',
    image: 'https://www.indiacz.com/image/cache/catalog/DRUZY/BOARCH/B012001685-768x768.jpg',
    description: 'Handcrafted luxury brass chains, collar pins, and ceremonial brooches.',
    itemCount: 18,
    featured: true,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductByCode(code: string): Product | undefined {
  return products.find(p => p.code.toLowerCase() === code.toLowerCase());
}

export function getProductsByCategory(categorySlugOrName: string): Product[] {
  const norm = categorySlugOrName.toLowerCase().replace(/-/g, ' ');
  return products.filter(p => {
    const catNorm = p.category.toLowerCase();
    if (norm.includes('earring') && catNorm.includes('earring')) return true;
    if (norm.includes('necklace') && catNorm.includes('necklace')) return true;
    if (norm.includes('bangle') && (catNorm.includes('bangle') || catNorm.includes('kada'))) return true;
    if (norm.includes('ring') && catNorm.includes('ring')) return true;
    if (norm.includes('pendant') && catNorm.includes('pendant')) return true;
    if (norm.includes('mangalsutra') && catNorm.includes('mangalsutra')) return true;
    if (norm.includes('stud') && (catNorm.includes('stud') || catNorm.includes('earring'))) return true;
    if (norm.includes('bridal') && (p.collection === 'Bridal Edit' || catNorm.includes('necklace'))) return true;
    return catNorm.includes(norm);
  });
}

export function getFeaturedProducts(limit = 16): Product[] {
  return products.filter(p => p.featured).slice(0, limit);
}

export function getBestsellers(limit = 12): Product[] {
  return products.filter(p => p.bestseller).slice(0, limit);
}

export function getNewArrivals(limit = 16): Product[] {
  return products.slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  if (!query) return [];
  const q = query.toLowerCase().trim();
  return products.filter(
    p =>
      p.title.toLowerCase().includes(q) ||
      p.code.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.occasion.toLowerCase().includes(q)
  );
}

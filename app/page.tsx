import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import CollectionEditorial from '@/components/home/CollectionEditorial';
import NewArrivalsSection from '@/components/home/NewArrivalsSection';
import OccasionSection from '@/components/home/OccasionSection';
import SignatureSection from '@/components/home/SignatureSection';
import BestsellersSection from '@/components/home/BestsellersSection';
import InspirationGallery from '@/components/home/InspirationGallery';
import BrandStorySection from '@/components/home/BrandStorySection';
import TrustSection from '@/components/home/TrustSection';

export default function HomePage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Section 1: Premium Cinematic Hero */}
      <HeroSection />

      {/* Section 2: Shop by Category (8-12 Cards) */}
      <CategoryGrid />

      {/* Section 3: Featured Collection Editorial */}
      <CollectionEditorial />

      {/* Section 4: New Arrivals Catalogue (16 Cards) */}
      <NewArrivalsSection />

      {/* Section 5: Shop by Occasion */}
      <OccasionSection />

      {/* Section 6: Signature Designs Split Section */}
      <SignatureSection />

      {/* Section 7: Bestsellers and Popular Products */}
      <BestsellersSection />

      {/* Section 8: Jewellery Inspiration Gallery */}
      <InspirationGallery />

      {/* Section 9: Brand Story (About IndiaCZ & Blue Petel Diamond) */}
      <BrandStorySection />

      {/* Section 10: Trust and Customer Support */}
      <TrustSection />
    </main>
  );
}

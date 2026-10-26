import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import EnquiryDrawer from '@/components/enquiry/EnquiryDrawer';
import WishlistDrawer from '@/components/enquiry/WishlistDrawer';
import QuickViewModal from '@/components/product/QuickViewModal';
import { MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IndiaCZ — Premium Brass Cubic Zirconia Jewellery Manufacturer | Zaveri Bazaar, Mumbai',
  description:
    'Discover 270+ luxury brass American Diamond CZ necklace sets, earrings, bangles, rings, and mangalsutras. Renowned manufacturer, wholesaler, and exporter from Zaveri Bazaar, Mumbai since 2013.',
  keywords: [
    'IndiaCZ',
    'Blue Petel Diamond',
    'Brass CZ jewelry manufacturer',
    'American Diamond jewelry wholesaler',
    'Zaveri Bazaar jewelry manufacturer',
    'CZ necklace set Mumbai',
    'Baroque pearl jewelry wholesaler',
    'Kundan jewelry exporter India',
  ],
  openGraph: {
    title: 'IndiaCZ — Luxury Brass CZ Jewellery Manufacturer',
    description: 'Bespoke wholesale brass Cubic Zirconia jewellery crafted in Zaveri Bazaar, Mumbai.',
    url: 'https://indiacz.com',
    siteName: 'IndiaCZ',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF7F2] text-[#29231F] font-sans antialiased selection:bg-[#542432] selection:text-[#FAF7F2]">
        <StoreProvider>
          {/* Main Luxury Header */}
          <SiteHeader />

          {/* Page Content */}
          <div className="flex-1">
            {children}
          </div>

          {/* Luxury Footer */}
          <SiteFooter />

          {/* Floating WhatsApp Action Badge */}
          <a
            href="https://wa.me/919987345600?text=Hi%2C%20I%20have%20visited%20IndiaCZ%20website%20and%20want%20to%20do%20business%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Chat"
            className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA59] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
            title="Chat with Wholesale Order Desk on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold px-0 group-hover:px-2">
              WhatsApp Order Desk
            </span>
          </a>

          {/* Global Drawers & Modals */}
          <EnquiryDrawer />
          <WishlistDrawer />
          <QuickViewModal />
        </StoreProvider>
      </body>
    </html>
  );
}

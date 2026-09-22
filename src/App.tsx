import React, { useState } from 'react';
import { TabType, MandirProduct } from './types/mandir';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SanctumStudioSection } from './components/SanctumStudioSection';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturedMandirsSection } from './components/FeaturedMandirsSection';
import { VastuSection } from './components/VastuSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CatalogView } from './components/CatalogView';
import { CraftsmanshipView } from './components/CraftsmanshipView';
import { CustomMandirBuilder } from './components/CustomMandirBuilder';
import { WishlistView } from './components/WishlistView';
import { VastuModal } from './components/VastuModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Footer } from './components/Footer';
import { WHATSAPP_PHONE } from './data/mandirs';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<MandirProduct | null>(null);
  const [isVastuModalOpen, setIsVastuModalOpen] = useState<boolean>(false);
  const [catalogPlacement, setCatalogPlacement] = useState<string>('All');

  // Persisted Wishlist State
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('deva_vihara_wishlist');
      return saved ? JSON.parse(saved) : ['dv-001'];
    } catch {
      return ['dv-001'];
    }
  });

  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) => {
      const next = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
      try {
        localStorage.setItem('deva_vihara_wishlist', JSON.stringify(next));
      } catch (err) {
        console.error('Failed to save wishlist', err);
      }
      return next;
    });
  };

  const handleClearWishlist = () => {
    setWishlistIds([]);
    try {
      localStorage.removeItem('deva_vihara_wishlist');
    } catch (err) {
      console.error('Failed to clear wishlist', err);
    }
  };

  const scrollToStudio = () => {
    if (activeTab !== 'home') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById('sanctum-studio');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('sanctum-studio');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlacementCategory = (placement: 'Wall Mount' | 'Floor Standing' | 'Corner Unit' | 'All') => {
    setCatalogPlacement(placement);
    setActiveTab('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCustomizeFromProduct = (product: MandirProduct) => {
    setActiveTab('custom');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f4] text-[#1c1c19] selection:bg-[#fed65b] selection:text-[#241a00]">
      {/* 1. Top Announcement Bar */}
      <TopAnnouncementBar />

      {/* 2. Main Navigation Header */}
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenVastuModal={() => setIsVastuModalOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onScrollToStudio={scrollToStudio}
        wishlistCount={wishlistIds.length}
      />

      {/* Main Body depending on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onNavigate={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onScrollToStudio={scrollToStudio}
              onOpenVastuModal={() => setIsVastuModalOpen(true)}
            />

            {/* 360° Real-time 3D Sanctum Studio */}
            <SanctumStudioSection />

            {/* Archetypes / Categories Bento Grid */}
            <CategoriesSection
              onSelectPlacement={handleSelectPlacementCategory}
              onNavigateCustom={() => {
                setActiveTab('custom');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Featured Curated Mandirs */}
            <FeaturedMandirsSection
              onSelectProduct={(product) => setSelectedProduct(product)}
              onViewAll={() => {
                setCatalogPlacement('All');
                setActiveTab('catalog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
            />

            {/* Vastu Sthapatya Veda Placement Guidance */}
            <VastuSection onOpenModal={() => setIsVastuModalOpen(true)} />

            {/* Homeowner Testimonials */}
            <TestimonialsSection />
          </>
        )}

        {activeTab === 'catalog' && (
          <CatalogView
            onSelectProduct={(product) => setSelectedProduct(product)}
            initialPlacement={catalogPlacement}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {activeTab === 'wishlist' && (
          <WishlistView
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onClearWishlist={handleClearWishlist}
            onSelectProduct={(product) => setSelectedProduct(product)}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onCustomize={handleCustomizeFromProduct}
          />
        )}

        {activeTab === 'craftsmanship' && <CraftsmanshipView />}

        {activeTab === 'custom' && <CustomMandirBuilder />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenVastuModal={() => setIsVastuModalOpen(true)}
        onScrollToStudio={scrollToStudio}
      />

      {/* Vastu Placement Guide Modal */}
      <VastuModal
        isOpen={isVastuModalOpen}
        onClose={() => setIsVastuModalOpen(false)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onCustomize={handleCustomizeFromProduct}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Persistent Floating WhatsApp Consultation Button */}
      <a
        href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
          'Namaste Deva Vihara! I would like to consult on a wooden home temple.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 md:px-4 md:py-3 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all group"
        title="Chat with Temple Sthapati on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
        <span className="hidden md:inline text-xs font-bold uppercase tracking-wider">
          Artisan WhatsApp
        </span>
      </a>
    </div>
  );
};

export default App;

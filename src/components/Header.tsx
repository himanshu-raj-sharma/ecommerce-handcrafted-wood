import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TabType } from '../types/mandir';
import { BRAND_LOGO_URL, WHATSAPP_PHONE } from '../data/mandirs';

interface HeaderProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onOpenVastuModal: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onScrollToStudio: () => void;
  wishlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenVastuModal,
  searchQuery,
  onSearchChange,
  onScrollToStudio,
  wishlistCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key or desktop resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (tab: TabType) => {
    onTabChange(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStudioClick = () => {
    onScrollToStudio();
    setMobileMenuOpen(false);
  };

  const handleVastuClick = () => {
    onOpenVastuModal();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-[#fcf9f4] top-0 sticky z-40 border-b border-[#d4c3bc]/50 shadow-xs transition-colors">
        <div className="flex justify-between items-center max-w-[1360px] mx-auto px-4 md:px-8 lg:px-12 h-16 md:h-20 w-full">
        {/* Brand Logo & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 md:gap-3 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg p-0.5 border border-[#735c00]/40 shadow-inner bg-[#f0ede9] flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shrink-0">
            <img
              src={BRAND_LOGO_URL}
              alt="Deva Vihara Brand Mark"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-2xl font-bold text-[#250f03] tracking-wide leading-none group-hover:text-[#735c00] transition-colors">
              Deva Vihara
            </span>
            <span className="text-[9px] md:text-[10px] text-[#50443f] uppercase tracking-[0.16em] md:tracking-[0.2em] font-semibold mt-0.5 md:mt-1">
              Sacred Sanctuaries
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-all pb-1 ${
              activeTab === 'home'
                ? 'text-[#250f03] font-bold border-b-2 border-[#735c00]'
                : 'text-[#50443f] hover:text-[#250f03]'
            }`}
          >
            Home
          </button>
          <button
            onClick={handleStudioClick}
            className="text-[#50443f] hover:text-[#250f03] transition-colors pb-1 flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base text-[#735c00] animate-pulse">
              view_in_ar
            </span>
            <span>3D Mandir Studio</span>
          </button>
          <button
            onClick={() => handleNavClick('catalog')}
            className={`transition-all pb-1 ${
              activeTab === 'catalog'
                ? 'text-[#250f03] font-bold border-b-2 border-[#735c00]'
                : 'text-[#50443f] hover:text-[#250f03]'
            }`}
          >
            Collection
          </button>
          <button
            onClick={() => handleNavClick('craftsmanship')}
            className={`transition-all pb-1 ${
              activeTab === 'craftsmanship'
                ? 'text-[#250f03] font-bold border-b-2 border-[#735c00]'
                : 'text-[#50443f] hover:text-[#250f03]'
            }`}
          >
            Craftsmanship
          </button>
          <button
            onClick={() => handleNavClick('custom')}
            className={`transition-all pb-1 ${
              activeTab === 'custom'
                ? 'text-[#250f03] font-bold border-b-2 border-[#735c00]'
                : 'text-[#50443f] hover:text-[#250f03]'
            }`}
          >
            Custom Mandir
          </button>
          <button
            onClick={() => handleNavClick('wishlist')}
            className={`transition-all pb-1 flex items-center gap-1.5 ${
              activeTab === 'wishlist'
                ? 'text-[#250f03] font-bold border-b-2 border-[#735c00]'
                : 'text-[#50443f] hover:text-[#250f03]'
            }`}
          >
            <span
              className={`material-symbols-outlined text-base ${wishlistCount > 0 ? 'text-rose-600' : 'text-[#735c00]'}`}
              style={wishlistCount > 0 ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              favorite
            </span>
            <span>Wishlist</span>
            {wishlistCount > 0 && (
              <span className="px-1.5 py-0.2 bg-rose-600 text-white rounded-full text-[10px] font-bold shadow-xs">
                {wishlistCount}
              </span>
            )}
          </button>
          <button
            onClick={handleVastuClick}
            className="text-[#50443f] hover:text-[#250f03] transition-colors pb-1 flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-base text-[#735c00]">explore</span>
            <span>Vastu Guide</span>
          </button>
        </nav>

        {/* Right Actions: Search & CTAs */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          {/* Instant Search Bar */}
          <div className="relative hidden sm:block w-36 md:w-48 xl:w-60">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (activeTab !== 'catalog' && e.target.value.trim() !== '') {
                  onTabChange('catalog');
                }
              }}
              placeholder="Search mandir, teak, jali..."
              className="w-full bg-[#f6f3ee] border border-[#d4c3bc]/60 rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#1c1c19] placeholder-[#50443f]/60 focus:outline-none focus:border-[#735c00] transition-all"
            />
            <span className="material-symbols-outlined absolute left-2.5 top-2 text-[#50443f]/70 text-base pointer-events-none">
              search
            </span>
          </div>

          {/* Quick Wishlist icon button with badge */}
          <button
            onClick={() => handleNavClick('wishlist')}
            className={`relative p-2 text-[#250f03] hover:text-rose-600 focus:outline-none rounded-lg hover:bg-[#f0ede9] transition-colors active:scale-95 ${
              activeTab === 'wishlist' ? 'bg-rose-50 text-rose-600 ring-1 ring-rose-200' : ''
            }`}
            title="View Sacred Wishlist"
            aria-label="View Saved Wishlist"
          >
            <span
              className={`material-symbols-outlined text-2xl transition-colors ${
                wishlistCount > 0 ? 'text-rose-600' : 'text-[#50443f]'
              }`}
              style={wishlistCount > 0 ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              favorite
            </span>
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-rose-600 text-white font-bold text-[9px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center shadow-xs">
                {wishlistCount > 9 ? '9+' : wishlistCount}
              </span>
            )}
          </button>

          {/* Artisan Consult CTA (Desktop) */}
          <button
            onClick={() => handleNavClick('custom')}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 border border-[#735c00] text-[#250f03] text-xs font-semibold rounded-lg hover:bg-[#735c00]/10 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-sm text-[#735c00]">handyman</span>
            <span>Consult Artisan</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
              'Hello Deva Vihara Team! I would like to consult with your Temple Sthapati regarding a handcrafted wooden mandir.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-xs font-bold tracking-wide shadow-xs hover:shadow-md transition-all active:scale-95 shrink-0"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#250f03] hover:text-[#735c00] focus:outline-none rounded-lg hover:bg-[#f0ede9] transition-colors active:scale-95"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl transition-transform duration-200">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Expanded Menu Dropdown (Cleanly slides down below header) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden w-full border-t border-[#d4c3bc]/70 bg-[#fcf9f4] shadow-2xl max-h-[calc(100vh-4.25rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
        >
          <div className="p-4 space-y-4 max-w-lg mx-auto">
            {/* Mobile Search input */}
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  if (activeTab !== 'catalog') {
                    onTabChange('catalog');
                  }
                }}
                placeholder="Search mandirs, teak, finishes..."
                className="w-full bg-[#f6f3ee] border border-[#d4c3bc] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#1c1c19] placeholder-[#50443f]/70 focus:outline-none focus:border-[#735c00]"
              />
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#735c00] text-lg pointer-events-none">
                search
              </span>
            </div>

            {/* Navigation links with generous touch targets (min 44px height) */}
            <div className="flex flex-col space-y-1 font-semibold text-[#250f03]">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left min-h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-colors active:scale-[0.99] ${
                  activeTab === 'home'
                    ? 'bg-[#fed65b]/30 text-[#735c00] font-bold border border-[#735c00]/30'
                    : 'hover:bg-[#f6f3ee] text-[#250f03]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg text-[#735c00]">home</span>
                  <span className="text-sm">Home Showcase</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#50443f]/60">chevron_right</span>
              </button>

              <button
                onClick={handleStudioClick}
                className="text-left min-h-[46px] px-3.5 rounded-xl hover:bg-[#f6f3ee] flex items-center justify-between transition-colors active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#735c00] text-lg animate-pulse">view_in_ar</span>
                  <span className="text-sm font-semibold text-[#250f03]">3D Sanctum Studio</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#735c00] bg-[#fed65b]/40 border border-[#735c00]/30 px-2 py-0.5 rounded-full">
                  360° View
                </span>
              </button>

              <button
                onClick={() => handleNavClick('catalog')}
                className={`text-left min-h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-colors active:scale-[0.99] ${
                  activeTab === 'catalog'
                    ? 'bg-[#fed65b]/30 text-[#735c00] font-bold border border-[#735c00]/30'
                    : 'hover:bg-[#f6f3ee] text-[#250f03]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg text-[#735c00]">temple_hindu</span>
                  <span className="text-sm">Mandir Collection</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#50443f]/60">chevron_right</span>
              </button>

              <button
                onClick={() => handleNavClick('craftsmanship')}
                className={`text-left min-h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-colors active:scale-[0.99] ${
                  activeTab === 'craftsmanship'
                    ? 'bg-[#fed65b]/30 text-[#735c00] font-bold border border-[#735c00]/30'
                    : 'hover:bg-[#f6f3ee] text-[#250f03]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg text-[#735c00]">handyman</span>
                  <span className="text-sm">Hereditary Craftsmanship</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#50443f]/60">chevron_right</span>
              </button>

              <button
                onClick={() => handleNavClick('custom')}
                className={`text-left min-h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-colors active:scale-[0.99] ${
                  activeTab === 'custom'
                    ? 'bg-[#fed65b]/30 text-[#735c00] font-bold border border-[#735c00]/30'
                    : 'hover:bg-[#f6f3ee] text-[#250f03]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg text-[#735c00]">tune</span>
                  <span className="text-sm">Custom Mandir Builder</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Custom CAD
                </span>
              </button>

              <button
                onClick={() => handleNavClick('wishlist')}
                className={`text-left min-h-[46px] px-3.5 rounded-xl flex items-center justify-between transition-colors active:scale-[0.99] ${
                  activeTab === 'wishlist'
                    ? 'bg-rose-50 text-rose-800 font-bold border border-rose-200'
                    : 'hover:bg-[#f6f3ee] text-[#250f03]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`material-symbols-outlined text-lg ${
                      wishlistCount > 0 ? 'text-rose-600' : 'text-[#735c00]'
                    }`}
                    style={wishlistCount > 0 ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    favorite
                  </span>
                  <span className="text-sm">Saved Wishlist</span>
                </div>
                <span className="text-[10px] font-bold text-rose-700 bg-rose-100 border border-rose-200 px-2 py-0.5 rounded-full">
                  {wishlistCount} {wishlistCount === 1 ? 'mandir' : 'mandirs'}
                </span>
              </button>

              <button
                onClick={handleVastuClick}
                className="text-left min-h-[46px] px-3.5 rounded-xl hover:bg-[#f6f3ee] flex items-center justify-between transition-colors active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg text-[#735c00]">explore</span>
                  <span className="text-sm font-semibold text-[#250f03]">Vastu Sthapatya Guide</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#50443f]/60">chevron_right</span>
              </button>
            </div>

            {/* Quick Action Footer */}
            <div className="pt-3 border-t border-[#d4c3bc]/70 space-y-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:+${WHATSAPP_PHONE}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-[#735c00]/40 text-[#250f03] text-xs font-bold hover:bg-[#735c00]/10 transition-colors active:scale-95 min-h-[42px]"
                >
                  <span className="material-symbols-outlined text-base text-[#735c00]">call</span>
                  <span>Call Sthapati</span>
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                    'Hello Deva Vihara Team! I am browsing on mobile and would like to consult with your temple artisan.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-xs hover:bg-[#20ba59] transition-colors active:scale-95 min-h-[42px]"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => handleNavClick('custom')}
                className="w-full py-2.5 px-3 rounded-xl bg-[#250f03] text-[#fed65b] text-xs font-bold flex items-center justify-center gap-2 transition-colors active:scale-95 min-h-[42px]"
              >
                <span className="material-symbols-outlined text-base">design_services</span>
                <span>Commission Bespoke Temple</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>

    {/* Backdrop overlay portaled to body to dim page when mobile menu is open */}
    {mobileMenuOpen &&
      typeof document !== 'undefined' &&
      createPortal(
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />,
        document.body
      )}
    </>
  );
};

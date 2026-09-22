import React from 'react';
import { TabType } from '../types/mandir';
import { BRAND_LOGO_URL, DISPLAY_PHONE, WHATSAPP_PHONE } from '../data/mandirs';

interface FooterProps {
  onNavigate: (tab: TabType) => void;
  onOpenVastuModal: () => void;
  onScrollToStudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenVastuModal,
  onScrollToStudio
}) => {
  return (
    <footer className="bg-[#1c0f05] text-[#ffdbca] border-t border-[#735c00]/30 pt-10 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg p-0.5 border border-[#fed65b]/40 shadow-inner bg-[#250f03] flex items-center justify-center shrink-0">
                <img
                  src={BRAND_LOGO_URL}
                  alt="Deva Vihara Sacred Sanctuaries"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#fff2e2]">Deva Vihara</div>
                <div className="text-[10px] text-[#fed65b] uppercase tracking-[0.2em] font-semibold">
                  Sacred Wooden Sanctuaries
                </div>
              </div>
            </div>

            <p className="text-xs text-[#d4c3bc] leading-relaxed max-w-sm font-normal">
              Handcrafting consecrated home temples (Ghar Mandirs) in solid seasoned Burma Teak and Indian Sheesham. Engineered with Sthapatya Veda golden ratios and delivered safely worldwide.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  'Hello Deva Vihara! I have a question about your wooden temples.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>WhatsApp Sthapati</span>
              </a>

              <a
                href={`tel:+${WHATSAPP_PHONE}`}
                className="text-xs text-[#fed65b] hover:underline flex items-center gap-1 font-semibold py-1"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                <span>{DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#fed65b]">
              Sacred Sanctuaries
            </div>
            <ul className="space-y-2 text-xs text-[#d4c3bc]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#fff2e2] transition-colors py-0.5"
                >
                  Home Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={onScrollToStudio}
                  className="hover:text-[#fff2e2] transition-colors flex items-center gap-1 py-0.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#fed65b]">view_in_ar</span>
                  <span>3D Sanctum Studio (360°)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-[#fff2e2] transition-colors py-0.5"
                >
                  Complete Collection Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('craftsmanship')}
                  className="hover:text-[#fff2e2] transition-colors py-0.5"
                >
                  Hereditary Sthapati Guild
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom')}
                  className="hover:text-[#fff2e2] transition-colors py-0.5"
                >
                  Commission Custom Mandir
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('wishlist')}
                  className="hover:text-[#fff2e2] transition-colors flex items-center gap-1.5 py-0.5"
                >
                  <span className="material-symbols-outlined text-xs text-rose-400">favorite</span>
                  <span>Your Sacred Wishlist</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Vastu & Knowledge */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#fed65b]">
              Vastu & Temple Care
            </div>
            <ul className="space-y-2 text-xs text-[#d4c3bc]">
              <li>
                <button
                  onClick={onOpenVastuModal}
                  className="hover:text-[#fff2e2] transition-colors flex items-center gap-1 text-left py-0.5"
                >
                  <span className="material-symbols-outlined text-xs text-[#fed65b]">explore</span>
                  <span>Vastu Shastra Placement Manual</span>
                </button>
              </li>
              <li>
                <span className="text-[#d4c3bc]">
                  Care Guide: Natural beeswax rub once every 6 months to nourish the timber grain.
                </span>
              </li>
              <li>
                <span className="text-[#d4c3bc]">
                  Transit Assurance: Double-walled marine ply crate with high-density EPE shock absorption.
                </span>
              </li>
            </ul>

            <div className="pt-2 text-[11px] text-[#ffdbca]/80 border-t border-[#735c00]/30">
              Workshops in Saharanpur (UP) & Jaipur (Rajasthan) • Worldwide Consecration Dispatch
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#735c00]/30 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#d4c3bc] gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Deva Vihara Sacred Sanctuaries. Handcrafted with reverence.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-[11px]">
            <span>100% Solid Seasoned Wood</span>
            <span>•</span>
            <span>Vastu Sthapatya Ratios</span>
            <span>•</span>
            <span>Pan-India Crating</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

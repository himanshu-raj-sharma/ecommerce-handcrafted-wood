import React from 'react';
import { TabType } from '../types/mandir';
import { WHATSAPP_PHONE } from '../data/mandirs';

interface HeroSectionProps {
  onNavigate: (tab: TabType) => void;
  onScrollToStudio: () => void;
  onOpenVastuModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onScrollToStudio,
  onOpenVastuModal
}) => {
  return (
    <section className="relative overflow-hidden py-8 sm:py-12 md:py-20 bg-linear-to-b from-[#fcf9f4] via-[#f7f2ea] to-[#fcf9f4]">
      {/* Sacred Jali Watermark Overlay */}
      <div className="absolute inset-0 jali-watermark pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Auspicious Overline */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-[#fed65b]/25 border border-[#735c00]/30 text-[#735c00] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              <span className="material-symbols-outlined text-xs sm:text-sm">temple_hindu</span>
              <span className="truncate">Vastu Sthapatya Veda Consecrated</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#250f03] leading-[1.15] tracking-tight">
              Crafting Sacred Sanctuaries for Your Modern Home
            </h1>

            {/* Reverent Description */}
            <p className="text-[#50443f] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Handcrafted wooden home temples in solid seasoned teak and sheesham. Designed with architectural reverence, precise vastu compliance, and delivered safely to your doorstep worldwide.
            </p>

            {/* 4 Trust Highlights */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#250f03]">
                <span className="material-symbols-outlined text-[#735c00] text-base sm:text-lg shrink-0">forest</span>
                <span className="truncate">Solid Seasoned Wood</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#250f03]">
                <span className="material-symbols-outlined text-[#735c00] text-base sm:text-lg shrink-0">verified_user</span>
                <span className="truncate">Termite Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#250f03]">
                <span className="material-symbols-outlined text-[#735c00] text-base sm:text-lg shrink-0">workspace_premium</span>
                <span className="truncate">Hereditary Sthapatis</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#250f03]">
                <span className="material-symbols-outlined text-[#735c00] text-base sm:text-lg shrink-0">local_shipping</span>
                <span className="truncate">Armored Transit Crate</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2 sm:pt-4">
              <button
                onClick={() => onNavigate('catalog')}
                className="bg-[#250f03] hover:bg-[#3d1905] text-[#ffdbca] px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 min-h-[46px]"
              >
                <span>Explore Collection</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>

              <button
                onClick={onScrollToStudio}
                className="bg-[#fed65b] hover:bg-[#fecb3a] text-[#241a00] px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 border border-[#735c00]/30 min-h-[46px]"
              >
                <span className="material-symbols-outlined text-lg">view_in_ar</span>
                <span>360° Sanctum Studio</span>
              </button>

              <button
                onClick={onOpenVastuModal}
                className="text-xs font-bold text-[#735c00] hover:text-[#250f03] flex items-center justify-center gap-1 py-2 sm:p-2 underline underline-offset-4"
              >
                <span className="material-symbols-outlined text-base">explore</span>
                <span>Vastu Placement Guide</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4c3bc]/80 shadow-xl bg-white group">
              {/* Product Image Frame */}
              <div className="aspect-4/3 sm:aspect-4/5 w-full overflow-hidden relative bg-[#ede6dc]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw2uu6wVRNjmOb04kSS3vh77azSEZdu36NT7ZlXq-62kqsApYyNTYqfAXNtuAPb0MJF9S1DKM4zqZ7b6vKXrCDjpiKad1_Die3Ca7BU7QoIS-cXJ8o-3AdqHE2dzWtvsrrhJ89GVwnY2ankrsB9jhz8MharcKXse1bydy6KB3UPylTH9y8f_5tV0lEgsTzzU7jpRySh9B8G6CliqApsFnHyYOWjOIRTam-eI0IZk0B8Tcbef7XkYpLcw"
                  alt="The Vaikuntha Grand Shikhara Mandir"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-linear-to-t from-[#250f03]/85 via-black/20 to-transparent" />

                {/* Floating Vastu Badge */}
                <div className="absolute top-3 left-3 bg-[#250f03]/90 text-[#fed65b] backdrop-blur-xs border border-[#fed65b]/40 px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold flex items-center gap-1 shadow-md">
                  <span className="material-symbols-outlined text-xs sm:text-sm text-[#fed65b]">temple_hindu</span>
                  <span>Ishanya (NE) Consecrated</span>
                </div>

                {/* 360° Studio Quick Switch Button */}
                <button
                  onClick={onScrollToStudio}
                  className="absolute top-3 right-3 bg-[#fcf9f4]/90 hover:bg-[#fcf9f4] text-[#250f03] px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold flex items-center gap-1 shadow-md backdrop-blur-xs border border-[#735c00]/30 transition-all hover:scale-105 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[#735c00] text-xs sm:text-sm animate-spin">
                    360
                  </span>
                  <span>3D Studio</span>
                </button>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#ffe088] font-bold">
                    Masterpiece Showcase
                  </div>
                  <div className="font-serif text-lg sm:text-xl font-bold leading-tight">
                    The Vaikuntha Grand Shikhara
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
                    <div className="text-[11px] sm:text-xs text-[#ffdbca]">
                      Solid Burma Teak • 8 Brass Bells
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                        'Hi Deva Vihara! I am interested in The Vaikuntha Grand Shikhara Mandir shown in the hero showcase.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow transition-all active:scale-95"
                    >
                      <span className="material-symbols-outlined text-xs">chat</span>
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background aura */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-[#fed65b]/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

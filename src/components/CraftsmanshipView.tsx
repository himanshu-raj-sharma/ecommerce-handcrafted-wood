import React from 'react';
import { ARTISAN_WORKSHOP_IMAGE, WHATSAPP_PHONE } from '../data/mandirs';

export const CraftsmanshipView: React.FC = () => {
  return (
    <div className="py-8 sm:py-12 md:py-20 bg-[#fcf9f4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-10 sm:space-y-16">
        {/* Top Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-[#fed65b]/20 border border-[#735c00]/30 text-[#735c00] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              <span className="material-symbols-outlined text-xs sm:text-sm">history_edu</span>
              <span>200-Year Hereditary Guild</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#250f03] leading-tight">
              Honoring Sacred Traditions in Every Chisel Stroke
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-[#50443f] leading-relaxed">
              In a world of mass-produced particle board, we preserve the sacred art of Sthapatya Veda temple carpentry. Rooted in Rajasthan and Saharanpur, our artisans have spent lifetimes mastering the divine geometry of shrines, shikhara elevations, and resonant bell chambers.
            </p>

            <div className="p-3.5 sm:p-4 rounded-xl bg-[#f7f2ea] border-l-4 border-[#735c00] text-xs text-[#250f03] leading-relaxed">
              &ldquo;A mandir is where the formless takes divine sanctuary in our homes. We do not merely cut wood; we invoke sanctity with every prayer, measurement, and polish.&rdquo;
              <div className="font-bold text-[#735c00] mt-1.5 sm:mt-2">
                — Ustad Ram Swaroop Ji, Senior Master Sthapati
              </div>
            </div>

            <div className="pt-1 sm:pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  'Namaste Ustad Ji! I would like to speak directly with your master woodcarvers regarding custom temple woodwork.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#250f03] hover:bg-[#3d1905] text-[#ffdbca] px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-md active:scale-95 min-h-[44px]"
              >
                <span className="material-symbols-outlined text-base">handyman</span>
                <span>Speak with Master Artisan</span>
              </a>
            </div>
          </div>

          {/* Artisan Workshop Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border-2 border-[#d4c3bc] shadow-xl bg-[#ede6dc] aspect-4/5 relative group">
              <img
                src={ARTISAN_WORKSHOP_IMAGE}
                alt="Master woodcarver sculpting home mandir in workshop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] font-bold text-[#fed65b] uppercase tracking-wider">
                  Saharanpur Workshop
                </div>
                <div className="font-serif text-base sm:text-lg font-bold">
                  Hand-chiseled Jali & Stambha Work
                </div>
                <div className="text-xs text-[#ffdbca] mt-0.5">
                  100% Solid Seasoned Teakwood
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Consecration & Crafting Process */}
        <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-8 border-t border-[#d4c3bc]/50">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-[#735c00]">
              The 4-Fold Consecration Method
            </div>
            <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-[#250f03]">
              From Ancient Hardwoods to Living Altars
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Step 1 */}
            <div className="bg-[#f7f2ea] border border-[#d4c3bc]/70 rounded-2xl p-6 space-y-3 relative">
              <div className="text-3xl font-serif font-bold text-[#735c00]/30">01</div>
              <div className="w-10 h-10 rounded-xl bg-[#fed65b]/30 text-[#735c00] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">forest</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#250f03]">
                Forest-Cured Hardwoods
              </h3>
              <p className="text-xs text-[#50443f] leading-relaxed">
                60+ year old timber kiln-dried to 8% equilibrium moisture content. Prevents hairline cracks or door warping across seasons.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#f7f2ea] border border-[#d4c3bc]/70 rounded-2xl p-6 space-y-3 relative">
              <div className="text-3xl font-serif font-bold text-[#735c00]/30">02</div>
              <div className="w-10 h-10 rounded-xl bg-[#fed65b]/30 text-[#735c00] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">architecture</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#250f03]">
                Vastu Golden Ratio Carving
              </h3>
              <p className="text-xs text-[#50443f] leading-relaxed">
                Every tier of the shikhara and garbhagriha adheres to traditional Sthapatya proportions, channeling harmonic cosmic frequencies.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f7f2ea] border border-[#d4c3bc]/70 rounded-2xl p-6 space-y-3 relative">
              <div className="text-3xl font-serif font-bold text-[#735c00]/30">03</div>
              <div className="w-10 h-10 rounded-xl bg-[#fed65b]/30 text-[#735c00] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">eco</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#250f03]">
                Natural Organic Polish
              </h3>
              <p className="text-xs text-[#50443f] leading-relaxed">
                Finished with cold-pressed linseed oils and pure beeswax. Zero synthetic toxins or offensive VOC chemical varnishes.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-[#f7f2ea] border border-[#d4c3bc]/70 rounded-2xl p-6 space-y-3 relative">
              <div className="text-3xl font-serif font-bold text-[#735c00]/30">04</div>
              <div className="w-10 h-10 rounded-xl bg-[#fed65b]/30 text-[#735c00] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">shield</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#250f03]">
                Armored Transit Crates
              </h3>
              <p className="text-xs text-[#50443f] leading-relaxed">
                Reinforced marine-grade timber crates with high-density foam padding and comprehensive door-to-door transit insurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

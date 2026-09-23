import React, { useState } from 'react';
import { WHATSAPP_PHONE } from '../data/mandirs';

interface VastuSectionProps {
  onOpenModal: () => void;
}

export const VastuSection: React.FC<VastuSectionProps> = ({ onOpenModal }) => {
  const [selectedDirection, setSelectedDirection] = useState<'NE' | 'E' | 'N' | 'W' | 'S'>('NE');

  const vastuNotes = {
    NE: {
      title: 'North-East (Ishanya Kona) - Supreme Auspiciousness',
      rating: '100% Ideal (Param Shreshtha)',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
      description: 'The supreme sacred zone governed by Ishana (Lord Shiva) and Jupiter. Churns high-vibration cosmic morning solar rays into the home.'
    },
    E: {
      title: 'East Direction (Purva) - Surya Solar Illumination',
      rating: 'Excellent (Shreshtha)',
      color: 'text-blue-700 bg-blue-50 border-blue-300',
      description: 'Facing East while praying enhances clarity, memory, and spiritual illumination as the morning sun rises.'
    },
    N: {
      title: 'North Direction (Uttara) - Kuber Prosperity Zone',
      rating: 'Favorable (Uttam)',
      color: 'text-amber-700 bg-amber-50 border-amber-300',
      description: 'Governed by Lord Kubera and Mercury. Bestows abundance, peace, and domestic contentment.'
    },
    W: {
      title: 'West Direction (Paschim) - Secondary Permissible',
      rating: 'Acceptable with Vastu adjustments',
      color: 'text-slate-700 bg-slate-100 border-slate-300',
      description: 'Permissible if North or East are obstructed. Devotees face East while performing daily prayer.'
    },
    S: {
      title: 'South Direction (Dakshin) - Strongly Inadvisable',
      rating: 'Avoid (Nishedh)',
      color: 'text-rose-700 bg-rose-50 border-rose-300',
      description: 'Vastu texts strictly prohibit home temple orientation in the South direction. If your space is restricted, contact our sthapati for remedial haveli design.'
    }
  };

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#fcf9f4] border-t border-[#d4c3bc]/30 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-[#fed65b]/20 border border-[#735c00]/30 text-[#735c00] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined text-xs sm:text-sm">explore</span>
            <span>Vastu Sthapatya Veda</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-[#250f03] tracking-tight">
            Sacred Alignment & Sanctum Placement Wisdom
          </h2>
          <p className="text-[#50443f] text-xs sm:text-sm md:text-base leading-relaxed">
            A home temple is not merely furniture; it is an energetic conductor linking terrestrial living space to cosmic consciousness. Follow our verified principles for supreme peace and spiritual elevation.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          {/* Left Column: Core Principles List */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="flex gap-3 sm:gap-4 items-start p-3.5 sm:p-4 rounded-xl bg-[#f7f2ea] border border-[#d4c3bc]/60">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#fed65b]/30 text-[#735c00] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-lg sm:text-xl">near_me</span>
              </div>
              <div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#250f03]">
                  1. The Ishanya (North-East) Primacy
                </h4>
                <p className="text-xs text-[#50443f] mt-1 leading-relaxed">
                  The North-East quadrant has the highest geomagnetic sensitivity. Placing your Ghar Mandir here allows sattvic pranic energy to flow freely into the entire household.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 items-start p-3.5 sm:p-4 rounded-xl bg-[#f7f2ea] border border-[#d4c3bc]/60">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#fed65b]/30 text-[#735c00] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-lg sm:text-xl">park</span>
              </div>
              <div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#250f03]">
                  2. Seasoned Living Hardwoods
                </h4>
                <p className="text-xs text-[#50443f] mt-1 leading-relaxed">
                  Ancient texts praise Teak (Sagwan), Sheesham (Rosewood), and Sandalwood. Engineered wood, MDF, and plastic are inert or negative in vibrational conductivity.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 items-start p-3.5 sm:p-4 rounded-xl bg-[#f7f2ea] border border-[#d4c3bc]/60">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#fed65b]/30 text-[#735c00] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-lg sm:text-xl">notifications</span>
              </div>
              <div>
                <h4 className="font-serif text-sm sm:text-base font-bold text-[#250f03]">
                  3. Acoustic Brass Ghanti Resonance
                </h4>
                <p className="text-xs text-[#50443f] mt-1 leading-relaxed">
                  The ringing of hand-cast brass temple bells produces an auspicious &apos;OM&apos; sound wave lasting up to 7 seconds, clearing mental stress and negative ambient energies.
                </p>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto bg-[#250f03] hover:bg-[#3d1905] text-[#ffdbca] px-5 py-3 rounded-xl text-xs font-bold tracking-wide shadow-xs transition-all flex items-center justify-center gap-2 active:scale-95 min-h-[42px]"
              >
                <span className="material-symbols-outlined text-base">menu_book</span>
                <span>Open Complete Vastu Placement Manual</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Vastu Directional Matrix */}
          <div className="lg:col-span-6 bg-[#f7f2ea] border border-[#d4c3bc]/80 rounded-2xl p-4 sm:p-6 shadow-xs space-y-4 sm:space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-[#735c00] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">explore</span>
                <span>Orientation Checker</span>
              </span>
              <span className="text-[11px] text-[#50443f]">Tap a sector to check</span>
            </div>

            {/* Compass Selector Buttons */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <button
                onClick={() => setSelectedDirection('N')}
                className={`py-2.5 sm:py-3 px-1.5 sm:px-2 rounded-xl text-xs font-bold transition-all border min-h-[44px] active:scale-95 ${
                  selectedDirection === 'N'
                    ? 'bg-[#250f03] text-[#fed65b] border-[#250f03] shadow-xs'
                    : 'bg-white text-[#50443f] border-[#d4c3bc]/60 hover:bg-amber-50/50'
                }`}
              >
                North (Uttara)
              </button>
              <button
                onClick={() => setSelectedDirection('NE')}
                className={`py-2.5 sm:py-3 px-1.5 sm:px-2 rounded-xl text-xs font-bold transition-all border min-h-[44px] active:scale-95 ${
                  selectedDirection === 'NE'
                    ? 'bg-[#735c00] text-white border-[#735c00] shadow-xs ring-2 ring-[#fed65b]'
                    : 'bg-amber-100/70 text-[#735c00] border-[#735c00]/40 hover:bg-amber-200/60'
                }`}
              >
                ★ NE (Ishanya)
              </button>
              <button
                onClick={() => setSelectedDirection('E')}
                className={`py-2.5 sm:py-3 px-1.5 sm:px-2 rounded-xl text-xs font-bold transition-all border min-h-[44px] active:scale-95 ${
                  selectedDirection === 'E'
                    ? 'bg-[#250f03] text-[#fed65b] border-[#250f03] shadow-xs'
                    : 'bg-white text-[#50443f] border-[#d4c3bc]/60 hover:bg-amber-50/50'
                }`}
              >
                East (Purva)
              </button>
              <button
                onClick={() => setSelectedDirection('W')}
                className={`py-2.5 sm:py-3 px-1.5 sm:px-2 rounded-xl text-xs font-bold transition-all border col-span-1 min-h-[44px] active:scale-95 ${
                  selectedDirection === 'W'
                    ? 'bg-[#250f03] text-[#fed65b] border-[#250f03] shadow-xs'
                    : 'bg-white text-[#50443f] border-[#d4c3bc]/60 hover:bg-amber-50/50'
                }`}
              >
                West (Paschim)
              </button>
              <div className="flex items-center justify-center text-[10px] text-[#50443f] uppercase font-bold tracking-widest min-h-[44px]">
                Ghar Mandir
              </div>
              <button
                onClick={() => setSelectedDirection('S')}
                className={`py-2.5 sm:py-3 px-1.5 sm:px-2 rounded-xl text-xs font-bold transition-all border col-span-1 min-h-[44px] active:scale-95 ${
                  selectedDirection === 'S'
                    ? 'bg-[#250f03] text-rose-300 border-[#250f03] shadow-xs'
                    : 'bg-white text-rose-800/80 border-[#d4c3bc]/60 hover:bg-rose-50'
                }`}
              >
                South (Dakshin)
              </button>
            </div>

            {/* Selected Zone Analysis Card */}
            <div className={`p-3.5 sm:p-4 rounded-xl border ${vastuNotes[selectedDirection].color} transition-all space-y-1.5`}>
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-xs">{vastuNotes[selectedDirection].title}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/70 shrink-0">
                  {vastuNotes[selectedDirection].rating}
                </span>
              </div>
              <p className="text-xs leading-relaxed">
                {vastuNotes[selectedDirection].description}
              </p>
            </div>

            {/* Free Blueprint Assessment WhatsApp CTA */}
            <div className="bg-[#250f03] text-[#ffdbca] p-3.5 sm:p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-[#fed65b]">
                  Free Vastu Blueprint Assessment
                </div>
                <div className="text-[11px] text-[#d4c3bc]">
                  Send your apartment or villa floorplan on WhatsApp for sthapati verification.
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  'Namaste! I would like to get a free Vastu floorplan assessment for placing a wooden home mandir in my house.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shrink-0 shadow-xs active:scale-95 min-h-[44px]"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>Send Blueprint</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

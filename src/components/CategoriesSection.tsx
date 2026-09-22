import React from 'react';
import { TabType } from '../types/mandir';

interface CategoriesSectionProps {
  onSelectPlacement: (placement: 'Wall Mount' | 'Floor Standing' | 'Corner Unit' | 'All') => void;
  onNavigateCustom: () => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectPlacement,
  onNavigateCustom
}) => {
  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#fcf9f4] border-t border-[#d4c3bc]/30">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-[#fed65b]/20 border border-[#735c00]/30 text-[#735c00] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span>Sanctuary Archetypes</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-[#250f03] tracking-tight">
            Designed for Sacred Harmony & Modern Spaces
          </h2>
          <p className="text-[#50443f] text-xs sm:text-sm md:text-base leading-relaxed">
            Whether for an urban apartment alcove or an expansive family prayer room, explore our distinct temple formats engineered according to Vastu proportions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: Wall-Mounted Sanctuaries (Span 6) */}
          <div className="lg:col-span-6 bg-[#f7f2ea] border border-[#d4c3bc]/70 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="aspect-16/10 w-full overflow-hidden relative bg-[#ede6dc]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDDe2PJpporF0BkYOQEjFEruJ_OFQLipsOgWT3nJ57XiD_QSdWCYw6C0Ko28SRFteFpxJGTQIcAlr_q9ob2Pz6bLVOaw4U4e8IgB8mUaTwe4Ja1mBWWwoJKBPaniNSvTZYO1YU2mIvzHG10snenoW9BZ5B_toPUVN35gAAXx3RwjuQXrK9h84GroSerjPtyrMmo34kBnVBm8zQci5ZE7w_Ktg4jVQgV6mvyhfJD3cw5ODHbWZo_pxM9Q"
                alt="Wall-Mounted Sanctuaries"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#250f03]/85 text-[#fed65b] text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded backdrop-blur-xs">
                Urban Apartments
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-[#735c00]">
                  Space-Saving Elegance
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#250f03]">
                  Wall-Mounted Sanctuaries
                </h3>
                <p className="text-xs sm:text-sm text-[#50443f] mt-1.5 sm:mt-2 leading-relaxed">
                  Concealed heavy-duty mounting hardware rated for 60kg+, integrated warm jaali backlighting, and slideout aarti shelves designed for modern flat living.
                </p>
              </div>
              <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-[#d4c3bc]/40">
                <span className="text-xs font-semibold text-[#735c00]">Height: 28&quot; – 36&quot;</span>
                <button
                  onClick={() => onSelectPlacement('Wall Mount')}
                  className="min-h-[40px] px-2 text-xs font-bold text-[#250f03] hover:text-[#735c00] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Wall Mounts</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Floor-Standing Grand Mandirs (Span 6) */}
          <div className="lg:col-span-6 bg-[#f7f2ea] border border-[#d4c3bc]/70 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div className="aspect-16/10 w-full overflow-hidden relative bg-[#ede6dc]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw2uu6wVRNjmOb04kSS3vh77azSEZdu36NT7ZlXq-62kqsApYyNTYqfAXNtuAPb0MJF9S1DKM4zqZ7b6vKXrCDjpiKad1_Die3Ca7BU7QoIS-cXJ8o-3AdqHE2dzWtvsrrhJ89GVwnY2ankrsB9jhz8MharcKXse1bydy6KB3UPylTH9y8f_5tV0lEgsTzzU7jpRySh9B8G6CliqApsFnHyYOWjOIRTam-eI0IZk0B8Tcbef7XkYpLcw"
                alt="Floor-Standing Grand Mandirs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#250f03]/85 text-[#fed65b] text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded backdrop-blur-xs">
                Heirloom Architecture
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-[#735c00]">
                  Grand Pooja Haveli
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#250f03]">
                  Floor-Standing Grand Mandirs
                </h3>
                <p className="text-xs sm:text-sm text-[#50443f] mt-1.5 sm:mt-2 leading-relaxed">
                  Towering multi-tiered shikharas with carved lotus stambhas, acoustic brass ghanti bells, and voluminous samagri storage cabinets.
                </p>
              </div>
              <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-[#d4c3bc]/40">
                <span className="text-xs font-semibold text-[#735c00]">Height: 48&quot; – 72&quot;</span>
                <button
                  onClick={() => onSelectPlacement('Floor Standing')}
                  className="min-h-[40px] px-2 text-xs font-bold text-[#250f03] hover:text-[#735c00] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Grand Mandirs</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Corner Units (Span 5) */}
          <div className="lg:col-span-5 bg-[#f7f2ea] border border-[#d4c3bc]/70 rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#fed65b]/30 text-[#735c00] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">crop_square</span>
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-[#735c00]">
                Strict Ishanya Orientation
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#250f03]">
                90° Corner Mandirs
              </h3>
              <p className="text-xs text-[#50443f] leading-relaxed">
                Precision cut corner mandirs created specifically for the North-East diagonal. Fits snugly without jutting out into walking pathways.
              </p>
            </div>
            <div className="pt-4 sm:pt-6 flex items-center justify-between border-t border-[#d4c3bc]/40 mt-4">
              <span className="text-xs font-semibold text-[#735c00]">Height: 32&quot; – 42&quot;</span>
              <button
                onClick={() => onSelectPlacement('Corner Unit')}
                className="min-h-[40px] px-2 text-xs font-bold text-[#250f03] hover:text-[#735c00] flex items-center gap-1"
              >
                <span>View Corner Sanctuaries</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Card 4: Custom Bespoke Mandir Haveli (Span 7) */}
          <div className="lg:col-span-7 bg-linear-to-br from-[#250f03] to-[#3a1908] text-[#ffdbca] rounded-2xl p-4 sm:p-6 hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 jali-watermark pointer-events-none" />
            <div className="space-y-2.5 sm:space-y-3 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#fed65b]/20 text-[#fed65b] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">handyman</span>
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-[#fed65b]">
                Architectural Commission
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fff2e2]">
                Bespoke Royal Pooja Rooms & Havelis
              </h3>
              <p className="text-xs sm:text-sm text-[#d4c3bc] leading-relaxed max-w-lg">
                Collaborate directly with our master sthapatis to configure custom dimensions, specialized deity niches, custom jali motifs, and dedicated pooja room panels.
              </p>
            </div>
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#735c00]/40 mt-4 relative z-10">
              <span className="text-xs font-semibold text-[#fed65b]">CAD Drawing in 24 Hours</span>
              <button
                onClick={onNavigateCustom}
                className="w-full sm:w-auto bg-[#fed65b] hover:bg-[#fecb3a] text-[#241a00] px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 min-h-[44px]"
              >
                <span>Open Custom Builder</span>
                <span className="material-symbols-outlined text-sm">tune</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

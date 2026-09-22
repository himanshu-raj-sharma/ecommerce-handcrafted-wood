import React from 'react';
import { WHATSAPP_PHONE } from '../data/mandirs';

interface VastuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VastuModal: React.FC<VastuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-[#fcf9f4] border border-[#d4c3bc] rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 text-[#50443f] hover:text-[#250f03] p-2 rounded-full hover:bg-[#f0ede9] transition-colors z-20"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl sm:text-2xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fed65b]/25 border border-[#735c00]/30 text-[#735c00] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
            <span className="material-symbols-outlined text-xs">explore</span>
            <span>Sthapatya Veda Manual</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#250f03]">
            Comprehensive Vastu Home Mandir Guide
          </h2>
          <p className="text-xs text-[#50443f]">
            Harmonizing celestial energies for spiritual peace, health, and domestic prosperity.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-3 sm:space-y-4 text-xs md:text-sm text-[#50443f] leading-relaxed">
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#f7f2ea] border border-[#d4c3bc]/60 space-y-1.5">
            <h4 className="font-serif text-xs sm:text-sm font-bold text-[#250f03] flex items-center gap-1.5 sm:gap-2">
              <span className="material-symbols-outlined text-base text-[#735c00]">compass_calibration</span>
              <span>1. Ideal Direction: The Ishanya Kona (North-East)</span>
            </h4>
            <p>
              The North-East is ruled by Lord Shiva (Ishana) and Jupiter. It receives pure, unblemished early morning solar rays. The Ghar Mandir must ideally be positioned in the North-East corner of your living room, foyer, or dedicated pooja room.
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#f7f2ea] border border-[#d4c3bc]/60 space-y-1.5">
            <h4 className="font-serif text-xs sm:text-sm font-bold text-[#250f03] flex items-center gap-1.5 sm:gap-2">
              <span className="material-symbols-outlined text-base text-[#735c00]">self_improvement</span>
              <span>2. Devotee Orientation While Praying</span>
            </h4>
            <p>
              When seated or standing for prayer, the devotee should face <strong>East (Purva)</strong> or <strong>North (Uttara)</strong>. This aligns bodily chakras with the Earth&apos;s magnetic poles.
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#f7f2ea] border border-[#d4c3bc]/60 space-y-1.5">
            <h4 className="font-serif text-xs sm:text-sm font-bold text-[#250f03] flex items-center gap-1.5 sm:gap-2">
              <span className="material-symbols-outlined text-base text-[#735c00]">height</span>
              <span>3. Altar Elevation & Level</span>
            </h4>
            <p>
              The feet of the deity or sacred images should rest at the level of the devotee&apos;s chest while sitting in prayer. Never place idols directly on the floor.
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#f7f2ea] border border-[#d4c3bc]/60 space-y-1.5">
            <h4 className="font-serif text-xs sm:text-sm font-bold text-[#250f03] flex items-center gap-1.5 sm:gap-2">
              <span className="material-symbols-outlined text-base text-[#735c00]">block</span>
              <span>4. Strict Vastu Prohibitions</span>
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-xs">
              <li>Never place a home temple beneath a staircase.</li>
              <li>Avoid sharing a common wall with a washroom or restroom.</li>
              <li>Do not face the mandir directly toward the bathroom door.</li>
              <li>Avoid placing the mandir directly inside the master bedroom unless concealed with doors.</li>
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 sm:pt-4 border-t border-[#d4c3bc]/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#50443f] text-center sm:text-left">
            Have a complicated floor plan? Send us your architectural blueprint.
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
              'Namaste! I would like to consult with your Sthapati regarding Vastu placement for my home mandir.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 sm:py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs active:scale-95 min-h-[42px]"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>WhatsApp Vastu Sthapati</span>
          </a>
        </div>
      </div>
    </div>
  );
};

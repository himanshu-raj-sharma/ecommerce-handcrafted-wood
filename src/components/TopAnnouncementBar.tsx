import React, { useState, useEffect } from 'react';
import { DISPLAY_PHONE, WHATSAPP_PHONE } from '../data/mandirs';

export const TopAnnouncementBar: React.FC = () => {
  const announcements = [
    { icon: 'verified', text: 'Pan-India Safe Crating & Delivery' },
    { icon: 'forest', text: '100% Seasoned Solid Sheesham & Teak Wood' },
    { icon: 'architecture', text: 'Custom Vastu Carvings Available' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <div className="bg-[#250f03] text-[#ffdbca] border-b border-[#735c00]/30 py-1.5 md:py-2 px-3 md:px-4 text-center text-[10px] md:text-[11px] tracking-wider md:tracking-widest font-semibold relative z-50 shadow-xs">
      {/* Mobile view: single rotating item with phone call link */}
      <div className="flex md:hidden items-center justify-between gap-2 max-w-md mx-auto">
        <div className="flex items-center gap-1.5 truncate">
          <span className="material-symbols-outlined text-xs text-[#ffe088] shrink-0">
            {announcements[currentIndex].icon}
          </span>
          <span className="truncate text-[#fff2e2]">
            {announcements[currentIndex].text}
          </span>
        </div>
        <a
          href={`tel:+${WHATSAPP_PHONE}`}
          className="shrink-0 text-[#ffe088] hover:text-white transition-colors flex items-center gap-1 font-bold pl-2 border-l border-[#735c00]/50"
        >
          <span className="material-symbols-outlined text-xs">call</span>
          <span>Call</span>
        </a>
      </div>

      {/* Desktop view: full expanded items */}
      <div className="hidden md:flex items-center justify-center gap-x-6 gap-y-1">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-[#ffe088]">verified</span>
          <span>Pan-India Safe Crating & Delivery</span>
        </div>
        <span className="text-[#ffe088]/40">•</span>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-[#ffe088]">forest</span>
          <span>100% Seasoned Solid Sheesham & Teak Wood</span>
        </div>
        <span className="text-[#ffe088]/40">•</span>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-sm text-[#ffe088]">architecture</span>
          <span>Custom Vastu Carvings Available</span>
        </div>
        <span className="hidden lg:inline text-[#ffe088]/40">•</span>
        <a
          href={`tel:+${WHATSAPP_PHONE}`}
          className="hover:text-[#ffe088] transition-colors flex items-center gap-1 font-bold underline underline-offset-2"
        >
          <span className="material-symbols-outlined text-sm">call</span>
          <span>{DISPLAY_PHONE}</span>
        </a>
      </div>
    </div>
  );
};


import React from 'react';
import { TabType } from '../types/mandir';

interface MobileBottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  onScrollToStudio: () => void;
  wishlistCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onTabChange,
  onScrollToStudio,
  wishlistCount
}) => {
  const navItems = [
    {
      id: 'home' as TabType,
      label: 'Home',
      icon: 'temple_hindu',
      action: () => {
        onTabChange('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      id: 'studio' as const,
      label: '3D Studio',
      icon: 'view_in_ar',
      badge: '360°',
      action: onScrollToStudio
    },
    {
      id: 'catalog' as TabType,
      label: 'Collection',
      icon: 'shelves',
      action: () => {
        onTabChange('catalog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      id: 'custom' as TabType,
      label: 'Custom CAD',
      icon: 'tune',
      action: () => {
        onTabChange('custom');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      id: 'wishlist' as TabType,
      label: 'Wishlist',
      icon: 'favorite',
      count: wishlistCount,
      action: () => {
        onTabChange('wishlist');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fcf9f4]/95 backdrop-blur-md border-t border-[#d4c3bc]/60 shadow-[0_-4px_24px_rgba(37,15,3,0.08)] pb-safe transition-all duration-300"
    >
      <div className="grid grid-cols-5 items-center h-15 px-1 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive =
            item.id === 'studio'
              ? false
              : activeTab === item.id;

          return (
            <button
              key={item.label}
              onClick={item.action}
              className={`relative flex flex-col items-center justify-center h-full py-1 px-0.5 transition-all duration-200 active:scale-90 focus:outline-none select-none ${
                isActive ? 'text-[#250f03]' : 'text-[#7a6f69] hover:text-[#250f03]'
              }`}
            >
              {/* Active top accent pill indicator */}
              {isActive && (
                <span className="absolute top-0 w-8 h-0.5 bg-[#735c00] rounded-full animate-in fade-in" />
              )}

              {/* Icon Container with Badge */}
              <div className="relative flex items-center justify-center">
                <span
                  className={`material-symbols-outlined text-[22px] transition-transform duration-200 ${
                    isActive ? 'scale-110 text-[#735c00]' : ''
                  }`}
                  style={
                    item.id === 'wishlist' && wishlistCount > 0
                      ? { fontVariationSettings: "'FILL' 1" }
                      : item.id === 'wishlist' && wishlistCount === 0
                      ? { fontVariationSettings: "'FILL' 0" }
                      : isActive
                      ? { fontVariationSettings: "'FILL' 1" }
                      : undefined
                  }
                >
                  {item.id === 'wishlist' && wishlistCount === 0 ? 'favorite_border' : item.icon}
                </span>

                {/* Wishlist Counter Badge */}
                {item.id === 'wishlist' && wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 bg-rose-600 text-white font-bold text-[9px] min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in-50">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}

                {/* 360° Studio Pill Badge */}
                {item.id === 'studio' && (
                  <span className="absolute -top-1.5 -right-3.5 bg-[#fed65b] text-[#241a00] font-bold text-[8px] px-1 py-0.2 rounded-full border border-[#735c00]/30 shadow-2xs">
                    360°
                  </span>
                )}
              </div>

              {/* Label */}
              <span
                className={`text-[10px] tracking-tight mt-0.5 truncate max-w-full font-medium ${
                  isActive ? 'font-bold text-[#250f03]' : ''
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

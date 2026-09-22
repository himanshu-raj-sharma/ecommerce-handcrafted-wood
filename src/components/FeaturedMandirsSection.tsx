import React from 'react';
import { MandirProduct } from '../types/mandir';
import { MANDIR_CATALOG, WHATSAPP_PHONE } from '../data/mandirs';
import { templeBell } from './AudioBellPlayer';

interface FeaturedMandirsSectionProps {
  onSelectProduct: (product: MandirProduct) => void;
  onViewAll: () => void;
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
}

export const FeaturedMandirsSection: React.FC<FeaturedMandirsSectionProps> = ({
  onSelectProduct,
  onViewAll,
  wishlistIds,
  onToggleWishlist
}) => {
  const featuredItems = MANDIR_CATALOG.filter((item) => item.featured);

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#f7f2ea]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3 sm:gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-[#fed65b]/25 border border-[#735c00]/30 text-[#735c00] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-1.5 sm:mb-2">
              <span className="material-symbols-outlined text-xs sm:text-sm">workspace_premium</span>
              <span>Bestselling Mandirs</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#250f03]">
              Curated Wooden Sanctums
            </h2>
            <p className="text-xs sm:text-sm text-[#50443f] mt-1">
              Hand-carved by hereditary artisans. Fully assembled with premium brass hardware.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="self-start md:self-auto text-xs font-bold text-[#735c00] hover:text-[#250f03] flex items-center gap-1 underline underline-offset-4 py-1"
          >
            <span>View All Models ({MANDIR_CATALOG.length})</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuredItems.map((product) => (
            <div
              key={product.id}
              className="bg-[#fcf9f4] border border-[#d4c3bc]/70 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Product Thumbnail */}
              <div
                onClick={() => onSelectProduct(product)}
                className="aspect-4/3 w-full overflow-hidden relative cursor-pointer bg-[#ede6dc]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#250f03]/85 text-[#fed65b] text-[10px] font-bold px-2 py-0.5 rounded">
                  {product.placement}
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded">
                  {product.height} H
                </div>

                {/* Heart Toggle Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleWishlist(product.id);
                  }}
                  aria-label={wishlistIds.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                  title={wishlistIds.includes(product.id) ? "Saved in Wishlist" : "Save to Wishlist"}
                  className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-md active:scale-90 z-10 ${
                    wishlistIds.includes(product.id)
                      ? 'bg-white text-rose-600 hover:bg-rose-50 hover:scale-110'
                      : 'bg-[#fcf9f4]/85 backdrop-blur-xs text-[#50443f] hover:text-rose-600 hover:bg-white'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-lg transition-colors"
                    style={wishlistIds.includes(product.id) ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    favorite
                  </span>
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#735c00] font-semibold mb-1">
                    <span>{product.wood}</span>
                    <span className="text-[#50443f]">{product.id}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-serif text-base sm:text-lg font-bold text-[#250f03] hover:text-[#735c00] cursor-pointer transition-colors leading-snug line-clamp-1"
                  >
                    {product.title}
                  </h3>

                  <p className="text-xs text-[#50443f] mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Specs Pill list */}
                <div className="space-y-1.5 py-2 border-y border-[#d4c3bc]/40 text-[11px] text-[#250f03]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#50443f]">Dimensions:</span>
                    <span className="font-semibold">{product.height} × {product.width} × {product.depth}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#50443f]">Sacred Bells:</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        templeBell.playBellTone();
                      }}
                      className="font-semibold text-[#735c00] hover:underline flex items-center gap-1 cursor-pointer"
                      title="Click to hear bell chime"
                    >
                      <span className="material-symbols-outlined text-xs">notifications_active</span>
                      <span>{product.bells}</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#50443f]">Lighting:</span>
                    <span className="font-medium text-emerald-800">Integrated LED</span>
                  </div>
                </div>

                {/* Pricing & Inquire Buttons */}
                <div className="pt-1 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-[#50443f]">Direct Price</div>
                    <div className="text-base sm:text-lg font-serif font-bold text-[#250f03]">
                      {product.price}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="p-2 min-h-[38px] text-xs font-semibold text-[#250f03] border border-[#d4c3bc] hover:border-[#735c00] rounded-xl transition-colors active:scale-95"
                      title="View Detailed Specifications"
                    >
                      <span className="material-symbols-outlined text-base">info</span>
                    </button>

                    <a
                      href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                        `Hello Deva Vihara! I want to inquire about ${product.title} (${product.id}, priced at ${product.price}). Please send details and delivery timeline.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-2 min-h-[38px] rounded-xl text-xs font-bold flex items-center gap-1 shadow-xs transition-all active:scale-95"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

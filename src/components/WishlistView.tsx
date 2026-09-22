import React from 'react';
import { MandirProduct } from '../types/mandir';
import { MANDIR_CATALOG, WHATSAPP_PHONE } from '../data/mandirs';
import { templeBell } from './AudioBellPlayer';

interface WishlistViewProps {
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onClearWishlist: () => void;
  onSelectProduct: (product: MandirProduct) => void;
  onNavigate: (tab: 'catalog' | 'custom' | 'home') => void;
  onCustomize: (product: MandirProduct) => void;
}

export const WishlistView: React.FC<WishlistViewProps> = ({
  wishlistIds,
  onToggleWishlist,
  onClearWishlist,
  onSelectProduct,
  onNavigate,
  onCustomize
}) => {
  const wishlistedProducts = MANDIR_CATALOG.filter((p) => wishlistIds.includes(p.id));

  // Compute combined price
  const totalPrice = wishlistedProducts.reduce((sum, p) => sum + p.numericPrice, 0);

  // Generate WhatsApp message with all wishlisted mandirs
  const buildWishlistWhatsAppUrl = () => {
    const itemList = wishlistedProducts
      .map((p, idx) => `${idx + 1}. ${p.title} (${p.id}) - ${p.price} [${p.woodLabel}, ${p.height}H]`)
      .join('\n');

    const message = `Namaste Deva Vihara! I have shortlisted ${wishlistedProducts.length} sacred mandir design(s) on your website:\n\n${itemList}\n\nTotal Estimated Value: ₹${totalPrice.toLocaleString('en-IN')}\n\nPlease share delivery timelines, crating charges, and custom carving options for my home.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="py-8 sm:py-12 md:py-20 bg-[#fcf9f4] min-h-[70vh]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 sm:space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span
              className="material-symbols-outlined text-xs sm:text-sm text-rose-600"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span>Your Sacred Shortlist</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-[#250f03]">
            Curated Home Sanctuaries
          </h1>

          <p className="text-[#50443f] text-xs sm:text-sm md:text-base leading-relaxed">
            Shortlisted handcrafted temples saved for your home pooja room. Review proportions, consult with family, or request a consolidated master artisan quote.
          </p>
        </div>

        {wishlistedProducts.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16 sm:py-24 bg-[#f7f2ea] rounded-3xl border border-[#d4c3bc]/70 space-y-5 px-6 max-w-2xl mx-auto shadow-xs">
            <div className="w-20 h-20 rounded-full bg-rose-100/70 border border-rose-200 text-rose-500 flex items-center justify-center mx-auto shadow-inner">
              <span className="material-symbols-outlined text-4xl">favorite_border</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#250f03]">
                Your Sacred Wishlist is Currently Empty
              </h3>
              <p className="text-xs sm:text-sm text-[#50443f] leading-relaxed max-w-md mx-auto">
                Explore our catalog of authentic solid Teak and Sheesham mandirs. Click the heart icon on any design to bookmark it here for your pooja sanctuary.
              </p>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('catalog')}
                className="bg-[#250f03] hover:bg-[#3d1905] text-[#fed65b] px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-base">temple_hindu</span>
                <span>Browse Mandir Collection</span>
              </button>

              <button
                onClick={() => onNavigate('custom')}
                className="bg-[#fcf9f4] hover:bg-white text-[#250f03] border border-[#735c00]/40 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors active:scale-95"
              >
                <span className="material-symbols-outlined text-base text-[#735c00]">tune</span>
                <span>Custom Mandir Configurator</span>
              </button>
            </div>
          </div>
        ) : (
          /* Populated Wishlist View */
          <div className="space-y-6 sm:space-y-8">
            {/* Action & Summary Toolbar */}
            <div className="bg-[#f7f2ea] border border-[#d4c3bc] rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-rose-100 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    favorite
                  </span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#50443f] uppercase tracking-wider">
                    Shortlisted Sanctums
                  </div>
                  <div className="font-serif text-lg sm:text-xl font-bold text-[#250f03]">
                    {wishlistedProducts.length} {wishlistedProducts.length === 1 ? 'Design' : 'Designs'} Selected
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <a
                  href={buildWishlistWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Inquire Shortlist on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear your sacred wishlist?')) {
                      onClearWishlist();
                    }
                  }}
                  className="px-3.5 py-2.5 rounded-xl border border-[#d4c3bc] text-[#50443f] hover:text-red-700 hover:border-red-300 text-xs font-semibold transition-colors active:scale-95"
                  title="Clear all saved mandirs"
                >
                  <span className="material-symbols-outlined text-sm align-middle mr-1">delete_sweep</span>
                  <span>Clear All</span>
                </button>
              </div>
            </div>

            {/* Mandir Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#fcf9f4] border border-[#d4c3bc]/70 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
                >
                  {/* Image Container */}
                  <div
                    onClick={() => onSelectProduct(product)}
                    className="aspect-4/3 w-full overflow-hidden relative cursor-pointer bg-[#ede6dc]"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Placement Badge */}
                    <div className="absolute top-3 left-3 bg-[#250f03]/85 text-[#fed65b] text-[10px] font-bold px-2 py-0.5 rounded">
                      {product.placement}
                    </div>

                    {/* Height Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded">
                      {product.height} H
                    </div>

                    {/* Heart Button (Filled in Wishlist) */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 text-rose-600 shadow-md flex items-center justify-center hover:bg-rose-50 hover:scale-110 active:scale-90 transition-all z-10"
                      title="Remove from wishlist"
                      aria-label="Remove from wishlist"
                    >
                      <span
                        className="material-symbols-outlined text-xl text-rose-600"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>

                  {/* Body Details */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-[#735c00] font-semibold mb-1">
                        <span>{product.woodLabel}</span>
                        <span className="text-[#50443f]">{product.id}</span>
                      </div>

                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="font-serif text-lg sm:text-xl font-bold text-[#250f03] hover:text-[#735c00] cursor-pointer transition-colors leading-snug"
                      >
                        {product.title}
                      </h3>

                      <p className="text-xs text-[#50443f] mt-1.5 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="space-y-1.5 py-2.5 border-y border-[#d4c3bc]/40 text-xs text-[#250f03]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#50443f]">Dimensions:</span>
                        <span className="font-semibold">
                          {product.height} × {product.width} × {product.depth}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#50443f]">Brass Bells:</span>
                        <button
                          type="button"
                          onClick={() => templeBell.playBellTone()}
                          className="font-semibold text-[#735c00] hover:underline flex items-center gap-1 cursor-pointer"
                          title="Click to hear brass bell tone"
                        >
                          <span className="material-symbols-outlined text-xs">notifications_active</span>
                          <span>{product.bells}</span>
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#50443f]">Lighting:</span>
                        <span className="font-medium text-emerald-800">{product.lighting}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#50443f]">Storage:</span>
                        <span className="font-medium">{product.drawer}</span>
                      </div>
                    </div>

                    {/* Price & Action Row */}
                    <div className="pt-2 flex flex-col gap-2.5">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="text-[10px] text-[#50443f]">Direct Price</div>
                          <div className="text-lg sm:text-xl font-serif font-bold text-[#250f03]">
                            {product.price}
                          </div>
                        </div>

                        <button
                          onClick={() => onCustomize(product)}
                          className="text-xs font-semibold text-[#735c00] hover:underline flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-xs">tune</span>
                          <span>Customize</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onSelectProduct(product)}
                          className="px-3 py-2 text-xs font-semibold text-[#250f03] border border-[#d4c3bc] hover:border-[#735c00] rounded-xl transition-colors min-h-[38px] active:scale-95 text-center"
                        >
                          Details
                        </button>

                        <a
                          href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                            `Namaste Deva Vihara! I have saved ${product.title} (${product.id}, ${product.price}) in my wishlist. Please confirm availability and delivery schedule.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-95 min-h-[38px]"
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
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { MandirProduct } from '../types/mandir';
import { templeBell } from './AudioBellPlayer';
import { WHATSAPP_PHONE } from '../data/mandirs';

interface ProductDetailModalProps {
  product: MandirProduct | null;
  onClose: () => void;
  onCustomize: (product: MandirProduct) => void;
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onCustomize,
  wishlistIds,
  onToggleWishlist
}) => {
  if (!product) return null;

  const isWishlisted = wishlistIds.includes(product.id);

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-[#fcf9f4] border border-[#d4c3bc] rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 text-[#50443f] hover:text-[#250f03] p-2 rounded-full hover:bg-[#f0ede9] transition-colors z-20"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-xl sm:text-2xl">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-start">
          {/* Left Column: Image */}
          <div className="md:col-span-6 rounded-xl overflow-hidden border border-[#d4c3bc] bg-[#ede6dc] aspect-4/3 sm:aspect-4/5 relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#250f03]/85 text-[#fed65b] text-[10px] font-bold px-2 py-0.5 rounded">
              {product.vastuTag}
            </div>

            {/* Heart Button */}
            <button
              type="button"
              onClick={() => onToggleWishlist(product.id)}
              aria-label={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
              title={isWishlisted ? "Saved in Wishlist" : "Save to Wishlist"}
              className={`absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-md active:scale-90 z-10 ${
                isWishlisted
                  ? 'bg-white text-rose-600 hover:bg-rose-50'
                  : 'bg-[#fcf9f4]/90 backdrop-blur-xs text-[#50443f] hover:text-rose-600 hover:bg-white'
              }`}
            >
              <span
                className="material-symbols-outlined text-xl"
                style={isWishlisted ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                favorite
              </span>
            </button>
          </div>

          {/* Right Column: Details */}
          <div className="md:col-span-6 space-y-3 sm:space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-[#735c00] font-bold mb-1">
                <span>{product.woodLabel}</span>
                <span className="text-[#50443f] font-normal">{product.id}</span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#250f03] leading-tight pr-6">
                {product.title}
              </h2>

              <p className="text-xs text-[#50443f] mt-1.5 sm:mt-2 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-2.5 sm:mt-3 p-2.5 sm:p-3 rounded-xl bg-[#f7f2ea] border border-[#d4c3bc]/60 text-xs text-[#250f03] space-y-1">
                <div className="font-bold text-[#735c00] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">forest</span>
                  <span>Timber Quality & Seasoning</span>
                </div>
                <p className="text-[11px] text-[#50443f] leading-relaxed">
                  {product.woodDescription}
                </p>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="space-y-1.5 sm:space-y-2 py-2.5 sm:py-3 border-y border-[#d4c3bc]/50 text-xs">
              <div className="flex justify-between">
                <span className="text-[#50443f]">Architecture:</span>
                <span className="font-semibold text-[#250f03]">{product.architecturalStyle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#50443f]">Dimensions:</span>
                <span className="font-semibold text-[#250f03]">
                  {product.height}&quot; H × {product.width}&quot; W × {product.depth}&quot; D
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#50443f]">Sacred Bells:</span>
                <button
                  onClick={() => templeBell.playBellTone()}
                  className="font-bold text-[#735c00] hover:underline flex items-center gap-1 cursor-pointer py-0.5"
                  title="Click to hear brass bell tone"
                >
                  <span className="material-symbols-outlined text-xs">notifications_active</span>
                  <span>{product.bells} (Ring)</span>
                </button>
              </div>
              <div className="flex justify-between">
                <span className="text-[#50443f]">Lighting:</span>
                <span className="font-semibold text-emerald-800">{product.lighting}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#50443f]">Storage:</span>
                <span className="font-semibold text-[#250f03]">{product.drawer}</span>
              </div>
            </div>

            {/* Price & CTAs */}
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[#50443f]">Direct Artisan Price:</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#250f03]">
                  {product.price}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                    `Hello Deva Vihara! I wish to purchase ${product.title} (${product.id}, ${product.price}). Please send payment options and dispatch schedule.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 sm:py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all active:scale-95 min-h-[42px]"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>Buy via WhatsApp</span>
                </a>

                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`w-full sm:w-auto px-3.5 py-2.5 sm:py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors active:scale-95 min-h-[42px] border ${
                    isWishlisted
                      ? 'bg-rose-50 border-rose-200 text-rose-700'
                      : 'bg-[#fcf9f4] border-[#d4c3bc] text-[#250f03] hover:border-rose-400'
                  }`}
                  title={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
                >
                  <span
                    className="material-symbols-outlined text-base text-rose-600"
                    style={isWishlisted ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    favorite
                  </span>
                  <span>{isWishlisted ? 'Saved' : 'Wishlist'}</span>
                </button>

                <button
                  onClick={() => {
                    onCustomize(product);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 sm:py-3 bg-[#250f03] hover:bg-[#3d1905] text-[#ffdbca] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors active:scale-95 min-h-[42px]"
                >
                  <span className="material-symbols-outlined text-sm">tune</span>
                  <span>Customize</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

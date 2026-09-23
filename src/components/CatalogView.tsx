import React, { useState, useMemo } from 'react';
import { MandirProduct } from '../types/mandir';
import { MANDIR_CATALOG, WHATSAPP_PHONE } from '../data/mandirs';
import { templeBell } from './AudioBellPlayer';

interface CatalogViewProps {
  onSelectProduct: (product: MandirProduct) => void;
  initialPlacement?: string;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  onSelectProduct,
  initialPlacement = 'All',
  searchQuery,
  onSearchChange,
  wishlistIds,
  onToggleWishlist
}) => {
  const [selectedWood, setSelectedWood] = useState<string>('All');
  const [selectedPlacement, setSelectedPlacement] = useState<string>(initialPlacement);
  const [selectedSize, setSelectedSize] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredProducts = useMemo(() => {
    return MANDIR_CATALOG.filter((item) => {
      // Filter Wood
      if (selectedWood !== 'All' && item.wood !== selectedWood) {
        return false;
      }
      // Filter Placement
      if (selectedPlacement !== 'All' && item.placement !== selectedPlacement) {
        return false;
      }
      // Filter Size
      if (selectedSize !== 'All' && item.size !== selectedSize) {
        return false;
      }
      // Search Query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchWood = item.wood.toLowerCase().includes(q);
        const matchPlacement = item.placement.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        if (!matchTitle && !matchWood && !matchPlacement && !matchDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.numericPrice - b.numericPrice;
      if (sortBy === 'price-desc') return b.numericPrice - a.numericPrice;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedWood, selectedPlacement, selectedSize, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSelectedWood('All');
    setSelectedPlacement('All');
    setSelectedSize('All');
    onSearchChange('');
    setSortBy('featured');
  };

  return (
    <div className="py-8 sm:py-12 md:py-20 bg-[#fcf9f4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-6 sm:space-y-10">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-[#fed65b]/20 border border-[#735c00]/30 text-[#735c00] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span>Pooja Mandir Catalog</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-[#250f03]">
            The Sacred Wooden Mandir Collection
          </h1>
          <p className="text-[#50443f] text-xs sm:text-sm md:text-base leading-relaxed">
            All sanctums are carved from 100% solid, kiln-seasoned hardwoods with lifelong termite resistance, solid brass bells, and Vastu proportioned architecture.
          </p>
        </div>

        {/* Quick Placement Filter Bar (Mobile-friendly horizontal scroll) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1.5 -mx-4 px-4 sm:mx-0 sm:px-0">
          {['All', 'Wall Mount', 'Floor Standing', 'Corner Unit'].map((placementOption) => (
            <button
              key={placementOption}
              onClick={() => setSelectedPlacement(placementOption)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shrink-0 active:scale-95 min-h-[42px] flex items-center justify-center ${
                selectedPlacement === placementOption
                  ? 'bg-[#250f03] text-[#fed65b] shadow-xs'
                  : 'bg-[#f7f2ea] text-[#50443f] border border-[#d4c3bc] hover:border-[#735c00]'
              }`}
            >
              {placementOption === 'All' ? 'All Placements' : placementOption}
            </button>
          ))}
        </div>

        {/* Filters and Control Panel */}
        <div className="bg-[#f7f2ea] border border-[#d4c3bc]/70 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Filter 1: Wood */}
            <div>
              <label className="block text-[11px] font-bold text-[#50443f] uppercase tracking-wider mb-1">
                Sacred Timber
              </label>
              <select
                value={selectedWood}
                onChange={(e) => setSelectedWood(e.target.value)}
                className="w-full bg-[#fcf9f4] border border-[#d4c3bc] rounded-xl px-3 py-2.5 text-xs font-semibold text-[#250f03] focus:outline-none focus:border-[#735c00] min-h-[46px]"
              >
                <option value="All">All Timbers</option>
                <option value="Solid Teak">Solid Teak (Sagwan)</option>
                <option value="Seasoned Sheesham">Seasoned Sheesham</option>
                <option value="Rosewood Finish">Rosewood Finish</option>
              </select>
            </div>

            {/* Filter 2: Placement */}
            <div>
              <label className="block text-[11px] font-bold text-[#50443f] uppercase tracking-wider mb-1">
                Mandir Placement
              </label>
              <select
                value={selectedPlacement}
                onChange={(e) => setSelectedPlacement(e.target.value)}
                className="w-full bg-[#fcf9f4] border border-[#d4c3bc] rounded-xl px-3 py-2.5 text-xs font-semibold text-[#250f03] focus:outline-none focus:border-[#735c00] min-h-[46px]"
              >
                <option value="All">All Placements</option>
                <option value="Wall Mount">Wall Mount (Apartment)</option>
                <option value="Floor Standing">Floor Standing (Grand)</option>
                <option value="Corner Unit">Corner Unit (90° Ishanya)</option>
              </select>
            </div>

            {/* Filter 3: Size */}
            <div>
              <label className="block text-[11px] font-bold text-[#50443f] uppercase tracking-wider mb-1">
                Height Profile
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full bg-[#fcf9f4] border border-[#d4c3bc] rounded-xl px-3 py-2.5 text-xs font-semibold text-[#250f03] focus:outline-none focus:border-[#735c00] min-h-[46px]"
              >
                <option value="All">All Sizes</option>
                <option value="Compact < 3ft">Compact (&lt; 36&quot;)</option>
                <option value="Medium 3-5ft">Medium (36&quot; – 60&quot;)</option>
                <option value="Grand 5ft+">Grand (&gt; 60&quot;)</option>
              </select>
            </div>

            {/* Filter 4: Sort */}
            <div>
              <label className="block text-[11px] font-bold text-[#50443f] uppercase tracking-wider mb-1">
                Sort Order
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'featured' | 'price-asc' | 'price-desc')}
                className="w-full bg-[#fcf9f4] border border-[#d4c3bc] rounded-xl px-3 py-2.5 text-xs font-semibold text-[#250f03] focus:outline-none focus:border-[#735c00] min-h-[46px]"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Active Filters Summary & Reset */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#d4c3bc]/40 text-xs">
            <div className="text-[#50443f]">
              Showing <span className="font-bold text-[#250f03]">{filteredProducts.length}</span> sanctums
              {searchQuery && (
                <span> matching &ldquo;{searchQuery}&rdquo;</span>
              )}
            </div>

            {(selectedWood !== 'All' ||
              selectedPlacement !== 'All' ||
              selectedSize !== 'All' ||
              searchQuery !== '' ||
              sortBy !== 'featured') && (
              <button
                onClick={handleResetFilters}
                className="text-[#735c00] font-bold hover:underline flex items-center gap-1 cursor-pointer py-1"
              >
                <span className="material-symbols-outlined text-sm">filter_alt_off</span>
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 sm:py-20 bg-[#f7f2ea] rounded-2xl border border-[#d4c3bc] space-y-4 px-4">
            <div className="w-16 h-16 rounded-full bg-[#fed65b]/30 text-[#735c00] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">temple_hindu</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-[#250f03]">
              No Sanctums Found Matching Your Criteria
            </h3>
            <p className="text-xs text-[#50443f] max-w-md mx-auto">
              We also craft bespoke mandirs to your custom dimensions. Click below to reset filters or design a bespoke temple.
            </p>
            <button
              onClick={handleResetFilters}
              className="bg-[#250f03] text-[#ffdbca] px-5 py-2.5 rounded-xl text-xs font-bold"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#fcf9f4] border border-[#d4c3bc]/70 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="aspect-4/3 w-full overflow-hidden relative cursor-pointer bg-[#ede6dc]"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#250f03]/85 text-[#fed65b] text-[10px] font-bold px-2 py-0.5 rounded">
                    {product.placement}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded">
                    {product.height} H
                  </div>

                  {/* Wishlist Heart Toggle Button (Thumb-friendly 44x44px target) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    aria-label={wishlistIds.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                    title={wishlistIds.includes(product.id) ? "Saved in Wishlist (Click to remove)" : "Save to Wishlist"}
                    className={`absolute top-2.5 right-2.5 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center transition-all duration-200 shadow-md active:scale-90 z-10 ${
                      wishlistIds.includes(product.id)
                        ? 'bg-white text-rose-600 hover:bg-rose-50 hover:scale-110'
                        : 'bg-[#fcf9f4]/90 backdrop-blur-xs text-[#50443f] hover:text-rose-600 hover:bg-white'
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-2xl transition-colors"
                      style={wishlistIds.includes(product.id) ? { fontVariationSettings: "'FILL' 1" } : undefined}
                    >
                      favorite
                    </span>
                  </button>
                </div>

                {/* Body */}
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

                    <p className="text-xs text-[#50443f] mt-1.5 sm:mt-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Specification Table */}
                  <div className="space-y-1.5 py-2.5 sm:py-3 border-y border-[#d4c3bc]/40 text-xs text-[#250f03]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#50443f]">Dimensions:</span>
                      <span className="font-semibold">{product.height} × {product.width} × {product.depth}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#50443f]">Sacred Bells:</span>
                      <button
                        onClick={() => templeBell.playBellTone()}
                        className="font-semibold text-[#735c00] hover:underline flex items-center gap-1 cursor-pointer py-1"
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

                  {/* Bottom Price & Actions */}
                  <div className="pt-2 flex items-center justify-between gap-2 sm:gap-3">
                    <div>
                      <div className="text-[10px] text-[#50443f]">Direct Price</div>
                      <div className="text-lg sm:text-xl font-serif font-bold text-[#250f03]">
                        {product.price}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-3.5 py-2.5 text-xs font-semibold text-[#250f03] border border-[#d4c3bc] hover:border-[#735c00] rounded-xl transition-colors min-h-[42px] active:scale-95 flex items-center justify-center"
                      >
                        Details
                      </button>

                      <a
                        href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                          `Namaste Deva Vihara! I am interested in purchasing ${product.title} (${product.id}, ${product.price}). Please share shipment timeline and wood certification.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all active:scale-95 min-h-[42px]"
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
        )}
      </div>
    </div>
  );
};

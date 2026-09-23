import React, { useState, useMemo } from 'react';
import { CustomMandirConfig } from '../types/mandir';
import { templeBell } from './AudioBellPlayer';
import { WHATSAPP_PHONE } from '../data/mandirs';

export const CustomMandirBuilder: React.FC = () => {
  const [config, setConfig] = useState<CustomMandirConfig>({
    wood: 'Solid Teak',
    type: 'Floor Standing',
    height: 60,
    width: 36,
    depth: 22,
    features: [
      'Backlit Jali Lattice with OM Panel',
      'Hand-Cast Tuned Brass Ghanti Bells',
      'Soft-Closing Aarti Slideout Tray'
    ],
    name: '',
    phone: '',
    city: ''
  });

  const availableFeatures = [
    { id: 'Backlit Jali Lattice with OM Panel', label: 'Backlit Jali Lattice with Sacred OM', price: 4500, icon: 'grid_goldenratio' },
    { id: 'Hand-Cast Tuned Brass Ghanti Bells', label: 'Tuned Brass Ghanti Bells Array', price: 3800, icon: 'notifications_active' },
    { id: 'Soft-Closing Aarti Slideout Tray', label: 'Heavy-Duty Aarti Pullout Plinth', price: 2800, icon: 'shelves' },
    { id: 'Dual Velvet-Lined Scripture Drawers', label: 'Dual Velvet-Lined Sacred Drawers', price: 3200, icon: 'inventory_2' },
    { id: 'Pure Brass Crowning Kalash Finials', label: 'Solid Turned Brass Kalash Spire', price: 3500, icon: 'temple_hindu' }
  ];

  const handleToggleFeature = (id: string) => {
    setConfig((prev) => {
      const exists = prev.features.includes(id);
      return {
        ...prev,
        features: exists ? prev.features.filter((f) => f !== id) : [...prev.features, id]
      };
    });
  };

  // Price Calculation Engine
  const calculatedPrice = useMemo(() => {
    let base = 32000;

    // Wood multiplier
    if (config.wood === 'Solid Teak') base += 14000;
    else if (config.wood === 'Seasoned Sheesham') base += 8000;
    else if (config.wood === 'Rosewood Finish') base += 11000;

    // Archetype base
    if (config.type === 'Floor Standing') base += 12000;
    else if (config.type === 'Corner Unit') base += 6000;
    else if (config.type === 'Full Pooja Room') base += 35000;

    // Volume cubic factor
    const volumeFactor = ((config.height * config.width * config.depth) / (48 * 30 * 18)) * 10000;
    base += Math.round(volumeFactor);

    // Features
    config.features.forEach((featId) => {
      const f = availableFeatures.find((item) => item.id === featId);
      if (f) base += f.price;
    });

    return Math.round(base / 500) * 500; // round to nearest 500
  }, [config, availableFeatures]);

  const whatsappMessage = useMemo(() => {
    const lines = [
      `*DEVAS VIHARA - CUSTOM MANDIR COMMISSION INQUIRY*`,
      `---------------------------------------`,
      `*Client:* ${config.name.trim() || 'Valued Devotee'}`,
      `*Location:* ${config.city.trim() || 'India / Global'}`,
      `*Phone:* ${config.phone.trim() || 'Not specified'}`,
      ``,
      `*1. Sacred Timber:* ${config.wood}`,
      `*2. Archetype:* ${config.type}`,
      `*3. Dimensions:* ${config.height}" Height × ${config.width}" Width × ${config.depth}" Depth`,
      `*4. Sacred Accents:*`,
      ...config.features.map((f) => `   • ${f}`),
      ``,
      `*Estimated Investment:* ₹${calculatedPrice.toLocaleString('en-IN')}`,
      `---------------------------------------`,
      `Please provide the 3D CAD schematic and estimated dispatch date.`
    ];
    return encodeURIComponent(lines.join('\n'));
  }, [config, calculatedPrice]);

  return (
    <div className="py-8 sm:py-12 md:py-20 bg-[#fcf9f4]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 sm:space-y-12">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-[#fed65b]/20 border border-[#735c00]/30 text-[#735c00] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined text-xs sm:text-sm">tune</span>
            <span>Bespoke Sanctum Studio</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-[#250f03]">
            Commission Your Custom Home Mandir
          </h1>
          <p className="text-[#50443f] text-xs sm:text-sm md:text-base leading-relaxed">
            Configure your exact temple dimensions, sacred timber, and artisanal features. Receive a 3D architectural CAD drawing within 24 hours.
          </p>
        </div>

        {/* Builder 2-Column Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 bg-[#f7f2ea] border border-[#d4c3bc]/70 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs">
            {/* Step 1: Sacred Timber */}
            <div className="space-y-2.5 sm:space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#735c00] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">forest</span>
                <span>Step 1: Choose Sacred Timber</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  { id: 'Solid Teak', title: 'Burma Teak (Sagwan)', desc: 'High oil, lifelong termite immunity' },
                  { id: 'Seasoned Sheesham', title: 'Indian Sheesham', desc: 'Heartwood density, rich grain' },
                  { id: 'Rosewood Finish', title: 'Antique Rosewood', desc: 'Deep walnut burnish & regal finish' }
                ].map((wood) => (
                  <button
                    key={wood.id}
                    onClick={() => setConfig({ ...config, wood: wood.id })}
                    className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all active:scale-95 ${
                      config.wood === wood.id
                        ? 'border-[#735c00] bg-white shadow-xs ring-2 ring-[#fed65b]'
                        : 'border-[#d4c3bc]/60 bg-[#fcf9f4] hover:border-[#735c00]/60'
                    }`}
                  >
                    <div className="font-bold text-xs text-[#250f03]">{wood.title}</div>
                    <div className="text-[10px] sm:text-[11px] text-[#50443f] mt-0.5 sm:mt-1">{wood.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Mandir Archetype */}
            <div className="space-y-2.5 sm:space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#735c00] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">temple_hindu</span>
                <span>Step 2: Choose Sanctuary Archetype</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'Wall Mount', label: 'Wall Mount' },
                  { id: 'Floor Standing', label: 'Floor Standing' },
                  { id: 'Corner Unit', label: '90° Corner' },
                  { id: 'Full Pooja Room', label: 'Haveli Room' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setConfig({ ...config, type: type.id })}
                    className={`py-2.5 sm:py-3 px-2 rounded-xl border text-center transition-all text-xs font-bold active:scale-95 min-h-[44px] flex items-center justify-center ${
                      config.type === type.id
                        ? 'bg-[#250f03] text-[#fed65b] border-[#250f03] shadow-xs'
                        : 'bg-[#fcf9f4] text-[#50443f] border-[#d4c3bc]/60 hover:bg-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Dimension Sliders */}
            <div className="space-y-4 sm:space-y-5 pt-2 border-t border-[#d4c3bc]/50">
              <label className="text-xs font-bold uppercase tracking-wider text-[#735c00] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">straighten</span>
                <span>Step 3: Custom Dimensions</span>
              </label>

              {/* Height Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-[#50443f]">Total Height:</span>
                  <span className="text-[#250f03] font-bold">
                    {config.height}&quot; ({(config.height / 12).toFixed(1)} ft)
                  </span>
                </div>
                <input
                  type="range"
                  min="24"
                  max="96"
                  step="2"
                  value={config.height}
                  onChange={(e) => setConfig({ ...config, height: Number(e.target.value) })}
                  className="w-full accent-[#735c00] cursor-pointer h-2 bg-amber-100 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-[#50443f]">
                  <span>24&quot; (Compact)</span>
                  <span>60&quot; (Standard)</span>
                  <span>96&quot; (Grand Haveli)</span>
                </div>
              </div>

              {/* Width Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-[#50443f]">Total Width:</span>
                  <span className="text-[#250f03] font-bold">{config.width}&quot;</span>
                </div>
                <input
                  type="range"
                  min="18"
                  max="72"
                  step="2"
                  value={config.width}
                  onChange={(e) => setConfig({ ...config, width: Number(e.target.value) })}
                  className="w-full accent-[#735c00] cursor-pointer h-2 bg-amber-100 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-[#50443f]">
                  <span>18&quot; (Single Altar)</span>
                  <span>42&quot; (Family Altar)</span>
                  <span>72&quot; (Grand Shikhara)</span>
                </div>
              </div>

              {/* Depth Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-[#50443f]">Total Depth:</span>
                  <span className="text-[#250f03] font-bold">{config.depth}&quot;</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="36"
                  step="2"
                  value={config.depth}
                  onChange={(e) => setConfig({ ...config, depth: Number(e.target.value) })}
                  className="w-full accent-[#735c00] cursor-pointer h-2 bg-amber-100 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-[#50443f]">
                  <span>12&quot; (Slim Niche)</span>
                  <span>22&quot; (Standard Sanctum)</span>
                  <span>36&quot; (Deep Garbhagriha)</span>
                </div>
              </div>
            </div>

            {/* Step 4: Accents & Features Checkboxes */}
            <div className="space-y-2.5 sm:space-y-3 pt-2 border-t border-[#d4c3bc]/50">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[#735c00] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">stars</span>
                  <span>Step 4: Sacred Accents & Features</span>
                </label>
                <button
                  type="button"
                  onClick={() => templeBell.playBellTone()}
                  className="text-[11px] text-[#735c00] hover:underline flex items-center gap-1 font-semibold cursor-pointer py-1"
                >
                  <span className="material-symbols-outlined text-xs">volume_up</span>
                  <span>Test Ghanti</span>
                </button>
              </div>

              <div className="space-y-2">
                {availableFeatures.map((feat) => {
                  const checked = config.features.includes(feat.id);
                  return (
                    <label
                      key={feat.id}
                      className={`flex items-center justify-between p-3 sm:p-3.5 rounded-xl border cursor-pointer transition-all active:scale-[0.99] min-h-[48px] select-none ${
                        checked
                          ? 'bg-white border-[#735c00] shadow-xs ring-1 ring-[#fed65b]'
                          : 'bg-[#fcf9f4] border-[#d4c3bc]/60 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleToggleFeature(feat.id)}
                          className="w-5 h-5 accent-[#735c00] rounded"
                        />
                        <span className="text-xs font-semibold text-[#250f03]">
                          {feat.label}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#735c00] shrink-0 ml-2">
                        +₹{feat.price.toLocaleString('en-IN')}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Contact Details */}
            <div className="space-y-3 pt-2 border-t border-[#d4c3bc]/50">
              <label className="text-xs font-bold uppercase tracking-wider text-[#735c00] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">person</span>
                <span>Step 5: Your Delivery Details (Optional)</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={config.name}
                  onChange={(e) => setConfig({ ...config, name: e.target.value })}
                  className="bg-[#fcf9f4] border border-[#d4c3bc] rounded-xl px-3.5 py-3 text-xs text-[#250f03] focus:outline-none focus:border-[#735c00] min-h-[46px]"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  value={config.phone}
                  onChange={(e) => setConfig({ ...config, phone: e.target.value })}
                  className="bg-[#fcf9f4] border border-[#d4c3bc] rounded-xl px-3.5 py-3 text-xs text-[#250f03] focus:outline-none focus:border-[#735c00] min-h-[46px]"
                />
                <input
                  type="text"
                  placeholder="City, State / Country"
                  value={config.city}
                  onChange={(e) => setConfig({ ...config, city: e.target.value })}
                  className="bg-[#fcf9f4] border border-[#d4c3bc] rounded-xl px-3.5 py-3 text-xs text-[#250f03] focus:outline-none focus:border-[#735c00] min-h-[46px]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary & Direct WhatsApp Submission */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 sm:space-y-6">
            <div className="bg-[#250f03] text-[#ffdbca] border border-[#fed65b]/40 rounded-2xl p-4 sm:p-6 shadow-xl space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between border-b border-[#735c00]/40 pb-3 sm:pb-4">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#fed65b]">
                    Bespoke Sthapatya Estimate
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#fff2e2]">
                    Custom Sanctum Blueprint
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#fed65b]/20 text-[#fed65b] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">architecture</span>
                </div>
              </div>

              {/* Specs Recap */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#d4c3bc]">Selected Timber:</span>
                  <span className="font-bold text-[#fed65b]">{config.wood}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#d4c3bc]">Mandir Archetype:</span>
                  <span className="font-bold text-[#fff2e2]">{config.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#d4c3bc]">Dimensions:</span>
                  <span className="font-bold text-[#fff2e2]">
                    {config.height}&quot; H × {config.width}&quot; W × {config.depth}&quot; D
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#d4c3bc]">Chosen Add-ons:</span>
                  <span className="font-bold text-[#fed65b]">{config.features.length} Features</span>
                </div>
              </div>

              {/* Total Price Callout */}
              <div className="pt-3 sm:pt-4 border-t border-[#735c00]/40 flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] text-[#d4c3bc]">Estimated Total Investment</div>
                  <div className="text-[10px] text-emerald-400">Includes Armored Transit Crate</div>
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#fed65b]">
                  ₹{calculatedPrice.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-1 sm:pt-2 space-y-2">
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 min-h-[46px]"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  <span>Submit Custom Mandir on WhatsApp</span>
                </a>
                <p className="text-[10px] sm:text-[11px] text-[#d4c3bc] text-center">
                  Our master sthapati will send you a 3D CAD drawing within 24 hours.
                </p>
              </div>
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#f7f2ea] border border-[#d4c3bc]/70 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#250f03]">
                <span className="material-symbols-outlined text-[#735c00] text-lg">support_agent</span>
                <span>Need help? Call our sthapati:</span>
              </div>
              <a href={`tel:+${WHATSAPP_PHONE}`} className="font-bold text-[#735c00] underline py-1">
                Direct Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

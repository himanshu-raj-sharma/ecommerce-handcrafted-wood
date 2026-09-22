import React, { useState, useRef } from 'react';
import { ThreeMandirViewer, ThreeMandirViewerRef } from './ThreeMandirViewer';
import { templeBell } from './AudioBellPlayer';
import { WHATSAPP_PHONE } from '../data/mandirs';

export const SanctumStudioSection: React.FC = () => {
  const viewerRef = useRef<ThreeMandirViewerRef>(null);

  const [selectedFinish, setSelectedFinish] = useState<'teak' | 'sheesham' | 'rosewood'>('teak');
  const [sanctumLedOn, setSanctumLedOn] = useState<boolean>(true);
  const [diyaLit, setDiyaLit] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [bellRinging, setBellRinging] = useState<boolean>(false);

  const handleFinishChange = (finish: 'teak' | 'sheesham' | 'rosewood') => {
    setSelectedFinish(finish);
    viewerRef.current?.setMaterialFinish(finish);
  };

  const handleToggleRotate = () => {
    if (viewerRef.current) {
      const newState = viewerRef.current.toggleAutoRotate();
      setAutoRotate(newState);
    }
  };

  const handleResetView = () => {
    viewerRef.current?.resetView();
    setAutoRotate(true);
  };

  const handleCameraPreset = (angleRad: number) => {
    viewerRef.current?.rotateToAngle(angleRad);
    setAutoRotate(false);
  };

  const handleRingBell = () => {
    templeBell.playBellTone();
    setBellRinging(true);
    setTimeout(() => setBellRinging(false), 800);
  };

  const handleEveningAartiPreset = () => {
    setSanctumLedOn(true);
    setDiyaLit(true);
    viewerRef.current?.setSanctumLED(true);
    viewerRef.current?.toggleDiya(true);
    templeBell.playBellTone();
  };

  const handleDaylightPreset = () => {
    setSanctumLedOn(false);
    setDiyaLit(false);
    viewerRef.current?.setSanctumLED(false);
    viewerRef.current?.toggleDiya(false);
  };

  const finishNames = {
    teak: 'Burma Teak (Natural Gold)',
    sheesham: 'Royal Sheesham (Warm Amber)',
    rosewood: 'Deep Rosewood (Antique Dark)'
  };

  return (
    <section id="sanctum-studio" className="py-10 sm:py-14 md:py-24 bg-[#140b06] text-[#ffdbca] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#e5b839]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-[#fed65b]/15 border border-[#fed65b]/30 text-[#fed65b] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined text-xs sm:text-sm">view_in_ar</span>
            <span>Real-Time 3D Sanctum Studio</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-[#fff2e2] tracking-tight">
            Explore Sacred Architecture in 360°
          </h2>
          <p className="text-[#d4c3bc] text-xs sm:text-sm md:text-base font-normal">
            Interact with our masterwork mandir. Examine the multi-tiered gopuram shikhara, hand-fluted stambha pillars, back jali cutwork, and experience devotional sanctum illumination.
          </p>
        </div>

        {/* Studio Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left / Center: 3D Canvas Box */}
          <div className="lg:col-span-8 bg-linear-to-b from-[#1c1009] to-[#25140b] border border-[#735c00]/40 rounded-2xl relative shadow-2xl overflow-hidden flex flex-col justify-between min-h-[380px] sm:min-h-[460px] md:min-h-[500px]">
            {/* Top Bar inside 3D Canvas */}
            <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between gap-1.5 pointer-events-none">
              {/* Badge */}
              <div className="bg-[#140b06]/85 backdrop-blur-xs border border-[#fed65b]/40 text-[#fed65b] text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg flex items-center gap-1 shadow-md pointer-events-auto">
                <span className="material-symbols-outlined text-xs sm:text-sm animate-spin">rotate_90_degrees_ccw</span>
                <span>360° Rotate</span>
              </div>

              {/* Utility buttons */}
              <div className="flex items-center gap-1 sm:gap-2 pointer-events-auto">
                {/* Ring Temple Bell Chime */}
                <button
                  onClick={handleRingBell}
                  className={`bg-[#fed65b] hover:bg-[#fecb3a] text-[#241a00] px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-bold flex items-center gap-1 shadow-md transition-all active:scale-95 ${
                    bellRinging ? 'ring-2 ring-amber-300 scale-105' : ''
                  }`}
                  title="Ring authentic brass temple bell"
                >
                  <span className="material-symbols-outlined text-xs sm:text-sm">notifications_active</span>
                  <span>Ghanti</span>
                </button>

                {/* Auto rotate toggle */}
                <button
                  onClick={handleToggleRotate}
                  className="bg-[#140b06]/85 hover:bg-[#140b06] text-[#ffdbca] border border-[#735c00]/50 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-bold flex items-center gap-1 shadow-md transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-xs sm:text-sm">
                    {autoRotate ? 'pause' : 'play_arrow'}
                  </span>
                  <span className="hidden sm:inline">{autoRotate ? 'Pause' : 'Auto Spin'}</span>
                </button>

                {/* Reset View */}
                <button
                  onClick={handleResetView}
                  className="bg-[#140b06]/85 hover:bg-[#140b06] text-[#ffdbca] border border-[#735c00]/50 p-1 sm:p-1.5 rounded-lg text-xs flex items-center justify-center shadow-md transition-all active:scale-95"
                  title="Reset Camera View"
                >
                  <span className="material-symbols-outlined text-xs sm:text-sm">restart_alt</span>
                </button>
              </div>
            </div>

            {/* 3D WebGL Canvas */}
            <div className="w-full h-full min-h-[340px] sm:min-h-[420px] md:min-h-[460px] relative">
              <ThreeMandirViewer
                ref={viewerRef}
                finish={selectedFinish}
                sanctumLedOn={sanctumLedOn}
                diyaLit={diyaLit}
                autoRotate={autoRotate}
                onAutoRotateChange={setAutoRotate}
              />
            </div>

            {/* Bottom Quick Angle Presets bar (horizontally scrollable on mobile) */}
            <div className="bg-[#140b06]/90 backdrop-blur-xs border-t border-[#735c00]/30 px-3 py-2 flex items-center justify-between gap-2 text-xs overflow-x-auto no-scrollbar">
              <span className="text-[#fed65b] font-semibold flex items-center gap-1 shrink-0 text-[10px] sm:text-xs">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
                <span className="hidden sm:inline">Views:</span>
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => handleCameraPreset(0)}
                  className="px-2.5 py-1 bg-[#25140b] hover:bg-[#3d1f11] text-[#ffdbca] rounded-lg border border-[#735c00]/40 transition-colors text-[10px] sm:text-xs font-medium shrink-0 active:scale-95"
                >
                  Front (0°)
                </button>
                <button
                  onClick={() => handleCameraPreset(0.785)}
                  className="px-2.5 py-1 bg-[#25140b] hover:bg-[#3d1f11] text-[#ffdbca] rounded-lg border border-[#735c00]/40 transition-colors text-[10px] sm:text-xs font-medium shrink-0 active:scale-95"
                >
                  Isometric 45°
                </button>
                <button
                  onClick={() => handleCameraPreset(1.57)}
                  className="px-2.5 py-1 bg-[#25140b] hover:bg-[#3d1f11] text-[#ffdbca] rounded-lg border border-[#735c00]/40 transition-colors text-[10px] sm:text-xs font-medium shrink-0 active:scale-95"
                >
                  Profile 90°
                </button>
                <button
                  onClick={() => handleCameraPreset(3.14)}
                  className="px-2.5 py-1 bg-[#25140b] hover:bg-[#3d1f11] text-[#ffdbca] rounded-lg border border-[#735c00]/40 transition-colors text-[10px] sm:text-xs font-medium shrink-0 active:scale-95"
                >
                  Rear Jaali
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls & Specifications */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {/* Control Box 1: Timber Finishes */}
            <div className="bg-[#1c1009] border border-[#735c00]/40 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#fed65b] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">palette</span>
                  <span>Sacred Timber Finish</span>
                </span>
                <span className="text-[11px] text-[#d4c3bc]">{finishNames[selectedFinish]}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                {/* Burma Teak */}
                <button
                  onClick={() => handleFinishChange('teak')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    selectedFinish === 'teak'
                      ? 'border-[#fed65b] bg-[#fed65b]/20 ring-1 ring-[#fed65b]'
                      : 'border-[#735c00]/40 bg-[#25140b] hover:border-[#fed65b]/60'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-[#4a2a16] border border-[#e5b839] mb-1.5" />
                  <div className="text-xs font-bold text-[#fff2e2]">Burma Teak</div>
                  <div className="text-[10px] text-[#d4c3bc]">Golden Patina</div>
                </button>

                {/* Sheesham */}
                <button
                  onClick={() => handleFinishChange('sheesham')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    selectedFinish === 'sheesham'
                      ? 'border-[#fed65b] bg-[#fed65b]/20 ring-1 ring-[#fed65b]'
                      : 'border-[#735c00]/40 bg-[#25140b] hover:border-[#fed65b]/60'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-[#5c2b16] border border-[#e5b839] mb-1.5" />
                  <div className="text-xs font-bold text-[#fff2e2]">Sheesham</div>
                  <div className="text-[10px] text-[#d4c3bc]">Warm Amber</div>
                </button>

                {/* Rosewood */}
                <button
                  onClick={() => handleFinishChange('rosewood')}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    selectedFinish === 'rosewood'
                      ? 'border-[#fed65b] bg-[#fed65b]/20 ring-1 ring-[#fed65b]'
                      : 'border-[#735c00]/40 bg-[#25140b] hover:border-[#fed65b]/60'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-[#2d1109] border border-[#e5b839] mb-1.5" />
                  <div className="text-xs font-bold text-[#fff2e2]">Rosewood</div>
                  <div className="text-[10px] text-[#d4c3bc]">Antique Dark</div>
                </button>
              </div>
            </div>

            {/* Control Box 2: Sanctum Lighting Controls */}
            <div className="bg-[#1c1009] border border-[#735c00]/40 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#fed65b] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">light_mode</span>
                  <span>Sanctum Lighting Controls</span>
                </span>
                <span className="text-[11px] text-[#d4c3bc]">2700K Warm Glow</span>
              </div>

              {/* Toggles */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#25140b] border border-[#735c00]/30">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#fed65b]">fluorescent</span>
                    <div className="text-xs font-medium text-[#fff2e2]">Cove LED & Backlit Jaali</div>
                  </div>
                  <button
                    onClick={() => {
                      const next = !sanctumLedOn;
                      setSanctumLedOn(next);
                      viewerRef.current?.setSanctumLED(next);
                    }}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                      sanctumLedOn ? 'bg-[#fed65b]' : 'bg-[#50443f]'
                    }`}
                  >
                    <div
                      className={`bg-[#241a00] w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        sanctumLedOn ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-[#25140b] border border-[#735c00]/30">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-[#ff9900]">local_fire_department</span>
                    <div className="text-xs font-medium text-[#fff2e2]">Sacred Akhand Diya Flame</div>
                  </div>
                  <button
                    onClick={() => {
                      const next = !diyaLit;
                      setDiyaLit(next);
                      viewerRef.current?.toggleDiya(next);
                    }}
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
                      diyaLit ? 'bg-[#ff9900]' : 'bg-[#50443f]'
                    }`}
                  >
                    <div
                      className={`bg-[#241a00] w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        diyaLit ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Atmospheric Presets */}
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleEveningAartiPreset}
                  className="flex-1 py-1.5 px-2 text-[11px] font-bold rounded bg-[#fed65b]/20 hover:bg-[#fed65b]/30 text-[#fed65b] border border-[#fed65b]/40 flex items-center justify-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">nights_stay</span>
                  <span>Evening Aarti</span>
                </button>
                <button
                  onClick={handleDaylightPreset}
                  className="flex-1 py-1.5 px-2 text-[11px] font-bold rounded bg-[#25140b] hover:bg-[#3d1f11] text-[#d4c3bc] border border-[#735c00]/40 flex items-center justify-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">wb_sunny</span>
                  <span>Daylight Only</span>
                </button>
              </div>
            </div>

            {/* Studio Inquiry Card */}
            <div className="bg-[#250f03] border border-[#fed65b]/40 rounded-xl p-5 shadow-lg space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#fed65b]">
                    Configured Masterpiece
                  </div>
                  <div className="font-serif text-lg font-bold text-[#fff2e2]">
                    The Vaikuntha Grand Shikhara
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#d4c3bc]">Approx. Investment</div>
                  <div className="text-xl font-bold text-[#fed65b]">₹78,000</div>
                </div>
              </div>

              <div className="text-xs text-[#d4c3bc] border-t border-[#735c00]/40 pt-2 space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#fed65b]">check_circle</span>
                  <span>64&quot; H × 42&quot; W × 24&quot; D • 8 Pure Brass Bells</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-[#fed65b]">check_circle</span>
                  <span>Solid seasoned wood with termite warranty</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  `Namaste Deva Vihara! I configured The Vaikuntha Grand Shikhara Mandir in ${finishNames[selectedFinish]} with ${sanctumLedOn ? 'LED Lighting' : 'Standard Lighting'} in your 3D Sanctum Studio. Please send me the detailed specifications and delivery schedule.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                <span>Order Configuration via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Architectural Callout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="bg-[#1c1009]/80 border border-[#735c00]/30 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#fed65b]/15 text-[#fed65b] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">temple_hindu</span>
            </div>
            <div className="font-serif text-sm font-bold text-[#fff2e2]">Tiered Shikhara & Spire</div>
            <p className="text-xs text-[#d4c3bc] leading-relaxed">
              Ascending golden ratio stepped pyramid crowned with a solid turned brass kalash to channel cosmic sattvic energy.
            </p>
          </div>

          <div className="bg-[#1c1009]/80 border border-[#735c00]/30 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#fed65b]/15 text-[#fed65b] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">vertical_align_top</span>
            </div>
            <div className="font-serif text-sm font-bold text-[#fff2e2]">Fluted Stambha Pillars</div>
            <p className="text-xs text-[#d4c3bc] leading-relaxed">
              Four monolithic turned pillars with solid brass collar rings and carved lotus capitals supporting the sanctum architrave.
            </p>
          </div>

          <div className="bg-[#1c1009]/80 border border-[#735c00]/30 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#fed65b]/15 text-[#fed65b] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">grid_goldenratio</span>
            </div>
            <div className="font-serif text-sm font-bold text-[#fff2e2]">Backlit Jali Filigree</div>
            <p className="text-xs text-[#d4c3bc] leading-relaxed">
              Precision cut geometric lattice emitting serene indirect 2700K backlight behind the central sacred OM emblem.
            </p>
          </div>

          <div className="bg-[#1c1009]/80 border border-[#735c00]/30 rounded-xl p-4 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-[#fed65b]/15 text-[#fed65b] flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">shelves</span>
            </div>
            <div className="font-serif text-sm font-bold text-[#fff2e2]">Dual Aarti Slideout Plinth</div>
            <p className="text-xs text-[#d4c3bc] leading-relaxed">
              Reinforced sliding diya shelf and velvet-lined storage drawers with brass drawer knobs for sacred scriptures and puja samagri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

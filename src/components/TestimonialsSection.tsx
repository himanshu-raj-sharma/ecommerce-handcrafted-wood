import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Ananya & Vikram Deshmukh',
      location: 'Worli, Mumbai',
      model: 'The Vaikuntha Grand Shikhara',
      rating: 5,
      text: 'The Burma Teak grain and acoustic resonance of the brass bells transformed our family morning routine. The custom height fit our apartment alcove with millimetric precision.'
    },
    {
      name: 'Dr. Raghavan Sundaram',
      location: 'London, United Kingdom',
      model: 'Kailasha Wall-Mount Sanctum',
      rating: 5,
      text: 'Crated in double-walled export ply and shipped to London without a hairline scratch. Lighting up the backlit OM every evening makes our home feel consecrated.'
    },
    {
      name: 'Priya & Amit Joshi',
      location: 'Princeton, New Jersey, USA',
      model: 'The Ayodhya Gopuram Mandir',
      rating: 5,
      text: 'The 3D Sanctum Studio showed us the exact proportions before we ordered. The pullout aarti plinth and velvet drawers keep all our silver samagri orderly.'
    }
  ];

  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#f7f2ea] border-t border-[#d4c3bc]/30">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-[#fed65b]/20 border border-[#735c00]/30 text-[#735c00] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined text-xs sm:text-sm">stars</span>
            <span>Devotional Reverence</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold text-[#250f03] tracking-tight">
            Consecrated in 1,200+ Homes Worldwide
          </h2>
          <p className="text-[#50443f] text-xs sm:text-sm md:text-base leading-relaxed">
            From modern high-rises in Mumbai and Bengaluru to homes across the UK and North America, our sacred shrines anchor daily devotion.
          </p>
        </div>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#fcf9f4] border border-[#d4c3bc]/70 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2.5 sm:space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#735c00]">
                  {[...Array(r.rating)].map((_, idx) => (
                    <span key={idx} className="material-symbols-outlined fill-1 text-base text-[#d4af37]">
                      star
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#50443f] leading-relaxed italic">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-[#d4c3bc]/40 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-[#250f03]">{r.name}</div>
                  <div className="text-[11px] text-[#50443f]">{r.location}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-[#735c00] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                    Verified Home
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Stats Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#d4c3bc]/50 text-center">
          <div className="p-2">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#250f03]">1,200+</div>
            <div className="text-[11px] sm:text-xs text-[#50443f] mt-0.5">Mandirs Handcrafted</div>
          </div>
          <div className="p-2">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#250f03]">100%</div>
            <div className="text-[11px] sm:text-xs text-[#50443f] mt-0.5">Seasoned Solid Wood</div>
          </div>
          <div className="p-2">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#250f03]">14+</div>
            <div className="text-[11px] sm:text-xs text-[#50443f] mt-0.5">Countries Delivered</div>
          </div>
          <div className="p-2">
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#250f03]">25 Yrs</div>
            <div className="text-[11px] sm:text-xs text-[#50443f] mt-0.5">Termite Warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
};

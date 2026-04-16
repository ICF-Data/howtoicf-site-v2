export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/NV_Ext_4.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090d]/80 via-[#07090d]/60 to-[#07090d]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 mb-8">
          Field Guide for ICF Builders
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
          Build for Ultimate Resilience:{' '}
          <span className="text-amber-500">High Wind Resistance</span> and{' '}
          <span className="text-amber-500">Wildfire Ready</span> Structures
          with Stronghold ICF.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
          Real specs, real pour-day perspective, no manufacturer spin. Built
          for contractors, GCs, and owner-builders who know construction but
          are doing ICF for the first time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#checklist"
            className="bg-amber-500 hover:bg-amber-400 text-black font-black text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
          >
            Get the Free Readiness Checklist →
          </a>
          <a
            href="#guide"
            className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200"
          >
            Read the Ultimate Guide
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-10 flex-wrap">
          {[
            { label: 'Honest', sub: 'No spin, no upsell' },
            { label: 'Field-tested', sub: 'Real pour specs' },
            { label: 'Free tools', sub: 'For owner-builders' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-amber-500 font-black text-lg uppercase tracking-wider">
                {item.label}
              </div>
              <div className="text-gray-500 text-sm mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent mx-auto" />
      </div>
    </section>
  );
}

const differentiators = [
  {
    label: 'Real spec numbers',
    desc: '3,000–4,000 psi, 5-inch slump, 3/8" aggregate — the actual numbers, not marketing ranges.',
  },
  {
    label: 'Honest about cons',
    desc: 'ICF costs more upfront. We tell you exactly where, and help you decide if it\'s worth it for your project.',
  },
  {
    label: 'Built for first-timers',
    desc: 'If you know construction but haven\'t done ICF before, this site is written specifically for you.',
  },
  {
    label: 'No upsell, no spin',
    desc: 'Manufacturer-agnostic. We work across the ICF ecosystem and call it as we see it — no brand loyalty clouding the guidance.',
  },
];

export default function About() {
  return (
    <section className="bg-[#0b0e14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
              About This Site
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              The field rep's chair, not any manufacturer's brochure.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              HowToICF is the independent field guide for contractors, GCs, and owner-builders doing ICF for the first time. No manufacturer affiliation. No brand agenda.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Everything here is written from real ICF sales and install experience. If something about ICF is harder than it looks, we say so.
            </p>
          </div>

          <div className="grid gap-5">
            {differentiators.map((item) => (
              <div
                key={item.label}
                className="border-l-2 border-amber-500 pl-6 py-1"
              >
                <h3 className="text-white font-bold text-base mb-1.5">{item.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

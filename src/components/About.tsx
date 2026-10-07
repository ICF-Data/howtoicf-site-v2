const notList = [
  {
    label: 'Not the official Stronghold site',
    desc: 'strongholdicf.com holds warranty language, code reports, and product ratings.',
  },
  {
    label: 'Not a contractor',
    desc: 'I do not install walls. I help the crew that does.',
  },
  {
    label: 'Not every ZIP code',
    desc: 'Northeast, Southeast, and Southwest only. Southeast joined the book in October 2026.',
  },
];

export default function About() {
  return (
    <section className="bg-[#0b0e14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
              What This Site Is
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Written from the rep’s chair, not from a factory brochure.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              HowToICF is my field guide for contractors, GCs, and owner-builders who know construction and are new to insulated concrete forms. The guides cover mix specs, bucks, pour sequence, and the cost tradeoffs.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I sell Stronghold ICF. When a project in my territory is a fit, that is the system I quote.
            </p>
            <a
              href="/about/"
              className="text-amber-500 hover:text-amber-400 font-bold text-sm uppercase tracking-widest transition-colors duration-200"
            >
              About Eric →
            </a>
          </div>

          <div>
            <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-6">
              What this site is not
            </p>
            <div className="grid gap-5">
              {notList.map((item) => (
                <div key={item.label} className="border-l-2 border-amber-500 pl-6 py-1">
                  <h3 className="text-white font-bold text-base mb-1.5">{item.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

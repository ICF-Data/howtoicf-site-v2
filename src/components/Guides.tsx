import { ArrowRight } from 'lucide-react';

const guides = [
  {
    phase: '01',
    title: 'The Complete ICF Guide',
    desc: 'Everything from site prep to post-pour finish work. The full picture in one place.',
    tag: 'Start Here',
    href: '/guides/building-icf-home/',
  },
  {
    phase: '02',
    title: 'Concrete Mix Specs',
    desc: 'The exact pour specs your ready-mix supplier needs. No guessing, no back-and-forth.',
    tag: 'Pour Day',
    href: '/guides/icf-concrete-mix-pour-spec/',
  },
  {
    phase: '03',
    title: 'ICF vs. Wood Frame',
    desc: 'An honest cost and performance comparison. Where ICF wins, where it costs more.',
    tag: 'Decision Phase',
    href: '/guides/icf-vs-wood-frame/',
  },
  {
    phase: '04',
    title: 'Window & Door Installation',
    desc: 'Buck sizing, rough opening tolerances, and flashing details specific to ICF.',
    tag: 'Rough-In',
    href: '/guides/icf-window-door-buck-installation/',
  },
];

export default function Guides() {
  return (
    <section id="guide" className="bg-[#07090d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
              Resources
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Where to Start
            </h2>
            <p className="text-gray-400 mt-3 text-lg">
              Everything you need, by phase.
            </p>
          </div>
          <a
            href="#"
            className="text-amber-500 hover:text-amber-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-colors duration-200 whitespace-nowrap"
          >
            View All Guides <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((guide) => (
            <a
              key={guide.phase}
              href={guide.href}
              className="group block border border-white/8 bg-white/3 hover:bg-white/6 hover:border-amber-500/30 p-7 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-amber-500/40 font-black text-4xl leading-none">
                  {guide.phase}
                </span>
                <span className="text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 uppercase tracking-wide">
                  {guide.tag}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug group-hover:text-amber-400 transition-colors duration-200">
                {guide.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {guide.desc}
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-amber-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Read Guide <ArrowRight size={13} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

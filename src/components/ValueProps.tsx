import { CheckCircle2 } from 'lucide-react';

const props = [
  {
    title: 'Real pour specs, not brochure copy',
    desc: '3,000–4,000 psi, 5-inch slump, 3/8" aggregate — the actual numbers your crew needs on site.',
  },
  {
    title: 'Field-rep perspective on every install phase',
    desc: 'Written from the rep\'s chair, not the manufacturer\'s marketing department.',
  },
  {
    title: 'Honest cost and trade-off analysis',
    desc: 'We tell you where ICF wins, where it costs more, and what to watch out for.',
  },
  {
    title: 'Free tools for owner-builders',
    desc: 'Checklists, guides, and resources to keep your project on track from design through post-pour.',
  },
];

export default function ValueProps() {
  return (
    <section className="bg-[#0b0e14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
            Why This Site
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            What you get here
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {props.map((item) => (
            <div
              key={item.title}
              className="group border border-white/8 bg-white/3 hover:bg-white/6 hover:border-amber-500/30 p-8 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-amber-500 mt-0.5 shrink-0" size={22} />
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

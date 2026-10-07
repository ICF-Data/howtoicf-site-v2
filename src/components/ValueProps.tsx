import { CheckCircle2 } from 'lucide-react';

const props = [
  {
    title: 'One person reads the form',
    desc: 'Project notes come to me. I cover the Northeast, Southeast, and Southwest for Stronghold ICF. No matching service, no ticket system.',
  },
  {
    title: 'The system I sell',
    desc: 'Stronghold FX fixed blocks in 6-inch and 8-inch cores, and FD foldable blocks from 4-inch to 12-inch. Blowout resistance is designed into the block, not strapped on after a bad pour.',
  },
  {
    title: 'Honest about the tradeoff',
    desc: 'ICF costs more upfront than wood. I will tell you where it wins on wind, fire, and energy, and where a conventional wall is still the better bid.',
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
            You are talking to the rep, not a brand queue.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {props.map((item) => (
            <div
              key={item.title}
              className="group border border-white/8 bg-white/3 hover:bg-white/6 hover:border-amber-500/30 p-8 transition-all duration-300"
            >
              <CheckCircle2 className="text-amber-500 mb-4" size={22} />
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

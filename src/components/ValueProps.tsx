import { CheckCircle2 } from 'lucide-react';

const who = [
  { title: 'Contractors & GCs', desc: 'Takeoffs, bid support, and a straight read on whether ICF wins the job.' },
  { title: 'Builders', desc: 'Block options, delivery, and the pour specs your ready-mix supplier needs.' },
  { title: 'Architects & Engineers', desc: 'Spec questions, core sizing, and Stronghold technical documents.' },
  { title: 'Owner-Builders & DIY', desc: 'Plain answers before you commit to a wall system.' },
  { title: 'Lumberyards & Home Centers', desc: 'Sourcing, stocking, and supporting the customers who walk in asking about ICF.' },
];

export default function ValueProps() {
  return (
    <section className="bg-[#0b0e14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">Who I Work With</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            If you’re in the AEC/C community, I work with people like you every day.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Architecture, engineering, construction and the yards that supply them. One rep, one phone number, start to finish.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {who.map((item) => (
            <div key={item.title} className="border border-white/8 bg-white/3 hover:bg-white/6 hover:border-amber-500/30 p-8 transition-all duration-300">
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

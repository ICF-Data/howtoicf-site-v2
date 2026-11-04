import { ArrowRight } from 'lucide-react';
import { STRONGHOLD_URL } from '../lib/site';

const blocks = [
  { name: 'FX Fixed Blocks', cores: '6" and 8" cores', desc: 'Fixed-web block for standard straight walls and 90° corners.' },
  { name: 'FD Foldable Blocks', cores: '4" to 12" cores', desc: 'Folds flat for shipping and storage. Same wall, more block per truck.' },
];

export default function Specs() {
  return (
    <section id="specs" className="scroll-mt-16 bg-[#0b0e14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">Specs</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              The Stronghold ICF system.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Blowout resistance is designed into the block, not strapped on after a bad pour. Full specs,
              code reports, and warranty terms live at strongholdicf.com.
            </p>
            <a
              href={STRONGHOLD_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm uppercase tracking-widest px-6 py-3.5 transition-all duration-200"
            >
              Visit strongholdicf.com <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-6">
            {blocks.map((b) => (
              <div key={b.name} className="border border-white/[0.08] bg-white/[0.03] p-8">
                <h3 className="text-white font-black text-xl mb-1">{b.name}</h3>
                <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">{b.cores}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

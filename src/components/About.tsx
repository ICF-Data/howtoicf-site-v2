import { DISTRIBUTOR_NOTE } from '../lib/site';

export default function About() {
  return (
    <section className="bg-[#0b0e14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">About Eric</p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Three territories. One straight answer.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I’m Eric Kimbriel, National Sales for Stronghold Insulated Concrete Forms, with 8 years as a
              manufacturer sales rep. I cover the Northeast, Southwest and Southeast as your single point of contact.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Questions on sourcing, specs, pricing, or putting together a bid for Stronghold ICF? Reach out to me directly.
            </p>
            <a href="/about/" className="text-amber-500 hover:text-amber-400 font-bold text-sm uppercase tracking-widest transition-colors duration-200">
              About Eric →
            </a>
          </div>

          <div className="border-l-2 border-amber-500 pl-6 py-1">
            <h3 className="text-white font-bold text-base mb-1.5">Distributor areas</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{DISTRIBUTOR_NOTE}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

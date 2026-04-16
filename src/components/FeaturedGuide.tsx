import { BookOpen, ArrowRight } from 'lucide-react';

const stats = [
  { value: '7', label: 'Sections' },
  { value: '5,600', label: 'Words' },
  { value: '12', label: 'FAQs Answered' },
];

export default function FeaturedGuide() {
  return (
    <section className="bg-[#0b0e14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-transparent p-10 md:p-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 mb-8">
                <span>★</span> Most Complete Resource on the Site
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                The Ultimate Guide to Building an ICF Home
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Covers ICF fundamentals, team requirements, costs, timeline, and seven common mistakes. Whether you're evaluating ICF or already committed, this is the resource to read first.
              </p>

              <a
                href="/guides/building-icf-home/"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black text-sm uppercase tracking-widest px-7 py-4 transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]"
              >
                Read the Guide <ArrowRight size={16} />
              </a>
            </div>

            <div className="flex flex-row lg:flex-col gap-6 shrink-0">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center border border-white/8 bg-white/3 px-10 py-8">
                  <div className="text-4xl font-black text-amber-500 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-white/8 flex items-start gap-4">
            <BookOpen className="text-amber-500 shrink-0 mt-0.5" size={20} />
            <p className="text-gray-400 text-sm leading-relaxed">
              Covers ICF fundamentals, team requirements, costs, timeline, and seven common mistakes new ICF builders make — along with exactly how to avoid them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

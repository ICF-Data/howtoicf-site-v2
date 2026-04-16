import { ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section className="bg-amber-500 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-black leading-tight mb-4">
          Start with the checklist. Everything else follows.
        </h2>
        <p className="text-black/60 text-lg mb-10">
          Free. 25 items. Nothing skippable.
        </p>
        <a
          href="#checklist"
          className="inline-flex items-center gap-2 bg-black hover:bg-[#07090d] text-amber-500 font-black text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200"
        >
          Get It Free <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

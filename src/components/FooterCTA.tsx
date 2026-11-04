import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from '../lib/site';

export default function FooterCTA() {
  return (
    <section className="bg-amber-500 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black text-black leading-tight mb-4">
          Let’s Talk ICF.
        </h2>
        <p className="text-black/70 text-lg mb-10">
          Eric Kimbriel, Stronghold ICF, Manufacturer Sales Rep
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`tel:${PHONE_HREF}`} className="bg-black hover:bg-[#07090d] text-amber-500 font-black text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200">
            Call {PHONE_DISPLAY}
          </a>
          <a href={`sms:${PHONE_HREF}`} className="bg-black/10 hover:bg-black/20 border border-black/30 text-black font-black text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200">
            Text Eric
          </a>
          <a href={`mailto:${EMAIL}`} className="bg-black/10 hover:bg-black/20 border border-black/30 text-black font-black text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200">
            Email Eric
          </a>
        </div>
      </div>
    </section>
  );
}

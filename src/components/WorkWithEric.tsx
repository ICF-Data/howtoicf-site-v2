import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from '../lib/site';

const steps = [
  { n: '01', title: 'Send your plans.', desc: 'PDFs, CAD exports, or phone photos of the drawings. Whatever you have.' },
  { n: '02', title: 'Send your dimensions.', desc: 'Wall lengths, heights, and openings. A hand sketch works.' },
  { n: '03', title: 'Show me the site.', desc: 'Photos of the lot, grade, and access. Tell me what you’re working with.' },
  { n: '04', title: 'Get a straight answer.', desc: 'Fit, material takeoff, pricing, and bid support for Stronghold ICF.' },
];

export default function WorkWithEric() {
  return (
    <section id="work-with-eric" className="scroll-mt-16 bg-[#07090d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">How to Work with Eric</p>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Four steps. No portal, no queue.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s) => (
            <div key={s.n} className="border-l-2 border-amber-500 pl-6 py-1">
              <p className="text-amber-500 font-black text-sm mb-2">{s.n}</p>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-300 text-base">
          Email or text it all to{' '}
          <a href={`mailto:${EMAIL}`} className="text-amber-500 hover:text-amber-400 font-bold">{EMAIL}</a>
          {' '}or{' '}
          <a href={`sms:${PHONE_HREF}`} className="text-amber-500 hover:text-amber-400 font-bold">{PHONE_DISPLAY}</a>.
        </p>
      </div>
    </section>
  );
}

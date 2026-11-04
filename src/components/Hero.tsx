import ProjectForm from './ProjectForm';
import { EMAIL, PHONE_HREF } from '../lib/site';

const chips = ['Northeast', 'Southwest', 'Southeast', '8 years as a manufacturer rep', 'AEC/C'];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src="/hero.jpg"
        alt="Crew stacking ICF blocks on a job site, concrete pump hose visible at wall corner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090d]/85 via-[#07090d]/70 to-[#07090d]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 mb-8">
              Manufacturer Sales Rep · Stronghold Insulated Concrete Forms
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.08] tracking-tight mb-6">
              Eric Kimbriel.{' '}
              <span className="text-amber-500">Stronghold ICF</span>. Southwest, Northeast, Southeast.
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-8">
              8 years as a manufacturer sales rep working with contractors, GCs, builders, DIYers,
              lumberyards and home centers across the Northeast, Southwest and Southeast. Whether ICF
              is right for your project or not, you’ll know right away.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${PHONE_HREF}`}
                className="bg-amber-500 hover:bg-amber-400 text-black font-black text-sm uppercase tracking-widest px-6 py-3.5 transition-all duration-200"
              >
                Call / Text Eric
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-widest px-6 py-3.5 transition-all duration-200"
              >
                Email Eric
              </a>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {chips.map((item) => (
                <li key={item} className="text-xs font-bold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 uppercase tracking-wide">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="project" className="scroll-mt-24 border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-white font-black text-2xl mb-1">Tell me the job.</h2>
            <p className="text-gray-400 text-sm mb-6">I will tell you if Stronghold fits.</p>
            <ProjectForm
              source="homepage"
              showNote
              submitLabel="Send this to Eric"
              fine="Eric reviews it personally. No spam. Some areas are served by an established Stronghold distributor; if yours is, I will connect you with them."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

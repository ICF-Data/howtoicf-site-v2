import ProjectForm from './ProjectForm';
import { TERRITORIES } from '../lib/site';

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
          {/* Left: headline */}
          <div>
            <div className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase px-4 py-2 mb-8">
              Field guide from the rep who covers your territory
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.08] tracking-tight mb-6">
              Eric Kimbriel.{' '}
              <span className="text-amber-500">Stronghold ICF</span> for the
              Northeast, Southeast, and Southwest.
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-8">
              Real pour specs, real pricing, and a straight answer on whether
              ICF fits the job. I sell Stronghold. This site is mine, not the
              factory’s.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#checklist"
                className="bg-amber-500 hover:bg-amber-400 text-black font-black text-sm uppercase tracking-widest px-6 py-3.5 transition-all duration-200"
              >
                Get the free checklist
              </a>
              <a
                href="#project"
                className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-widest px-6 py-3.5 transition-all duration-200"
              >
                Send Eric a project
              </a>
            </div>

            <ul className="mt-12 flex flex-wrap gap-3">
              {[...TERRITORIES, '8 years in the field'].map((item) => (
                <li
                  key={item}
                  className="text-xs font-bold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 uppercase tracking-wide"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: project form */}
          <div
            id="project"
            className="scroll-mt-24 border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-8 md:p-10"
          >
            <h2 className="text-white font-black text-2xl mb-1">
              Tell me the job.
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              I will tell you if Stronghold fits.
            </p>
            <ProjectForm
              source="homepage"
              showNote
              submitLabel="Send this to Eric"
              fine="Eric reviews it. No spam. Pricing and specs are for projects in the Northeast, Southeast, and Southwest."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent mx-auto" />
      </div>
    </section>
  );
}

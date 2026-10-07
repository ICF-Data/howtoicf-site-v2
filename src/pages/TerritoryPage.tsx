import Footer from '../components/Footer';
import ProjectForm from '../components/ProjectForm';
import { usePageMeta } from '../lib/usePageMeta';

type Territory = {
  slug: 'ne' | 'se' | 'sw';
  name: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  pills: string[];
  cards: { title: string; desc: string }[];
  locationPlaceholder: string;
};

const territories: Record<Territory['slug'], Territory> = {
  ne: {
    slug: 'ne',
    name: 'Northeast',
    title: 'Northeast ICF Pricing — Eric Kimbriel, Stronghold',
    description:
      'Stronghold ICF pricing for Northeast contractors. Eric Kimbriel covers the territory. Not the official Stronghold website.',
    h1: 'Wind-ready walls, and a pour plan that works in the cold.',
    lede: 'I cover the Northeast for Stronghold ICF. Send the project and I will come back with block options, delivery, and the pour specs your ready-mix supplier needs.',
    pills: ['Contractors and GCs', 'FX and FD blocks', 'Not a call center'],
    cards: [
      {
        title: 'Why crews switch',
        desc: 'Blowouts are the objection. Stronghold designs that resistance into the block instead of asking the crew to strap their way out of it.',
      },
      {
        title: 'Cold-weather reality',
        desc: 'Northeast pours live and die on mix, slump, and timing. You get the numbers for your engineering, not a national brochure range.',
      },
      {
        title: 'Who answers',
        desc: 'Eric Kimbriel. Eight years in ICF. Phone or text 605-269-7898. Email eric@strongholdicf.com.',
      },
    ],
    locationPlaceholder: 'Providence, RI',
  },
  se: {
    slug: 'se',
    name: 'Southeast',
    title: 'Southeast ICF Pricing — Eric Kimbriel, Stronghold',
    description:
      'Stronghold ICF pricing for Southeast contractors. Eric Kimbriel covers the territory. Not the official Stronghold website.',
    h1: 'Hurricane wind is not the place to learn ICF on pour day.',
    lede: 'Southeast joined my book in October 2026. If you are pricing a coastal or inland job and you want Stronghold numbers, not a factory form, send it here.',
    pills: ['New territory', 'Contractors and GCs', 'Straight walls, fewer straps'],
    cards: [
      {
        title: 'The wall has to stay straight',
        desc: 'Humidity, lift rate, and a crew new to ICF are how walls belly. Stronghold’s block is built to resist the blowout that starts that problem.',
      },
      {
        title: 'Wind is the bid',
        desc: 'Owners in this territory ask about hurricane performance. I will tell you what ICF does, what the engineering still has to prove, and which core fits the job.',
      },
      {
        title: 'Who answers',
        desc: 'Eric Kimbriel. Text or call 605-269-7898. You are not entering a national lead pool.',
      },
    ],
    locationPlaceholder: 'Savannah, GA',
  },
  sw: {
    slug: 'sw',
    name: 'Southwest',
    title: 'Southwest ICF Pricing — Eric Kimbriel, Stronghold',
    description:
      'Stronghold ICF pricing for Southwest contractors. Eric Kimbriel covers the territory. Not the official Stronghold website.',
    h1: 'Heat, wildfire interface, and a delivery date you can build on.',
    lede: 'I cover the Southwest for Stronghold ICF. Send the wall package and I will price FX or FD, flag the core, and tell you what the ready-mix supplier needs before the truck rolls.',
    pills: ['Contractors and GCs', 'Wildfire-country jobs', 'Rep, not a queue'],
    cards: [
      {
        title: 'The first ICF job',
        desc: 'Most Southwest calls are crews who have bid wood for years and just lost one to energy code or an owner who asked about fire. The checklist is built for that handoff.',
      },
      {
        title: 'What Stronghold changes',
        desc: 'The block is engineered against blowouts. That is the field problem I get asked about before price. Price still comes back from me, not from a web calculator.',
      },
      {
        title: 'Who answers',
        desc: 'Eric Kimbriel. 605-269-7898. eric@strongholdicf.com. Southwest projects only on this page.',
      },
    ],
    locationPlaceholder: 'Tucson, AZ',
  },
};

export default function TerritoryPage({ slug }: { slug: Territory['slug'] }) {
  const t = territories[slug];
  usePageMeta(t.title, t.description, `/${t.slug}`);

  return (
    <div className="bg-[#07090d] min-h-screen">
      {/* Ad landing page: one job, so no site nav */}
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="/" className="text-white font-black text-xl tracking-tight">
            HowTo<span className="text-amber-500">ICF</span>
          </a>
          <div className="flex items-center gap-6">
            <a
              href="/about/"
              className="hidden sm:inline text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium tracking-wide"
            >
              About Eric
            </a>
            <a
              href="#form"
              className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-5 py-2.5 transition-all duration-200 tracking-wide uppercase"
            >
              Get pricing
            </a>
          </div>
        </div>
      </header>

      <div className="border-b border-white/5 bg-[#0b0e14]">
        <p className="max-w-6xl mx-auto px-6 py-3 text-gray-400 text-xs leading-relaxed">
          Independent rep page for the {t.name}. Eric Kimbriel sells Stronghold ICF. This is not the official Stronghold website.
        </p>
      </div>

      <main>
        <section className="px-6 pt-16 pb-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
                {t.name} · Stronghold ICF
              </p>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.08] tracking-tight mb-6">
                {t.h1}
              </h1>
              <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-8">{t.lede}</p>
              <ul className="flex flex-wrap gap-3">
                {t.pills.map((pill) => (
                  <li
                    key={pill}
                    className="text-xs font-bold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 uppercase tracking-wide"
                  >
                    {pill}
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="form"
              className="scroll-mt-8 border border-white/[0.08] bg-white/[0.04] p-8 md:p-10"
            >
              <h2 className="text-white font-black text-2xl mb-6">{t.name} project form</h2>
              <ProjectForm
                region={`${t.name} US`}
                source={`landing-${t.slug}`}
                showTiming
                locationPlaceholder={t.locationPlaceholder}
                submitLabel="Send to Eric"
                fine={`${t.name} only on this page. Official specs and warranty: strongholdicf.com.`}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#0b0e14] px-6 py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            {t.cards.map((card) => (
              <div key={card.title} className="border border-white/[0.08] bg-white/[0.03] p-8">
                <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

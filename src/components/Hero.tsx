import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Hero() {
  const [form, setForm] = useState({ region: '', location: '', name: '', phone: '', email: '' });
  const [status, setStatus] = useState<FormState>('idle');

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/.netlify/functions/pricing-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          location: form.location ? `${form.location} (${form.region})` : form.region,
          notes: 'Homepage quick-match form.',
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'bg-white/5 border border-white/10 focus:border-amber-500/50 text-white placeholder-gray-600 px-4 py-3.5 text-sm outline-none transition-colors duration-200 w-full';

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
              Field Guide for ICF Builders
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Build for Ultimate Resilience:{' '}
              <span className="text-amber-500">High Wind Resistance</span> and{' '}
              <span className="text-amber-500">Wildfire Ready</span> Structures
              with ICF.
            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-8">
              Real specs, real pour-day perspective, no manufacturer spin.
              Built for contractors, GCs, and owner-builders who know
              construction but are doing ICF for the first time.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#checklist"
                className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-widest px-6 py-3.5 transition-all duration-200"
              >
                Free Readiness Checklist
              </a>
              <a
                href="#guide"
                className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold text-sm uppercase tracking-widest px-6 py-3.5 transition-all duration-200"
              >
                Read the Ultimate Guide
              </a>
            </div>

            <div className="mt-14 flex items-center gap-10 flex-wrap">
              {[
                { label: 'Honest', sub: 'No spin, no upsell' },
                { label: 'Field-tested', sub: 'Real pour specs' },
                { label: 'Free tools', sub: 'For owner-builders' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-amber-500 font-black text-lg uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-gray-500 text-sm mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: quick-match form */}
          <div className="border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-8 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="text-amber-500 text-5xl font-black mb-4">✓</div>
                <h3 className="text-white font-black text-2xl mb-2">Request received.</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We'll connect you with a vetted local ICF pro shortly.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-white font-black text-2xl mb-1">
                  Request a Free Consultation
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  Skip the middleman. Get pricing and technical specs
                  tailored to your project.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-gray-500 text-xs font-medium uppercase tracking-widest mb-1.5">
                      Region *
                    </label>
                    <select
                      required
                      value={form.region}
                      onChange={set('region')}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select your region
                      </option>
                      <option value="Northeast US">Northeast US</option>
                      <option value="Southwest US">Southwest US</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-medium uppercase tracking-widest mb-1.5">
                      City / ZIP
                    </label>
                    <input
                      type="text"
                      placeholder="City or ZIP code"
                      value={form.location}
                      onChange={set('location')}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-medium uppercase tracking-widest mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={set('name')}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-xs font-medium uppercase tracking-widest mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={form.phone}
                        onChange={set('phone')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs font-medium uppercase tracking-widest mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={set('email')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-xs">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-black text-sm uppercase tracking-widest px-6 py-4 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)] mt-1"
                  >
                    {status === 'loading' ? (
                      'Sending…'
                    ) : (
                      <>
                        Get Matched <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-gray-600 text-xs text-center mt-1">
                    No spam. We connect you with a vetted local ICF pro.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent mx-auto" />
      </div>
    </section>
  );
}

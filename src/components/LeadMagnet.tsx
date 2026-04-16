import { useState } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const phases = [
  'Design Review',
  'Permit & Engineering',
  'Site & Foundation',
  'Stack & Pour',
  'Post-Pour',
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function LeadMagnet() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setState('loading');

    try {
      const res = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      if (!res.ok) throw new Error('failed');
      setState('success');
    } catch {
      setState('error');
    }
  };

  return (
    <section id="checklist" className="bg-[#07090d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
              Free Download
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Know what to check before you stack a single block.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              The 25-point ICF Project Readiness Checklist covers 5 phases from design through post-pour. Every item your project needs cleared before you break ground.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {phases.map((phase) => (
                <span
                  key={phase}
                  className="text-xs font-bold text-gray-400 bg-white/5 border border-white/[0.08] px-3 py-1.5 uppercase tracking-wide"
                >
                  {phase}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Shield size={15} className="text-amber-500" />
              Free. Instant delivery. No spam.
            </div>
          </div>

          <div className="border border-white/[0.08] bg-white/[0.03] p-10">
            {state === 'success' ? (
              <div className="text-center py-8">
                <div className="text-amber-500 text-5xl font-black mb-4">✓</div>
                <h3 className="text-white font-black text-2xl mb-2">You're all set.</h3>
                <p className="text-gray-400">Check your inbox for the checklist.</p>
              </div>
            ) : (
              <>
                <h3 className="text-white font-black text-2xl mb-2">
                  Get the Free Checklist
                </h3>
                <p className="text-gray-400 text-sm mb-8">
                  Free. 25 items. Nothing skippable.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/5 border border-white/10 focus:border-amber-500/50 text-white placeholder-gray-600 px-4 py-3.5 text-sm outline-none transition-colors duration-200 w-full"
                  />
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/5 border border-white/10 focus:border-amber-500/50 text-white placeholder-gray-600 px-4 py-3.5 text-sm outline-none transition-colors duration-200 w-full"
                  />
                  {state === 'error' && (
                    <p className="text-red-400 text-xs">
                      Something went wrong. Please try again.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-black text-sm uppercase tracking-widest px-6 py-4 transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]"
                  >
                    {state === 'loading' ? 'Sending…' : <>Get It Free <ArrowRight size={16} /></>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

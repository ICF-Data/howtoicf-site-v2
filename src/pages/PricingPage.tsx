import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const features = [
  {
    name: 'Vertical Locking Webs',
    desc: 'Webs lock panels together top-to-bottom during stacking. Forms stay plumb without constant adjustment — less re-stacking, faster installs.',
  },
  {
    name: 'Reversible Interlock',
    desc: 'Panels flip and still lock. Field cuts and short returns don\'t create waste — flip the block and keep stacking.',
  },
  {
    name: 'Tall Rebar Chairs',
    desc: 'Chairs hold horizontal bar at correct elevation from the factory. No improvised spacers, no guessing cover depth on pour day.',
  },
  {
    name: 'Reinforced Corner Bands',
    desc: 'Steel-reinforced bands on every corner block. Corners hold alignment under pour pressure — the failure point on competitor forms.',
  },
  {
    name: 'Best Corner Fastening in the Industry',
    desc: 'More fastening surface area at corners than any comparable ICF system. Critical when wall pressure peaks at 90° angles during pour.',
  },
];


export default function PricingPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    'project-type': '',
    footage: '',
    timeline: '',
    notes: '',
  });
  const [status, setStatus] = useState<FormState>('idle');

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/.netlify/functions/pricing-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'bg-white/5 border border-white/10 focus:border-[#2D4A6B] text-[#F0EBE3] placeholder-[#9A9087] px-4 py-3.5 text-sm outline-none transition-colors duration-200 w-full';

  return (
    <div className="bg-[#1A1A1A] min-h-screen">
      <Nav />

      {/* Hero + Form */}
      <section
        className="relative pt-16 min-h-screen flex items-center"
        style={{
          backgroundImage: 'url(/icf-images/job-site.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-[#1A1A1A]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Headline + trust signals */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[#F0EBE3] leading-tight mb-6 tracking-tight">
                Get ICF Pricing for Your Project.
              </h1>
              <p className="text-[#9A9087] text-lg leading-relaxed mb-10">
                We work directly with contractors and GCs. Give us your project specs and we'll have accurate material pricing back to you within one business day.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'Material sourcing for residential, commercial, and ag builds',
                  'Project support from spec review to pour day',
                  'Response within one business day',
                  'Straight forms and 90° corners available',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-[#F0EBE3] text-sm font-medium">
                    <span className="text-[#C8883A] font-black text-base">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <div className="bg-[#242424] border border-white/[0.08] p-8 md:p-10">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="text-[#C8883A] text-5xl font-black mb-4">✓</div>
                  <h3 className="text-[#F0EBE3] font-black text-2xl mb-3">Request received.</h3>
                  <p className="text-[#9A9087] text-sm leading-relaxed">
                    We'll have pricing to you within one business day. Check your inbox.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-[#F0EBE3] font-black text-2xl mb-1">Request Project Pricing</h2>
                  <p className="text-[#9A9087] text-sm mb-8">All fields marked * are required.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#9A9087] text-xs font-medium uppercase tracking-widest mb-1.5">Name *</label>
                        <input type="text" name="name" required placeholder="Your name" value={form.name} onChange={set('name')} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-[#9A9087] text-xs font-medium uppercase tracking-widest mb-1.5">Company</label>
                        <input type="text" name="company" placeholder="Company name" value={form.company} onChange={set('company')} className={inputClass} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#9A9087] text-xs font-medium uppercase tracking-widest mb-1.5">Email *</label>
                        <input type="email" name="email" required placeholder="you@company.com" value={form.email} onChange={set('email')} className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-[#9A9087] text-xs font-medium uppercase tracking-widest mb-1.5">Phone *</label>
                        <input type="tel" name="phone" required placeholder="(555) 000-0000" value={form.phone} onChange={set('phone')} className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#9A9087] text-xs font-medium uppercase tracking-widest mb-1.5">Project Location *</label>
                      <input type="text" name="location" required placeholder="City, State" value={form.location} onChange={set('location')} className={inputClass} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#9A9087] text-xs font-medium uppercase tracking-widest mb-1.5">Project Type</label>
                        <select name="project-type" value={form['project-type']} onChange={set('project-type')} className={inputClass}>
                          <option value="" disabled>Select type</option>
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Agricultural / Barndominium">Agricultural / Barndominium</option>
                          <option value="Safe Room">Safe Room</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#9A9087] text-xs font-medium uppercase tracking-widest mb-1.5">Est. Wall Linear Footage</label>
                        <input type="text" name="footage" placeholder="e.g. 400 LF" value={form.footage} onChange={set('footage')} className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#9A9087] text-xs font-medium uppercase tracking-widest mb-1.5">Project Timeline</label>
                      <select name="timeline" value={form.timeline} onChange={set('timeline')} className={inputClass}>
                        <option value="" disabled>When do you plan to start?</option>
                        <option value="Within 30 days">Within 30 days</option>
                        <option value="1–3 months">1–3 months</option>
                        <option value="3–6 months">3–6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Just planning">Just planning / estimating</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#9A9087] text-xs font-medium uppercase tracking-widest mb-1.5">Project Notes</label>
                      <textarea
                        name="notes"
                        rows={3}
                        placeholder="Wall height, core size, special conditions — anything that helps us quote accurately."
                        value={form.notes}
                        onChange={set('notes')}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-[#A63D2F] text-xs">Something went wrong. Please try again or email us directly.</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="bg-[#2D4A6B] hover:bg-[#1E3552] disabled:opacity-60 disabled:cursor-not-allowed text-[#F0EBE3] font-black text-sm uppercase tracking-widest px-6 py-4 transition-colors duration-200 mt-2"
                    >
                      {status === 'loading' ? 'Sending…' : 'Request Pricing →'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-[#1A1A1A] py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#9A9087] text-xs font-bold tracking-widest uppercase mb-3">The Wall System</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#F0EBE3] mb-4 tracking-tight">
            ICF Forms — Straight &amp; 90° Corner Forms
          </h2>
          <p className="text-[#9A9087] text-lg max-w-2xl mb-16 leading-relaxed">
            The same form system used in residential builds, barndominiums, commercial slabs, and safe rooms. Engineered for the field, not just the spec sheet.
          </p>

          {/* Feature diagram */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-white p-2">
              <img
                src="/icf-images/features.jpeg"
                alt="ICF corner form — 5 key features"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              {features.map(f => (
                <div key={f.name} className="border-l-2 border-[#C8883A] pl-5">
                  <h3 className="text-[#F0EBE3] font-black text-base mb-1">{f.name}</h3>
                  <p className="text-[#9A9087] text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product photos */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#242424] border border-white/[0.06] p-6">
              <img
                src="/icf-images/straight-form.jpg"
                alt="ICF straight form"
                className="w-full object-contain mb-5"
                style={{ maxHeight: '320px' }}
              />
              <h3 className="text-[#F0EBE3] font-black text-lg mb-2">Straight Form</h3>
              <p className="text-[#9A9087] text-sm leading-relaxed">
                Standard flat wall sections. Reversible interlock, vertical locking webs, tall rebar chairs. Available in 4", 6", 8", 10", and 12" core sizes.
              </p>
            </div>
            <div className="bg-[#242424] border border-white/[0.06] p-6">
              <img
                src="/icf-images/corner-form.png"
                alt="ICF 90-degree corner form"
                className="w-full object-contain mb-5"
                style={{ maxHeight: '320px' }}
              />
              <h3 className="text-[#F0EBE3] font-black text-lg mb-2">90° Corner Form</h3>
              <p className="text-[#9A9087] text-sm leading-relaxed">
                Factory-formed 90° corners with reinforced bands and the best corner fastening system in the industry. No field-built corners — consistent geometry every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#242424] border-t border-white/[0.06] py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-[#F0EBE3] mb-4 tracking-tight">
          Ready to get pricing?
        </h2>
        <p className="text-[#9A9087] mb-8">Fill out the form above and we'll follow up within one business day.</p>
        <a
          href="#top"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="inline-block bg-[#2D4A6B] hover:bg-[#1E3552] text-[#F0EBE3] font-black text-sm uppercase tracking-widest px-8 py-4 transition-colors duration-200"
        >
          Request Pricing →
        </a>
      </section>

      <Footer />
    </div>
  );
}

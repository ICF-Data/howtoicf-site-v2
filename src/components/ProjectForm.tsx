import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

type Props = {
  /** Fixed territory for landing pages. Omit to show the region dropdown. */
  region?: string;
  source: string;
  showTiming?: boolean;
  showNote?: boolean;
  locationPlaceholder?: string;
  submitLabel: string;
  fine: string;
};

const ROLES = ['Contractor', 'General contractor', 'Owner-builder', 'Architect or engineer'];
const TIMINGS = ['Planning', 'Permitted', 'Ready to order'];
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

const inputClass =
  'bg-white/5 border border-white/10 focus:border-amber-500/50 text-white placeholder-gray-600 px-4 py-3.5 text-sm outline-none transition-colors duration-200 w-full';
const labelClass = 'block text-gray-500 text-xs font-medium uppercase tracking-widest mb-1.5';

export default function ProjectForm({
  region,
  source,
  showTiming = false,
  showNote = false,
  locationPlaceholder = 'City or ZIP code',
  submitLabel,
  fine,
}: Props) {
  const [form, setForm] = useState({
    region: region ?? '',
    role: '',
    location: '',
    name: '',
    phone: '',
    email: '',
    timeline: '',
    notes: '',
  });
  const [status, setStatus] = useState<FormState>('idle');

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) utm[key] = value;
    }

    try {
      const res = await fetch('/.netlify/functions/pricing-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source, ...utm }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="text-amber-500 text-5xl font-black mb-4">✓</div>
        <h3 className="text-white font-black text-2xl mb-2">Request received.</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          It came to me, not a queue. I will call or text you back.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {!region && (
        <div>
          <label className={labelClass}>Region *</label>
          <select required value={form.region} onChange={set('region')} className={inputClass}>
            <option value="" disabled>
              Select your region
            </option>
            <option value="Northeast US">Northeast US</option>
            <option value="Southeast US">Southeast US</option>
            <option value="Southwest US">Southwest US</option>
          </select>
        </div>
      )}

      <div>
        <label className={labelClass}>I am a *</label>
        <select required value={form.role} onChange={set('role')} className={inputClass}>
          <option value="" disabled>
            Select one
          </option>
          {ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>City / ZIP{region ? ' *' : ''}</label>
        <input
          type="text"
          required={Boolean(region)}
          placeholder={locationPlaceholder}
          value={form.location}
          onChange={set('location')}
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>Name *</label>
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
          <label className={labelClass}>Phone *</label>
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
          <label className={labelClass}>Email *</label>
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

      {showTiming && (
        <div>
          <label className={labelClass}>Timing *</label>
          <select required value={form.timeline} onChange={set('timeline')} className={inputClass}>
            <option value="" disabled>
              Where is the project?
            </option>
            {TIMINGS.map((timing) => (
              <option key={timing} value={timing}>
                {timing}
              </option>
            ))}
          </select>
        </div>
      )}

      {showNote && (
        <div>
          <label className={labelClass}>Project note</label>
          <textarea
            rows={3}
            placeholder="Wall square footage, timeline, wood or ICF today"
            value={form.notes}
            onChange={set('notes')}
            className={`${inputClass} resize-none`}
          />
        </div>
      )}

      {status === 'error' && (
        <p className="text-red-400 text-xs">
          Something went wrong. Please try again, or call or text 605-269-7898.
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
            {submitLabel} <ArrowRight size={16} />
          </>
        )}
      </button>

      <p className="text-gray-500 text-xs text-center mt-1">{fine}</p>
    </form>
  );
}

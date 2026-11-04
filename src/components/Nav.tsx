import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'How to Work with Eric', href: '/#work-with-eric' },
  { label: 'Specs', href: '/#specs' },
  { label: 'Get Pricing', href: '/get-pricing' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07090d]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <span className="text-white font-black text-xl tracking-tight">
            HowTo<span className="text-amber-500">ICF</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium tracking-wide">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/#checklist"
          className="hidden lg:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-5 py-2.5 transition-all duration-200 tracking-wide uppercase"
        >
          Free Checklist →
        </a>

        <button className="lg:hidden text-white" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#07090d] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="/#checklist"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 bg-amber-500 text-black text-sm font-bold px-5 py-2.5 tracking-wide uppercase w-fit"
          >
            Free Checklist →
          </a>
        </div>
      )}
    </header>
  );
}

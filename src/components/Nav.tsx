import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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

        <nav className="hidden md:flex items-center gap-8">
          {['Guides', 'About', 'Find an Installer'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#checklist"
          className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-5 py-2.5 transition-all duration-200 tracking-wide uppercase"
        >
          Free Checklist →
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#07090d] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {['Guides', 'About', 'Find an Installer'].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setOpen(false)}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#checklist"
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

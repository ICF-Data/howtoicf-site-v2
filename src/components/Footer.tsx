import { DISCLOSURE, EMAIL, FACEBOOK_URL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_HREF } from '../lib/site';

export default function Footer() {
  const links = [
    { label: 'How to Work with Eric', href: '/#work-with-eric' },
    { label: 'About', href: '/about/' },
    { label: 'Privacy', href: '/privacy/' },
    { label: 'Contact', href: '/contact/' },
  ];

  return (
    <footer className="bg-[#07090d] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-white font-black text-lg tracking-tight">
              howto<span className="text-amber-500">icf</span>.com
            </span>
            <p className="text-gray-500 text-xs mt-1">The manufacturer rep’s ICF field guide.</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-gray-500 text-sm text-center md:text-right">
            <p>
              <a href={`tel:${PHONE_HREF}`} className="hover:text-white transition-colors duration-200">{PHONE_DISPLAY}</a>
              {' · '}
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors duration-200">{EMAIL}</a>
            </p>
            <p className="mt-1">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className="hover:text-white transition-colors duration-200">Instagram @howtoicf</a>
              {' · '}
              <a href={FACEBOOK_URL} target="_blank" rel="noopener" className="hover:text-white transition-colors duration-200">Facebook @howtoicf</a>
            </p>
          </div>
        </div>

        <p className="mt-8 pt-8 border-t border-white/5 text-gray-500 text-xs leading-relaxed max-w-4xl">
          {DISCLOSURE}
        </p>
      </div>
    </footer>
  );
}

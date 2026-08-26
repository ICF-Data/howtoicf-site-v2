export default function Footer() {
  const links = [
    { label: 'Guides', href: '/guides/' },
    { label: 'About', href: '/about/' },
    { label: 'Privacy', href: '/privacy/' },
    { label: 'Contact', href: '/contact/' },
  ];

  return (
    <footer className="bg-[#07090d] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-white font-black text-lg tracking-tight">
            HowTo<span className="text-amber-500">ICF</span>
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-gray-600 text-sm text-center md:text-right">
          The independent ICF field guide.
        </p>
      </div>
    </footer>
  );
}

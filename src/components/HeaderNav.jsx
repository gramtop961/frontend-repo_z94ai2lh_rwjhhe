import { useState } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'Penetration Testing', href: '#services' },
      { label: 'Website', href: '#services' },
      { label: 'Mobile Applications', href: '#services' },
      { label: 'Infrastructure', href: '#services' },
      { label: 'Cloud', href: '#services' },
      { label: 'Compliance', href: '#services' },
      { label: 'SOC 2', href: '#services' },
      { label: 'ISO 27001', href: '#services' },
      { label: 'Security Monitoring', href: '#services' },
    ],
  },
  { label: 'Product – Nex', href: '#nex' },
  { label: 'Blog', href: '#blog' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0A0F24]/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-cyan-400/40 blur-md" />
              <Shield className="relative h-7 w-7 text-cyan-300" />
            </div>
            <span className="font-semibold tracking-wider text-cyan-200">Nexyra</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="inline-flex items-center gap-1 text-sm text-blue-100/90 hover:text-cyan-200 transition">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute mt-3 w-64 rounded-xl border border-white/10 bg-[#0C1430]/95 shadow-xl">
                        <ul className="py-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="block px-3 py-2 text-sm text-blue-100/90 hover:text-cyan-200 hover:bg-white/5 rounded-lg"
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    className="text-sm text-blue-100/90 hover:text-cyan-200 transition"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium text-[#0A0F24]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 transition-transform group-hover:scale-105" />
              <span className="relative">Request a Quote</span>
            </a>
          </nav>

          <button
            className="lg:hidden rounded-lg p-2 text-cyan-200 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-blue-100/90 hover:text-cyan-200 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-5 py-2 font-medium text-[#0A0F24]"
            >
              Request a Quote
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

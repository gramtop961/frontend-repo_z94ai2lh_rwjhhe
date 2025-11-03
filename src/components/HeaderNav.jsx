import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Penetration Testing', to: '/services/penetration-testing' },
      { label: 'Web Applications', to: '/services/web-applications' },
      { label: 'Mobile Applications', to: '/services/mobile-applications' },
      { label: 'Infrastructure', to: '/services/infrastructure' },
      { label: 'Cloud Security', to: '/services/cloud-security' },
      { label: 'Compliance', to: '/compliance' },
      { label: 'SOC 2', to: '/compliance/soc2' },
      { label: 'ISO 27001', to: '/compliance/iso27001' },
      { label: 'Security Monitoring', to: '/services/security-monitoring' },
    ],
  },
  { label: 'Product – Nex', to: '/nex' },
  { label: 'Blog', to: '/blog' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0A0F24]/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-cyan-400/40 blur-md" />
              <Shield className="relative h-7 w-7 text-cyan-300" />
            </div>
            <span className="font-semibold tracking-wider text-cyan-200">Nexyra</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <NavLink to={item.to} className={({ isActive }) => `inline-flex items-center gap-1 text-sm transition ${isActive ? 'text-cyan-200' : 'text-blue-100/90 hover:text-cyan-200'}`}>
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </NavLink>
                    {servicesOpen && (
                      <div className="absolute mt-3 w-64 rounded-xl border border-white/10 bg-[#0C1430]/95 shadow-xl">
                        <ul className="py-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <NavLink
                                to={child.to}
                                className={({ isActive }) => `block px-3 py-2 text-sm rounded-lg ${isActive ? 'text-cyan-200 bg-white/5' : 'text-blue-100/90 hover:text-cyan-200 hover:bg-white/5'}`}
                              >
                                {child.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    className={({ isActive }) => `text-sm transition ${isActive ? 'text-cyan-200' : 'text-blue-100/90 hover:text-cyan-200'}`}
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium text-[#0A0F24]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 transition-transform group-hover:scale-105" />
              <span className="relative">Request a Quote</span>
            </Link>
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
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `block rounded-lg px-3 py-2 ${isActive ? 'text-cyan-200 bg-white/5' : 'text-blue-100/90 hover:text-cyan-200 hover:bg-white/5'}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-5 py-2 font-medium text-[#0A0F24]"
            >
              Request a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

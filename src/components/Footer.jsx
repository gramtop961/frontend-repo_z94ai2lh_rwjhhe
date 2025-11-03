import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0A0F24] text-blue-100">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-cyan-400/40 blur-md" />
                <Shield className="relative h-7 w-7 text-cyan-300" />
              </div>
              <span className="font-semibold tracking-wider text-cyan-200">Nexyra</span>
            </div>
            <p className="mt-4 text-sm text-blue-200/80">
              Futuristic cybersecurity across offensive testing, cloud defense, and compliance.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-50">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-cyan-200">About</Link></li>
              <li><Link to="/blog" className="hover:text-cyan-200">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-50">Services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/services/penetration-testing" className="hover:text-cyan-200">Penetration Testing</Link></li>
              <li><Link to="/services/web-applications" className="hover:text-cyan-200">Web Applications</Link></li>
              <li><Link to="/services/cloud-security" className="hover:text-cyan-200">Cloud Security</Link></li>
              <li><Link to="/compliance" className="hover:text-cyan-200">Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-50">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-blue-200/90"><Mail className="h-4 w-4" /> hello@nexyra.io</li>
              <li className="flex items-center gap-2 text-blue-200/90"><Phone className="h-4 w-4" /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-2 text-blue-200/90"><MapPin className="h-4 w-4" /> Remote • Worldwide</li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-cyan-200">
                  LinkedIn <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-blue-200/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Nexyra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-cyan-200">Privacy</Link>
            <Link to="/terms" className="hover:text-cyan-200">Terms</Link>
            <Link to="/security" className="hover:text-cyan-200">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

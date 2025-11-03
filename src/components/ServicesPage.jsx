import { motion } from 'framer-motion';
import { Shield, Smartphone, Cloud, Server, Network, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Penetration Testing', icon: Shield, to: '/services/penetration-testing', desc: 'Web, mobile, infrastructure, and red teaming.' },
  { title: 'Web Applications', icon: Smartphone, to: '/services/web-applications', desc: 'OWASP Top 10, business logic, and API coverage.' },
  { title: 'Mobile Applications', icon: Smartphone, to: '/services/mobile-applications', desc: 'iOS/Android, static/dynamic, supply‑chain risks.' },
  { title: 'Infrastructure', icon: Server, to: '/services/infrastructure', desc: 'Internal/external, Active Directory, lateral movement.' },
  { title: 'Cloud Security', icon: Cloud, to: '/services/cloud-security', desc: 'Hardening, CIEM/CSPM, identity and data controls.' },
  { title: 'Security Monitoring', icon: Network, to: '/services/security-monitoring', desc: 'Detection engineering and continuous validation.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0A0F24] pt-24 text-blue-50">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">Services</h1>
          <p className="mt-3 text-blue-200/80">Expert‑led security assessments and advisory services.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-[#0C1430]/60 p-6"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-blue-200/80">{s.desc}</p>
              <Link to={s.to} className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">
                Explore <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

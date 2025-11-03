import { motion } from 'framer-motion';
import { Shield, Smartphone, Cloud, Server, Network, Lock, ArrowRight, Building2, Hospital, Factory, GraduationCap, Landmark, Cpu, Star } from 'lucide-react';

const services = [
  { title: 'AI‑Driven Penetration Testing', icon: Shield, desc: 'Smarter, adaptive testing powered by machine learning to uncover complex attack paths.' },
  { title: 'Drone Penetration Testing', icon: Network, desc: 'Physical perimeter and wireless assessments leveraging aerial reconnaissance.' },
  { title: 'Cloud Security', icon: Cloud, desc: 'End‑to‑end hardening, misconfiguration detection, and CIEM/ CSPM advisory.' },
  { title: 'Mobile & Web Apps', icon: Smartphone, desc: 'Deep OWASP coverage with business‑logic abuse detection and API fuzzing.' },
  { title: 'Infrastructure', icon: Server, desc: 'Internal/External, AD abuse, lateral movement simulation, and more.' },
  { title: 'Compliance', icon: Lock, desc: 'SOC 2, ISO 27001, and regulatory alignment without the friction.' },
];

const industries = [
  { label: 'Finance', icon: Building2, desc: 'Payment security, fraud prevention, and high‑availability operations.' },
  { label: 'Healthcare', icon: Hospital, desc: 'HIPAA‑aligned testing and medical device security expertise.' },
  { label: 'Manufacturing', icon: Factory, desc: 'OT/ICS security and plant‑floor segmentation hardening.' },
  { label: 'Education', icon: GraduationCap, desc: 'Protecting student data and campus networks at scale.' },
  { label: 'Government', icon: Landmark, desc: 'Critical infrastructure and regulatory‑driven controls.' },
  { label: 'Technology', icon: Cpu, desc: 'Secure SDLC, DevSecOps, and cloud‑native resilience.' },
];

const testimonials = [
  {
    quote: 'Nexyra delivered the most thorough assessment we\'ve had — findings were actionable and mapped to business risk.',
    author: 'CTO, FinTech Unicorn',
  },
  {
    quote: 'Their red team simulated real adversaries and uncovered gaps our tools missed. Our detection matured overnight.',
    author: 'Head of Security Operations, Global Retail',
  },
  {
    quote: 'From SOC 2 scoping to evidence collection, the process was painless and fast. Exactly what we needed.',
    author: 'VP Engineering, SaaS Platform',
  },
];

export default function HighlightsSections() {
  return (
    <div className="bg-[#0A0F24] text-blue-50">
      {/* Trust logos */}
      <section className="border-y border-white/10 bg-gradient-to-b from-[#0A0F24] to-[#0C1430]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <div className="mb-6 text-center text-sm uppercase tracking-widest text-blue-200/70">Trusted by Leading Enterprises</div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-center justify-center rounded-xl border border-cyan-400/20 bg-white/5 px-3 py-4 text-cyan-200 shadow-[0_0_20px_theme(colors.cyan.400/0.2)]"
              >
                <span className="text-xs">Enterprise {i + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Advanced Security Services</h2>
            <p className="mt-3 text-blue-200/80">Expert‑led assessments with automation where it counts.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0C1430]/60 p-6 shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-opacity group-hover:opacity-70" />
                <div className="flex items-center gap-3">
                  <s.icon className="h-6 w-6 text-cyan-300" />
                  <h3 className="font-medium text-blue-50">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-blue-200/80">{s.desc}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">
                  Schedule an Assessment <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Industries We Secure</h2>
            <p className="mt-3 text-blue-200/80">Tailored engagements for complex, regulated environments.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-5"
              >
                <div className="flex items-center gap-3">
                  <ind.icon className="h-6 w-6 text-cyan-300" />
                  <span className="text-blue-100 font-medium">{ind.label}</span>
                </div>
                <p className="mt-2 text-sm text-blue-200/80">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative border-t border-white/10 bg-gradient-to-b from-[#0B1330] to-[#0A0F24]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">What Our Clients Say</h2>
            <p className="mt-3 text-blue-200/80">Outcomes that speak for themselves.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0C1430]/60 p-6"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="mb-3 flex items-center gap-1 text-cyan-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cyan-300/30 text-cyan-300/70" />
                  ))}
                </div>
                <p className="text-blue-100">“{t.quote}”</p>
                <p className="mt-4 text-sm text-blue-200/80">{t.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Shield, Smartphone, Cloud, Server, Network, Lock, ArrowRight, Building2, Hospital, Factory, GraduationCap, Landmark, Cpu } from 'lucide-react';

const services = [
  { title: 'AI‑Driven Penetration Testing', icon: Shield, desc: 'Smarter, adaptive testing powered by machine learning to uncover complex attack paths.' },
  { title: 'Drone Penetration Testing', icon: Network, desc: 'Physical perimeter and wireless assessments leveraging aerial reconnaissance.' },
  { title: 'Cloud Security', icon: Cloud, desc: 'End‑to‑end hardening, misconfiguration detection, and CIEM/ CSPM advisory.' },
  { title: 'Mobile & Web Apps', icon: Smartphone, desc: 'Deep OWASP coverage with business‑logic abuse detection and API fuzzing.' },
  { title: 'Infrastructure', icon: Server, desc: 'Internal/External, AD abuse, lateral movement simulation, and more.' },
  { title: 'Compliance', icon: Lock, desc: 'SOC 2, ISO 27001, and regulatory alignment without the friction.' },
];

const industries = [
  { label: 'Finance', icon: Building2 },
  { label: 'Healthcare', icon: Hospital },
  { label: 'Manufacturing', icon: Factory },
  { label: 'Education', icon: GraduationCap },
  { label: 'Government', icon: Landmark },
  { label: 'Technology', icon: Cpu },
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
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1330]/60 p-5"
              >
                <ind.icon className="h-6 w-6 text-cyan-300" />
                <span className="text-blue-100">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nex Product */}
      <section id="nex" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Nex — Automated Web App Vulnerability Scanner</h2>
              <p className="mt-4 text-blue-200/80">
                Real‑time detection, AI‑assisted remediation, and seamless CI/CD integrations.
                Nex amplifies your team with continuous, intelligent coverage.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-cyan-200">
                <span className="rounded-full border border-cyan-300/40 px-3 py-1">Real‑time Vulnerability Detection</span>
                <span className="rounded-full border border-cyan-300/40 px-3 py-1">AI Remediation</span>
                <span className="rounded-full border border-cyan-300/40 px-3 py-1">CI/CD Integration</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="group relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-[#0A0F24]">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 transition-transform group-hover:scale-105" />
                  <span className="relative">Book a Demo</span>
                </a>
                <a href="#blog" className="rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-200 hover:border-cyan-300 hover:bg-cyan-300/10">Learn More</a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B1330] to-[#0F1C3D] p-4 shadow-2xl">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[#0D1736]">
                  {/* Dashboard mock */}
                  <div className="h-full w-full p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="h-2 w-24 rounded bg-cyan-400/40" />
                      <div className="h-2 w-10 rounded bg-cyan-400/20" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="rounded-lg border border-white/10 bg-[#0B1330] p-3">
                          <div className="h-2 w-20 rounded bg-cyan-400/30" />
                          <div className="mt-2 h-16 rounded bg-gradient-to-br from-cyan-400/10 to-blue-500/10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-8 -z-[0] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.2),transparent_60%)]" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

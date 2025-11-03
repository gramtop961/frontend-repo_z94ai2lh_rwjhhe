import { motion } from 'framer-motion';
import { Shield, Bug, Network, Globe, Smartphone, Server, ArrowRight } from 'lucide-react';

const offerings = [
  { icon: Globe, title: 'Web Applications', desc: 'Deep manual testing with automation assistance, covering OWASP Top 10 and logic abuse.' },
  { icon: Smartphone, title: 'Mobile Applications', desc: 'Static and dynamic analysis, API/fleet security, store policy resilience.' },
  { icon: Server, title: 'Infrastructure', desc: 'Internal and external, AD abuse, privilege escalation, and lateral movement.' },
  { icon: Network, title: 'Red Teaming', desc: 'Objective‑based adversary simulation mapped to MITRE ATT&CK.' },
  { icon: Bug, title: 'Social Engineering', desc: 'Phishing simulations, payload crafting, and response readiness.' },
];

export default function PenetrationTestingPage() {
  return (
    <div className="bg-[#0A0F24] pt-24 text-blue-50">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#0C1430]/60 px-4 py-1.5 text-xs font-medium text-cyan-300">Penetration Testing</span>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Find What Matters. Fix What Counts.</h1>
          <p className="mt-3 text-blue-200/80">Evidence‑driven testing led by senior engineers, augmented by AI to surface complex attack paths faster.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {offerings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6"
            >
              <div className="flex items-center gap-3">
                <o.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="font-medium">{o.title}</h3>
              </div>
              <p className="mt-2 text-sm text-blue-200/80">{o.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B1330] to-[#0F1C3D] p-6">
            <h2 className="text-2xl font-semibold">Why Choose Us</h2>
            <ul className="mt-4 space-y-3 text-sm text-blue-200/80">
              <li>• Senior‑led testing with reproducible proof of exploit.</li>
              <li>• AI‑assisted reconnaissance, payload generation, and correlation.</li>
              <li>• Business‑risk mapping and prioritized remediation.</li>
              <li>• Retesting included and clear remediation guidance.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6">
            <h2 className="text-2xl font-semibold">Engagement Flow</h2>
            <ol className="mt-4 space-y-3 text-sm text-blue-200/80">
              <li>1. Scoping & threat modeling</li>
              <li>2. Testing & exploitation with continuous updates</li>
              <li>3. Reporting with clear risk and impact</li>
              <li>4. Retesting and validation</li>
            </ol>
            <a href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">
              Request a proposal <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

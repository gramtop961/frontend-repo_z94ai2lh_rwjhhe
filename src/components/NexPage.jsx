import { motion } from 'framer-motion';

export default function NexPage() {
  return (
    <div className="bg-[#0A0F24] pt-24 text-blue-50">
      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_55%)]" />
        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-semibold sm:text-4xl">Nex — Automated Web App Vulnerability Scanner</h1>
            <p className="mt-4 text-blue-200/80">
              Real‑time detection, AI‑assisted remediation, and seamless CI/CD integrations. Nex amplifies your team with continuous, intelligent coverage.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-cyan-200">
              <span className="rounded-full border border-cyan-300/40 px-3 py-1">Real‑time Vulnerability Detection</span>
              <span className="rounded-full border border-cyan-300/40 px-3 py-1">AI Remediation</span>
              <span className="rounded-full border border-cyan-300/40 px-3 py-1">CI/CD Integration</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="group relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-[#0A0F24]">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 transition-transform group-hover:scale-105" />
                <span className="relative">Book a Demo</span>
              </a>
              <a href="/blog" className="rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-200 hover:border-cyan-300 hover:bg-cyan-300/10">Learn More</a>
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
      </section>
    </div>
  );
}

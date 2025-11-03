import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSpline() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0F24]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0F24]/30 via-[#0A0F24]/50 to-[#0A0F24]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#0C1430]/60 px-4 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur">
            Next‑Gen Cybersecurity
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-blue-50 sm:text-5xl md:text-6xl">
            Securing the Future — One Vulnerability at a Time.
          </h1>
          <p className="mx-auto max-w-2xl text-blue-200/80">
            Nexyra delivers elite security testing, real‑time threat visibility, and a
            futuristic approach to protecting what matters most.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#services"
              className="group relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-[#0A0F24]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 transition-transform group-hover:scale-105" />
              <span className="relative">Explore Services</span>
            </a>
            <a
              href="#nex"
              className="rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-200 hover:border-cyan-300 hover:bg-cyan-300/10"
            >
              Meet Nex
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

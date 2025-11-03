import HeroSpline from './HeroSpline';
import HighlightsSections from './HighlightsSections';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Nexyra helped us uncover critical identity risks in days and guided rapid remediation across cloud and on‑prem.',
    author: 'CTO, FinTech Unicorn',
  },
  {
    quote: 'Their red team blended creative tradecraft with automation. The report was actionable and board‑ready.',
    author: 'CISO, Global Manufacturer',
  },
  {
    quote: 'Compliance went from chaos to clarity. Evidence mapping and control testing were seamless.',
    author: 'VP Security, SaaS Leader',
  },
];

export default function HomePage() {
  return (
    <main>
      <HeroSpline />
      <HighlightsSections />

      <section className="relative bg-[#0A0F24] py-20 text-blue-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-3 text-blue-200/80">Real outcomes from high‑stakes security programs.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6"
              >
                <p className="text-blue-100">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-cyan-300">{t.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

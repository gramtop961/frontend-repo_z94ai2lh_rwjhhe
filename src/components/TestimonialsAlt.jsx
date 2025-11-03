import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const altTestimonials = [
  {
    title: 'Proactive Cloud Defense',
    quote: 'Their cloud security review caught misconfigurations our internal tools missed.',
    author: 'Head of Platform, SaaS'
  },
  {
    title: 'Actionable Red Teaming',
    quote: 'Clear attack paths, prioritized fixes, and dev‑ready guidance — exactly what we needed.',
    author: 'Director of Security, HealthTech'
  },
  {
    title: 'Compliance Without the Drag',
    quote: 'They mapped controls to our workflows so audits stopped slowing teams down.',
    author: 'COO, FinServ'
  },
];

export default function TestimonialsAlt() {
  return (
    <section className="relative bg-gradient-to-b from-[#0A0F24] to-[#0B1330] py-20 text-blue-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">More Client Wins</h2>
            <p className="mt-2 text-blue-200/80">Proof that security can enable speed.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {altTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#0C1430]/60 p-6"
            >
              <div className="mb-3 flex items-center gap-1 text-cyan-300">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-cyan-300 text-cyan-300" />
                ))}
              </div>
              <h3 className="text-base font-semibold text-blue-50">{t.title}</h3>
              <p className="mt-2 text-blue-100">“{t.quote}”</p>
              <p className="mt-3 text-sm text-cyan-300">{t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-[#0A0F24] pt-24 text-blue-50">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">About Nexyra</h1>
          <p className="mt-3 text-blue-200/80">We are offensive security engineers and blue‑team operators building a safer digital future.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["CREST/OSCP/OSWE certified engineers","Partners across cloud and DevSecOps ecosystems","Global delivery with 24/7 support"].map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6 text-center">
              <div className="mx-auto h-2 w-24 rounded bg-cyan-400/40" />
              <p className="mt-3 text-sm text-blue-200/80">{t}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

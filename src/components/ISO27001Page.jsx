import { motion } from 'framer-motion';

export default function ISO27001Page() {
  return (
    <div className="bg-[#0A0F24] pt-24 text-blue-50">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold sm:text-4xl">ISO 27001 Program</h1>
          <p className="mt-3 text-blue-200/80">Design, implement, and certify an ISMS aligned to your business risk.</p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-8 rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6">
          <h2 className="text-xl font-semibold">What’s Included</h2>
          <ul className="mt-3 space-y-2 text-sm text-blue-200/80">
            <li>• ISMS scoping and risk assessment</li>
            <li>• Annex A controls design and rollout</li>
            <li>• Policy, procedure, and training packs</li>
            <li>• Internal audit and certification readiness</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}

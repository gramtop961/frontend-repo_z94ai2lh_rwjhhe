import { motion } from 'framer-motion';

export default function SOC2Page() {
  return (
    <div className="bg-[#0A0F24] pt-24 text-blue-50">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold sm:text-4xl">SOC 2 Readiness & Attestation</h1>
          <p className="mt-3 text-blue-200/80">Accelerate your SOC 2 journey with control design, evidence mapping, and auditor coordination.</p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-8 rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6">
          <h2 className="text-xl font-semibold">What’s Included</h2>
          <ul className="mt-3 space-y-2 text-sm text-blue-200/80">
            <li>• Gap assessment and remediation plan</li>
            <li>• Control design and implementation guidance</li>
            <li>• Evidence collection and mapping to Trust Services Criteria</li>
            <li>• Auditor selection and coordination</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Lock, CheckCircle2, FileCheck, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompliancePage() {
  return (
    <div className="bg-[#0A0F24] pt-24 text-blue-50">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-[#0C1430]/60 px-4 py-1.5 text-xs font-medium text-cyan-300"><Lock className="h-4 w-4"/> Compliance</span>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Compliance Without the Friction</h1>
          <p className="mt-3 text-blue-200/80">Streamlined readiness for SOC 2 and ISO 27001 with evidence mapping and continuous controls.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6">
            <h3 className="text-xl font-semibold">SOC 2 Readiness</h3>
            <p className="mt-2 text-sm text-blue-200/80">From gap assessment to auditor handoff, we get you to attestation faster.</p>
            <ul className="mt-4 space-y-2 text-sm text-blue-200/80">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300"/> Control design & implementation</li>
              <li className="inline-flex items-center gap-2"><FileCheck className="h-4 w-4 text-cyan-300"/> Evidence collection & mapping</li>
              <li className="inline-flex items-center gap-2"><Landmark className="h-4 w-4 text-cyan-300"/> Auditor coordination</li>
            </ul>
            <Link to="/compliance/soc2" className="mt-5 inline-block text-sm text-cyan-300 hover:text-cyan-200">Learn more →</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6">
            <h3 className="text-xl font-semibold">ISO 27001 Program</h3>
            <p className="mt-2 text-sm text-blue-200/80">ISMS scoping, risk treatment, and readiness for certification.</p>
            <ul className="mt-4 space-y-2 text-sm text-blue-200/80">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300"/> Annex A controls implementation</li>
              <li className="inline-flex items-center gap-2"><FileCheck className="h-4 w-4 text-cyan-300"/> Policy & procedure development</li>
              <li className="inline-flex items-center gap-2"><Landmark className="h-4 w-4 text-cyan-300"/> Internal audit & readiness</li>
            </ul>
            <Link to="/compliance/iso27001" className="mt-5 inline-block text-sm text-cyan-300 hover:text-cyan-200">Learn more →</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

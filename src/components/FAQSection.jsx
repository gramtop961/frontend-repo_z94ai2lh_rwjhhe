import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How fast can you start a penetration test?',
    a: 'We can typically begin within 5–7 business days. For critical incidents, we offer expedited onboarding within 48 hours.'
  },
  {
    q: 'Do you test both cloud and on‑prem assets?',
    a: 'Yes. Our teams cover AWS, Azure, GCP, Kubernetes, and traditional networks, with hybrid approaches for modern stacks.'
  },
  {
    q: 'Can you help us achieve SOC 2 or ISO 27001?',
    a: 'Absolutely. We provide readiness assessments, control design, evidence mapping, and continuous monitoring aligned to SOC 2 and ISO 27001.'
  },
  {
    q: 'What makes Nexyra different?',
    a: 'We merge seasoned red teamers with automation and real‑time visibility, delivering reports that are board‑ready and developer‑friendly.'
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1330]/60">
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-left text-blue-50"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-medium">{q}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-blue-200/80">{a}</div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="relative bg-[#0A0F24] py-20 text-blue-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-blue-200/80">Clear answers to help you plan your next step.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-3">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

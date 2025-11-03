import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#0A0F24] pt-24 text-blue-50">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">Contact Nexyra</h1>
          <p className="mt-3 text-blue-200/80">Speak with our experts about an assessment or a Nex demo.</p>
        </div>

        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B1330] to-[#0F1C3D] p-6">
            <form className="grid grid-cols-1 gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Name" className="rounded-lg border border-white/10 bg-[#0D1736] px-4 py-3 text-blue-50 placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/60" />
                <input required placeholder="Company" className="rounded-lg border border-white/10 bg-[#0D1736] px-4 py-3 text-blue-50 placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/60" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input required type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-[#0D1736] px-4 py-3 text-blue-50 placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/60" />
                <input placeholder="Phone" className="rounded-lg border border-white/10 bg-[#0D1736] px-4 py-3 text-blue-50 placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/60" />
              </div>
              <select className="rounded-lg border border-white/10 bg-[#0D1736] px-4 py-3 text-blue-50 outline-none focus:ring-2 focus:ring-cyan-400/60">
                <option>Inquiry Type</option>
                <option>Penetration Testing</option>
                <option>Nex Product Demo</option>
                <option>Compliance</option>
                <option>General</option>
              </select>
              <textarea rows={4} placeholder="Message" className="rounded-lg border border-white/10 bg-[#0D1736] px-4 py-3 text-blue-50 placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-400/60" />
              <button type="submit" className="group relative mt-2 inline-flex w-full items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-[#0A0F24]">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 transition-transform group-hover:scale-105" />
                <span className="relative">Send Message</span>
              </button>
              <p className="text-xs text-blue-200/60">By submitting, you agree to our privacy policy.</p>
            </form>
          </motion.div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6">
              <h4 className="text-lg font-semibold">Our Office</h4>
              <p className="mt-2 text-blue-200/80">123 Cyber Avenue, Suite 7G, San Francisco, CA</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-blue-200/80">
                <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-cyan-300" /> hello@nexyra.io</span>
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-cyan-300" /> +1 (415) 555‑0199</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-cyan-300" /> San Francisco, CA</span>
              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
                <iframe
                  title="map"
                  className="h-56 w-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086803042566!2d-122.4013643235342!3d37.792281311671984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f7b0d1a1%3A0x7d3f050b7a6b9f1e!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1681321234567"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

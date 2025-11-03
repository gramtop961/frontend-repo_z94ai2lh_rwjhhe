import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Red Teaming with AI: The Next Wave of Offense',
    excerpt: 'How large language models augment discovery, payload crafting, and lateral movement.',
    image: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=1200&auto=format&fit=crop',
    tag: 'PenTesting',
  },
  {
    title: 'Cloud Misconfigurations We See Every Week',
    excerpt: 'A practical guide to preventing common identity and storage exposures in multi‑cloud.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    tag: 'Cloud Security',
  },
  {
    title: 'Demystifying SOC 2 for Startups',
    excerpt: 'Streamline your journey with automation, evidence mapping, and continuous controls.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
    tag: 'Compliance',
  },
];

export default function BlogContactSection() {
  return (
    <section id="blog" className="bg-[#0A0F24] text-blue-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Insights & Updates</h2>
          <p className="mt-3 text-blue-200/80">Research, tactics, and stories from the front lines of cybersecurity.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0C1430]/60"
            >
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-xs text-cyan-300">{post.tag}</span>
                <h3 className="mt-2 text-lg font-medium text-blue-50">{post.title}</h3>
                <p className="mt-2 text-sm text-blue-200/80">{post.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200">
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Contact & Footer combined */}
        <div id="contact" className="mt-24 grid items-start gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B1330] to-[#0F1C3D] p-6">
            <h3 className="text-2xl font-semibold">Contact Nexyra</h3>
            <p className="mt-2 text-blue-200/80">Speak with our experts about an assessment or a Nex demo.</p>
            <form className="mt-6 grid grid-cols-1 gap-4">
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
          </div>
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

            <footer className="border-t border-white/10 pt-6 text-sm text-blue-200/70">
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <span>© {new Date().getFullYear()} Nexyra. All rights reserved.</span>
                <div className="flex items-center gap-4">
                  <a className="hover:text-cyan-200" href="#about">About</a>
                  <a className="hover:text-cyan-200" href="#services">Services</a>
                  <a className="hover:text-cyan-200" href="#blog">Blog</a>
                  <a className="hover:text-cyan-200" href="#contact">Contact</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}

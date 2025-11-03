import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

export default function BlogPage() {
  return (
    <div className="bg-[#0A0F24] pt-24 text-blue-50">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">Insights & Updates</h1>
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
      </section>
    </div>
  );
}

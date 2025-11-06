import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Sweet Landing',
    desc: 'Landing page pastel dengan interaksi halus dan glow lembut.',
    link: '#',
    tags: ['React', 'Tailwind', 'Motion'],
    gradient: 'from-pink-400/20 to-violet-400/20',
  },
  {
    title: 'Charming Shop',
    desc: 'UI e-commerce lucu dengan micro-animations.',
    link: '#',
    tags: ['UI/UX', 'Components', 'State'],
    gradient: 'from-fuchsia-400/20 to-pink-400/20',
  },
  {
    title: 'Portfolio 3D',
    desc: 'Sentuhan 3D dengan Spline untuk hero yang hidup.',
    link: '#',
    tags: ['Spline', '3D', 'Framer'],
    gradient: 'from-violet-400/20 to-indigo-400/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center text-3xl font-bold text-slate-900 sm:text-4xl"
      >
        Proyek Pilihan
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`group relative overflow-hidden rounded-2xl border border-pink-100 bg-white/70 p-5 shadow-sm backdrop-blur`}
          >
            <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.gradient} blur-2xl transition group-hover:scale-110`} />
            <div className="relative z-10">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <Star className="h-4 w-4 text-pink-500" />
              </div>
              <p className="text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-pink-50 px-2 py-0.5 text-xs text-pink-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-violet-600">
                <span>Lihat detail</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

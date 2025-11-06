import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center text-3xl font-bold text-slate-900 sm:text-4xl"
      >
        Hai! Aku Iofi-inspired Creator <span className="align-middle text-pink-500">❤</span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-pink-100 bg-white/70 p-6 shadow-sm backdrop-blur"
        >
          <p className="text-slate-700">
            Aku senang membuat UI cantik bertema pastel dengan animasi yang lembut dan interaktif. Mulai dari landing page, microsite, hingga portofolio seperti ini, semua kuracik dengan detail.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-600">
            <li>Desain manis yang elegan</li>
            <li>Animasi halus menggunakan Framer Motion</li>
            <li>3D touch via Spline untuk kesan hidup</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-violet-100 bg-gradient-to-br from-pink-50 to-violet-50 p-6"
        >
          <h3 className="mb-2 text-lg font-semibold text-slate-900">Keahlian</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'React',
              'Tailwind',
              'Framer Motion',
              'Spline 3D',
              'Figma',
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-pink-200 bg-white/70 px-3 py-1 text-sm text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-pink-600">
            <Heart className="h-4 w-4" />
            <span>Selalu mengutamakan detail dan rasa.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

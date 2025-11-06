import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-pink-50 via-violet-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/9YVc3sEUaxwCFYI8/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft pastel glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(250,224,255,0.6),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-violet-700 shadow-sm backdrop-blur"
        >
          <Sparkles className="h-4 w-4" />
          <span>iofi girl aesthetic</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-violet-600 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl"
        >
          Portofolio Manis & Berkilau
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg"
        >
          Sentuhan pastel, animasi halus, dan nuansa bintang untuk memperkenalkan karya dan dirimu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-white shadow-lg shadow-pink-200 transition hover:brightness-110"
          >
            Lihat Proyek
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-6 py-3 text-pink-700 shadow-sm backdrop-blur transition hover:bg-white"
          >
            Tentang Aku
          </a>
        </motion.div>
      </div>

      {/* Floating pastel orbs */}
      <motion.div
        className="absolute left-8 top-24 h-24 w-24 rounded-full bg-pink-300/40 blur-2xl"
        animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-10 bottom-10 h-28 w-28 rounded-full bg-violet-300/40 blur-2xl"
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}

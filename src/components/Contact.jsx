import { motion } from 'framer-motion';
import { Mail, Twitter, Github, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-pink-100 bg-white/80 p-8 text-center shadow-sm backdrop-blur"
      >
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Mari Berkolaborasi</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Punya ide lucu nan elegan? Kirim pesan dan kita buat sesuatu yang berkilau bersama.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-white shadow-md transition hover:brightness-110"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-5 py-2.5 text-pink-700 shadow-sm backdrop-blur transition hover:bg-white">
            <Twitter className="h-4 w-4" />
            Twitter
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-5 py-2.5 text-pink-700 shadow-sm backdrop-blur transition hover:bg-white">
            <Github className="h-4 w-4" />
            Github
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/70 px-5 py-2.5 text-pink-700 shadow-sm backdrop-blur transition hover:bg-white">
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
        </div>
      </motion.div>

      <p className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Crafted with love and sparkles.</p>
    </section>
  );
}

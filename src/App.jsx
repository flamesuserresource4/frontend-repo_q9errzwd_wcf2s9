import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-6xl px-6 pt-5">
      <nav className="flex items-center justify-between rounded-full border border-pink-100 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
        <a href="#home" className="text-sm font-semibold text-pink-700">iofi.girl</a>
        <div className="flex items-center gap-2 text-sm">
          <a href="#about" className="rounded-full px-3 py-1 text-slate-700 hover:bg-pink-50">About</a>
          <a href="#projects" className="rounded-full px-3 py-1 text-slate-700 hover:bg-pink-50">Projects</a>
          <a href="#contact" className="rounded-full px-3 py-1 text-white bg-gradient-to-r from-pink-500 to-violet-600">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="font-inter text-slate-900">
      <Navbar />
      <main className="mt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

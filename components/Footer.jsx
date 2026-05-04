import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 border border-cyan-400/60 rotate-45" />
              <div className="absolute inset-1.5 bg-cyan-400/20 rotate-45" />
            </div>
            <span className="font-display font-700 text-sm tracking-widest text-cyan-400 uppercase">AYAT FAKHRY</span>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="font-mono text-xs text-[var(--text-muted)] tracking-wide">
              AI & Satellite Navigation Engineer · Egypt
            </p>
            <p className="font-mono text-xs text-[var(--text-subtle)] mt-1">
              © {new Date().getFullYear()} · Built with Next.js & Tailwind CSS
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayat-fakhary' },
              { label: 'GitHub', href: 'https://github.com/ayat-fakhry' },
              { label: 'Email', href: 'mailto:ayatfakhary4@gmail.com' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-[var(--text-muted)] hover:text-cyan-400 transition-colors tracking-widest uppercase"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border/20 flex items-center justify-center">
          <p className="font-mono text-xs text-[var(--text-subtle)] tracking-[0.2em] text-center">
            DESIGNED FOR INTERNATIONAL OPPORTUNITIES · OPEN TO RESEARCH & ENGINEERING ROLES
          </p>
        </div>
      </div>
    </footer>
  );
}

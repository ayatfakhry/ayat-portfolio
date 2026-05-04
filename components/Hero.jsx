import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TITLES = [
  'AI & Machine Learning Engineer',
  'Satellite Navigation Specialist',
  'Computer Vision Researcher',
  'Space Technology Engineer',
  'Deep Learning Practitioner',
];

function TypewriterText({ texts }) {
  const [displayed, setDisplayed] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), 60);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), 30);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx(i => (i + 1) % texts.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts]);

  return (
    <span>
      {displayed}
      <span className="cursor-blink text-cyan-400">|</span>
    </span>
  );
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random(),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${p.a * 0.4})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Scanline */}
      <div className="scanline" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-amber-500/3 blur-[80px]" />
      </div>

      {/* Floating orbit rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] border border-cyan-400/5 rounded-full animate-spin-slow" />
        <div className="absolute inset-8 border border-cyan-400/8 rounded-full" style={{ animation: 'spin 15s linear infinite reverse' }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-cyan-400/20 bg-cyan-400/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase">
            Available for International Opportunities
          </span>
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display font-800 text-6xl md:text-8xl lg:text-9xl tracking-tight mb-4"
        >
          <span className="text-[var(--text-primary)]">AYAT </span>
          <span className="text-cyan-400 text-glow-cyan">FAKHRY</span>
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-mono text-lg md:text-xl text-[var(--text-muted)] mb-8 h-8"
        >
          <TypewriterText texts={TITLES} />
        </motion.div>

        {/* Descriptor line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="font-body text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Engineering intelligent systems at the intersection of{' '}
          <span className="text-cyan-400">Artificial Intelligence</span>,{' '}
          <span className="text-amber-400">Satellite Navigation</span>, and{' '}
          <span className="text-cyan-400">Space Technology</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-cyan-400 text-void font-display font-700 text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-cyan-400/40 text-cyan-400 font-display font-700 text-sm tracking-widest uppercase hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex justify-center gap-12 mt-20 pt-12 border-t border-border/40"
        >
          {[
            { value: '10+', label: 'AI Projects' },
            { value: '3.3', label: 'GPA / 4.0' },
            { value: '15+', label: 'Certifications' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-800 text-3xl text-cyan-400 text-glow-cyan">{stat.value}</div>
              <div className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-400/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}

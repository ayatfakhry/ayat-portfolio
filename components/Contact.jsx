import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const SOCIALS = [
  {
    label: 'Email',
    value: 'ayatfakhary4@gmail.com',
    href: 'mailto:ayatfakhary4@gmail.com',
    icon: '✉',
    accent: 'cyan',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ayat-fakhary',
    href: 'https://www.linkedin.com/in/ayat-fakhary',
    icon: 'in',
    accent: 'amber',
  },
  {
    label: 'GitHub',
    value: 'github.com/ayat-fakhry',
    href: 'https://github.com/ayat-fakhry',
    icon: '⌥',
    accent: 'cyan',
  },
  {
    label: 'Mobile',
    value: '+(20) 1095103433',
    href: 'tel:+201095103433',
    icon: '◎',
    accent: 'amber',
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const mailto = `mailto:ayatfakhary4@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 hex-bg opacity-20" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">05 — Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-800 text-4xl md:text-5xl mb-4"
        >
          Let's <span className="text-cyan-400">Connect</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="font-body text-[var(--text-muted)] max-w-xl mb-16"
        >
          Open to research collaborations, graduate opportunities, AI engineering roles,
          and international projects in space technology and intelligent systems.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {SOCIALS.map((s) => {
              const accentText = s.accent === 'cyan' ? 'text-cyan-400' : 'text-amber-400';
              const accentBorder = s.accent === 'cyan' ? 'border-cyan-400/30 hover:border-cyan-400' : 'border-amber-400/30 hover:border-amber-400';
              const accentBg = s.accent === 'cyan' ? 'hover:bg-cyan-400/5' : 'hover:bg-amber-400/5';

              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label !== 'Mobile' ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`flex items-center gap-5 glass-card p-5 border ${accentBorder} ${accentBg} transition-all duration-300 group`}
                >
                  <div className={`w-10 h-10 border ${s.accent === 'cyan' ? 'border-cyan-400/40' : 'border-amber-400/40'} flex items-center justify-center ${accentText} font-mono text-sm shrink-0 group-hover:bg-white/5 transition-colors`}>
                    {s.icon}
                  </div>
                  <div>
                    <div className={`font-mono text-xs ${accentText} tracking-widest uppercase`}>{s.label}</div>
                    <div className="font-body text-sm text-[var(--text-primary)] mt-0.5">{s.value}</div>
                  </div>
                  <span className="ml-auto text-[var(--text-subtle)] group-hover:text-[var(--text-primary)] transition-colors">→</span>
                </a>
              );
            })}

            {/* Availability badge */}
            <div className="glass-card p-5 border border-cyan-400/20 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-green-400 tracking-widest uppercase">Available Now</span>
              </div>
              <p className="font-body text-sm text-[var(--text-muted)]">
                Currently seeking full-time roles, research positions, or collaborative projects in AI,
                satellite navigation, and space systems — open to remote and international opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass-card p-8 border border-border">
              <h3 className="font-display font-700 text-lg text-[var(--text-primary)] mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {['name', 'email'].map((field) => (
                    <div key={field}>
                      <label className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase block mb-1.5">
                        {field}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                        className="w-full bg-void/60 border border-border focus:border-cyan-400/60 outline-none px-4 py-2.5 font-body text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase block mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Research collaboration / Job opportunity / ..."
                    className="w-full bg-void/60 border border-border focus:border-cyan-400/60 outline-none px-4 py-2.5 font-body text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full bg-void/60 border border-border focus:border-cyan-400/60 outline-none px-4 py-2.5 font-body text-sm text-[var(--text-primary)] placeholder-[var(--text-subtle)] resize-none transition-colors duration-200"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className={`w-full py-3.5 font-display font-700 text-sm tracking-widest uppercase transition-all duration-300 ${
                    sent
                      ? 'bg-green-400 text-void'
                      : 'bg-cyan-400 text-void hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:bg-cyan-300'
                  }`}
                >
                  {sent ? '✓ Message Sent!' : 'Send Message →'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

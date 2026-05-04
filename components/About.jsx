import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const traits = [
  { icon: '◈', label: 'AI/ML Engineering', desc: 'End-to-end pipeline development from data preprocessing to deployment' },
  { icon: '◉', label: 'Space Technology', desc: 'GNSS systems, satellite imagery analysis, and space mission design' },
  { icon: '◐', label: 'Computer Vision', desc: 'CNN architectures for detection, classification, and astronomical imaging' },
  { icon: '◑', label: 'Research-Driven', desc: 'Strong scientific methodology applied to novel real-world problems' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hex-bg opacity-30" />
      <div className="absolute left-0 top-1/2 w-px h-64 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">01 — About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-800 text-4xl md:text-5xl leading-tight mb-8"
            >
              Building the Bridge Between{' '}
              <span className="text-cyan-400 text-glow-cyan">Intelligence</span>{' '}
              and{' '}
              <span className="text-amber-400 text-glow-amber">Space</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="space-y-5 text-[var(--text-muted)] leading-relaxed"
            >
              <p>
                I am an AI and Machine Learning Engineer with a Bachelor's degree in{' '}
                <span className="text-[var(--text-primary)]">Satellite Navigation and Space Technology</span>{' '}
                from the Faculty of Navigation Science and Space, Egypt — maintaining a GPA of 3.3/4.0.
              </p>
              <p>
                My work sits at a rare intersection: applying the full spectrum of modern AI — from{' '}
                <span className="text-cyan-400">deep learning</span> and{' '}
                <span className="text-cyan-400">computer vision</span> to{' '}
                <span className="text-cyan-400">generative AI</span> and{' '}
                <span className="text-cyan-400">NLP</span> — to space-domain problems including satellite image analysis,
                GNSS-based autonomous navigation, astronomical imaging, and anomaly detection in orbital systems.
              </p>
              <p>
                Beyond engineering, I am an active practitioner with hands-on experience across{' '}
                IoT, embedded systems, remote sensing (ArcGIS, SNAP), MLOps foundations, and simulation tools like STK and MATLAB Simulink.
                I have completed 15+ specialized training programs through NASA ARSET, Huawei, Cisco, and Egypt's MCIT.
              </p>
              <p>
                I thrive in international, multidisciplinary environments — and I am actively seeking{' '}
                <span className="text-amber-400">research collaborations, graduate opportunities, and engineering roles</span>{' '}
                in AI, space, and navigation technology.
              </p>
            </motion.div>

            {/* Location / email */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              {[
                { label: 'Location', value: 'Egypt 🇪🇬' },
                { label: 'Email', value: 'ayatfakhary4@gmail.com' },
                { label: 'Status', value: 'Open to Opportunities' },
              ].map(item => (
                <div key={item.label} className="px-4 py-2 border border-border bg-panel/40">
                  <div className="font-mono text-xs text-[var(--text-muted)] tracking-widest uppercase">{item.label}</div>
                  <div className="font-body text-sm text-[var(--text-primary)] mt-0.5">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — trait cards */}
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="glass-card p-6 border-l-2 border-l-cyan-400/30 hover:border-l-cyan-400 transition-all duration-300 group hover:bg-cyan-400/5"
              >
                <div className="text-2xl text-cyan-400 mb-3 group-hover:text-glow-cyan transition-all">{trait.icon}</div>
                <div className="font-display font-700 text-sm text-[var(--text-primary)] mb-2">{trait.label}</div>
                <div className="font-body text-xs text-[var(--text-muted)] leading-relaxed">{trait.desc}</div>
              </motion.div>
            ))}

            {/* Graduation project highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="col-span-2 glass-card p-6 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 border border-amber-400/40 flex items-center justify-center text-amber-400 font-mono text-sm group-hover:border-amber-400 transition-colors">
                  ⬡
                </div>
                <div>
                  <div className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-1">Graduation Project</div>
                  <div className="font-display font-700 text-[var(--text-primary)] mb-2">Dall–Kirkham Telescope Software Development</div>
                  <div className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
                    Developed the complete software, control, and AI imaging system for a Dall–Kirkham reflecting telescope —
                    integrating optical modeling, camera systems, computer vision, and automated celestial tracking with galaxy
                    detection and star cluster identification.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

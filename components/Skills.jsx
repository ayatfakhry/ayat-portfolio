import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const SKILL_GROUPS = [
  {
    category: 'AI & Machine Learning',
    icon: '⬡',
    accent: 'cyan',
    skills: [
      { name: 'Deep Learning', level: 90 },
      { name: 'Machine Learning', level: 88 },
      { name: 'Computer Vision', level: 85 },
      { name: 'NLP', level: 78 },
      { name: 'Generative AI', level: 75 },
      { name: 'Feature Engineering', level: 82 },
    ],
  },
  {
    category: 'Space & Navigation',
    icon: '◉',
    accent: 'amber',
    skills: [
      { name: 'GNSS Systems (GPS/GLONASS/Galileo)', level: 85 },
      { name: 'Satellite Orbit Analysis', level: 80 },
      { name: 'STK Simulation', level: 75 },
      { name: 'Remote Sensing', level: 82 },
      { name: 'ArcGIS / SNAP', level: 78 },
      { name: 'Space Mission Design', level: 72 },
    ],
  },
  {
    category: 'Programming & Tools',
    icon: '◈',
    accent: 'cyan',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'TensorFlow / Keras', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'OpenCV / scikit-image', level: 88 },
      { name: 'MATLAB / Simulink', level: 75 },
      { name: 'C++ / SQL', level: 65 },
    ],
  },
  {
    category: 'Data & MLOps',
    icon: '◐',
    accent: 'amber',
    skills: [
      { name: 'Data Preprocessing', level: 90 },
      { name: 'Model Evaluation & Tuning', level: 85 },
      { name: 'Experiment Tracking', level: 75 },
      { name: 'Power BI', level: 78 },
      { name: 'MLOps Fundamentals', level: 70 },
      { name: 'Big Data (Huawei/Hadoop)', level: 68 },
    ],
  },
  {
    category: 'IoT & Embedded',
    icon: '◑',
    accent: 'cyan',
    skills: [
      { name: 'ESP32 / Arduino', level: 78 },
      { name: 'MQTT Protocol', level: 72 },
      { name: 'Firebase Cloud', level: 70 },
      { name: 'Sensors & Actuators', level: 75 },
    ],
  },
  {
    category: 'Soft Skills',
    icon: '✦',
    accent: 'amber',
    skills: [
      { name: 'Research & Scientific Writing', level: 88 },
      { name: 'Team Leadership', level: 85 },
      { name: 'Cross-disciplinary Collaboration', level: 90 },
      { name: 'Problem Solving', level: 92 },
    ],
  },
];

const CERTIFICATIONS = [
  { org: 'NASA ARSET', title: 'SPoRT-LIS Soil Moisture for Drought Monitoring', year: '2023' },
  { org: 'Huawei', title: 'HCIA Big Data V3.5', year: '2024' },
  { org: 'Cisco', title: 'IoT Fundamentals: Connecting Things', year: '2023' },
  { org: 'Cisco', title: 'Introduction to Internet of Things', year: '2023' },
  { org: 'MCIT Egypt', title: 'Digital Egypt Pioneers – Power BI Engineer Track', year: '2024–2025' },
  { org: 'NTI', title: 'Big Data Associate', year: '2024' },
  { org: 'NTI', title: 'Machine Learning for Data Analysis', year: '2024' },
  { org: 'MCIT Egypt', title: 'IoT and Artificial Intelligence', year: '2023' },
];

function SkillBar({ name, level, accent, delay }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const color = accent === 'cyan' ? '#22d3ee' : '#f59e0b';

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-xs text-[var(--text-muted)]">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-px bg-border relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
          className="absolute top-0 left-0 h-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 hex-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">03 — Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-800 text-4xl md:text-5xl mb-4"
        >
          Technical <span className="text-cyan-400">Arsenal</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="font-body text-[var(--text-muted)] max-w-xl mb-16"
        >
          A multidisciplinary stack spanning AI/ML, space systems, embedded engineering, and data science.
        </motion.p>

        {/* Skill groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + gi * 0.1 }}
              className={`glass-card p-6 border-t-2 ${group.accent === 'cyan' ? 'border-t-cyan-400' : 'border-t-amber-400'}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xl ${group.accent === 'cyan' ? 'text-cyan-400' : 'text-amber-400'}`}>{group.icon}</span>
                <h3 className="font-display font-700 text-sm text-[var(--text-primary)] tracking-wide">{group.category}</h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  accent={group.accent}
                  delay={0.2 + gi * 0.05 + si * 0.05}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs text-amber-400 tracking-[0.3em] uppercase">Certifications & Training</span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-400/40 to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="glass-card p-4 border border-amber-400/10 hover:border-amber-400/30 transition-all duration-300 group"
              >
                <div className="font-mono text-xs text-amber-400 tracking-widest mb-1 uppercase">{cert.org}</div>
                <div className="font-body text-xs text-[var(--text-primary)] leading-snug mb-2">{cert.title}</div>
                <div className="font-mono text-xs text-[var(--text-muted)]">{cert.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

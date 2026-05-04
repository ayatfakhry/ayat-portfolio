import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const TIMELINE = [
  {
    year: '2021 – 2026',
    type: 'degree',
    title: "Bachelor's Degree",
    subtitle: 'Satellite Navigation and Space Technology',
    institution: 'Faculty of Navigation Science and Space',
    location: 'Bani Suwayf, Egypt',
    gpa: '3.3 / 4.0',
    details: [
      'Graduation Project: Dall–Kirkham Telescope Software Development',
      'Specialized in GNSS, space mission analysis, and AI for space applications',
      'Coursework in orbital mechanics, remote sensing, and satellite systems',
    ],
    accent: 'cyan',
    icon: '🎓',
  },
  {
    year: '2024 – 2025',
    type: 'program',
    title: 'Digital Egypt Pioneers Program (DEPI)',
    subtitle: 'Microsoft Power BI Engineer Track',
    institution: 'Ministry of Communications & IT (MCIT)',
    location: 'Egypt',
    details: [
      'Advanced data visualization and business intelligence',
      'End-to-end Power BI dashboard development',
      'Enterprise-grade reporting solutions',
    ],
    accent: 'amber',
    icon: '⬡',
  },
  {
    year: '2024',
    type: 'program',
    title: 'Huawei Egyptian Talent Academy',
    subtitle: 'Big Data Associate + HCIA Big Data V3.5',
    institution: 'National Telecommunication Institute (NTI)',
    location: 'Egypt',
    details: [
      'Big data architecture and Hadoop ecosystem',
      'HCIA-certified Big Data skills',
      'Distributed computing fundamentals',
    ],
    accent: 'cyan',
    icon: '◎',
  },
  {
    year: '2023',
    type: 'program',
    title: 'NASA ARSET Program',
    subtitle: 'Application of NASA SPoRT-LIS Soil Moisture Data',
    institution: 'NASA Applied Remote Sensing Training',
    location: 'Remote',
    details: [
      'Satellite-derived soil moisture data interpretation',
      'Drought monitoring and agricultural applications',
      'Applied remote sensing for Earth observation',
    ],
    accent: 'amber',
    icon: '🛰',
  },
  {
    year: '2023',
    type: 'program',
    title: 'Egyptian Space Agency',
    subtitle: 'Space Keys Program',
    institution: 'Egyptian Space Agency',
    location: 'Egypt',
    details: [
      'Satellite systems and space mission workflows',
      'CubeSat and CanSat design principles',
      'Applied space science projects',
    ],
    accent: 'cyan',
    icon: '◈',
  },
  {
    year: '2022 – 2023',
    type: 'training',
    title: 'Satellite & Space Technology Training',
    subtitle: 'Remote Sensing, GNSS Fundamentals, Space Systems',
    institution: 'Various Institutions',
    location: 'Egypt',
    details: [
      'Satellite image processing using SNAP and ArcGIS',
      'GNSS fundamentals and positioning systems',
      'Aerospace & space technology practical training',
    ],
    accent: 'amber',
    icon: '◐',
  },
];

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.05 });

  return (
    <section id="education" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute right-0 top-1/2 w-px h-64 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">04 — Education</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-800 text-4xl md:text-5xl mb-4"
        >
          Academic <span className="text-amber-400">Journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="font-body text-[var(--text-muted)] max-w-xl mb-16"
        >
          From satellite navigation fundamentals to AI engineering — a continuous pursuit of excellence across disciplines.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-amber-400/30 to-transparent" />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              const accentText = item.accent === 'cyan' ? 'text-cyan-400' : 'text-amber-400';
              const accentBorder = item.accent === 'cyan' ? 'border-cyan-400/40 hover:border-cyan-400/80' : 'border-amber-400/40 hover:border-amber-400/80';

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className={`relative flex items-start gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} pl-16 md:pl-0`}
                >
                  {/* Content */}
                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className={`glass-card p-6 border ${accentBorder} transition-all duration-300 group`}>
                      <div className={`font-mono text-xs ${accentText} tracking-widest mb-2`}>{item.year}</div>
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h3 className={`font-display font-800 text-lg text-[var(--text-primary)] group-hover:${accentText} transition-colors mb-1`}>
                        {item.title}
                      </h3>
                      <p className={`font-body text-sm ${accentText} mb-2`}>{item.subtitle}</p>
                      <p className="font-body text-xs text-[var(--text-muted)] mb-1">{item.institution}</p>
                      <p className="font-mono text-xs text-[var(--text-subtle)] mb-4">{item.location}</p>

                      {item.gpa && (
                        <div className={`inline-block px-3 py-1 border ${item.accent === 'cyan' ? 'border-cyan-400/30 bg-cyan-400/10' : 'border-amber-400/30 bg-amber-400/10'} mb-4`}>
                          <span className={`font-mono text-xs ${accentText}`}>GPA: {item.gpa}</span>
                        </div>
                      )}

                      <ul className="space-y-1.5">
                        {item.details.map((d, j) => (
                          <li key={j} className={`font-body text-xs text-[var(--text-muted)] flex items-start gap-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                            <span className={`${accentText} shrink-0 mt-0.5`}>▸</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 border-2 border-cyan-400 bg-void rounded-full mt-8" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

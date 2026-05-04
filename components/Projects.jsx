import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const PROJECTS = [
  {
    id: 'aeroguard',
    code: 'PRJ-001',
    title: 'AeroGuard AI',
    subtitle: 'Aerial Threat Detection System',
    category: 'Computer Vision / Defense',
    accent: 'cyan',
    tags: ['YOLOv8', 'PyTorch', 'Computer Vision', 'Infrared', 'Object Detection'],
    description:
      'An advanced AI-powered aerial surveillance system integrating multi-modal object detection for aircraft identification, stealth aircraft recognition from infrared and radar-signature imagery, and real-time threat classification. Combines CNNs with domain-specific data augmentation pipelines tuned for low-contrast aerial targets.',
    highlights: ['Multi-class aircraft detection', 'Hidden/stealth aircraft recognition', 'Real-time threat scoring', 'IR + optical fusion pipeline'],
    github: 'https://github.com/ayat-fakhry/aeroguard-ai',
    icon: '✈',
  },
  {
    id: 'satellite-track',
    code: 'PRJ-002',
    title: 'Satellite Tracking System',
    subtitle: 'TLE-Based Orbital Prediction',
    category: 'Space Technology / GNSS',
    accent: 'amber',
    tags: ['Python', 'STK', 'TLE', 'Astropy', 'MATLAB', 'Orbit Mechanics'],
    description:
      'A precision satellite tracking and visualization system utilizing Two-Line Element (TLE) datasets and Systems Tool Kit (STK) integration for orbital path prediction, pass-time computation, and ground station visibility analysis. Supports multi-constellation GNSS (GPS, GLONASS, Galileo, BeiDou) trajectory planning.',
    highlights: ['TLE parsing & propagation', 'STK simulation integration', 'Ground coverage analysis', 'Multi-GNSS constellation support'],
    github: 'https://github.com/ayat-fakhry/satellite-tracking-system',
    icon: '◎',
  },
  {
    id: 'dark-ships',
    code: 'PRJ-003',
    title: 'Dark Ships Detection',
    subtitle: 'AIS-Spoofing Maritime Surveillance',
    category: 'Satellite Imagery / Anomaly Detection',
    accent: 'cyan',
    tags: ['SAR Imagery', 'Deep Learning', 'Anomaly Detection', 'SNAP', 'ArcGIS'],
    description:
      'Detection of "dark ships" — vessels that disable or spoof their AIS transponders to evade maritime surveillance — using Synthetic Aperture Radar (SAR) satellite imagery combined with anomaly detection models. Cross-references AIS logs with SAR detections to flag suspicious maritime activity.',
    highlights: ['SAR image processing', 'AIS log cross-referencing', 'Anomaly detection pipeline', 'Maritime threat classification'],
    github: 'https://github.com/ayat-fakhry/dark-ships-detection',
    icon: '⬡',
  },
  {
    id: 'gnss-ins',
    code: 'PRJ-004',
    title: 'GNSS/INS AI Navigation',
    subtitle: 'Autonomous Sensor-Fusion Navigation',
    category: 'GNSS / Autonomous Systems',
    accent: 'amber',
    tags: ['GNSS', 'IMU', 'Kalman Filter', 'LSTM', 'Sensor Fusion'],
    description:
      'An AI-enhanced GNSS/INS (Inertial Navigation System) fusion architecture that leverages LSTM networks to predict and compensate for GNSS outages in denied environments. Significantly improves positioning continuity and accuracy over traditional Kalman filter approaches in urban canyons and tunnels.',
    highlights: ['GNSS outage prediction via LSTM', 'IMU dead-reckoning correction', 'Real-time sensor fusion', 'Urban canyon robustness'],
    github: 'https://github.com/ayat-fakhry/gnss-ins-ai-navigation',
    icon: '⊕',
  },
  {
    id: 'sat-image',
    code: 'PRJ-005',
    title: 'Satellite Image Analysis',
    subtitle: 'Land Cover & Soil Classification',
    category: 'Remote Sensing / Deep Learning',
    accent: 'cyan',
    tags: ['Multispectral', 'U-Net', 'TensorFlow', 'ArcGIS', 'SNAP', 'NASA SPoRT-LIS'],
    description:
      'Deep learning pipeline for multispectral satellite imagery analysis targeting soil type classification, land cover segmentation, and soil moisture estimation. Trained on real satellite datasets including NASA SPoRT-LIS data, with applications in drought monitoring and precision agriculture.',
    highlights: ['Multispectral band fusion', 'Land cover segmentation', 'Soil moisture estimation', 'Drought index computation'],
    github: 'https://github.com/ayat-fakhry/satellite-image-analysis',
    icon: '◈',
  },
  {
    id: 'ir-enhance',
    code: 'PRJ-006',
    title: 'IR Satellite Enhancement',
    subtitle: 'Infrared Image Super-Resolution & Detection',
    category: 'Computer Vision / Remote Sensing',
    accent: 'amber',
    tags: ['IR Imaging', 'Super-Resolution', 'OpenCV', 'CNN', 'Object Detection'],
    description:
      'Algorithms for infrared satellite image enhancement — including denoising, contrast normalization, and super-resolution — followed by AI-based detection of low-contrast and thermally hidden objects. Designed for applications in border surveillance, wildfire detection, and nighttime maritime monitoring.',
    highlights: ['IR denoising & normalization', 'Super-resolution upscaling', 'Low-contrast object detection', 'Thermal signature analysis'],
    github: 'https://github.com/ayat-fakhry/ir-satellite-enhancement',
    icon: '◐',
  },
  {
    id: 'robotic-arm',
    code: 'PRJ-007',
    title: 'Intelligent Robotic Arm AI',
    subtitle: 'Space Debris Manipulation on Rover',
    category: 'Robotics / Computer Vision',
    accent: 'cyan',
    tags: ['Robotic Arm', 'Rover', 'Object Localization', 'Pose Estimation', 'PyTorch'],
    description:
      'AI-based perception and control software for a robotic arm mounted on a space rover platform, designed for autonomous detection, localization, and manipulation of foreign objects and debris in space station–like environments. Integrates depth estimation, 6-DOF pose prediction, and closed-loop grasping control.',
    highlights: ['6-DOF object pose estimation', 'Autonomous grasping pipeline', 'Debris localization', 'Rover integration & control'],
    github: 'https://github.com/ayat-fakhry/robotic-arm-space-debris',
    icon: '⟳',
  },
  {
    id: 'shape-detect',
    code: 'PRJ-008',
    title: 'Shape Detection System',
    subtitle: 'Real-Time Geometric Object Recognition',
    category: 'Computer Vision',
    accent: 'amber',
    tags: ['OpenCV', 'Contour Analysis', 'CNN', 'Real-Time', 'Python'],
    description:
      'A real-time shape and geometric object detection system combining classical OpenCV contour analysis with CNN-based classifiers for robust recognition under varying lighting, occlusion, and orientation. Designed as a foundational module for autonomous robotic navigation and scene understanding.',
    highlights: ['Contour + CNN hybrid approach', 'Occlusion-robust detection', 'Real-time inference', 'Multi-shape classification'],
    github: 'https://github.com/ayat-fakhry/shape-detection-system',
    icon: '◇',
  },
  {
    id: 'tumor-detect',
    code: 'PRJ-009',
    title: 'AI Tumor Detection',
    subtitle: 'Medical Image Analysis — 99% Accuracy',
    category: 'Medical AI / Deep Learning',
    accent: 'cyan',
    tags: ['MRI/CT Imaging', 'ResNet', 'TensorFlow', 'Grad-CAM', 'Medical AI'],
    description:
      'A deep learning system for automated tumor detection and classification in medical imaging (MRI/CT scans), achieving up to 99% accuracy. Incorporates Grad-CAM visualization for clinical explainability and a data augmentation pipeline that addresses class imbalance in medical datasets.',
    highlights: ['99% detection accuracy', 'Multi-class tumor classification', 'Grad-CAM explainability', 'Class-imbalance handling'],
    github: 'https://github.com/ayat-fakhry/ai-tumor-detection',
    icon: '✦',
  },
];

const FILTERS = ['All', 'Computer Vision', 'Space Technology', 'GNSS', 'Deep Learning', 'Remote Sensing', 'Robotics', 'Medical AI'];

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const accentClass = project.accent === 'cyan' ? 'border-cyan-400/30 hover:border-cyan-400/70' : 'border-amber-400/30 hover:border-amber-400/70';
  const accentText = project.accent === 'cyan' ? 'text-cyan-400' : 'text-amber-400';
  const accentBg = project.accent === 'cyan' ? 'bg-cyan-400/10' : 'bg-amber-400/10';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`glass-card border ${accentClass} transition-all duration-300 group cursor-pointer overflow-hidden`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 border ${project.accent === 'cyan' ? 'border-cyan-400/40' : 'border-amber-400/40'} flex items-center justify-center ${accentText} text-lg`}>
              {project.icon}
            </div>
            <div>
              <div className={`font-mono text-xs ${accentText} tracking-widest`}>{project.code}</div>
              <div className="font-mono text-xs text-[var(--text-muted)] tracking-wide">{project.category}</div>
            </div>
          </div>
          <span className={`font-mono text-xs ${accentText} transition-transform duration-300 ${expanded ? 'rotate-45' : ''}`}>+</span>
        </div>

        {/* Title */}
        <h3 className={`font-display font-800 text-xl text-[var(--text-primary)] group-hover:${accentText} transition-colors duration-300 mb-1`}>
          {project.title}
        </h3>
        <p className="font-body text-sm text-[var(--text-muted)] mb-4">{project.subtitle}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className={`px-2 py-0.5 ${accentBg} ${accentText} font-mono text-xs border ${project.accent === 'cyan' ? 'border-cyan-400/20' : 'border-amber-400/20'}`}>
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-0.5 bg-white/5 text-[var(--text-muted)] font-mono text-xs border border-border">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Description (expandable) */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed mb-4 pt-2 border-t border-border/40">
                {project.description}
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {project.highlights.map(h => (
                  <div key={h} className="flex items-start gap-2">
                    <span className={`${accentText} text-xs mt-0.5 shrink-0`}>▸</span>
                    <span className="font-mono text-xs text-[var(--text-muted)]">{h}</span>
                  </div>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-2 px-4 py-2 border ${project.accent === 'cyan' ? 'border-cyan-400/40 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10' : 'border-amber-400/40 text-amber-400 hover:border-amber-400 hover:bg-amber-400/10'} font-mono text-xs tracking-widest uppercase transition-all duration-200`}
              >
                ⌥ View on GitHub →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom accent bar */}
      <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 ${project.accent === 'cyan' ? 'bg-cyan-400' : 'bg-amber-400'}`} />
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p =>
        p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase">02 — Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-800 text-4xl md:text-5xl mb-4"
        >
          Engineering <span className="text-cyan-400">Intelligence</span> for{' '}
          <span className="text-amber-400">Space & Earth</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="font-body text-[var(--text-muted)] max-w-2xl mb-10"
        >
          Click any project card to explore details. Each project represents real research,
          engineering work, or competition-level development.
        </motion.p>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 font-mono text-xs tracking-widest uppercase border transition-all duration-200 ${
                activeFilter === f
                  ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                  : 'border-border text-[var(--text-muted)] hover:border-cyan-400/40 hover:text-[var(--text-primary)]'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

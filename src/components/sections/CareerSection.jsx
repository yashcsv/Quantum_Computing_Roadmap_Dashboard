import { motion } from 'framer-motion';
import dashboardData from '../../data/dashboardData';
import SectionLabel from '../ui/SectionLabel';
import Badge from '../ui/Badge';
import { Briefcase, GraduationCap, Code, Brain } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardEntrance = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const roleIcons = {
  'QML Engineer': Briefcase,
  'Quantum Software Developer': Code,
  'QC Researcher': GraduationCap,
  'Quantum AI Scientist': Brain,
};

const CareerSection = () => {
  const { careers } = dashboardData;

  const maxMonths = Math.max(...careers.map((c) => c.timelineMonths));

  return (
    <section id="careers" className="py-20 md:py-28 bg-bg-surface">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel>Career Paths</SectionLabel>
          <h2 className="font-display text-h1 tracking-tighter text-text-primary mb-2">
            FOUR TRAJECTORIES
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mb-10">
            From junior QML engineer in 12 months to Quantum AI Research Scientist in 5-8 years. Each path builds on your existing ML foundation.
          </p>
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="glass rounded-xl p-6 mb-10"
        >
          <h3 className="font-display text-h3 text-text-primary mb-6">
            TIMELINE TO ROLE
          </h3>
          <div className="space-y-4">
            {careers.map((career, i) => (
              <div key={career.role} className="flex items-center gap-4">
                <span className="text-small text-text-secondary w-36 md:w-48 truncate font-body">
                  {career.role}
                </span>
                <div className="flex-1 h-6 bg-bg-elevated rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full rounded-full flex items-center justify-end pr-3"
                    style={{
                      background: `linear-gradient(90deg, var(--accent-primary), ${
                        i === 0 ? '#00FF9F' : i === 1 ? '#47BFFF' : i === 2 ? '#FFBE0B' : '#FF4757'
                      })`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(career.timelineMonths / maxMonths) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
                  >
                    <span className="text-label text-bg-base font-body tabular-nums whitespace-nowrap">
                      {career.timeline}
                    </span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Career Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {careers.map((career) => {
            const Icon = roleIcons[career.role] || Briefcase;
            return (
              <motion.div
                key={career.role}
                variants={cardEntrance}
                className={`glass rounded-xl p-6 ${
                  career.fit === 'Best fit for your background'
                    ? 'border-accent-primary/30 shadow-glow'
                    : ''
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-h3 text-text-primary">{career.role}</h4>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="neutral" size="sm">{career.level}</Badge>
                      <Badge variant="accent" size="sm">{career.timeline}</Badge>
                    </div>
                  </div>
                </div>

                {career.fit === 'Best fit for your background' && (
                  <div className="mb-3 px-3 py-1.5 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
                    <span className="text-small text-accent-primary font-body">
                      ★ {career.fit}
                    </span>
                  </div>
                )}

                <div className="mb-3">
                  <span className="text-label text-text-muted uppercase tracking-widest">Key Milestone</span>
                  <p className="text-small text-text-secondary mt-1">{career.milestone}</p>
                </div>

                <div className="mb-3">
                  <span className="text-label text-text-muted uppercase tracking-widest">First Step</span>
                  <p className="text-small text-text-secondary mt-1">{career.firstStep}</p>
                </div>

                <div className="mb-3">
                  <span className="text-label text-text-muted uppercase tracking-widest">Key Skills</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {career.skills.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className="text-label px-2 py-0.5 rounded bg-bg-elevated text-text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-label text-text-muted uppercase tracking-widest">Top Employers</span>
                  <p className="text-small text-text-secondary mt-1">
                    {career.employers.slice(0, 4).join(' · ')}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CareerSection;

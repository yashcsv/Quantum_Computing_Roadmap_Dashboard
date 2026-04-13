import { motion } from 'framer-motion';
import { useState } from 'react';
import dashboardData from '../../data/dashboardData';
import SectionLabel from '../ui/SectionLabel';
import Badge from '../ui/Badge';
import { Code, Layers, Beaker, Trophy } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const cardEntrance = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const tabConfig = [
  { key: 'all', label: 'All', icon: Layers },
  { key: 'beginner', label: 'Beginner', icon: Code },
  { key: 'intermediate', label: 'Intermediate', icon: Beaker },
  { key: 'advanced', label: 'Advanced', icon: Beaker },
  { key: 'portfolio', label: 'Portfolio', icon: Trophy },
];

const ProjectsSection = () => {
  const { projects } = dashboardData;
  const [activeTab, setActiveTab] = useState('all');

  const getProjects = () => {
    if (activeTab === 'all') {
      return [
        ...projects.beginner.map((p) => ({ ...p, level: 'beginner' })),
        ...projects.intermediate.map((p) => ({ ...p, level: 'intermediate' })),
        ...projects.advanced.map((p) => ({ ...p, level: 'advanced' })),
        ...projects.portfolio.map((p) => ({ ...p, level: 'portfolio' })),
      ];
    }
    return (projects[activeTab] || []).map((p) => ({ ...p, level: activeTab }));
  };

  const levelVariant = {
    beginner: 'neutral',
    intermediate: 'warning',
    advanced: 'negative',
    portfolio: 'accent',
  };

  const filteredProjects = getProjects();

  return (
    <section id="projects" className="py-20 md:py-28 bg-bg-surface">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel>Projects Lab</SectionLabel>
          <h2 className="font-display text-h1 tracking-tighter text-text-primary mb-2">
            BUILD TO LEARN
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mb-8">
            15 progressive projects spanning quantum basics to portfolio-grade capstones. Each project builds directly on skills from previous weeks.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {tabConfig.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-small font-body transition-all
                  ${isActive
                    ? 'bg-accent-primary/15 text-accent-primary border border-accent-primary/30'
                    : 'bg-bg-elevated/50 text-text-secondary hover:text-text-primary border border-border-subtle'
                  }
                `}
              >
                <Icon size={14} />
                {tab.label}
                <span className="tabular-nums text-label">
                  {tab.key === 'all'
                    ? projects.beginner.length + projects.intermediate.length + projects.advanced.length + projects.portfolio.length
                    : projects[tab.key]?.length || 0
                  }
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          key={activeTab}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardEntrance}
              className={`glass rounded-xl p-5 flex flex-col ${
                project.level === 'portfolio' ? 'md:col-span-1 border-accent-primary/20' : ''
              }`}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div className="flex items-start justify-between mb-3">
                <Badge variant={levelVariant[project.level]} size="sm">
                  {project.level}
                </Badge>
                {project.weeks && (
                  <span className="text-label text-text-muted tabular-nums">
                    Weeks {project.weeks}
                  </span>
                )}
              </div>

              <h4 className="font-display text-h3 text-text-primary mb-2">
                {project.name}
              </h4>

              {project.description && (
                <p className="text-small text-text-secondary mb-3 flex-1">
                  {project.description}
                </p>
              )}

              {project.concepts && (
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="text-label px-2 py-0.5 rounded bg-bg-elevated text-text-muted"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto pt-3 border-t border-border-subtle">
                <p className="text-label text-text-muted">
                  <span className="text-accent-primary">Tech:</span> {project.tech}
                </p>
                {project.impressive && (
                  <p className="text-label text-semantic-positive mt-1">
                    ★ {project.impressive}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

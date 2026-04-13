import { motion } from 'framer-motion';
import dashboardData from '../../data/dashboardData';
import SectionLabel from '../ui/SectionLabel';
import Badge from '../ui/Badge';
import ChartWrapper from '../charts/ChartWrapper';
import DonutBreakdown from '../charts/DonutBreakdown';

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

const KnowledgeSection = () => {
  const { prerequisites, algorithms, quantumGates } = dashboardData;

  return (
    <section id="knowledge" className="py-20 md:py-28 bg-bg-surface">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel>Knowledge Architecture</SectionLabel>
          <h2 className="font-display text-h1 tracking-tighter text-text-primary mb-2">
            FOUNDATIONS TO MASTER
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mb-10">
            Four pillars of prerequisite knowledge, seven core quantum algorithms, and the essential gate operations that form the building blocks of quantum computing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Prerequisites Donut */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <ChartWrapper
              title="Prerequisite Knowledge Distribution"
              sourceNote="Section 1 — Prerequisite Knowledge"
            >
              <DonutBreakdown
                data={prerequisites}
                nameKey="name"
                valueKey="weight"
                height={300}
              />
            </ChartWrapper>
          </motion.div>

          {/* Prerequisites Details */}
          <motion.div
            className="space-y-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {prerequisites.map((prereq) => (
              <motion.div
                key={prereq.name}
                variants={cardEntrance}
                className="glass rounded-xl p-5"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.18 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display text-h3 text-text-primary">{prereq.name}</h4>
                  <Badge variant="accent" size="sm">{prereq.weight}%</Badge>
                </div>
                <p className="text-small text-text-secondary mb-1">{prereq.description}</p>
                <p className="text-label text-text-muted italic">Why: {prereq.importance}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Algorithms */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-8"
        >
          <h3 className="font-display text-h2 tracking-tight text-text-primary mb-6">
            CORE ALGORITHMS
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {algorithms.map((algo) => (
            <motion.div
              key={algo.name}
              variants={cardEntrance}
              className="glass rounded-xl p-5"
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <h4 className="font-display text-h3 text-text-primary mb-2">{algo.name}</h4>
              <p className="text-small text-text-secondary mb-3">{algo.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={algo.speedup === 'Exponential' ? 'positive' : algo.speedup === 'Quadratic' ? 'neutral' : 'warning'}
                  size="sm"
                >
                  {algo.speedup}
                </Badge>
                <Badge variant="accent" size="sm">
                  W{algo.week}
                </Badge>
              </div>
              <p className="text-label text-text-muted mt-2 tabular-nums">{algo.complexity}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quantum Gates Table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h3 className="font-display text-h2 tracking-tight text-text-primary mb-6">
            QUANTUM GATES
          </h3>
          <div className="glass rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-small font-body">
                <thead>
                  <tr className="border-b border-border-default">
                    <th className="text-left p-4 text-label uppercase tracking-widest text-text-muted">Gate</th>
                    <th className="text-left p-4 text-label uppercase tracking-widest text-text-muted">Type</th>
                    <th className="text-left p-4 text-label uppercase tracking-widest text-text-muted">Effect</th>
                    <th className="text-left p-4 text-label uppercase tracking-widest text-text-muted">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  {quantumGates.map((gate, i) => (
                    <tr
                      key={gate.gate}
                      className={`border-b border-border-subtle hover:bg-bg-elevated/50 transition-colors ${
                        i % 2 === 0 ? '' : 'bg-bg-base/30'
                      }`}
                    >
                      <td className="p-4 text-accent-primary font-body tabular-nums">{gate.gate}</td>
                      <td className="p-4">
                        <Badge variant={gate.type === 'single' ? 'neutral' : 'positive'} size="sm">
                          {gate.type}
                        </Badge>
                      </td>
                      <td className="p-4 text-text-secondary">{gate.effect}</td>
                      <td className="p-4 text-text-muted">{gate.useCase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KnowledgeSection;

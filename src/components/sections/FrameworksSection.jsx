import { motion } from 'framer-motion';
import { useMemo } from 'react';
import dashboardData from '../../data/dashboardData';
import SectionLabel from '../ui/SectionLabel';
import Badge from '../ui/Badge';
import ChartWrapper from '../charts/ChartWrapper';
import RadarView from '../charts/RadarView';

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

const FrameworksSection = () => {
  const { frameworks, simulators } = dashboardData;

  const radarData = useMemo(() => {
    const attributes = ['adoption', 'mlIntegration', 'documentation', 'hardware', 'community', 'easeOfUse'];
    const labels = ['Adoption', 'ML Integration', 'Documentation', 'Hardware Access', 'Community', 'Ease of Use'];

    return attributes.map((attr, i) => {
      const point = { axis: labels[i] };
      frameworks.forEach((fw) => {
        point[fw.name] = fw.scores[attr];
      });
      return point;
    });
  }, [frameworks]);

  return (
    <section id="frameworks" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel>Frameworks & Tools</SectionLabel>
          <h2 className="font-display text-h1 tracking-tighter text-text-primary mb-2">
            QUANTUM TOOLBOX
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mb-10">
            Three major quantum programming frameworks compared across six dimensions, plus a comprehensive simulator comparison for local development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Radar Chart */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <ChartWrapper
              title="Framework Comparison"
              sourceNote="Sections 3.1–3.3"
            >
              <RadarView
                data={radarData}
                categories={frameworks.map((f) => f.name)}
                height={340}
              />
            </ChartWrapper>
          </motion.div>

          {/* Framework Cards */}
          <motion.div
            className="space-y-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {frameworks.map((fw, i) => (
              <motion.div
                key={fw.name}
                variants={cardEntrance}
                className="glass rounded-xl p-5"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.18 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <h4 className="font-display text-h3 text-text-primary">{fw.name}</h4>
                  <Badge variant="neutral" size="sm">{fw.company}</Badge>
                </div>
                <p className="text-small text-text-secondary mb-3">{fw.highlight}</p>
                <div className="flex flex-wrap gap-1.5">
                  {fw.components.map((comp) => (
                    <span
                      key={comp}
                      className="text-label px-2 py-0.5 rounded bg-bg-elevated text-text-muted"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Simulators Table */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h3 className="font-display text-h2 tracking-tight text-text-primary mb-6">
            QUANTUM SIMULATORS
          </h3>
          <div className="glass rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-small font-body">
                <thead>
                  <tr className="border-b border-border-default">
                    <th className="text-left p-4 text-label uppercase tracking-widest text-text-muted">Simulator</th>
                    <th className="text-left p-4 text-label uppercase tracking-widest text-text-muted">Max Qubits</th>
                    <th className="text-left p-4 text-label uppercase tracking-widest text-text-muted">Type</th>
                    <th className="text-left p-4 text-label uppercase tracking-widest text-text-muted">Best For</th>
                    <th className="text-left p-4 text-label uppercase tracking-widest text-text-muted">Framework</th>
                  </tr>
                </thead>
                <tbody>
                  {simulators.map((sim, i) => (
                    <tr
                      key={sim.name}
                      className={`border-b border-border-subtle hover:bg-bg-elevated/50 transition-colors ${
                        i % 2 === 0 ? '' : 'bg-bg-base/30'
                      }`}
                    >
                      <td className="p-4 text-text-primary">{sim.name}</td>
                      <td className="p-4 text-accent-primary tabular-nums font-body">~{sim.maxQubits}</td>
                      <td className="p-4">
                        <Badge variant="neutral" size="sm">{sim.type}</Badge>
                      </td>
                      <td className="p-4 text-text-secondary">{sim.bestFor}</td>
                      <td className="p-4">
                        <Badge
                          variant={sim.framework === 'Qiskit' ? 'accent' : sim.framework === 'PennyLane' ? 'positive' : 'warning'}
                          size="sm"
                        >
                          {sim.framework}
                        </Badge>
                      </td>
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

export default FrameworksSection;

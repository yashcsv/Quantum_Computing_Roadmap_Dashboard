import { motion } from 'framer-motion';
import dashboardData from '../../data/dashboardData';
import SectionLabel from '../ui/SectionLabel';
import Badge from '../ui/Badge';
import ChartWrapper from '../charts/ChartWrapper';
import BarComparison from '../charts/BarComparison';

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

const statusColors = {
  'Demonstrated': 'positive',
  'Near-term viable': 'positive',
  'Industry pilots': 'warning',
  'Commercial interest': 'warning',
  'Small-scale demos': 'neutral',
  'Academic research': 'neutral',
  'Early research': 'negative',
  'Very early research': 'negative',
};

const ApplicationsSection = () => {
  const { qmlApplications } = dashboardData;

  const chartData = [...qmlApplications].sort((a, b) => b.maturity - a.maturity).map((app) => ({
    area: app.area,
    maturity: app.maturity,
  }));

  const barColors = chartData.map((d) =>
    d.maturity >= 50 ? '#00FF9F' : d.maturity >= 30 ? '#FFBE0B' : '#FF4757'
  );

  return (
    <section id="applications" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel>QML Applications</SectionLabel>
          <h2 className="font-display text-h1 tracking-tighter text-text-primary mb-2">
            WHERE QUANTUM MEETS AI
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mb-10">
            Eight application areas where quantum machine learning is being explored, ranked by research maturity. Most are in early stages — the opportunity lies in being early.
          </p>
        </motion.div>

        {/* Maturity Chart */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-10"
        >
          <ChartWrapper
            title="QML Application Maturity Index"
            sourceNote="Section 4.5 — QML Applications in AI"
          >
            <BarComparison
              data={chartData}
              xKey="area"
              yKey="maturity"
              colors={barColors}
              height={320}
              layout="vertical"
              name="Maturity %"
              barSize={16}
            />
          </ChartWrapper>
        </motion.div>

        {/* Application Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {qmlApplications.map((app) => (
            <motion.div
              key={app.area}
              variants={cardEntrance}
              className="glass rounded-xl p-5"
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-display text-h3 text-text-primary">{app.area}</h4>
                <span className="text-h3 font-display tabular-nums text-accent-primary">
                  {app.maturity}%
                </span>
              </div>
              <p className="text-small text-text-secondary mb-3">{app.approach}</p>
              <Badge variant={statusColors[app.status] || 'neutral'} size="sm">
                {app.status}
              </Badge>
              {/* Maturity bar */}
              <div className="mt-3 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor:
                      app.maturity >= 50 ? 'var(--semantic-positive)' :
                      app.maturity >= 30 ? 'var(--semantic-warning)' :
                      'var(--semantic-negative)',
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${app.maturity}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationsSection;

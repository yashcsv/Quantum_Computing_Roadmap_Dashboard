import { motion } from 'framer-motion';
import { useState } from 'react';
import dashboardData from '../../data/dashboardData';
import SectionLabel from '../ui/SectionLabel';
import Badge from '../ui/Badge';
import ChartWrapper from '../charts/ChartWrapper';
import TrendLine from '../charts/TrendLine';

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

const categoryColors = {
  Prerequisites: 'neutral',
  Foundations: 'accent',
  Programming: 'positive',
  QML: 'warning',
  Advanced: 'negative',
  Capstone: 'accent',
};

const RoadmapSection = () => {
  const { weeklyPlan } = dashboardData;
  const [activeWeek, setActiveWeek] = useState(null);

  const chartData = weeklyPlan.map((w) => ({
    week: `W${w.week}`,
    hours: w.hours,
    category: w.category,
  }));

  return (
    <section id="roadmap" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel>16-Week Learning Plan</SectionLabel>
          <h2 className="font-display text-h1 tracking-tighter text-text-primary mb-2">
            YOUR QUANTUM TIMELINE
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mb-10">
            A structured 16-week plan assuming 10-15 hours per week. Modular design — complete weeks 1-8 for foundations, all 16 for QML research readiness.
          </p>
        </motion.div>

        {/* Study Hours Chart */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-10"
        >
          <ChartWrapper
            title="Weekly Study Hours"
            sourceNote="Section 8 — 16-Week Learning Plan"
          >
            <TrendLine
              data={chartData}
              xKey="week"
              yKey="hours"
              name="Study Hours"
              height={220}
            />
          </ChartWrapper>
        </motion.div>

        {/* Timeline Cards */}
        <motion.div
          className="relative"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border-default" />

          {weeklyPlan.map((week, index) => (
            <motion.div
              key={week.week}
              variants={cardEntrance}
              className="relative pl-12 md:pl-20 mb-6 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-[11px] md:left-[27px] top-4 w-[10px] h-[10px] rounded-full border-2 ${
                  activeWeek === week.week
                    ? 'bg-accent-primary border-accent-primary shadow-glow'
                    : 'bg-bg-surface border-accent-primary/40'
                }`}
              />

              <motion.div
                className={`glass rounded-xl p-5 cursor-pointer transition-all ${
                  activeWeek === week.week ? 'border-accent-primary/30' : ''
                }`}
                onClick={() => setActiveWeek(activeWeek === week.week ? null : week.week)}
                whileHover={{ y: -2, boxShadow: '0 12px 40px rgba(0,0,0,0.2)' }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-display text-h3 text-accent-primary tabular-nums">
                    W{String(week.week).padStart(2, '0')}
                  </span>
                  <Badge variant={categoryColors[week.category] || 'neutral'} size="sm">
                    {week.category}
                  </Badge>
                  <span className="text-label text-text-muted tabular-nums ml-auto">
                    ~{week.hours} hrs/week
                  </span>
                </div>

                <h3 className="text-body text-text-primary font-body mb-1">
                  {week.topic}
                </h3>

                {activeWeek === week.week && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pt-3 border-t border-border-subtle"
                  >
                    <div className="mb-2">
                      <span className="text-label text-text-muted uppercase tracking-widest">Resources</span>
                      <p className="text-small text-text-secondary mt-1">{week.resource}</p>
                    </div>
                    <div>
                      <span className="text-label text-text-muted uppercase tracking-widest">Practice</span>
                      <p className="text-small text-text-secondary mt-1">{week.practice}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;

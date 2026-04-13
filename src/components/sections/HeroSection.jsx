import { motion } from 'framer-motion';
import { Atom, FileText, Clock, Users } from 'lucide-react';
import dashboardData from '../../data/dashboardData';
import KpiCard from '../ui/KpiCard';
import QuoteBlock from '../ui/QuoteBlock';
import Badge from '../ui/Badge';
import ScoreDisplay from '../ui/ScoreDisplay';
import SectionLabel from '../ui/SectionLabel';

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

const HeroSection = () => {
  const { meta, kpis } = dashboardData;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center py-20 md:py-28 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
            top: '10%',
            left: '20%',
          }}
          animate={{ x: [0, -10, 8, 0], y: [0, 8, -6, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #47BFFF 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
          }}
          animate={{ x: [0, 12, -8, 0], y: [0, -10, 6, 0] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-8">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <SectionLabel>Quantum Computing Roadmap</SectionLabel>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-display text-display tracking-tighter text-text-primary mt-4 mb-4 leading-[0.9]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          COMPLETE<br />
          <span className="text-gradient">LEARNING</span><br />
          ROADMAP
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-h3 text-text-secondary max-w-xl mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          {meta.subtitle}
        </motion.p>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          variants={stagger}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <motion.div variants={fadeUp}>
            <Badge variant="accent" size="md">
              <FileText size={12} className="mr-1.5" />
              {meta.documentType}
            </Badge>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Badge variant="neutral" size="md">
              <Clock size={12} className="mr-1.5" />
              16-Week Plan
            </Badge>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Badge variant="positive" size="md">
              <Users size={12} className="mr-1.5" />
              ML Engineers
            </Badge>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Badge variant="warning" size="md">
              <Atom size={12} className="mr-1.5" />
              {meta.sentiment}
            </Badge>
          </motion.div>
        </motion.div>

        {/* TL;DR + Score */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
        >
          <div className="lg:col-span-2 glass rounded-xl p-6">
            <h3 className="text-label uppercase tracking-widest text-accent-primary mb-3 font-body">
              TL;DR
            </h3>
            <p className="text-body text-text-secondary leading-relaxed">
              {meta.tldr}
            </p>
          </div>
          <div className="glass rounded-xl p-6 flex items-center justify-center">
            <ScoreDisplay
              score={meta.overallScore.value}
              rationale={meta.overallScore.rationale}
            />
          </div>
        </motion.div>

        {/* KPI Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {kpis.map((kpi, i) => (
            <KpiCard
              key={kpi.id}
              label={kpi.label}
              value={kpi.value}
              unit={kpi.unit}
              trend={kpi.trend}
              tooltip={kpi.tooltip}
              delay={i * 0.07}
            />
          ))}
        </motion.div>

        {/* Key Quote */}
        <QuoteBlock
          text={meta.keyQuote.text}
          source={meta.keyQuote.location}
        />
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from 'framer-motion';
import dashboardData from '../../data/dashboardData';
import SectionLabel from '../ui/SectionLabel';
import Badge from '../ui/Badge';
import ConfidencePill from '../ui/ConfidencePill';
import ScoreDisplay from '../ui/ScoreDisplay';
import { AlertTriangle, Eye, EyeOff, CheckCircle, XCircle, HelpCircle } from 'lucide-react';

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

const signalIcons = {
  contradiction: AlertTriangle,
  omission: EyeOff,
  language: Eye,
  buried: HelpCircle,
};

const signalColors = {
  high: 'negative',
  medium: 'warning',
  low: 'neutral',
};

const VerdictSection = () => {
  const { verdict, insights, risks, hiddenSignals, meta } = dashboardData;

  const verdictColors = {
    'strong-positive': 'positive',
    'positive': 'positive',
    'neutral': 'neutral',
    'negative': 'negative',
    'strong-negative': 'negative',
  };

  return (
    <section id="verdict" className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionLabel>Verdict & Takeaway</SectionLabel>
          <h2 className="font-display text-h1 tracking-tighter text-text-primary mb-2">
            THE BOTTOM LINE
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mb-10">
            Our comprehensive assessment of this roadmap — including what it does well, what it misses, and what you should actually do with it.
          </p>
        </motion.div>

        {/* Verdict Hero */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="glass rounded-xl p-6 flex flex-col items-center justify-center">
            <ScoreDisplay
              score={meta.overallScore.value}
              rationale=""
            />
            <Badge variant={verdictColors[verdict.recommendation]} size="md" className="mt-4">
              {verdict.recommendation.replace('-', ' ')}
            </Badge>
          </div>
          <div className="lg:col-span-2 glass rounded-xl p-6">
            <h3 className="font-display text-h3 text-text-primary mb-4">RECOMMENDATION</h3>
            <p className="text-body text-text-secondary leading-relaxed mb-6">
              {verdict.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-label uppercase tracking-widest text-semantic-positive mb-2 flex items-center gap-2">
                  <CheckCircle size={14} />
                  Top Reasons
                </h4>
                <ul className="space-y-2">
                  {verdict.topReasons.map((reason, i) => (
                    <li key={i} className="text-small text-text-secondary flex items-start gap-2">
                      <span className="text-semantic-positive mt-0.5 shrink-0">+</span>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-label uppercase tracking-widest text-semantic-negative mb-2 flex items-center gap-2">
                  <XCircle size={14} />
                  Top Concerns
                </h4>
                <ul className="space-y-2">
                  {verdict.topConcerns.map((concern, i) => (
                    <li key={i} className="text-small text-text-secondary flex items-start gap-2">
                      <span className="text-semantic-negative mt-0.5 shrink-0">−</span>
                      {concern}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-10"
        >
          <h3 className="font-display text-h2 tracking-tight text-text-primary mb-6">
            KEY INSIGHTS
          </h3>
        </motion.div>

        <motion.div
          className="space-y-4 mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {insights.map((insight) => (
            <motion.div
              key={insight.id}
              variants={cardEntrance}
              className="glass rounded-xl p-5"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h4 className="font-display text-h3 text-text-primary">{insight.title}</h4>
                <Badge
                  variant={insight.importance === 'critical' ? 'negative' : insight.importance === 'high' ? 'warning' : 'neutral'}
                  size="sm"
                >
                  {insight.importance}
                </Badge>
                <ConfidencePill level={insight.confidence} />
              </div>
              <p className="text-small text-text-secondary leading-relaxed">{insight.body}</p>
              <p className="text-label text-text-muted mt-2">Source: {insight.source}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Risks */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-6"
        >
          <h3 className="font-display text-h2 tracking-tight text-text-primary mb-6">
            RISK ASSESSMENT
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {risks.map((risk) => (
            <motion.div
              key={risk.id}
              variants={cardEntrance}
              className={`glass rounded-xl p-5 ${
                risk.probability === 'high' && risk.impact === 'high'
                  ? 'border-semantic-negative/20'
                  : ''
              }`}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <h4 className="font-display text-h3 text-text-primary mb-2">{risk.label}</h4>
              <p className="text-small text-text-secondary mb-3">{risk.description}</p>
              <div className="flex gap-2">
                <Badge
                  variant={risk.probability === 'high' ? 'negative' : risk.probability === 'med' ? 'warning' : 'neutral'}
                  size="sm"
                >
                  P: {risk.probability}
                </Badge>
                <Badge
                  variant={risk.impact === 'high' ? 'negative' : risk.impact === 'med' ? 'warning' : 'neutral'}
                  size="sm"
                >
                  I: {risk.impact}
                </Badge>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hidden Signals */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-6"
        >
          <h3 className="font-display text-h2 tracking-tight text-text-primary mb-2">
            HIDDEN SIGNALS
          </h3>
          <p className="text-body text-text-secondary mb-6">
            What the document doesn't say, buries, or subtly de-emphasizes.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4 mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {hiddenSignals.map((signal) => {
            const Icon = signalIcons[signal.type] || AlertTriangle;
            return (
              <motion.div
                key={signal.id}
                variants={cardEntrance}
                className="glass rounded-xl p-5 border-l-2"
                style={{
                  borderLeftColor: signal.severity === 'high'
                    ? 'var(--semantic-negative)'
                    : signal.severity === 'medium'
                    ? 'var(--semantic-warning)'
                    : 'var(--semantic-neutral)',
                }}
              >
                <div className="flex items-start gap-3">
                  <Icon
                    size={18}
                    className={`shrink-0 mt-0.5 ${
                      signal.severity === 'high' ? 'text-semantic-negative' :
                      signal.severity === 'medium' ? 'text-semantic-warning' :
                      'text-semantic-neutral'
                    }`}
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-body text-text-primary font-body">{signal.title}</h4>
                      <Badge variant={signalColors[signal.severity]} size="sm">
                        {signal.type}
                      </Badge>
                    </div>
                    <p className="text-small text-text-secondary">{signal.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Conditions */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="glass rounded-xl p-6">
            <h3 className="font-display text-h3 text-text-primary mb-4">
              CONDITIONS FOR SUCCESS
            </h3>
            <ul className="space-y-2">
              {verdict.conditions.map((condition, i) => (
                <li key={i} className="text-small text-text-secondary flex items-start gap-2">
                  <span className="text-accent-primary mt-0.5 shrink-0">→</span>
                  {condition}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VerdictSection;

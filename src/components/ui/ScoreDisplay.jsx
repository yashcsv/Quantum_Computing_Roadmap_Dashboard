import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const ScoreDisplay = ({ score, maxScore = 10, rationale }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setAnimatedScore(score), 200);
      return () => clearTimeout(timer);
    }
  }, [inView, score]);

  const circumference = 2 * Math.PI * 54;
  const progress = (animatedScore / maxScore) * circumference;
  const strokeColor = score >= 7 ? 'var(--semantic-positive)' : score >= 5 ? 'var(--semantic-warning)' : 'var(--semantic-negative)';

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          {/* Background ring */}
          <circle
            cx="60" cy="60" r="54"
            fill="none"
            stroke="var(--border-default)"
            strokeWidth="6"
          />
          {/* Progress ring */}
          <motion.circle
            cx="60" cy="60" r="54"
            fill="none"
            stroke={strokeColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: inView ? circumference - progress : circumference }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="font-display text-h1 tabular-nums"
            style={{ color: strokeColor }}
            initial={{ scale: 1 }}
            animate={inView ? { scale: [1, 1.06, 1] } : {}}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            {animatedScore}
          </motion.span>
          <span className="text-label text-text-muted uppercase tracking-widest">
            / {maxScore}
          </span>
        </div>
      </div>
      {rationale && (
        <p className="text-small text-text-secondary text-center max-w-xs">
          {rationale}
        </p>
      )}
    </motion.div>
  );
};

export default ScoreDisplay;

import { motion } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp';
import Sparkline from '../charts/Sparkline';

const KpiCard = ({ label, value, unit, trend, tooltip, delay = 0 }) => {
  const { ref, displayValue } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      className="relative group glass rounded-xl p-5 cursor-default"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-label uppercase tracking-widest text-text-muted font-body">
          {label}
        </span>
        {tooltip && (
          <span className="text-text-muted text-xs opacity-0 group-hover:opacity-100 transition-opacity" title={tooltip}>
            ⓘ
          </span>
        )}
      </div>

      <div className="flex items-end gap-2 mb-3">
        <span className="font-display text-h1 text-accent-primary tabular-nums leading-none">
          {displayValue}
        </span>
        {unit && (
          <span className="text-small text-text-muted pb-1">{unit}</span>
        )}
      </div>

      {trend && trend.length > 0 && (
        <div className="h-8 mt-1">
          <Sparkline data={trend} />
        </div>
      )}

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
           style={{ boxShadow: '0 0 40px rgba(0, 255, 159, 0.08)' }} />
    </motion.div>
  );
};

export default KpiCard;

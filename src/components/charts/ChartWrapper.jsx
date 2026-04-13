import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ChartWrapper = ({ title, sourceNote, children, className = '' }) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={`glass rounded-xl p-5 md:p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {title && (
        <h4 className="text-h3 font-display tracking-tight text-text-primary mb-4">
          {title}
        </h4>
      )}
      <div className="w-full">
        {inView ? children : <div className="h-64 flex items-center justify-center text-text-muted">Loading...</div>}
      </div>
      {sourceNote && (
        <p className="text-label text-text-muted mt-3 uppercase tracking-wider">
          Source: {sourceNote}
        </p>
      )}
    </motion.div>
  );
};

export default ChartWrapper;

import { motion } from 'framer-motion';

const SectionLabel = ({ children }) => {
  return (
    <motion.div
      className="flex items-center gap-3 mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-8 h-px bg-accent-primary" />
      <span className="text-label uppercase tracking-widest text-accent-primary font-body">
        {children}
      </span>
      <div className="flex-1 h-px bg-border-subtle" />
    </motion.div>
  );
};

export default SectionLabel;

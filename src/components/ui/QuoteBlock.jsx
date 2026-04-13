import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const QuoteBlock = ({ text, source }) => {
  return (
    <motion.blockquote
      className="relative glass rounded-xl p-6 md:p-8 my-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Quote
        className="absolute top-4 left-4 text-accent-primary/20"
        size={32}
      />
      <p className="text-h3 font-display tracking-tight text-text-primary pl-8 md:pl-10">
        {text}
      </p>
      {source && (
        <cite className="block mt-3 pl-8 md:pl-10 text-small text-text-muted font-body not-italic">
          — {source}
        </cite>
      )}
    </motion.blockquote>
  );
};

export default QuoteBlock;

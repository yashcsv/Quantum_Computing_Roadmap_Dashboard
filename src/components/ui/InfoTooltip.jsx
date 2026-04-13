import { useState, useRef } from 'react';
import { useFloating, autoPlacement, flip, shift, offset } from '@floating-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

const InfoTooltip = ({ content, source, confidence, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    placement: 'top',
    middleware: [offset(8), flip(), shift({ padding: 8 })],
  });

  const confidenceColors = {
    high: '#00FF9F',
    medium: '#FFBE0B',
    low: '#FF4757',
  };

  const confidenceEmoji = {
    high: '🟢',
    medium: '🟡',
    low: '🔴',
  };

  return (
    <span className="relative inline-flex items-center">
      {children}
      <button
        ref={refs.setReference}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className="inline-flex items-center justify-center w-4 h-4 ml-1 text-text-muted hover:text-accent-primary transition-colors focus:outline-none"
        aria-label="More information"
      >
        <Info size={12} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={refs.setFloating}
            style={floatingStyles}
            className="z-50 max-w-xs p-3 rounded-lg glass-elevated shadow-lg"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.14 }}
            role="tooltip"
          >
            <p className="text-small text-text-primary mb-2">{content}</p>
            {source && (
              <p className="text-label text-text-muted">
                Source: {source}
              </p>
            )}
            {confidence && (
              <p className="text-label text-text-muted mt-1">
                Confidence: {confidenceEmoji[confidence]} {confidence}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};

export default InfoTooltip;

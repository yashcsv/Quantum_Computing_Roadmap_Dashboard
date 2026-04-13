import { useEffect, useRef, useState } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useCountUp = (target, duration = 1.4) => {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      motionValue.set(target);
    }
  }, [inView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      setDisplayValue(v);
    });
    return unsubscribe;
  }, [rounded]);

  return { ref, displayValue };
};

export default useCountUp;

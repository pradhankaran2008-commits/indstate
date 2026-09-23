import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * AnimatedCounter component
 * Smoothly counts up from 0 to target value once element enters viewport
 */
export default function AnimatedCounter({
  target = 0,
  duration = 1800,
  prefix = '',
  suffix = '',
  separator = ',',
  className = '',
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId;

    // Ease-out exponential curve for natural, satisfying deceleration
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);
      
      const currentVal = Math.floor(easedProgress * target);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, duration]);

  const formattedCount = separator
    ? count.toLocaleString('en-IN')
    : count.toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
}

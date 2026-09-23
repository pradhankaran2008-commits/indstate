import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal component - Crevix Framer style reveal animation
 * Triggers fade + slide up smoothly when element enters viewport
 */
export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  x = 0,
  className = '',
  style = {},
  cascade = false,
  staggerDelay = 0.08,
}) {
  const crevixEase = [0.16, 1, 0.3, 1];

  if (cascade) {
    return (
      <motion.div
        className={className}
        style={style}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        ease: crevixEase,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealItem component - for children inside a cascaded ScrollReveal container
 */
export function ScrollRevealItem({
  children,
  y = 24,
  x = 0,
  duration = 0.6,
  className = '',
  style = {},
}) {
  const crevixEase = [0.16, 1, 0.3, 1];

  const variants = {
    hidden: { opacity: 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        ease: crevixEase,
      },
    },
  };

  return (
    <motion.div className={className} style={style} variants={variants}>
      {children}
    </motion.div>
  );
}

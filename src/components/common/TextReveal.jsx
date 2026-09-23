import React from 'react';
import { motion } from 'framer-motion';

/**
 * TextReveal Component (MarketingLab-style)
 * Word-by-word bold staggered entrance animation
 */
export default function TextReveal({
  text = '',
  className = '',
  style = {},
  tag = 'h2',
  delay = 0,
  stagger = 0.05,
  duration = 0.55,
}) {
  const words = text.split(' ');
  const crevixEase = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      rotateX: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: crevixEase,
      },
    },
  };

  const MotionTag = motion[tag] || motion.h2;

  return (
    <MotionTag
      className={`text-reveal-container ${className}`}
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        ...style,
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
    >
      {words.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            marginRight: '0.28em',
            lineHeight: 1.25,
          }}
        >
          <motion.span
            variants={wordVariants}
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity',
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Accordion Component
 * Smooth height + opacity expansion without instant snaps.
 */
export default function Accordion({ items = [], allowMultiple = false, className = '' }) {
  const [openIndexes, setOpenIndexes] = useState([0]); // First item open by default

  const toggleIndex = (idx) => {
    if (allowMultiple) {
      if (openIndexes.includes(idx)) {
        setOpenIndexes(openIndexes.filter(i => i !== idx));
      } else {
        setOpenIndexes([...openIndexes, idx]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(idx) ? [] : [idx]);
    }
  };

  const crevixEase = [0.16, 1, 0.3, 1];

  return (
    <div className={`accordion-wrapper ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((item, idx) => {
        const isOpen = openIndexes.includes(idx);
        return (
          <div 
            key={item.id || idx}
            style={{
              background: '#FFFFFF',
              border: isOpen ? '1px solid var(--saffron)' : '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              boxShadow: isOpen ? '0 4px 14px rgba(181, 100, 43, 0.08)' : 'var(--shadow-xs)'
            }}
          >
            {/* Header / Trigger */}
            <button
              type="button"
              onClick={() => toggleIndex(idx)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 20px',
                textAlign: 'left',
                background: 'transparent',
                cursor: 'pointer',
                gap: '12px'
              }}
              aria-expanded={isOpen}
            >
              <span style={{ fontSize: '15px', fontWeight: 600, color: isOpen ? 'var(--primary)' : 'var(--text-main)' }}>
                {item.title || item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: crevixEase }}
                style={{ display: 'flex', alignItems: 'center', color: isOpen ? 'var(--saffron)' : 'var(--text-muted)' }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            {/* Smooth Content Expansion with Height & Opacity */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto', 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.35, ease: crevixEase },
                      opacity: { duration: 0.25, delay: 0.08, ease: crevixEase }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      opacity: { duration: 0.2 },
                      height: { duration: 0.3, ease: crevixEase }
                    }
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 20px 18px 20px', fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.6, borderTop: '1px solid var(--border-light)', paddingTop: '14px' }}>
                    {item.content || item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

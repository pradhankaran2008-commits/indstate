import React, { useState, useEffect, useRef } from 'react';

/**
 * CursorAmbientBg Component (MarketingLab-style)
 * Soft, ultra-subtle ambient light gradients that gently drift with cursor movement.
 * Keeps overall background crisp white while adding depth and life.
 * Automatically disabled on touch screens and when prefers-reduced-motion is on.
 */
export default function CursorAmbientBg({ className = '', style = {} }) {
  const containerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Only enable on desktop fine pointer and if reduced motion is disabled
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsEnabled(finePointer && !reducedMotion);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    let frameId;
    const handleMouseMove = (e) => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Normalized coordinates from -1 to 1
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        setCoords({ x, y });
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div
      ref={containerRef}
      className={`cursor-ambient-wrapper ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Primary Warm Bronze Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '25%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(181, 100, 43, 0.07) 0%, rgba(181, 100, 43, 0) 70%)',
          filter: 'blur(70px)',
          transform: `translate3d(${coords.x * 35}px, ${coords.y * 35}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
        }}
      />

      {/* Secondary Forest Green Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '25%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(31, 95, 74, 0.06) 0%, rgba(31, 95, 74, 0) 70%)',
          filter: 'blur(80px)',
          transform: `translate3d(${coords.x * -25}px, ${coords.y * -25}px, 0)`,
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}

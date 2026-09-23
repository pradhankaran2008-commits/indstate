import React, { useRef, useState, useEffect } from 'react';

/**
 * MagneticButton Component (MarketingLab-style)
 * Attracts button slightly toward cursor on hover proximity (max 6-8px).
 * Springs back smoothly on mouse leave.
 * Keeps outer bounding box stable for 100% click hitbox reliability.
 */
export default function MagneticButton({
  children,
  pullFactor = 0.25,
  maxDistance = 8,
  className = '',
  style = {},
  onClick,
  ...props
}) {
  const boundingRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsFinePointer(finePointer && !reducedMotion);
  }, []);

  const handleMouseMove = (e) => {
    if (!isFinePointer || !boundingRef.current) return;

    const rect = boundingRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * pullFactor;
    const deltaY = (e.clientY - centerY) * pullFactor;

    // Clamp translation to maxDistance (6-8px)
    const clampedX = Math.max(-maxDistance, Math.min(maxDistance, deltaX));
    const clampedY = Math.max(-maxDistance, Math.min(maxDistance, deltaY));

    setOffset({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    if (!isFinePointer) return;
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={boundingRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'inline-block',
        position: 'relative',
        ...style,
      }}
      onClick={onClick}
      {...props}
    >
      <div
        className={className}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: offset.x === 0 && offset.y === 0 
            ? 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)' 
            : 'transform 0.1s ease-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}

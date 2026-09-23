import React, { useRef, useState, useEffect } from 'react';

/**
 * TiltCard Component (MarketingLab-style)
 * 3D perspective tilt based on cursor coordinates.
 * Includes a soft, non-distracting specular glare highlight.
 * Automatically bypassed on mobile/touch devices.
 */
export default function TiltCard({
  children,
  maxTilt = 3,
  glare = true,
  className = '',
  style = {},
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop fine pointers and if reduced motion is disabled
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsFinePointer(finePointer && !reducedMotion);
  }, []);

  const handleMouseMove = (e) => {
    if (!isFinePointer || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Constrain tilt to max 3 degrees
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;

    setTilt({ rotateX, rotateY });

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlarePos({ x: glareX, y: glareY, opacity: 0.12 });
    }
  };

  const handleMouseLeave = () => {
    if (!isFinePointer) return;
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlarePos({ x: 50, y: 50, opacity: 0 });
  };

  if (!isFinePointer) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card-wrap ${className}`}
      style={{
        perspective: '1000px',
        position: 'relative',
        ...style,
      }}
    >
      <div
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: tilt.rotateX === 0 && tilt.rotateY === 0 
            ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' 
            : 'transform 0.08s ease-out',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          position: 'relative',
          height: '100%',
        }}
      >
        {children}

        {/* Subtle Specular Glare Reflection */}
        {glare && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              pointerEvents: 'none',
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}) 0%, rgba(255, 255, 255, 0) 65%)`,
              transition: 'opacity 0.25s ease',
              mixBlendMode: 'overlay',
              zIndex: 10,
            }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}

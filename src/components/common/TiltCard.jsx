import React from 'react';

/**
 * TiltCard Component - Stabilized
 * Keeps elements completely stationary on hover.
 * Eliminates 3D rotation, jittery transforms, and mousemove state updates.
 */
export default function TiltCard({
  children,
  className = '',
  style = {},
}) {
  return (
    <div
      className={`tilt-card-wrap ${className}`}
      style={{
        position: 'relative',
        height: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

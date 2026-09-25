import React from 'react';

/**
 * MagneticButton Component - Stabilized
 * Keeps buttons stationary and responsive without chasing cursor coordinates.
 */
export default function MagneticButton({
  children,
  className = '',
  style = {},
  onClick,
  ...props
}) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-block',
        position: 'relative',
        ...style,
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}

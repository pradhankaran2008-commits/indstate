import React from 'react';

/**
 * Official INDSTATE Logo Component
 * Matches the user-provided identity:
 * Bold royal navy typography with an upward growth trajectory arc and tagline.
 */
export default function IndstateLogo({ 
  height = 42, 
  isDark = false, 
  showTagline = true,
  className = '',
  style = {}
}) {
  const textColor = isDark ? '#FFFFFF' : '#0F1B3D';
  const curveColor = isDark ? '#94A3B8' : '#CBD5E1';
  const nodeColor = isDark ? '#E2E8F0' : '#94A3B8';

  return (
    <div 
      className={`indstate-logo-wrap ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        lineHeight: 1, 
        ...style 
      }}
    >
      <svg 
        viewBox="0 0 460 180" 
        height={height} 
        width="auto"
        style={{ height: `${height}px`, width: 'auto', display: 'block' }}
        aria-label="INDSTATE - India's Trusted Property Marketplace"
      >
        {/* Upward Growth / Market Trajectory Arc with Node Dots */}
        <g id="growth-arc">
          <path 
            d="M 85 142 C 145 136, 210 110, 365 24" 
            fill="none" 
            stroke={curveColor} 
            strokeWidth="7.5" 
            strokeLinecap="round"
            opacity={isDark ? "0.6" : "0.9"}
          />
          {/* Bottom-left origin dot */}
          <circle cx="85" cy="142" r="5.5" fill={nodeColor} />
          {/* Top-right peak dot */}
          <circle cx="365" cy="24" r="6" fill={nodeColor} />
        </g>

        {/* Main INDSTATE Typography */}
        <text 
          x="225" 
          y="98" 
          fontFamily="'Inter', sans-serif" 
          fontSize="56" 
          fontWeight="900" 
          fill={textColor} 
          letterSpacing="-0.5" 
          textAnchor="middle"
        >
          INDSTATE
        </text>

        {/* Tagline */}
        {showTagline && (
          <text 
            x="225" 
            y="126" 
            fontFamily="'Inter', sans-serif" 
            fontSize="10" 
            fontWeight="800" 
            fill={textColor} 
            letterSpacing="3.5" 
            textAnchor="middle"
          >
            INDIA'S TRUSTED PROPERTY MARKETPLACE
          </text>
        )}
      </svg>
    </div>
  );
}

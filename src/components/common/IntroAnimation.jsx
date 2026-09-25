import React, { useState, useEffect } from 'react';
import './IntroAnimation.css';

/**
 * Professional 3-Second Animated Intro Screen for INDSTATE
 * 
 * Coordinated 3.0-Second Timeline:
 * 0.0s – 0.5s: Clean white backdrop; upward curved growth line draws smoothly
 *              from left to right, circular endpoint blooms into place.
 * 0.5s – 1.3s: Crisp INDSTATE royal navy wordmark reveals with smooth upward motion & opacity.
 * 1.3s – 2.0s: Tagline "INDIA'S TRUSTED PROPERTY MARKETPLACE" reveals with gentle letter-spacing.
 * 2.0s – 2.5s: Hold full logo still and centered for premium brand recognition.
 * 2.5s – 3.0s: Smooth fade-out of the intro overlay; triggers homepage entrance animations.
 * 3.0s:        Intro unmounts from DOM completely; scrolling restored.
 */
export default function IntroAnimation({ onExitStart, onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  // Prevent background scrolling while intro is active; restore on unmount/completion
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const prevTouchAction = document.body.style.touchAction;
    
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.touchAction = prevTouchAction;
    };
  }, []);

  // Coordinated timeline sequence
  useEffect(() => {
    // Respect user's accessibility reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = motionQuery.matches;

    if (prefersReducedMotion) {
      // Brief static display (0.8s) and quick 0.3s fade-out (total 1.1s)
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        if (onExitStart) onExitStart();
      }, 800);

      const completeTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1100);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }

    // Normal 3.0-second total animation timeline
    // At 2.5s (2500ms): trigger smooth 0.5s fade-out & notify parent to mount homepage fresh
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      if (onExitStart) onExitStart();
    }, 2500);

    // At 3.0s (3000ms): sequence finishes; remove intro overlay from DOM
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onExitStart, onComplete]);

  // Fast skip option for developer testing or users who click skip
  const handleSkip = () => {
    setIsExiting(true);
    if (onExitStart) onExitStart();
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 150);
  };

  return (
    <aside 
      className={`indstate-intro-overlay ${isExiting ? 'is-exiting' : ''}`}
      aria-label="INDSTATE Brand Introduction"
      role="dialog"
      aria-modal="true"
    >
      {/* Quick skip action for development and testing */}
      <button 
        type="button" 
        className="indstate-intro-skip-btn" 
        onClick={handleSkip}
        title="Skip Intro Animation"
      >
        Skip &rarr;
      </button>

      <div className="indstate-intro-container">
        {/* Exact INDSTATE Logo SVG Asset Reproduction */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 520 260" 
          className="indstate-intro-svg"
          aria-label="INDSTATE - INDIA'S TRUSTED PROPERTY MARKETPLACE"
        >
          {/* 1. Growth Curve & Endpoint Dots (0.0s – 0.5s) */}
          <g id="growth-curve" className="intro-curve-group">
            {/* Origin Dot at bottom-left */}
            <circle 
              cx="116" 
              cy="200" 
              r="6.5" 
              fill="#94A3B8" 
              className="intro-origin-dot" 
            />

            {/* Upward curved line drawing left to right */}
            <path 
              d="M 116 200 C 175 190, 240 160, 400 48" 
              fill="none" 
              stroke="#CBD5E1" 
              strokeWidth="9.5" 
              strokeLinecap="round"
              opacity="0.85"
              className="intro-curve-path"
            />

            {/* Terminal Endpoint Dot at top-right */}
            <circle 
              cx="400" 
              cy="48" 
              r="7" 
              fill="#94A3B8" 
              className="intro-endpoint-dot" 
            />

            {/* Micro subtle bloom halo at endpoint */}
            <circle 
              cx="400" 
              cy="48" 
              r="14" 
              fill="#94A3B8" 
              className="intro-endpoint-halo" 
            />
          </g>

          {/* 2. Bold Dark Navy Wordmark (0.5s – 1.3s) */}
          <g className="intro-wordmark-group">
            <text 
              x="250" 
              y="136" 
              fontFamily="'Outfit', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              fontSize="65" 
              fontWeight="900" 
              fill="#1B3679" 
              letterSpacing="-0.5" 
              textAnchor="middle"
            >
              INDSTATE
            </text>
          </g>

          {/* 3. Official Tagline with Letter-Spacing Animation (1.3s – 2.0s) */}
          <g className="intro-tagline-group">
            <text 
              x="250" 
              y="166" 
              fontFamily="'Outfit', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
              fontSize="11.5" 
              fontWeight="800" 
              fill="#1B3679" 
              letterSpacing="4.5" 
              textAnchor="middle"
            >
              INDIA&apos;S TRUSTED PROPERTY MARKETPLACE
            </text>
          </g>
        </svg>
      </div>
    </aside>
  );
}

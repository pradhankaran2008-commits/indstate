import React from 'react';

/**
 * 3D Glossy Robot Orb Chat Avatar Component
 * Accurately replicates the user's reference design:
 * - Spherical white/chrome pearlescent outer orb with ambient 3D shading
 * - Inset speech-bubble face screen with small tail at bottom-left (~8 o'clock)
 * - Deep dark glossy glass interior screen with smooth specular light streak
 * - Two glowing cyan-blue pill/capsule eyes with neon glow filter
 * - Soft ground drop shadow creating a floating depth effect
 * - Optional unread notification badge on the top-right
 */
export default function ChatbotOrbAvatar({ 
  size = 58, 
  unreadCount = 0,
  className = '',
  style = {}
}) {
  return (
    <div 
      className={`chatbot-orb-wrap ${className}`}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        ...style
      }}
      aria-label="INDSTATE AI Assistant Avatar"
    >
      <svg 
        viewBox="0 0 200 200" 
        width={size} 
        height={size}
        style={{ 
          width: '100%', 
          height: '100%', 
          overflow: 'visible',
          display: 'block' 
        }}
      >
        <defs>
          {/* Ground Soft Ambient Drop Shadow */}
          <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0F1B3D" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#0F1B3D" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0F1B3D" stopOpacity="0" />
          </radialGradient>

          {/* 3D Pearlescent Outer Chrome Orb Shading */}
          <radialGradient id="outerOrbGrad" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#EEF2F7" />
            <stop offset="78%" stopColor="#D5DEE8" />
            <stop offset="92%" stopColor="#BAC6D5" />
            <stop offset="100%" stopColor="#98A7BA" />
          </radialGradient>

          {/* Outer Orb Specular Rim Highlight */}
          <linearGradient id="orbRimHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8A9BB2" stopOpacity="0.45" />
          </linearGradient>

          {/* Inset Screen Bezel Shadow (Gives deep inset recess) */}
          <radialGradient id="screenBezel" cx="48%" cy="46%" r="55%">
            <stop offset="82%" stopColor="#1E293B" stopOpacity="0" />
            <stop offset="95%" stopColor="#0F172A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#020617" stopOpacity="1" />
          </radialGradient>

          {/* Dark Metallic/Glass Face Interior */}
          <radialGradient id="screenInterior" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#14213D" />
            <stop offset="38%" stopColor="#0A1124" />
            <stop offset="80%" stopColor="#050814" />
            <stop offset="100%" stopColor="#02040A" />
          </radialGradient>

          {/* Curved Glass Specular Highlight Streak */}
          <linearGradient id="glassStreak" x1="15%" y1="5%" x2="85%" y2="95%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="65%" stopColor="#38BDF8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Vibrant Glowing Eyes Cyan Gradient */}
          <linearGradient id="eyeCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="40%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Neon Glow Filter for Eyes */}
          <filter id="neonEyeGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Ground Ambient Floating Drop Shadow */}
        <ellipse 
          cx="100" 
          cy="188" 
          rx="68" 
          ry="11" 
          fill="url(#groundShadow)" 
        />

        {/* 2. Main 3D Spherical White/Chrome Orb Shell */}
        <circle 
          cx="100" 
          cy="92" 
          r="84" 
          fill="url(#outerOrbGrad)" 
        />
        <circle 
          cx="100" 
          cy="92" 
          r="83.5" 
          fill="none" 
          stroke="url(#orbRimHighlight)" 
          strokeWidth="1.5" 
        />

        {/* 3. Subtle Orb Bottom Ambient Reflection */}
        <path 
          d="M 38 132 C 60 166, 140 166, 162 132 C 145 158, 55 158, 38 132 Z" 
          fill="#FFFFFF" 
          opacity="0.32" 
        />

        {/* 4. Speech-Bubble Shaped Inset Dark Glass Screen */}
        <g id="speech-screen-group">
          {/* Main Speech Bubble Inset Screen */}
          <path 
            d="
              M 98 28
              C 142 28, 172 58, 172 94
              C 172 130, 140 156, 102 156
              C 74 156, 52 144, 42 128
              L 26 138
              C 23 140, 20 137, 22 134
              L 29 116
              C 25 108, 24 101, 24 94
              C 24 58, 56 28, 98 28
              Z
            "
            fill="url(#screenInterior)"
          />

          {/* Inset Screen Inner Bezel Shadow */}
          <path 
            d="
              M 98 28
              C 142 28, 172 58, 172 94
              C 172 130, 140 156, 102 156
              C 74 156, 52 144, 42 128
              L 26 138
              C 23 140, 20 137, 22 134
              L 29 116
              C 25 108, 24 101, 24 94
              C 24 58, 56 28, 98 28
              Z
            "
            fill="url(#screenBezel)"
          />

          {/* Crisp Silver/Chrome Lip Border around Screen */}
          <path 
            d="
              M 98 28
              C 142 28, 172 58, 172 94
              C 172 130, 140 156, 102 156
              C 74 156, 52 144, 42 128
              L 26 138
              C 23 140, 20 137, 22 134
              L 29 116
              C 25 108, 24 101, 24 94
              C 24 58, 56 28, 98 28
              Z
            "
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="2"
            opacity="0.85"
          />

          {/* 5. Curved Glass Specular Highlight Streak across Upper-Right */}
          <path 
            d="
              M 48 48 
              C 78 34, 134 36, 158 60 
              C 166 70, 168 82, 164 94 
              C 152 74, 115 56, 68 54 
              Z
            "
            fill="url(#glassStreak)"
            opacity="0.88"
          />
          <ellipse 
            cx="142" 
            cy="60" 
            rx="18" 
            ry="9" 
            transform="rotate(-28 142 60)" 
            fill="#FFFFFF" 
            opacity="0.28" 
          />

          {/* 6. Glowing Cyan Eyes (Two Rounded Vertical Pills / Stylized Quotes) */}
          <g filter="url(#neonEyeGlow)">
            {/* Left Eye: Tilted Rounded Pill */}
            <rect 
              x="62" 
              y="66" 
              width="19" 
              height="38" 
              rx="9.5" 
              transform="rotate(16 71.5 85)"
              fill="url(#eyeCyanGrad)"
            />
            {/* Left Eye Core Specular Dot */}
            <circle 
              cx="70" 
              cy="76" 
              r="4" 
              fill="#FFFFFF" 
              opacity="0.75" 
            />

            {/* Right Eye: Tilted Rounded Pill */}
            <rect 
              x="100" 
              y="82" 
              width="19" 
              height="38" 
              rx="9.5" 
              transform="rotate(16 109.5 101)"
              fill="url(#eyeCyanGrad)"
            />
            {/* Right Eye Core Specular Dot */}
            <circle 
              cx="108" 
              cy="92" 
              r="4" 
              fill="#FFFFFF" 
              opacity="0.75" 
            />
          </g>
        </g>
      </svg>

      {/* Unread Message Counter Badge (Top-Right Dark Navy Circle with White Number) */}
      {unreadCount > 0 && (
        <span 
          style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            background: '#0F1B3D',
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 700,
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            border: '2px solid #FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 3px 8px rgba(15, 27, 61, 0.45)',
            zIndex: 10,
            lineHeight: 1
          }}
        >
          {unreadCount > 9 ? '9+' : unreadCount}
        </span>
      )}
    </div>
  );
}

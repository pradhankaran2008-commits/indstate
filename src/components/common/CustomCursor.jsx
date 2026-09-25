import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';

/**
 * Custom Animated Liquid Cursor
 * Desktop-only circle-based cursor with fluid trailing delay,
 * section-based scroll adaptations (Hero -> Content Ring -> Footer Glow),
 * and contextual hover morphs (Buttons, Property Cards, Chatbot, Input fields).
 */
export default function CustomCursor() {
  const [isSupported, setIsSupported] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverType, setHoverType] = useState('default'); // 'default' | 'button' | 'card' | 'chat' | 'input'
  const [activeSection, setActiveSection] = useState('hero'); // 'hero' | 'content' | 'footer'

  const cursorRef = useRef(null);

  // Position coordinates: actual pointer vs interpolated lerp
  const mousePos = useRef({ x: -100, y: -100 });
  const renderPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  // Check desktop hover capability & reduced-motion preference
  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const checkSupport = () => {
      const isFinePointer = hoverQuery.matches;
      const isReduced = motionQuery.matches;
      const canRun = isFinePointer && !isReduced;
      setIsSupported(canRun);

      if (canRun) {
        document.body.classList.add('has-custom-cursor');
      } else {
        document.body.classList.remove('has-custom-cursor');
      }
    };

    checkSupport();

    hoverQuery.addEventListener('change', checkSupport);
    motionQuery.addEventListener('change', checkSupport);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      hoverQuery.removeEventListener('change', checkSupport);
      motionQuery.removeEventListener('change', checkSupport);
    };
  }, []);

  // RAF Lerp Trailing Loop (Liquid physics: factor 0.18 - 0.22)
  useEffect(() => {
    if (!isSupported) return;

    const LERP_FACTOR = 0.20;

    const animate = () => {
      const target = mousePos.current;
      const current = renderPos.current;

      current.x += (target.x - current.x) * LERP_FACTOR;
      current.y += (target.y - current.y) * LERP_FACTOR;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isSupported]);

  // Mouse event listeners for coordinates, visibility, and click reactions
  useEffect(() => {
    if (!isSupported) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isSupported, isVisible]);

  // Section Observer: Hero vs Content (Middle) vs Footer (Bottom)
  useEffect(() => {
    if (!isSupported) return;

    const handleScrollCheck = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Check footer proximity
      if (scrollY + windowHeight >= docHeight - 320) {
        setActiveSection('footer');
      } else if (scrollY < 420) {
        setActiveSection('hero');
      } else {
        setActiveSection('content');
      }
    };

    window.addEventListener('scroll', handleScrollCheck, { passive: true });
    handleScrollCheck();

    // IntersectionObserver for explicit sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sectionType = entry.target.getAttribute('data-cursor-section');
          if (sectionType) {
            setActiveSection(sectionType);
          } else if (entry.target.tagName.toLowerCase() === 'footer') {
            setActiveSection('footer');
          } else if (entry.target.classList.contains('hero-section')) {
            setActiveSection('hero');
          }
        });
      },
      { threshold: 0.15 }
    );

    const observeTargets = () => {
      const heroes = document.querySelectorAll('.hero-section, [data-cursor-section="hero"]');
      const footers = document.querySelectorAll('footer, [data-cursor-section="footer"]');
      heroes.forEach(el => observer.observe(el));
      footers.forEach(el => observer.observe(el));
    };

    observeTargets();
    // Re-observe after route transitions
    const timeout = setTimeout(observeTargets, 600);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScrollCheck);
      observer.disconnect();
    };
  }, [isSupported]);

  // Event Delegation for Contextual Hover Interactions
  useEffect(() => {
    if (!isSupported) return;

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      let newType = 'default';

      // 1. Text Inputs & Form Fields
      if (target.closest('input, textarea, select, [contenteditable="true"]')) {
        newType = 'input';
      }
      // 2. Chatbot Widget
      else if (target.closest('.chatbot-floating-btn, .chatbot-orb-wrap, [data-cursor="chat"]')) {
        newType = 'chatbot';
      }
      // 3. Clickable Buttons, Links, and Interactive Controls
      else if (target.closest('.card-tool-btn, [role="button"], .btn')) {
        newType = 'button';
      }
      // 4. Property Cards & Thumbnails
      else if (target.closest('.property-card, .property-card-thumb-wrap, [data-cursor="view"]')) {
        newType = 'card';
      }
      // 5. Generic Links/Buttons
      else if (target.closest('a, button, .clickable')) {
        newType = 'button';
      }

      setHoverType((prev) => (prev !== newType ? newType : prev));
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isSupported]);

  if (!isSupported) return null;

  // Determine current cursor visual presentation
  let cursorContent = null;
  let cursorStyle = {};

  if (hoverType === 'card') {
    // Morphed "View" pill on property cards
    cursorStyle = {
      width: '68px',
      height: '32px',
      borderRadius: '20px',
      background: 'rgba(15, 27, 61, 0.95)',
      border: '1.5px solid var(--accent)',
      color: '#FFFFFF',
      boxShadow: '0 8px 24px rgba(15, 27, 61, 0.28)',
      padding: '0 8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.5px'
    };
    cursorContent = (
      <>
        <Eye size={12} color="#E6BA9A" />
        <span>View</span>
      </>
    );
  } else if (hoverType === 'button') {
    // Expanded interactive ring with micro arrow
    cursorStyle = {
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      background: 'rgba(15, 27, 61, 0.12)',
      border: '2px solid var(--primary)',
      backdropFilter: 'blur(2px)',
      boxShadow: '0 4px 16px rgba(15, 27, 61, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--primary)'
    };
    cursorContent = <ArrowUpRight size={15} strokeWidth={2.4} />;
  } else if (hoverType === 'chatbot') {
    // Hide custom cursor completely when hovering over chatbot avatar to keep focus 100% on the 3D avatar
    cursorStyle = {
      opacity: 0,
      width: '0px',
      height: '0px',
      pointerEvents: 'none',
      transition: 'opacity 0.2s ease'
    };
    cursorContent = null;
  } else if (hoverType === 'input') {
    // Subtle precision dot for inputs
    cursorStyle = {
      width: '4px',
      height: '18px',
      borderRadius: '2px',
      background: 'var(--primary)',
      boxShadow: '0 0 4px rgba(15, 27, 61, 0.4)'
    };
  } else {
    // Section-based scroll styles when in 'default'
    if (activeSection === 'hero') {
      // Hero: Solid navy-blue circle (14px)
      cursorStyle = {
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        background: 'var(--primary)',
        border: '1.5px solid rgba(255, 255, 255, 0.85)',
        boxShadow: '0 2px 8px rgba(15, 27, 61, 0.25)'
      };
    } else if (activeSection === 'footer') {
      // Footer / CTA: Larger bronze circle (18px) with warm radiant glow
      cursorStyle = {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        background: 'var(--accent)',
        border: '2px solid #FFFFFF',
        boxShadow: '0 0 16px rgba(181, 100, 43, 0.65), 0 0 0 2px rgba(255, 255, 255, 0.8)'
      };
    } else {
      // Content / Listings: Thin hollow outlined ring (16px) - avoids blocking property photos
      cursorStyle = {
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: 'rgba(15, 27, 61, 0.04)',
        border: '2px solid rgba(15, 27, 61, 0.75)',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.08)'
      };
    }
  }

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.22s ease-out',
        willChange: 'transform'
      }}
    >
      <div
        style={{
          ...cursorStyle,
          position: 'absolute',
          top: 0,
          left: 0,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.84 : 1})`,
          transition: 'width 0.32s cubic-bezier(0.16, 1, 0.3, 1), height 0.32s cubic-bezier(0.16, 1, 0.3, 1), background 0.32s ease, border 0.32s ease, box-shadow 0.32s ease, transform 0.16s ease-out',
          userSelect: 'none',
          boxSizing: 'border-box'
        }}
      >
        {cursorContent}
      </div>
    </div>
  );
}

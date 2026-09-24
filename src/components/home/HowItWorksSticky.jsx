import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from 'framer-motion';
import {
  Search, ShieldCheck, Car, KeyRound, CheckCircle2,
  ArrowRight, Sparkles, Building2
} from 'lucide-react';
import TextReveal from '../common/TextReveal';
import MagneticButton from '../common/MagneticButton';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: 1,
    stepNum: "01",
    tag: "Search & Filter",
    title: "Pinpoint Certified Homes Across 28 States",
    desc: "Filter residential apartments, luxury villas, builder floors, or commercial spaces across 500+ Indian cities. Every listing features verified RERA carpet area measurements — zero super built-up inflation.",
    icon: <Search size={22} />,
    color: "var(--accent)", // Bronze / Orange
    colorRaw: "#B5642B",
    tint: "rgba(181, 100, 43, 0.07)",
    preview: {
      badge: "Step 1: Smart Filter Engine",
      stat1: "28 States + 8 UTs",
      stat2: "10,000+ Units",
      headline: "Curated Indian Portfolios",
      highlight: "State RERA Registration Verified"
    }
  },
  {
    id: 2,
    stepNum: "02",
    tag: "Legal Due Diligence",
    title: "Instant State RERA & Title Verification",
    desc: "Inspect sanctioned layout plans, builder escrow compliance, encumbrance certificates, and RERA delivery track records directly from state registries before paying any deposit.",
    icon: <ShieldCheck size={22} />,
    color: "var(--success)", // Forest Green
    colorRaw: "#1F5F4A",
    tint: "rgba(31, 95, 74, 0.07)",
    preview: {
      badge: "Step 2: 70% Escrow Protection",
      stat1: "100% RERA Checked",
      stat2: "Zero Delayed Handover",
      headline: "Government Audited Sanctions",
      highlight: "Direct Link to State RERA Registries"
    }
  },
  {
    id: 3,
    stepNum: "03",
    tag: "Physical Verification",
    title: "Free Escorted Site Inspections",
    desc: "Select your convenient weekend date and time slot. Our certified local property advisors escort you and your family to the site, providing objective inspection of sunlight, Vastu entries, and road connectivity.",
    icon: <Car size={22} />,
    color: "var(--primary)", // Deep Navy
    colorRaw: "#0F1B3D",
    tint: "rgba(15, 27, 61, 0.06)",
    preview: {
      badge: "Step 3: Family-Friendly Inspection",
      stat1: "Free Site Escort",
      stat2: "Certified Advisor",
      headline: "Transparent Physical Visits",
      highlight: "Verified Construction Quality"
    }
  },
  {
    id: 4,
    stepNum: "04",
    tag: "Zero Brokerage",
    title: "Direct Owner Connect & 8.40% Bank Loans",
    desc: "Complete your transaction directly with verified property owners or Grade-A builders with zero middleman commissions. Seamless home loan sanctioning with SBI, HDFC, and ICICI.",
    icon: <KeyRound size={22} />,
    color: "#7C3AED", // Purple as specified
    colorRaw: "#7C3AED",
    tint: "rgba(124, 58, 237, 0.06)",
    preview: {
      badge: "Step 4: Direct Savings",
      stat1: "₹0 Brokerage",
      stat2: "8.40% p.a. Loans",
      headline: "Fast Digital Handover",
      highlight: "Save up to ₹2.5 Lakhs in Commissions"
    }
  }
];

export default function HowItWorksSticky() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const crevixEase = [0.16, 1, 0.3, 1];

  // Responsive check for desktop pinning (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Framer Motion useScroll scoped to the extended container runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress smoothly to active step index (0, 1, 2, 3)
  // Each step occupies an equal portion of the total scroll distance
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop || shouldReduceMotion) return;

    // 4 steps evenly mapped across scroll progress
    // Add a small dead zone at start (0-5%) and end (95-100%) for smoother entry/exit
    const adjustedProgress = Math.max(0, Math.min(1, (latest - 0.02) / 0.96));
    let newIndex = Math.floor(adjustedProgress * steps.length);
    if (newIndex >= steps.length) newIndex = steps.length - 1;
    if (newIndex < 0) newIndex = 0;

    setActiveStep(prev => (prev !== newIndex ? newIndex : prev));
  });

  // Smooth scroll jump when a user clicks a step card on desktop
  const handleStepClick = (idx) => {
    setActiveStep(idx);
    if (isDesktop && !shouldReduceMotion && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = containerHeight - viewportHeight;

      if (scrollableDistance > 0) {
        // Position scroll at the center of the step's range
        const stepProgress = (idx + 0.35) / steps.length;
        const targetY = containerTop + stepProgress * scrollableDistance;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    }
  };

  const current = steps[activeStep] || steps[0];
  const isPinnedMode = isDesktop && !shouldReduceMotion;

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        background: '#FFFFFF',
        height: isPinnedMode ? '280vh' : 'auto'
      }}
    >
      {/* Pinned Sticky Viewport on Desktop; Standard flow on Mobile */}
      <div
        style={
          isPinnedMode
            ? {
              position: 'sticky',
              top: 0,
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              overflow: 'hidden',
              padding: '20px 0'
            }
            : {
              padding: '80px 0'
            }
        }
      >
        <div className="container" style={{ width: '100%' }}>
          {/* Header */}
          <div className="section-header" style={{ marginBottom: isPinnedMode ? '32px' : '44px' }}>
            <span className="section-tag">
              <Sparkles size={13} />
              Step-by-Step Experience
            </span>
            <TextReveal
              text="How INDSTATE Transforms Indian Home Buying"
              className="section-title"
              tag="h2"
            />
            <p className="section-subtitle" style={{ maxWidth: '680px', margin: '10px auto 0 auto' }}>
              A transparent 4-stage process replacing guesswork with audited RERA documentation and zero brokerage costs.
            </p>
          </div>

          {/* 2-Column Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isPinnedMode ? '1.15fr 0.95fr' : '1fr',
              gap: isPinnedMode ? '40px' : '32px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: 4 Stacked Step Cards (All visible at all times) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: isPinnedMode ? '14px' : '18px' }}>
              {steps.map((step, idx) => {
                const isActive = isPinnedMode ? activeStep === idx : true;
                const isSingleActive = isPinnedMode && activeStep === idx;

                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepClick(idx)}
                    className={isPinnedMode ? 'hiws-step-card' : ''}
                    style={{
                      padding: isPinnedMode ? '18px 22px' : '22px 24px',
                      borderRadius: 'var(--radius-lg)',
                      background: isSingleActive ? step.tint : (isPinnedMode ? '#FFFFFF' : 'var(--bg-page)'),
                      border: isSingleActive
                        ? `2px solid ${step.color}`
                        : (isPinnedMode ? '1.5px solid var(--border-color)' : `1.5px solid ${step.color}`),
                      boxShadow: isSingleActive
                        ? '0 8px 24px rgba(15, 27, 61, 0.10), 0 2px 6px rgba(15, 27, 61, 0.06)'
                        : 'var(--shadow-xs)',
                      transform: isSingleActive ? 'translateY(-2px)' : 'translateY(0)',
                      cursor: isPinnedMode ? 'pointer' : 'default',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, background-color 0.4s ease, box-shadow 0.4s ease',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '12px',
                          fontWeight: 800,
                          color: isActive ? step.color : 'var(--text-muted)',
                          background: isSingleActive ? '#FFFFFF' : 'transparent',
                          padding: '3px 9px',
                          borderRadius: 'var(--radius-full)',
                          border: isSingleActive ? `1.5px solid ${step.color}` : '1px solid var(--border-color)',
                          transition: 'all 0.4s ease'
                        }}
                      >
                        STEP {step.stepNum}
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: isSingleActive ? 800 : 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.8px',
                          color: isPinnedMode ? (isSingleActive ? step.color : 'var(--text-muted)') : step.color,
                          transition: 'color 0.4s ease, font-weight 0.2s ease'
                        }}
                      >
                        {step.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: isPinnedMode ? '17px' : '18px', color: 'var(--primary)', marginBottom: '6px', fontWeight: 700, lineHeight: 1.3 }}>
                      {step.title}
                    </h3>

                    <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Dynamic Info Panel */}
            <div style={{ width: '100%' }}>
              <div
                style={{
                  background: 'linear-gradient(145deg, #FFFFFF 0%, var(--bg-page) 100%)',
                  borderRadius: 'var(--radius-xl)',
                  border: `2px solid ${current.color}`,
                  padding: isPinnedMode ? '32px 36px' : '28px',
                  boxShadow: '0 18px 40px rgba(15, 27, 61, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
                }}
              >
                {/* Background Watermark Icon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-15px',
                    opacity: 0.05,
                    color: current.color,
                    pointerEvents: 'none',
                    transition: 'color 0.4s ease'
                  }}
                >
                  <Building2 size={240} />
                </div>

                {/* Animated Inner Content Crossfade */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: crevixEase }}
                  >
                    {/* Pill Tag */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#FFFFFF',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-color)',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: current.color,
                        boxShadow: 'var(--shadow-xs)',
                        marginBottom: '18px'
                      }}
                    >
                      {current.icon}
                      <span>{current.preview.badge}</span>
                    </div>

                    <h4 style={{ fontSize: isPinnedMode ? '23px' : '22px', color: 'var(--primary)', marginBottom: '16px', lineHeight: 1.3, fontWeight: 700 }}>
                      {current.preview.headline}
                    </h4>

                    {/* Stats Grid Box */}
                    <div
                      style={{
                        background: '#FFFFFF',
                        borderRadius: 'var(--radius-md)',
                        padding: '16px 20px',
                        border: '1px solid var(--border-color)',
                        marginBottom: '20px'
                      }}
                    >
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Coverage / Status</span>
                          <div style={{ fontSize: '17px', fontWeight: 800, color: 'var(--primary)', marginTop: '2px' }}>
                            {current.preview.stat1}
                          </div>
                        </div>
                        <div>
                          <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Benefit Metric</span>
                          <div style={{ fontSize: '17px', fontWeight: 800, color: current.color, marginTop: '2px' }}>
                            {current.preview.stat2}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Verified Highlight Line */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-body)', fontWeight: 600, marginBottom: '24px' }}>
                      <CheckCircle2 size={16} color="var(--rera-green)" />
                      <span>{current.preview.highlight}</span>
                    </div>

                    {/* Magnetic Action Button */}
                    <MagneticButton>
                      <Link to="/properties" className="btn btn-navy" style={{ padding: '10px 22px', fontSize: '13px' }}>
                        <span>Explore Verified Properties</span>
                        <span className="icon-nudge"><ArrowRight size={15} /></span>
                      </Link>
                    </MagneticButton>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

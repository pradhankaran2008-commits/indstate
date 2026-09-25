import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import {
  Search, ShieldCheck, Car, KeyRound, CheckCircle2,
  ArrowRight, Sparkles, BadgeCheck
} from 'lucide-react';
import TextReveal from '../common/TextReveal';
import { Link } from 'react-router-dom';

const cardsData = [
  {
    id: 1,
    stepNum: "01",
    tag: "Search & Filter",
    title: "Pinpoint Certified Homes Across 28 States",
    desc: "Filter residential apartments, luxury villas, builder floors, or commercial spaces across 500+ Indian cities. Every listing features verified RERA carpet area measurements — zero super built-up inflation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    badgeTop: "10,000+ Certified Properties",
    badgeBottom: "28 States + 8 UTs",
    stat1Label: "Coverage / Scope",
    stat1Value: "500+ Indian Cities",
    stat2Label: "Area Guarantee",
    stat2Value: "100% Carpet Audited",
    highlight: "State RERA Registration Verified & No Ghost Listings",
    ctaText: "Explore Certified Homes",
    ctaLink: "/properties",
    color: "#B5642B",
    bgTint: "rgba(181, 100, 43, 0.08)",
    icon: <Search size={14} />
  },
  {
    id: 2,
    stepNum: "02",
    tag: "Legal Due Diligence",
    title: "Instant State RERA & Title Verification",
    desc: "Inspect sanctioned layout plans, builder escrow compliance, encumbrance certificates, and RERA delivery track records directly from state registries before paying any deposit.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    badgeTop: "Government Registry Audited",
    badgeBottom: "70% Escrow Protection",
    stat1Label: "Title Record Status",
    stat1Value: "100% Encumbrance Free",
    stat2Label: "Handover Metric",
    stat2Value: "Zero Delayed Projects",
    highlight: "Direct Link to State RERA Public Registries",
    ctaText: "Verify Sanctioned Plans",
    ctaLink: "/properties",
    color: "#1F5F4A",
    bgTint: "rgba(31, 95, 74, 0.08)",
    icon: <ShieldCheck size={14} />
  },
  {
    id: 3,
    stepNum: "03",
    tag: "Physical Verification",
    title: "Free Escorted Site Inspections",
    desc: "Select your convenient weekend date and time slot. Our certified local property advisors escort you and your family to the site, providing objective inspection of sunlight, Vastu entries, and road connectivity.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    badgeTop: "Certified Property Advisor Escort",
    badgeBottom: "100% Free Family Visit",
    stat1Label: "Advisory Service",
    stat1Value: "Local Real-Estate Expert",
    stat2Label: "Quality Assurance",
    stat2Value: "Vastu, Light & Road Audit",
    highlight: "Unbiased On-Site Assessment & Neighborhood Check",
    ctaText: "Schedule Free Inspection",
    ctaLink: "/agents",
    color: "#0F1B3D",
    bgTint: "rgba(15, 27, 61, 0.08)",
    icon: <Car size={14} />
  },
  {
    id: 4,
    stepNum: "04",
    tag: "Zero Brokerage",
    title: "Direct Owner Connect & 8.40% Bank Loans",
    desc: "Complete your transaction directly with verified property owners or Grade-A builders with zero middleman commissions. Seamless home loan sanctioning with SBI, HDFC, and ICICI.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    badgeTop: "Direct Owner & Builder Network",
    badgeBottom: "Save ₹2.5L+ in Commissions",
    stat1Label: "Commission Fee",
    stat1Value: "₹0 Brokerage (100% Free)",
    stat2Label: "Home Loan Rate",
    stat2Value: "From 8.40% p.a.",
    highlight: "SBI, HDFC & ICICI Preferred Partner Sanctions",
    ctaText: "Get Direct Owner Connect",
    ctaLink: "/contact",
    color: "#7C3AED",
    bgTint: "rgba(124, 58, 237, 0.08)",
    icon: <KeyRound size={14} />
  }
];

export default function HowItWorksSticky() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  // Vertical scroll progress bound exclusively to the tall parent section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track active step for top navigation pills
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let next = 0;
    if (latest < 0.25) next = 0;
    else if (latest < 0.55) next = 1;
    else if (latest < 0.82) next = 2;
    else next = 3;

    setActiveStep((prev) => (prev !== next ? next : prev));
  });

  // Smooth scroll to card when user clicks a nav pill
  const handleNavClick = (idx) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const scrollDistance = container.offsetHeight - window.innerHeight;

    const stepTargets = [0.05, 0.38, 0.68, 0.94];
    const targetScroll = containerTop + stepTargets[idx] * scrollDistance;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  // Card 0 (Step 01) Scroll Transformations
  const card0Scale = useTransform(scrollYProgress, [0, 0.20, 0.30], [1, 1, 0.93]);
  const card0Y = useTransform(scrollYProgress, [0, 0.20, 0.30], [0, 0, -20]);
  const card0Opacity = useTransform(scrollYProgress, [0, 0.20, 0.30], [1, 1, 0.45]);
  const card0ImageScale = useTransform(scrollYProgress, [0, 0.20], [1, 1]);

  // Card 1 (Step 02) Scroll Transformations
  const card1Y = useTransform(
    scrollYProgress,
    [0, 0.18, 0.30, 0.50, 0.60],
    ["115%", "115%", "0%", "0%", "-20px"]
  );
  const card1Scale = useTransform(
    scrollYProgress,
    [0, 0.30, 0.50, 0.60],
    [1, 1, 1, 0.93]
  );
  const card1Opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.30, 0.50, 0.60],
    [0, 0.5, 1, 1, 0.45]
  );
  const card1ImageScale = useTransform(scrollYProgress, [0.18, 0.30], [1.08, 1]);

  // Card 2 (Step 03) Scroll Transformations
  const card2Y = useTransform(
    scrollYProgress,
    [0, 0.48, 0.60, 0.78, 0.88],
    ["115%", "115%", "0%", "0%", "-20px"]
  );
  const card2Scale = useTransform(
    scrollYProgress,
    [0, 0.60, 0.78, 0.88],
    [1, 1, 1, 0.93]
  );
  const card2Opacity = useTransform(
    scrollYProgress,
    [0, 0.48, 0.60, 0.78, 0.88],
    [0, 0.5, 1, 1, 0.45]
  );
  const card2ImageScale = useTransform(scrollYProgress, [0.48, 0.60], [1.08, 1]);

  // Card 3 (Step 04) Scroll Transformations
  const card3Y = useTransform(
    scrollYProgress,
    [0, 0.76, 0.88, 1.0],
    ["115%", "115%", "0%", "0%"]
  );
  const card3Scale = useTransform(scrollYProgress, [0, 0.88, 1.0], [1, 1, 1]);
  const card3Opacity = useTransform(scrollYProgress, [0, 0.76, 0.88, 1.0], [0, 0.5, 1, 1]);
  const card3ImageScale = useTransform(scrollYProgress, [0.76, 0.88], [1.08, 1]);

  // Transform mapping array for easy rendering
  const cardMotionProps = [
    { y: card0Y, scale: card0Scale, opacity: card0Opacity, imgScale: card0ImageScale, zIndex: 1 },
    { y: card1Y, scale: card1Scale, opacity: card1Opacity, imgScale: card1ImageScale, zIndex: 2 },
    { y: card2Y, scale: card2Scale, opacity: card2Opacity, imgScale: card2ImageScale, zIndex: 3 },
    { y: card3Y, scale: card3Scale, opacity: card3Opacity, imgScale: card3ImageScale, zIndex: 4 },
  ];

  return (
    <section ref={containerRef} className="hedvig-scroll-section" id="how-it-works">
      {/* Sticky Viewport pinned for the full duration of the scroll progress */}
      <div className="hedvig-sticky-viewport">
        {/* Section Header */}
        <div className="hedvig-header">
          <span className="section-tag" style={{ marginBottom: '10px' }}>
            <Sparkles size={13} />
            Step-by-Step Experience
          </span>
          <TextReveal
            text="How INDSTATE Transforms Indian Home Buying"
            className="section-title"
            tag="h2"
          />
          <p
            className="section-subtitle"
            style={{ maxWidth: '640px', margin: '8px auto 0 auto', fontSize: '14.5px' }}
          >
            A transparent 4-stage process replacing guesswork with audited RERA documentation and zero brokerage costs.
          </p>

          {/* Interactive Step Navigation Bar */}
          <div className="hedvig-nav-bar">
            {cardsData.map((step, idx) => (
              <button
                key={step.id}
                type="button"
                onClick={() => handleNavClick(idx)}
                className={`hedvig-nav-pill ${activeStep === idx ? 'active' : ''}`}
              >
                <span
                  style={{
                    color: activeStep === idx ? step.color : 'inherit',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {step.icon}
                </span>
                <span>{step.stepNum} — {step.tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Hedvig Cards Stage: Stacks 4 cards over each other with pure scroll progression */}
        <div className="hedvig-cards-stage">
          {cardsData.map((card, idx) => {
            const motionStyle = cardMotionProps[idx];

            return (
              <motion.div
                key={card.id}
                className="hedvig-card"
                style={{
                  y: motionStyle.y,
                  scale: motionStyle.scale,
                  opacity: motionStyle.opacity,
                  zIndex: motionStyle.zIndex,
                  borderTop: `3px solid ${card.color}`
                }}
              >
                {/* Left Column: Image Reveal & Clipping */}
                <div className="hedvig-card-media">
                  <div className="hedvig-card-media-inner">
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      className="hedvig-card-img"
                      style={{ scale: motionStyle.imgScale }}
                      loading="eager"
                    />
                    <div className="hedvig-card-media-overlay" />

                    {/* Top Floating Badge */}
                    <div className="hedvig-card-badge-top">
                      <span style={{ color: card.color }}>{card.icon}</span>
                      <span>{card.badgeTop}</span>
                    </div>

                    {/* Bottom Floating Pill */}
                    <div className="hedvig-card-badge-bottom">
                      <BadgeCheck size={15} color="var(--rera-green)" />
                      <span>{card.badgeBottom}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Step Content, Stats & Call to Action */}
                <div className="hedvig-card-content">
                  <div>
                    {/* Step Tag */}
                    <div className="hedvig-card-step-badge">
                      <span
                        className="hedvig-step-num-pill"
                        style={{
                          color: card.color,
                          backgroundColor: card.bgTint,
                          border: `1px solid ${card.color}40`
                        }}
                      >
                        STEP {card.stepNum}
                      </span>
                      <span
                        className="hedvig-step-tag-text"
                        style={{ color: card.color }}
                      >
                        {card.tag}
                      </span>
                    </div>

                    {/* Stage Title */}
                    <h3 className="hedvig-card-title">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="hedvig-card-desc">
                      {card.desc}
                    </p>
                  </div>

                  <div>
                    {/* Real-Estate Specific Metrics */}
                    <div className="hedvig-stats-box">
                      <div>
                        <div className="hedvig-stat-label">{card.stat1Label}</div>
                        <div className="hedvig-stat-value">{card.stat1Value}</div>
                      </div>
                      <div>
                        <div className="hedvig-stat-label">{card.stat2Label}</div>
                        <div className="hedvig-stat-value" style={{ color: card.color }}>
                          {card.stat2Value}
                        </div>
                      </div>
                    </div>

                    {/* Verified Guarantee Line */}
                    <div className="hedvig-highlight-line">
                      <CheckCircle2 size={16} color="var(--rera-green)" style={{ flexShrink: 0 }} />
                      <span>{card.highlight}</span>
                    </div>

                    {/* Footer CTA */}
                    <div className="hedvig-card-footer">
                      <Link
                        to={card.ctaLink}
                        className="btn btn-navy"
                        style={{
                          padding: '10px 22px',
                          fontSize: '13.5px',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        <span>{card.ctaText}</span>
                        <span className="icon-nudge"><ArrowRight size={15} /></span>
                      </Link>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          fontWeight: 700,
                          color: 'var(--text-muted)'
                        }}
                      >
                        <span>Stage {card.stepNum} of 04</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

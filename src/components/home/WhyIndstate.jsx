import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, Percent, Calculator, 
  Car, Compass, Award, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../common/ScrollReveal';
import TextReveal from '../common/TextReveal';
import MagneticButton from '../common/MagneticButton';

export default function WhyIndstate() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const crevixEase = [0.16, 1, 0.3, 1];

  const pillars = [
    {
      icon: <ShieldCheck size={28} />,
      title: "100% RERA Verified Projects",
      desc: "Every listed project displays its authentic State RERA registration ID with audited completion timelines.",
      color: "var(--rera-green)",
      bg: "var(--rera-green-light)"
    },
    {
      icon: <Percent size={28} />,
      title: "Zero Brokerage Direct Option",
      desc: "Connect directly with genuine property owners and Grade-A builders with zero middleman commissions.",
      color: "var(--saffron)",
      bg: "var(--saffron-light)"
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: "RERA Carpet Area Standard",
      desc: "Say goodbye to 40% super built-up loading. Pay only for the actual usable square feet inside your home.",
      color: "var(--success)",
      bg: "var(--success-light)"
    },
    {
      icon: <Calculator size={28} />,
      title: "Home Loans at 8.40% p.a.",
      desc: "Direct tie-ups with SBI, HDFC Bank, and ICICI Bank for instant online sanctions and minimal paperwork.",
      color: "var(--accent)",
      bg: "var(--accent-light)"
    },
    {
      icon: <Car size={28} />,
      title: "Free Escorted Site Visits",
      desc: "Our local property advisors escort you and your family for physical property inspections safely.",
      color: "var(--primary)",
      bg: "rgba(15, 27, 61, 0.08)"
    },
    {
      icon: <Compass size={28} />,
      title: "Vastu Shastra Compliance",
      desc: "Every listing specifies directional entries (East, North-East) verified by certified Vastu consultants.",
      color: "var(--accent)",
      bg: "var(--accent-light)"
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
      <div className="container">
        <ScrollReveal y={24} duration={0.65}>
          <div className="section-header">
            <span className="section-tag">
              <Award size={13} />
              Why INDSTATE
            </span>
            <TextReveal 
              text="India's Most Trusted Property Marketplace" 
              className="section-title" 
              tag="h2" 
            />
            <p className="section-subtitle">
              Built from the ground up to bring unprecedented transparency, accountability, and speed to Indian real estate.
            </p>
          </div>
        </ScrollReveal>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '40px'
          }}
        >
          {pillars.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: crevixEase, delay: idx * 0.07 }}
              >
                <div 
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    padding: '30px',
                    borderRadius: 'var(--radius-lg)',
                    border: isHovered ? '1px solid var(--saffron)' : '1px solid var(--border-color)',
                    background: 'var(--bg-page)',
                    boxShadow: isHovered ? '0 12px 28px rgba(15, 23, 42, 0.08)' : 'none',
                    transform: isHovered ? 'translateY(-4px) scale(1.015)' : 'translateY(0) scale(1)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease',
                    height: '100%'
                  }}
                >
                  <div 
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      background: item.bg,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Banner CTA with Scroll Reveal */}
        <ScrollReveal y={20} duration={0.65} delay={0.15}>
          <div 
            style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, #162E51 100%)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '40px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '26px', marginBottom: '8px' }}>
                Are you a Property Owner or Builder in India?
              </h3>
              <p style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: 1.6 }}>
                List your flat, villa, or commercial space on INDSTATE today for FREE. Reach over 2.5 million verified Indian and NRI buyers every month.
              </p>
            </div>
            <MagneticButton>
              <Link to="/add-property" className="btn btn-primary btn-lg">
                <span>List Property For Free</span>
                <span className="icon-nudge"><ArrowRight size={18} /></span>
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

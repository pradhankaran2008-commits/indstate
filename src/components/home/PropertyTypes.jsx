import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, Home, Castle, 
  Briefcase, Compass, Users, Sparkles 
} from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function PropertyTypes() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const crevixEase = [0.16, 1, 0.3, 1];

  const types = [
    {
      name: "Apartments & Flats",
      icon: <Building2 size={32} />,
      count: "8,400+ Units",
      url: "/properties?type=Apartment",
      desc: "Gated communities with clubhouses & pools"
    },
    {
      name: "Luxury Independent Villas",
      icon: <Castle size={32} />,
      count: "1,250+ Homes",
      url: "/properties?type=Independent+Villa",
      desc: "Private gardens, high privacy & duplex layouts"
    },
    {
      name: "Sky Penthouses",
      icon: <Sparkles size={32} />,
      count: "420+ Suites",
      url: "/properties?type=Penthouse",
      desc: "Top floor panoramic vistas & private decks"
    },
    {
      name: "Builder Floors",
      icon: <Home size={32} />,
      count: "3,100+ Floors",
      url: "/properties?type=Builder+Floor",
      desc: "Exclusive single-floor living in Delhi NCR & Punjab"
    },
    {
      name: "Commercial Offices",
      icon: <Briefcase size={32} />,
      count: "1,890+ Spaces",
      url: "/properties?type=Commercial+Office",
      desc: "Grade-A IT parks, retail shops & corporate towers"
    },
    {
      name: "Residential & Farm Plots",
      icon: <Compass size={32} />,
      count: "2,400+ Plots",
      url: "/properties?type=Residential+Plot",
      desc: "RERA approved plotted layouts & NA land"
    },
    {
      name: "PG & Co-Living Suites",
      icon: <Users size={32} />,
      count: "950+ Spaces",
      url: "/properties?type=PG+/+Shared+Living",
      desc: "Fully serviced AC rooms for students & techies"
    }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        <ScrollReveal y={24} duration={0.65}>
          <div className="section-header">
            <span className="section-tag">
              <Building2 size={13} />
              Categories
            </span>
            <h2 className="section-title">Discover By Property Type</h2>
            <p className="section-subtitle">
              Find the right format of residential and commercial real estate tailored to your lifestyle and budget.
            </p>
          </div>
        </ScrollReveal>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px'
          }}
        >
          {types.map((t, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: crevixEase, delay: idx * 0.06 }}
              >
                <Link
                  to={t.url}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-lg)',
                    padding: '28px 24px',
                    border: isHovered ? '1px solid var(--saffron)' : '1px solid var(--border-color)',
                    boxShadow: isHovered ? '0 12px 28px rgba(15, 23, 42, 0.08)' : 'var(--shadow-xs)',
                    transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    height: '100%'
                  }}
                >
                  <div 
                    style={{
                      width: '58px',
                      height: '58px',
                      borderRadius: 'var(--radius-md)',
                      background: isHovered ? 'var(--saffron-light)' : 'var(--primary-alpha)',
                      color: isHovered ? 'var(--saffron)' : 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px',
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    {t.icon}
                  </div>

                  <h4 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '6px' }}>
                    {t.name}
                  </h4>
                  <span style={{ fontSize: '13px', color: 'var(--saffron)', fontWeight: 700, marginBottom: '8px' }}>
                    {t.count}
                  </span>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {t.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

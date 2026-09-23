import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useProperty } from '../../context/PropertyContext';
import PropertyCard from '../common/PropertyCard';
import ScrollReveal from '../common/ScrollReveal';
import TiltCard from '../common/TiltCard';
import TextReveal from '../common/TextReveal';

export default function FeaturedSection() {
  const { properties } = useProperty();
  const [filterPurpose, setFilterPurpose] = useState('All');

  const filtered = properties.filter(p => {
    if (filterPurpose === 'All') return true;
    return p.purpose === filterPurpose;
  });

  const displayList = filtered.slice(0, 6);
  const crevixEase = [0.16, 1, 0.3, 1];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal y={24} duration={0.65}>
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={13} />
              Exclusive Listings
            </span>
            <TextReveal 
              text="Our Featured Exclusives Across India" 
              className="section-title" 
              tag="h2" 
            />
            <p className="section-subtitle">
              Handpicked premium residences, luxury penthouses, and high-yield commercial assets across India with verified RERA documentation.
            </p>

            {/* Quick Filter Pills with Smooth Hover & Active States */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px', flexWrap: 'wrap' }}>
              {['All', 'Buy', 'Rent', 'PG-Co-living', 'Commercial'].map(purpose => (
                <button
                  key={purpose}
                  onClick={() => setFilterPurpose(purpose)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: filterPurpose === purpose ? '1.5px solid var(--saffron)' : '1px solid var(--border-color)',
                    background: filterPurpose === purpose ? 'var(--saffron)' : '#FFFFFF',
                    color: filterPurpose === purpose ? '#FFFFFF' : 'var(--text-body)',
                    boxShadow: filterPurpose === purpose ? '0 4px 14px rgba(181, 100, 43, 0.25)' : 'none',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                >
                  {purpose === 'All' ? 'All Properties' : purpose === 'Buy' ? 'For Sale' : purpose === 'Rent' ? 'For Rent' : purpose}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Property Grid with Smooth Tab Crossfade and Staggered Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filterPurpose}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: crevixEase }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '28px',
              marginBottom: '40px'
            }}
          >
            {displayList.map((property, idx) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: crevixEase, delay: idx * 0.07 }}
              >
                {property.featured ? (
                  <TiltCard maxTilt={2.2}>
                    <PropertyCard property={property} />
                  </TiltCard>
                ) : (
                  <PropertyCard property={property} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Explore All CTA with Scroll Reveal */}
        <ScrollReveal y={18} duration={0.6} delay={0.2}>
          <div style={{ textAlign: 'center' }}>
            <Link to="/properties" className="btn btn-navy btn-lg">
              <span>Explore All Indian Listings ({properties.length})</span>
              <span className="icon-nudge"><ArrowRight size={18} /></span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

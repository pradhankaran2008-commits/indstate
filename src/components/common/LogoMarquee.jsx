import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const partners = [
  {
    name: 'State Bank of India',
    type: 'Banking Partner',
    icon: 'SBI',
    color: '#1B5E20',
    logoSrc: '/logos/sbi.svg',       // Place approved SBI logo here (SVG or PNG with transparency)
  },
  {
    name: 'HDFC Bank',
    type: 'Home Loans',
    icon: 'HDFC',
    color: '#004C8F',
    logoSrc: '/logos/hdfc.svg',
  },
  {
    name: 'ICICI Bank',
    type: 'Instant Pre-approval',
    icon: 'ICICI',
    color: '#B71C1C',
    logoSrc: '/logos/icici.svg',
  },
  {
    name: 'Axis Bank',
    type: 'Financial Partner',
    icon: 'AXIS',
    color: '#880E4F',
    logoSrc: '/logos/axis.svg',
  },
  {
    name: 'Godrej Properties',
    type: 'Grade-A Developer',
    icon: 'GODREJ',
    color: '#2E7D32',
    logoSrc: '/logos/godrej.svg',
  },
  {
    name: 'DLF Limited',
    type: 'Premier Developer',
    icon: 'DLF',
    color: '#0D47A1',
    logoSrc: '/logos/dlf.svg',
  },
  {
    name: 'Prestige Group',
    type: 'South India Leader',
    icon: 'PRESTIGE',
    color: '#E65100',
    logoSrc: '/logos/prestige.svg',
  },
  {
    name: 'Lodha Group',
    type: 'Luxury Residences',
    icon: 'LODHA',
    color: '#4A148C',
    logoSrc: '/logos/lodha.svg',
  },
  {
    name: 'Tata Housing',
    type: 'Trust & Excellence',
    icon: 'TATA',
    color: '#00695C',
    logoSrc: '/logos/tata.svg',
  },
  {
    name: 'Sobha Developers',
    type: 'Craftsmanship',
    icon: 'SOBHA',
    color: '#BF360C',
    logoSrc: '/logos/sobha.svg',
  },
  {
    name: 'Kotak Mahindra',
    type: 'Fast Disbursement',
    icon: 'KOTAK',
    color: '#C2185B',
    logoSrc: '/logos/kotak.svg',
  },
  {
    name: 'Brigade Group',
    type: 'Urban Landmarks',
    icon: 'BRIGADE',
    color: '#1565C0',
    logoSrc: '/logos/brigade.svg',
  },
];

/**
 * PartnerLogo — renders the brand's official logo image if available,
 * falling back gracefully to the existing text-abbreviation badge.
 *
 * Usage:
 *   1. Obtain an approved, transparent-background logo file (SVG preferred, PNG ok).
 *   2. Name it to match the `logoSrc` path (e.g. `sbi.svg`) and place in `public/logos/`.
 *   3. The logo will appear automatically on next build/reload — no code changes needed.
 */
function PartnerLogo({ partner }) {
  const [imgFailed, setImgFailed] = useState(false);

  // If no logoSrc defined or image failed to load → text fallback
  if (!partner.logoSrc || imgFailed) {
    return (
      <div
        className="marquee-item-icon"
        style={{ borderColor: partner.color, color: partner.color }}
      >
        {partner.icon}
      </div>
    );
  }

  return (
    <div
      className="marquee-item-icon marquee-item-icon--logo"
      style={{ borderColor: partner.color }}
    >
      <img
        src={partner.logoSrc}
        alt={`${partner.name} logo`}
        className="marquee-logo-img"
        onError={() => setImgFailed(true)}
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}

function PartnerCard({ partner, keyPrefix, index, ariaHidden }) {
  return (
    <div
      key={`${keyPrefix}-${index}`}
      className="marquee-item"
      aria-hidden={ariaHidden || undefined}
    >
      <PartnerLogo partner={partner} />
      <div className="marquee-item-info">
        <span className="marquee-item-name">{partner.name}</span>
        <span className="marquee-item-type">
          <CheckCircle2 size={11} className="text-rera" />
          {partner.type}
        </span>
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="logo-marquee-section">
      <div className="container">
        <div className="logo-marquee-header">
          <div className="logo-marquee-badge">
            <ShieldCheck size={14} className="text-rera" />
            <span>Trusted Ecosystem</span>
          </div>
          <p className="logo-marquee-title">
            Pre-Approved by India's Top Home Loan Banks & Built by Grade-A Developers
          </p>
        </div>
      </div>

      <div className="marquee-wrapper" aria-label="Partner Banks and Developers">
        <div className="marquee-track">
          {/* First set */}
          {partners.map((partner, index) => (
            <PartnerCard
              key={`partner-1-${index}`}
              partner={partner}
              keyPrefix="partner-1"
              index={index}
            />
          ))}

          {/* Duplicate set for seamless infinite scroll */}
          {partners.map((partner, index) => (
            <PartnerCard
              key={`partner-2-${index}`}
              partner={partner}
              keyPrefix="partner-2"
              index={index}
              ariaHidden={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

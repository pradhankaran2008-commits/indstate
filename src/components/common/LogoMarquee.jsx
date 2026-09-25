import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const partners = [
  {
    name: 'State Bank of India',
    type: 'Premier Banking Partner',
    category: 'bank',
    icon: 'SBI',
    color: '#002D72',
    logoSrc: '/logos/sbi.svg',
  },
  {
    name: 'HDFC Bank',
    type: 'Preferred Home Loans',
    category: 'bank',
    icon: 'HDFC',
    color: '#004C8F',
    logoSrc: '/logos/hdfc.svg',
  },
  {
    name: 'ICICI Bank',
    type: 'Instant Digital Pre-Approval',
    category: 'bank',
    icon: 'ICICI',
    color: '#9B1B20',
    logoSrc: '/logos/icici.png',
  },
  {
    name: 'Axis Bank',
    type: 'National Financial Partner',
    category: 'bank',
    icon: 'AXIS',
    color: '#97144D',
    logoSrc: '/logos/axis.svg',
  },
  {
    name: 'PNB Limited',
    type: 'PSU Home Loan Facilitator',
    category: 'bank',
    icon: 'PNB',
    color: '#A21D22',
    logoSrc: '/logos/pnb.svg',
  },
  {
    name: 'Kotak Mahindra',
    type: 'Fast Track Disbursement',
    category: 'bank',
    icon: 'KOTAK',
    color: '#ED1C24',
    logoSrc: '/logos/kotak.svg',
  },
  {
    name: 'Godrej Properties',
    type: 'Nationwide Grade-A Developer',
    category: 'developer',
    icon: 'GODREJ',
    color: '#00897B',
    logoSrc: '/logos/godrej.svg',
  },
  {
    name: 'DLF Limited',
    type: 'Premier Luxury Landmarks',
    category: 'developer',
    icon: 'DLF',
    color: '#0D47A1',
    logoSrc: '/logos/dlf.svg',
  },
  {
    name: 'Prestige Group',
    type: 'South India Residential Leader',
    category: 'developer',
    icon: 'PRESTIGE',
    color: '#C59B27',
    logoSrc: '/logos/prestige.svg',
  },
  {
    name: 'Lodha Group',
    type: 'World-Class Residences',
    category: 'developer',
    icon: 'LODHA',
    color: '#B45309',
    logoSrc: '/logos/lodha.svg',
  },
  {
    name: 'Tata Housing',
    type: 'Trust & Engineering Excellence',
    category: 'developer',
    icon: 'TATA',
    color: '#00539F',
    logoSrc: '/logos/tata.svg',
  },
  {
    name: 'Sobha Developers',
    type: 'German Quality Craftsmanship',
    category: 'developer',
    icon: 'SOBHA',
    color: '#832729',
    logoSrc: '/logos/sobha.svg',
  },
  {
    name: 'K Raheja',
    type: 'Bespoke Commercial & Living',
    category: 'developer',
    icon: 'RAHEJA',
    color: '#C41230',
    logoSrc: '/logos/raheja.svg',
  },
  {
    name: 'Brigade Group',
    type: 'Urban Integrated Townships',
    category: 'developer',
    icon: 'BRIGADE',
    color: '#1565C0',
    logoSrc: '/logos/brigade.svg',
  },
];

function PartnerLogo({ partner }) {
  const [imgFailed, setImgFailed] = useState(false);

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
      style={{ borderColor: 'transparent', background: '#FFFFFF' }}
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
      {/* 1. Header */}
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

      {/* 2. Continuous Horizontal Marquee */}
      <div className="marquee-wrapper" aria-label="Partner Banks and Developers">
        <div className="marquee-track">
          {partners.map((partner, index) => (
            <PartnerCard
              key={`partner-1-${index}`}
              partner={partner}
              keyPrefix="partner-1"
              index={index}
            />
          ))}

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

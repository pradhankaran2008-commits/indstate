import React from 'react';
import { ShieldCheck, Building2, Landmark, CheckCircle2 } from 'lucide-react';

const partners = [
  { name: 'State Bank of India', type: 'Banking Partner', icon: 'SBI', color: '#1B5E20' },
  { name: 'HDFC Bank', type: 'Home Loans', icon: 'HDFC', color: '#004C8F' },
  { name: 'ICICI Bank', type: 'Instant Pre-approval', icon: 'ICICI', color: '#B71C1C' },
  { name: 'Axis Bank', type: 'Financial Partner', icon: 'AXIS', color: '#880E4F' },
  { name: 'Godrej Properties', type: 'Grade-A Developer', icon: 'GODREJ', color: '#2E7D32' },
  { name: 'DLF Limited', type: 'Premier Developer', icon: 'DLF', color: '#0D47A1' },
  { name: 'Prestige Group', type: 'South India Leader', icon: 'PRESTIGE', color: '#E65100' },
  { name: 'Lodha Group', type: 'Luxury Residences', icon: 'LODHA', color: '#4A148C' },
  { name: 'Tata Housing', type: 'Trust & Excellence', icon: 'TATA', color: '#00695C' },
  { name: 'Sobha Developers', type: 'Craftsmanship', icon: 'SOBHA', color: '#BF360C' },
  { name: 'Kotak Mahindra', type: 'Fast Disbursement', icon: 'KOTAK', color: '#C2185B' },
  { name: 'Brigade Group', type: 'Urban Landmarks', icon: 'BRIGADE', color: '#1565C0' },
];

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
            <div key={`partner-1-${index}`} className="marquee-item">
              <div className="marquee-item-icon" style={{ borderColor: partner.color, color: partner.color }}>
                {partner.icon}
              </div>
              <div className="marquee-item-info">
                <span className="marquee-item-name">{partner.name}</span>
                <span className="marquee-item-type">
                  <CheckCircle2 size={11} className="text-rera" />
                  {partner.type}
                </span>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless infinite scroll */}
          {partners.map((partner, index) => (
            <div key={`partner-2-${index}`} className="marquee-item" aria-hidden="true">
              <div className="marquee-item-icon" style={{ borderColor: partner.color, color: partner.color }}>
                {partner.icon}
              </div>
              <div className="marquee-item-info">
                <span className="marquee-item-name">{partner.name}</span>
                <span className="marquee-item-type">
                  <CheckCircle2 size={11} className="text-rera" />
                  {partner.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

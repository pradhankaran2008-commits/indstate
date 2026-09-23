import React from 'react';
import { 
  ShieldCheck, AlertTriangle, ExternalLink, 
  FileText, CheckCircle2, Lock, Scale 
} from 'lucide-react';
import { STATE_RERA_PORTALS, FAQS_DATA } from '../data/faqKnowledgeBase';
import Accordion from '../components/common/Accordion';

export default function RERADisclaimerPage() {
  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container" style={{ maxWidth: '920px' }}>
        {/* Header */}
        <div className="section-header">
          <span className="section-tag" style={{ background: 'var(--rera-green-light)', borderColor: 'var(--rera-green-border)', color: 'var(--rera-green)' }}>
            <ShieldCheck size={13} />
            Statutory Legal Compliance
          </span>
          <h1 className="section-title">RERA Compliance & Buyer Legal Disclaimer</h1>
          <p className="section-subtitle">
            Real Estate (Regulation and Development) Act, 2016 (Act No. 16 of 2016) Disclosure for Property Buyers and Investors in India.
          </p>
        </div>

        {/* Legal Advisory Banner */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '2px solid var(--rera-green)',
            padding: '32px',
            marginBottom: '36px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ background: 'var(--rera-green-light)', color: 'var(--rera-green)', padding: '14px', borderRadius: '50%' }}>
              <ShieldCheck size={32} />
            </div>
            <div>
              <h2 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '8px' }}>
                INDSTATE's 100% RERA Verification Guarantee
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7 }}>
                INDSTATE operates strictly as an intermediary real estate marketplace compliant with the Information Technology Act, 2000 and the Real Estate (Regulation and Development) Act, 2016. Every real estate development displayed on this platform requires a valid state-issued RERA registration number before being marked as <strong>RERA Verified</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of RERA Protection */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '18px' }}>
            Key Consumer Rights Protected Under the RERA Act 2016
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--saffron)', fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>
                1. Mandatory Carpet Area
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Builders cannot charge on vague "super built-up area." Prices must be based strictly on net usable carpet area inside four walls.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--rera-green)', fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>
                2. 70% Escrow Account
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Developers must deposit 70% of all collected buyer funds in a separate bank escrow account, utilized solely for project construction.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ color: '#0284C7', fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>
                3. Delay Compensation
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                If possession is delayed beyond the registered date, the developer must pay monthly interest to the homebuyer equal to the SBI MCLR + 2%.
              </p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ color: '#7C3AED', fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>
                4. 5-Year Structural Defect
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                Any structural defect or workmanship flaw brought to notice within 5 years of possession must be rectified by the builder within 30 days without cost.
              </p>
            </div>
          </div>
        </div>

        {/* Directory of State RERA Portals */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: '32px',
            marginBottom: '40px'
          }}
        >
          <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '8px' }}>
            Official State Real Estate Regulatory Authority (RERA) Portals
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Click below to cross-verify any project's sanctioned building plan, litigations, and completion certificates directly on government databases:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            {STATE_RERA_PORTALS.map(portal => (
              <a
                key={portal.state}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-color)',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--primary)',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--rera-green)';
                  e.currentTarget.style.background = 'var(--rera-green-light)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.background = 'var(--bg-page)';
                }}
              >
                <div>
                  <div style={{ fontWeight: 700 }}>{portal.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{portal.state}</div>
                </div>
                <ExternalLink size={15} color="var(--rera-green)" />
              </a>
            ))}
          </div>
        </div>

        {/* Smooth Accordion FAQ Section */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '16px' }}>
            Frequently Asked Legal & RERA Questions
          </h3>
          <Accordion items={FAQS_DATA} />
        </div>

        {/* Intermediary Disclaimer Text */}
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.7, background: 'var(--bg-alt)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
          <strong style={{ color: 'var(--text-main)' }}>Statutory Notice:</strong> The information and visual renders displayed on INDSTATE are intended for general awareness and guidance purposes only. While INDSTATE conducts preliminary verification of RERA registration credentials, all buyers and tenants are strongly advised to independently verify land titles, encumbrance certificates, approved municipal layout sanctions, and occupancy certificates directly on respective State RERA websites before entering into registered sale agreements or making financial disbursements. INDSTATE Technologies India Pvt. Ltd. shall not be held liable for discrepancies between developer marketing materials and registered statutory filings.
        </div>
      </div>
    </div>
  );
}

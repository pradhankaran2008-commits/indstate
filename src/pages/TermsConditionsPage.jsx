import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsConditionsPage() {
  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div className="section-header">
          <span className="section-tag">
            <FileText size={13} />
            Legal Terms
          </span>
          <h1 className="section-title">Terms and Conditions of Use</h1>
          <p className="section-subtitle">
            Governing property listings, intermediary duties, and consumer transactions under Indian Jurisdiction.
          </p>
        </div>

        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: '40px',
            lineHeight: 1.8,
            fontSize: '14px',
            color: 'var(--text-body)'
          }}
        >
          <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '10px' }}>1. Scope of Service & Intermediary Status</h3>
          <p style={{ marginBottom: '18px' }}>
            INDSTATE Technologies India Private Limited operates as an electronic marketplace and intermediary as defined under Section 2(1)(w) of the Information Technology Act, 2000. INDSTATE facilitates interactions between prospective buyers, tenants, certified real estate brokers, and builders across the 28 States and 8 Union Territories of the Republic of India.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '10px' }}>2. Mandatory RERA Compliance by Publishers</h3>
          <p style={{ marginBottom: '18px' }}>
            In accordance with Section 3 and Section 10 of the Real Estate (Regulation and Development) Act, 2016, all commercial advertisements or listings concerning under-construction real estate projects must state the registered RERA Project Registration Number. Publishers warrant that all pricing, carpet area metrics, and completion timelines conform to state regulatory approvals.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '10px' }}>3. Zero Brokerage & Facilitation Services</h3>
          <p style={{ marginBottom: '18px' }}>
            Where properties are flagged as "Direct Owner (0% Brokerage)", INDSTATE does not levy any brokerage on either party. For assisted transactions facilitated by licensed channel partners, brokerage terms shall be agreed upon independently in writing between the client and the channel partner per prevailing state practices.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '10px' }}>4. Governing Law & Jurisdiction</h3>
          <p>
            These terms shall be interpreted and enforced strictly under the laws of India. In the event of any legal dispute, courts in Mumbai, Maharashtra shall possess exclusive jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
}

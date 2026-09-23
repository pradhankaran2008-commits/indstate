import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        <div className="section-header">
          <span className="section-tag">
            <Lock size={13} />
            Data Protection
          </span>
          <h1 className="section-title">Privacy Policy & Data Security</h1>
          <p className="section-subtitle">
            How INDSTATE safeguards your personal data, Indian mobile phone numbers (+91), and inquiry communications.
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
          <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '10px' }}>1. Data Collection & Usage</h3>
          <p style={{ marginBottom: '18px' }}>
            We collect personal information necessary to deliver property inquiry services and site-visit escorts, including your name, 10-digit Indian mobile number, email address, preferred state and city, and search preferences. We do not sell your personal data to unauthorized third-party telemarketers.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '10px' }}>2. Sharing with Certified Advisors & Builders</h3>
          <p style={{ marginBottom: '18px' }}>
            When you submit a "Schedule a Visit" request or conversational chat callback, your contact information is shared exclusively with the verified listing owner or the RERA-certified channel partner managing that specific property to arrange access and documentation.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '10px' }}>3. Digital Personal Data Protection (DPDP) Act Compliance</h3>
          <p style={{ marginBottom: '18px' }}>
            INDSTATE adheres to the Digital Personal Data Protection Act, 2023 of India. You may at any time request deletion of your saved searches, callback histories, or registered user account by writing to privacy@indstate.in.
          </p>

          <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '10px' }}>4. Security Standards</h3>
          <p>
            All network communication is secured over 256-bit SSL encryption. Authentication OTPs sent to Indian telecom operators are ephemeral and expire within 5 minutes.
          </p>
        </div>
      </div>
    </div>
  );
}

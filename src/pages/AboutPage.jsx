import React from 'react';
import { 
  Building2, ShieldCheck, Users, Target, 
  MapPin, Award, CheckCircle, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

import IndstateLogo from '../components/common/IndstateLogo';

export default function AboutPage() {
  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div style={{ marginBottom: '16px' }}>
            <IndstateLogo height={52} />
          </div>
          <p className="section-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
            Pioneering digital transparency, verified legal documentation, and seamless property search across all 28 States and 8 Union Territories.
          </p>
        </div>

        {/* Hero Story Banner */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            marginBottom: '50px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', alignItems: 'center' }}>
            <div style={{ padding: 'clamp(20px, 5vw, 40px)' }}>
              <h2 style={{ fontSize: 'clamp(20px, 4vw, 26px)', color: 'var(--primary)', marginBottom: '16px' }}>
                Transforming Indian Real Estate Since 2021
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '16px' }}>
                For decades, Indian property transactions were plagued by opacity — misleading super built-up loadings of up to 45%, delayed project deliveries, and fragmented local brokerage cartels.
              </p>
              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.8, marginBottom: '24px' }}>
                INDSTATE was founded with a singular mission: to make home buying in India as transparent, predictable, and joyous as it ought to be. By strictly enforcing RERA compliance, carpet area calculations, and providing direct Zero-Brokerage owner connectivity, we have helped over 50,000 Indian families move into verified homes.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                  <strong style={{ fontSize: '24px', color: 'var(--saffron)', display: 'block' }}>28 + 8</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>States & UTs Covered</span>
                </div>
                <div>
                  <strong style={{ fontSize: '24px', color: 'var(--primary)', display: 'block' }}>100%</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>RERA Audited Projects</span>
                </div>
                <div>
                  <strong style={{ fontSize: '24px', color: 'var(--rera-green)', display: 'block' }}>₹14,000 Cr+</strong>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Asset Value Facilitated</span>
                </div>
              </div>
            </div>

            <div style={{ height: '100%', minHeight: '360px' }}>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                alt="INDSTATE Corporate Real Estate" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* 3 Core Values */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '50px' }}>
          <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--rera-green-light)', color: 'var(--rera-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <ShieldCheck size={26} />
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '8px' }}>Radical Transparency</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              No hidden fees, no fake carpet area inflated metrics. We publish real prices in ₹ Lakhs & Crores and verified government approvals.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'var(--saffron-light)', color: 'var(--saffron)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Users size={26} />
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '8px' }}>Empowering Local Advisors</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              We partner exclusively with RERA-licensed channel partners and advisors with verified state credentials, never unregulated freelancers.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.1)', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Target size={26} />
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '8px' }}>Inclusive & Vernacular AI</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              India searches for homes in English and Hinglish. Our conversational AI assistant bridges all languages so every citizen finds their home.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/properties" className="btn btn-primary btn-lg">
            <span>Explore Verified Properties Now</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

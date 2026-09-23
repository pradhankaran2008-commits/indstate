import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', city: 'Mumbai', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', city: 'Mumbai', message: '' });
      alert("Dhanyawad! Your message has been received. Our team will get back to you within 2 business hours.");
    }, 1200);
  };

  const offices = [
    {
      city: "Mumbai (Corporate HQ)",
      address: "Level 14, Tower 3, BKC Corporate Park, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
      phone: "+91 22 6120 4000",
      email: "mumbai@indstate.in"
    },
    {
      city: "Bengaluru Tech Hub",
      address: "Plot 42, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
      phone: "+91 80 4110 5000",
      email: "bangalore@indstate.in"
    },
    {
      city: "Delhi NCR Regional Office",
      address: "Tower B, Cyber Hub, DLF Cyber City Phase 2, Gurugram, Haryana 122002",
      phone: "+91 124 480 3000",
      email: "delhincr@indstate.in"
    }
  ];

  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Mail size={13} />
            Connect With Us
          </span>
          <h1 className="section-title">Contact INDSTATE City Hubs</h1>
          <p className="section-subtitle">
            Have questions about listing a property, RERA validation, or booking physical site visits? We are here to help.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', marginBottom: '50px' }}>
          {/* Contact Form */}
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              padding: '36px',
              boxShadow: 'var(--shadow-xs)'
            }}
          >
            <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '16px' }}>
              Send an Inquiry
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Anand Mahindra"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Mobile Number (+91) *</label>
                  <input 
                    type="tel" 
                    required
                    maxLength={10}
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="anand@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>City of Interest</label>
                <select
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', background: '#fff' }}
                >
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Pune">Pune</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Goa">Goa</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Your Message *</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="Tell us what you are looking for..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ padding: '12px', width: '100%' }}>
                <Send size={16} />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>

          {/* Regional Hubs Directory */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--saffron)' }}>
              <h4 style={{ fontSize: '16px', color: 'var(--primary)', marginBottom: '8px' }}>
                National Toll-Free Assistance
              </h4>
              <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--saffron)', fontFamily: 'var(--font-display)', marginBottom: '6px' }}>
                1800 208 4000
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Available Monday to Saturday, 9:00 AM to 8:00 PM IST
              </span>
            </div>

            {offices.map((off, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-color)',
                  padding: '20px',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <h4 style={{ fontSize: '16px', color: 'var(--primary)', marginBottom: '6px' }}>{off.city}</h4>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px', display: 'flex', gap: '6px' }}>
                  <MapPin size={16} color="var(--saffron)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{off.address}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, borderTop: '1px solid var(--border-light)', paddingTop: '8px' }}>
                  <span>📞 {off.phone}</span>
                  <span style={{ color: 'var(--saffron)' }}>✉️ {off.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

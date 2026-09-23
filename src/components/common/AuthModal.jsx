import React, { useState } from 'react';
import { X, Phone, Lock, User, Building, CheckCircle, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import IndstateLogo from './IndstateLogo';

export default function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, authMode, setAuthMode, login } = useAuth();
  
  const [phone, setPhone] = useState('9876543210');
  const [otp, setOtp] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('Buyer');
  const [otpSent, setOtpSent] = useState(false);
  const [city, setCity] = useState('Mumbai');

  if (!isAuthModalOpen) return null;

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      alert("Please enter a valid 10-digit Indian mobile number");
      return;
    }
    setOtpSent(true);
    setOtp('1234'); // Simulated pre-filled OTP for frictionless testing
  };

  const handleVerifyLogin = (e) => {
    e.preventDefault();
    login({
      name: name || (role === 'Agent' ? 'Vikram Malhotra' : 'Arjun Verma'),
      phone: `+91 ${phone}`,
      role: role,
      city: city,
      state: 'Maharashtra'
    });
  };

  return (
    <div className="modal-overlay" onClick={() => setIsAuthModalOpen(false)}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '460px', padding: '32px' }}
      >
        <button 
          onClick={() => setIsAuthModalOpen(false)}
          style={{ position: 'absolute', top: '18px', right: '18px', color: 'var(--text-muted)' }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{ marginBottom: '12px' }}>
            <IndstateLogo height={38} />
          </div>
          <h3 style={{ fontSize: '22px', color: 'var(--primary)' }}>
            {authMode === 'login' ? 'Sign in to INDSTATE' : 'Create an Account'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
            Instant OTP access via Indian mobile (+91)
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div 
          style={{
            display: 'flex',
            background: 'var(--bg-alt)',
            padding: '4px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '20px'
          }}
        >
          {['Buyer', 'Owner', 'Agent', 'Builder'].map(r => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              style={{
                flex: 1,
                padding: '6px',
                fontSize: '12px',
                fontWeight: 600,
                borderRadius: 'var(--radius-sm)',
                background: role === r ? '#FFFFFF' : 'transparent',
                color: role === r ? 'var(--primary)' : 'var(--text-muted)',
                boxShadow: role === r ? 'var(--shadow-xs)' : 'none'
              }}
            >
              {r}
            </button>
          ))}
        </div>

        {!otpSent ? (
          <form onSubmit={handleSendOtp}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                Your Full Name
              </label>
              <input 
                type="text" 
                placeholder="e.g. Arjun Verma" 
                value={name}
                onChange={e => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  outline: 'none',
                  fontSize: '14px'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                Indian Mobile Number
              </label>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden'
                }}
              >
                <span style={{ background: 'var(--bg-alt)', padding: '10px 14px', fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)' }}>
                  🇮🇳 +91
                </span>
                <input 
                  type="tel" 
                  maxLength={10}
                  placeholder="98765 43210" 
                  value={phone}
                  onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: 'none',
                    outline: 'none',
                    fontSize: '14px'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                Primary Indian City
              </label>
              <select 
                value={city}
                onChange={e => setCity(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  outline: 'none',
                  fontSize: '14px',
                  background: '#FFFFFF'
                }}
              >
                <option value="Mumbai">Mumbai (Maharashtra)</option>
                <option value="Pune">Pune (Maharashtra)</option>
                <option value="Bengaluru">Bengaluru (Karnataka)</option>
                <option value="New Delhi">New Delhi (Delhi NCR)</option>
                <option value="Gurugram">Gurugram (Haryana)</option>
                <option value="Noida">Noida (Uttar Pradesh)</option>
                <option value="Hyderabad">Hyderabad (Telangana)</option>
                <option value="Chennai">Chennai (Tamil Nadu)</option>
                <option value="Kolkata">Kolkata (West Bengal)</option>
                <option value="Ahmedabad">Ahmedabad (Gujarat)</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
              Get Instant Login OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyLogin}>
            <div style={{ textAlign: 'center', marginBottom: '20px', background: 'var(--rera-green-light)', padding: '10px', borderRadius: 'var(--radius-md)' }}>
              <p style={{ fontSize: '13px', color: 'var(--rera-green)' }}>
                OTP sent to <strong>+91 {phone}</strong> (Demo code: <strong>1234</strong>)
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>
                Enter 4-Digit OTP
              </label>
              <input 
                type="text" 
                maxLength={4}
                value={otp}
                onChange={e => setOtp(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  textAlign: 'center',
                  fontSize: '22px',
                  letterSpacing: '10px',
                  fontWeight: 700,
                  borderRadius: 'var(--radius-md)',
                  border: '2px solid var(--saffron)',
                  outline: 'none'
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
              Verify & Enter Dashboard
            </button>

            <button 
              type="button" 
              onClick={() => setOtpSent(false)}
              style={{ display: 'block', width: '100%', marginTop: '12px', fontSize: '12px', color: 'var(--text-muted)' }}
            >
              Change Mobile Number
            </button>
          </form>
        )}

        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          By continuing, you agree to INDSTATE's <a href="/terms" style={{ color: 'var(--saffron)' }}>Terms</a> and <a href="/rera-disclaimer" style={{ color: 'var(--saffron)' }}>RERA Disclaimers</a>.
        </div>
      </div>
    </div>
  );
}

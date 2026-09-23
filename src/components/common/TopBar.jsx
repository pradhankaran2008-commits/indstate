import React from 'react';
import { Phone, Mail, ShieldCheck, User, LogIn, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function TopBar() {
  const { user, setIsAuthModalOpen, setAuthMode, logout } = useAuth();

  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <Phone size={13} className="text-saffron" />
              <span>National Toll-Free: <strong>1800 208 4000</strong></span>
            </span>
            <span className="top-bar-item">
              <Mail size={13} />
              <span>helpdesk@indstate.in</span>
            </span>
            <span className="top-bar-rera-chip">
              <ShieldCheck size={13} />
              <span>100% RERA Verified Marketplace</span>
            </span>
          </div>

          <div className="top-bar-right">
            <span className="top-bar-item" style={{ color: '#E6BA9A' }}>
              🇮🇳 India Edition (INR ₹)
            </span>
            
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to="/dashboard" className="top-bar-item" style={{ fontWeight: 600 }}>
                  <User size={13} />
                  <span>{user.name} ({user.role})</span>
                </Link>
                <button
                  onClick={logout}
                  style={{ color: '#94A3B8', fontSize: '12px', textDecoration: 'underline' }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setAuthMode('login');
                  setIsAuthModalOpen(true);
                }}
                className="top-bar-item"
                style={{ fontWeight: 600 }}
              >
                <LogIn size={13} />
                <span>Sign In / Register</span>
              </button>
            )}

            <Link
              to="/add-property"
              style={{
                background: 'var(--saffron)',
                color: '#FFFFFF',
                padding: '3px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <PlusCircle size={13} />
              <span>Post Free Property Ad</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

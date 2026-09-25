import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Star, Phone, MessageSquare, 
  MapPin, Search, CheckCircle, Award 
} from 'lucide-react';
import { INITIAL_AGENTS } from '../data/initialAgents';
import { INDIAN_STATES } from '../data/indianStatesAndCities';

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const filteredAgents = INITIAL_AGENTS.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          agent.agency.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          agent.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = !selectedCity || agent.city === selectedCity;
    return matchesSearch && matchesCity;
  });

  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <ShieldCheck size={13} />
            Verified Advisors Directory
          </span>
          <h1 className="section-title">Meet Certified RERA Real Estate Agents</h1>
          <p className="section-subtitle">
            Connect with vetted Indian property specialists with proven transaction track records and legal compliance.
          </p>
        </div>

        {/* Search & City Filter Bar */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: '16px 20px',
            marginBottom: '36px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexGrow: 1, minWidth: '240px' }}>
            <Search size={18} color="var(--text-muted)" />
            <input 
              type="text"
              placeholder="Search agent by name, agency, or locality..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: '100%', border: 'none', outline: 'none', fontSize: '14px' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} color="var(--saffron)" />
            <select
              value={selectedCity}
              onChange={e => setSelectedCity(e.target.value)}
              style={{ padding: '8px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', fontSize: '13px', background: '#fff' }}
            >
              <option value="">All Indian Cities</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Pune">Pune</option>
              <option value="Gurugram">Gurugram / Delhi NCR</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="North Goa">Goa</option>
            </select>
          </div>
        </div>

        {/* Agents Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: '28px'
          }}
        >
          {filteredAgents.map(agent => (
            <div 
              key={agent.id}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                padding: '24px',
                boxShadow: 'var(--shadow-xs)',
                transition: 'var(--transition)',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
              }}
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                <img 
                  src={agent.avatar} 
                  alt={agent.name} 
                  style={{ width: '70px', height: '70px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--saffron)' }}
                />
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '2px' }}>
                    <Link to={`/agent/${agent.id}`}>{agent.name}</Link>
                  </h3>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block' }}>
                    {agent.agency}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#D97706', fontSize: '13px', fontWeight: 700, marginTop: '4px' }}>
                    <Star size={14} fill="#D97706" />
                    <span>{agent.rating} ({agent.reviewCount} Reviews)</span>
                  </div>
                </div>
              </div>

              {/* RERA Badge */}
              <div 
                style={{
                  background: 'var(--rera-green-light)',
                  color: 'var(--rera-green)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '11px',
                  fontWeight: 600,
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <ShieldCheck size={14} />
                <span>RERA ID: {agent.reraAgentId}</span>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '16px', flexGrow: 1 }}>
                {agent.bio}
              </p>

              {/* Stats Bar */}
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  padding: '10px 0',
                  borderTop: '1px solid var(--border-light)',
                  borderBottom: '1px solid var(--border-light)',
                  marginBottom: '16px',
                  fontSize: '12px',
                  textAlign: 'center'
                }}
              >
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Active Listings</span>
                  <strong>{agent.activeListingsCount}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Deals Closed</span>
                  <strong>{agent.soldListingsCount}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>Experience</span>
                  <strong>{agent.experience}</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <a 
                  href={`tel:${agent.phone.replace(/\s/g, '')}`}
                  className="btn btn-outline btn-sm"
                >
                  <Phone size={14} />
                  <span>{agent.phone}</span>
                </a>
                <a 
                  href={`https://wa.me/${agent.whatsapp}?text=Namaste,%20I%20saw%20your%20profile%20on%20INDSTATE.`}
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ background: 'var(--success)', borderColor: 'var(--success)' }}
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

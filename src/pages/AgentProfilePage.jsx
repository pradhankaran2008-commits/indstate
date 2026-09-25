import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, Star, Phone, MessageSquare, Mail, 
  MapPin, CheckCircle, ArrowLeft 
} from 'lucide-react';
import { INITIAL_AGENTS } from '../data/initialAgents';
import { useProperty } from '../context/PropertyContext';
import PropertyCard from '../components/common/PropertyCard';

export default function AgentProfilePage() {
  const { id } = useParams();
  const { properties } = useProperty();
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: '', rating: '5', comment: '' });

  const agent = INITIAL_AGENTS.find(a => a.id === id) || INITIAL_AGENTS[0];

  // Properties listed by this agent
  const agentProperties = properties.filter(p => p.agent?.id === agent.id || p.city === agent.city);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setReviewForm({ name: '', rating: '5', comment: '' });
      alert("Dhanyawad! Your verified review has been submitted for moderation.");
    }, 1200);
  };

  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        <Link to="/agents" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--saffron)', fontSize: '13px', fontWeight: 600, marginBottom: '20px' }}>
          <ArrowLeft size={15} /> Back to All Agents
        </Link>

        {/* Profile Banner */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: 'clamp(18px, 4vw, 36px)',
            marginBottom: '40px',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'flex-start' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={agent.avatar} 
                alt={agent.name} 
                style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--saffron)' }}
              />
              <span 
                style={{
                  position: 'absolute',
                  bottom: '4px',
                  right: '4px',
                  background: 'var(--rera-green)',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid #fff'
                }}
              >
                <ShieldCheck size={18} />
              </span>
            </div>

            <div style={{ flexGrow: 1 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                <div>
                  <h1 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '4px' }}>
                    {agent.name}
                  </h1>
                  <span style={{ fontSize: '15px', color: 'var(--text-muted)' }}>
                    {agent.title} • <strong>{agent.agency}</strong>
                  </span>
                </div>

                <div 
                  style={{
                    background: 'var(--rera-green-light)',
                    color: 'var(--rera-green)',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <ShieldCheck size={16} />
                  <span>RERA Reg: {agent.reraAgentId}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#D97706', fontSize: '15px', fontWeight: 700, margin: '12px 0' }}>
                <Star size={18} fill="#D97706" />
                <span>{agent.rating} Rating</span>
                <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({agent.reviewCount} Verified Client Reviews)</span>
              </div>

              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--text-body)', marginBottom: '18px' }}>
                {agent.bio}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <span>📍 Operating in: <strong>{agent.operatingAreas.join(', ')} ({agent.city})</strong></span>
                <span>🗣️ Languages: <strong>{agent.languages.join(', ')}</strong></span>
                <span>🏆 Experience: <strong>{agent.experience}</strong></span>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                <a href={`tel:${agent.phone.replace(/\s/g, '')}`} className="btn btn-navy">
                  <Phone size={15} />
                  <span>Call {agent.phone}</span>
                </a>
                <a 
                  href={`https://wa.me/${agent.whatsapp}?text=Namaste%20${agent.name}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ background: 'var(--success)', borderColor: 'var(--success)' }}
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Listings by this agent */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '20px' }}>
            Active Listings by {agent.name} ({agentProperties.length})
          </h2>
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '24px'
            }}
          >
            {agentProperties.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </div>

        {/* Leave a Review Section */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: '32px',
            maxWidth: '680px'
          }}
        >
          <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '6px' }}>
            Rate & Review {agent.name}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            Your feedback helps fellow homebuyers identify reliable and compliant property consultants.
          </p>

          <form onSubmit={handleReviewSubmit}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Your Name</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. Meenal Sharma" 
                value={reviewForm.name}
                onChange={e => setReviewForm({ ...reviewForm, name: e.target.value })}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
              />
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Rating</label>
              <select 
                value={reviewForm.rating}
                onChange={e => setReviewForm({ ...reviewForm, rating: e.target.value })}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', background: '#fff' }}
              >
                <option value="5">★★★★★ (5/5) Outstanding Professionalism</option>
                <option value="4">★★★★☆ (4/5) Very Good</option>
                <option value="3">★★★☆☆ (3/5) Satisfactory</option>
              </select>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Review & Experience</label>
              <textarea 
                rows={3} 
                required 
                placeholder="Describe your site visit, documentation clarity, or negotiation experience..."
                value={reviewForm.comment}
                onChange={e => setReviewForm({ ...reviewForm, comment: e.target.value })}
                style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', resize: 'vertical' }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Client Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

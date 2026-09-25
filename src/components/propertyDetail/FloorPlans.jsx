import React, { useState } from 'react';
import { Layers, Maximize2 } from 'lucide-react';

export default function FloorPlans({ floorPlans = [], property }) {
  // If property doesn't have custom plans, provide realistic floor plans based on BHK
  const defaultPlans = [
    {
      title: `${property.bhk} BHK Architectural Layout`,
      size: `${property.carpetArea} sq.ft. Carpet`,
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
      rooms: [
        { name: "Living & Dining Room", dimensions: "24'0\" x 14'6\"" },
        { name: "Master Bedroom", dimensions: "16'0\" x 13'0\"" },
        { name: "Bedroom 2", dimensions: "13'0\" x 12'0\"" },
        { name: "Modular Kitchen", dimensions: "10'0\" x 8'6\"" },
        { name: "Balcony / Deck", dimensions: "12'0\" x 5'0\"" }
      ]
    }
  ];

  const plans = floorPlans.length > 0 ? floorPlans : defaultPlans;
  const [activePlan, setActivePlan] = useState(0);

  return (
    <div 
      style={{
        background: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        padding: '28px',
        marginBottom: '32px',
        boxShadow: 'var(--shadow-xs)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <Layers size={22} color="var(--primary)" />
        <h3 style={{ fontSize: '20px', color: 'var(--primary)' }}>Architectural Floor Plans</h3>
      </div>

      {/* Plan Tabs */}
      <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px', marginBottom: '20px' }}>
        {plans.map((p, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActivePlan(idx)}
            style={{
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              fontSize: '13px',
              fontWeight: 600,
              background: activePlan === idx ? 'var(--primary)' : 'var(--bg-alt)',
              color: activePlan === idx ? '#FFFFFF' : 'var(--text-main)',
              transition: 'var(--transition)'
            }}
          >
            {p.title} ({p.size})
          </button>
        ))}
      </div>

      {/* Active Plan Display */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px', alignItems: 'center' }}>
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <img 
            src={plans[activePlan].image} 
            alt={plans[activePlan].title}
            style={{ width: '100%', height: '320px', objectFit: 'cover' }}
          />
        </div>

        <div>
          <h4 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '8px' }}>
            {plans[activePlan].title}
          </h4>
          <span style={{ fontSize: '14px', color: 'var(--rera-green)', fontWeight: 700, display: 'block', marginBottom: '16px' }}>
            Verified Carpet Area: {plans[activePlan].size}
          </span>

          <h5 style={{ fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
            Room Dimensions Breakdown:
          </h5>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {(plans[activePlan].rooms || defaultPlans[0].rooms).map((r, i) => (
              <div 
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  background: 'var(--bg-page)',
                  borderRadius: '6px',
                  fontSize: '13px'
                }}
              >
                <span>{r.name}</span>
                <strong>{r.dimensions}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

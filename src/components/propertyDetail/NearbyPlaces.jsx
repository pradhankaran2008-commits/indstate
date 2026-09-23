import React from 'react';
import { MapPin, Navigation, Clock, School, Building, Hospital } from 'lucide-react';

export default function NearbyPlaces({ nearby = [] }) {
  if (!nearby || nearby.length === 0) return null;

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
        <Navigation size={22} color="var(--primary)" />
        <h3 style={{ fontSize: '20px', color: 'var(--primary)' }}>Nearby Connectivity & Infrastructure</h3>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px'
        }}
      >
        {nearby.map((place, idx) => (
          <div 
            key={idx}
            style={{
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-page)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>
                {place.landmark}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <Clock size={12} />
                <span>{place.time || 'Short drive'}</span>
              </div>
            </div>

            <div 
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--saffron)',
                background: 'var(--saffron-light)',
                padding: '4px 10px',
                borderRadius: '6px'
              }}
            >
              {place.distance}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

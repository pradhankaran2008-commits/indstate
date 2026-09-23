import React from 'react';
import { 
  CheckCircle, Sparkles, Shield, Zap, 
  Wifi, Dumbbell, Waves, Trees, Car 
} from 'lucide-react';

export default function AmenitiesGrid({ amenities = [] }) {
  if (!amenities || amenities.length === 0) return null;

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
        <Sparkles size={22} color="var(--primary)" />
        <h3 style={{ fontSize: '20px', color: 'var(--primary)' }}>Amenities & Lifestyle Features</h3>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '14px'
        }}
      >
        {amenities.map((item, idx) => (
          <div 
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-page)',
              border: '1px solid var(--border-light)',
              fontSize: '13px',
              fontWeight: 500,
              color: 'var(--text-main)'
            }}
          >
            <CheckCircle size={16} color="var(--rera-green)" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

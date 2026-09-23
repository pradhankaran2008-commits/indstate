import React from 'react';
import { 
  Bed, Bath, Compass, Calendar, Building, 
  Car, ShieldCheck, Home, CheckSquare, Sparkles 
} from 'lucide-react';
import { formatIndianNumber } from '../../utils/currencyFormatter';

export default function PropertyOverview({ property }) {
  if (!property) return null;

  const specs = [
    {
      label: "RERA Carpet Area",
      value: `${formatIndianNumber(property.carpetArea)} sq.ft.`,
      sub: "Net Usable Internal Floor",
      highlight: true
    },
    {
      label: "Super Built-Up Area",
      value: property.superBuiltUpArea ? `${formatIndianNumber(property.superBuiltUpArea)} sq.ft.` : 'N/A',
      sub: "Including Common Utilities"
    },
    {
      label: "Configuration",
      value: `${property.bhk} BHK Residence`,
      sub: `${property.bathrooms} Baths, ${property.balconies || 0} Balconies`
    },
    {
      label: "Possession Status",
      value: property.possessionStatus,
      sub: property.possessionDate || 'Immediate'
    },
    {
      label: "Vastu Compliance",
      value: property.facing || 'East Facing',
      sub: 'Verified Entrance Alignment'
    },
    {
      label: "Floor Position",
      value: property.floor || 'Mid Floor',
      sub: 'Multi-Tier Tower'
    },
    {
      label: "Furnishing Status",
      value: property.furnishing || 'Semi-Furnished',
      sub: 'Quality Woodwork'
    },
    {
      label: "Dedicated Parking",
      value: property.parking || '1 Covered Slot',
      sub: 'Allotted Car Bay'
    }
  ];

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
        <Home size={22} color="var(--primary)" />
        <h3 style={{ fontSize: '20px', color: 'var(--primary)' }}>Property Overview & RERA Specifications</h3>
      </div>

      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginBottom: '24px'
        }}
      >
        {specs.map((spec, i) => (
          <div 
            key={i}
            style={{
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              background: spec.highlight ? 'var(--rera-green-light)' : 'var(--bg-page)',
              border: spec.highlight ? '1.5px solid var(--rera-green-border)' : '1px solid var(--border-color)'
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: spec.highlight ? 'var(--rera-green)' : 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
              {spec.label}
            </span>
            <div style={{ fontSize: '16px', fontWeight: 700, color: spec.highlight ? 'var(--rera-green)' : 'var(--text-main)', marginBottom: '2px' }}>
              {spec.value}
            </div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {spec.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Description Text */}
      <div>
        <h4 style={{ fontSize: '16px', color: 'var(--primary)', marginBottom: '8px' }}>About This Property</h4>
        <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)' }}>
          {property.description}
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, X, Check, ShieldCheck, ArrowRight, 
  Trash2, Plus, Bed, Bath, Home 
} from 'lucide-react';
import { useProperty } from '../context/PropertyContext';
import { formatIndianPrice, formatIndianNumber } from '../utils/currencyFormatter';

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useProperty();

  if (compareList.length === 0) {
    return (
      <div style={{ padding: '80px 0', background: 'var(--bg-page)', textAlign: 'center' }}>
        <div className="container">
          <Scale size={56} color="var(--text-muted)" style={{ margin: '0 auto 16px auto' }} />
          <h1 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '8px' }}>
            No Properties Selected for Comparison
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 24px auto' }}>
            Click the compare button (scale icon) on any property card to compare up to 4 homes side-by-side on price, carpet area, and RERA approvals.
          </p>
          <Link to="/properties" className="btn btn-primary btn-lg">
            Browse Properties to Compare
          </Link>
        </div>
      </div>
    );
  }

  const commonAmenities = [
    "Clubhouse", "Swimming Pool", "100% Power Backup", "Vastu Compliant", 
    "24x7 Security & CCTV", "EV Charging Stations", "Gymnasium", "Children's Park"
  ];

  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <div>
            <span className="section-tag">
              <Scale size={13} />
              Side-By-Side Analysis
            </span>
            <h1 style={{ fontSize: '28px', color: 'var(--primary)', marginTop: '4px' }}>
              Compare Properties ({compareList.length}/4)
            </h1>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={clearCompare} className="btn btn-outline btn-sm">
              <Trash2 size={14} />
              <span>Clear All</span>
            </button>
            <Link to="/properties" className="btn btn-primary btn-sm">
              <Plus size={14} />
              <span>Add More Properties</span>
            </Link>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            overflowX: 'auto',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)', background: 'var(--bg-alt)' }}>
                <th style={{ padding: '20px', width: '220px', fontSize: '13px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  PROPERTY OVERVIEW
                </th>
                {compareList.map(prop => (
                  <th key={prop.id} style={{ padding: '20px', minWidth: '240px', verticalAlign: 'top' }}>
                    <div style={{ position: 'relative', marginBottom: '10px' }}>
                      <img 
                        src={prop.images?.[0]} 
                        alt={prop.title} 
                        style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
                      />
                      <button 
                        onClick={() => removeFromCompare(prop.id)}
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          background: 'rgba(0,0,0,0.6)',
                          color: '#fff',
                          borderRadius: '50%',
                          width: '26px',
                          height: '26px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        title="Remove from comparison"
                      >
                        <X size={15} />
                      </button>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary)', marginBottom: '4px', lineHeight: 1.3 }}>
                      <Link to={`/property/${prop.id}`}>{prop.title}</Link>
                    </h4>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--saffron)' }}>
                      {formatIndianPrice(prop.price, prop.purpose === 'Rent')}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {/* Row: RERA Registration */}
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '13px', background: 'var(--bg-page)' }}>
                  RERA Compliance
                </td>
                {compareList.map(prop => (
                  <td key={prop.id} style={{ padding: '14px 20px', fontSize: '13px' }}>
                    {prop.isReraVerified ? (
                      <span style={{ color: 'var(--rera-green)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <ShieldCheck size={16} /> Verified ({prop.reraNumber})
                      </span>
                    ) : (
                      <span style={{ color: 'var(--text-muted)' }}>Exempt / Pending</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Row: Price Per Sq.Ft. */}
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '13px', background: 'var(--bg-page)' }}>
                  Price / Sq.Ft.
                </td>
                {compareList.map(prop => (
                  <td key={prop.id} style={{ padding: '14px 20px', fontSize: '13px', fontWeight: 700 }}>
                    {prop.pricePerSqFt ? `₹${formatIndianNumber(prop.pricePerSqFt)} / sq.ft.` : 'N/A'}
                  </td>
                ))}
              </tr>

              {/* Row: RERA Carpet Area */}
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '13px', background: 'var(--bg-page)' }}>
                  RERA Carpet Area
                </td>
                {compareList.map(prop => (
                  <td key={prop.id} style={{ padding: '14px 20px', fontSize: '13px' }}>
                    <strong>{formatIndianNumber(prop.carpetArea)} sq.ft.</strong> (Carpet)
                  </td>
                ))}
              </tr>

              {/* Row: Super Built-up Area */}
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '13px', background: 'var(--bg-page)' }}>
                  Super Built-Up Area
                </td>
                {compareList.map(prop => (
                  <td key={prop.id} style={{ padding: '14px 20px', fontSize: '13px', color: 'var(--text-muted)' }}>
                    {prop.superBuiltUpArea ? `${formatIndianNumber(prop.superBuiltUpArea)} sq.ft.` : 'N/A'}
                  </td>
                ))}
              </tr>

              {/* Row: Configuration */}
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '13px', background: 'var(--bg-page)' }}>
                  BHK & Baths
                </td>
                {compareList.map(prop => (
                  <td key={prop.id} style={{ padding: '14px 20px', fontSize: '13px' }}>
                    <strong>{prop.bhk} BHK</strong> • {prop.bathrooms} Baths • {prop.balconies || 0} Balconies
                  </td>
                ))}
              </tr>

              {/* Row: Vastu Facing */}
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '13px', background: 'var(--bg-page)' }}>
                  Vastu Orientation
                </td>
                {compareList.map(prop => (
                  <td key={prop.id} style={{ padding: '14px 20px', fontSize: '13px' }}>
                    {prop.facing || 'East Facing'}
                  </td>
                ))}
              </tr>

              {/* Row: Possession Status */}
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '13px', background: 'var(--bg-page)' }}>
                  Possession
                </td>
                {compareList.map(prop => (
                  <td key={prop.id} style={{ padding: '14px 20px', fontSize: '13px' }}>
                    <strong>{prop.possessionStatus}</strong> ({prop.possessionDate || 'Immediate'})
                  </td>
                ))}
              </tr>

              {/* Row: Maintenance Charges */}
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '13px', background: 'var(--bg-page)' }}>
                  Monthly Maintenance
                </td>
                {compareList.map(prop => (
                  <td key={prop.id} style={{ padding: '14px 20px', fontSize: '13px' }}>
                    {prop.maintenanceCharges ? `₹${formatIndianNumber(prop.maintenanceCharges)} / mo` : 'Included'}
                  </td>
                ))}
              </tr>

              {/* Row: Location */}
              <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '14px 20px', fontWeight: 600, fontSize: '13px', background: 'var(--bg-page)' }}>
                  Location
                </td>
                {compareList.map(prop => (
                  <td key={prop.id} style={{ padding: '14px 20px', fontSize: '13px' }}>
                    {prop.locality}, {prop.city} ({prop.state})
                  </td>
                ))}
              </tr>

              {/* Amenities Comparison Rows */}
              {commonAmenities.map(am => (
                <tr key={am} style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '12px 20px', fontSize: '13px', background: 'var(--bg-page)', color: 'var(--text-muted)' }}>
                    {am}
                  </td>
                  {compareList.map(prop => {
                    const hasAmenity = prop.amenities && prop.amenities.some(a => a.toLowerCase().includes(am.toLowerCase()));
                    return (
                      <td key={prop.id} style={{ padding: '12px 20px', fontSize: '13px' }}>
                        {hasAmenity ? (
                          <span style={{ color: 'var(--rera-green)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Check size={16} /> Yes
                          </span>
                        ) : (
                          <span style={{ color: '#94A3B8' }}>—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}

              {/* Action Row */}
              <tr>
                <td style={{ padding: '20px', background: 'var(--bg-page)' }}></td>
                {compareList.map(prop => (
                  <td key={prop.id} style={{ padding: '20px' }}>
                    <Link to={`/property/${prop.id}`} className="btn btn-primary" style={{ width: '100%', padding: '10px 0' }}>
                      View Full Details
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

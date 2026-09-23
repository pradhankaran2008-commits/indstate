import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, X, ArrowRight } from 'lucide-react';
import { useProperty } from '../../context/PropertyContext';
import { formatIndianPrice } from '../../utils/currencyFormatter';

export default function CompareFloatingBar() {
  const { compareList, removeFromCompare, clearCompare } = useProperty();

  if (compareList.length === 0) return null;

  return (
    <div className={`compare-drawer ${compareList.length > 0 ? 'open' : ''}`}>
      <div className="container">
        <div className="compare-drawer-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div 
                style={{
                  background: 'var(--saffron)',
                  color: '#FFFFFF',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Scale size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '14px', color: 'var(--primary)', display: 'block' }}>
                  Compare Properties ({compareList.length}/4)
                </strong>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Side-by-side comparison of prices, carpet areas & RERA
                </span>
              </div>
            </div>

            <div className="compare-items-row">
              {compareList.map(item => (
                <div key={item.id} className="compare-item-preview">
                  <img 
                    src={item.images?.[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80'} 
                    alt={item.title} 
                    className="compare-item-img"
                  />
                  <div style={{ overflow: 'hidden' }}>
                    <div className="compare-item-title" title={item.title}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)' }}>
                      {formatIndianPrice(item.price, item.purpose === 'Rent')}
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCompare(item.id)}
                    style={{ color: 'var(--text-muted)', padding: '2px' }}
                    title="Remove"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              onClick={clearCompare}
              style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'underline' }}
            >
              Clear All
            </button>
            <Link to="/compare" className="btn btn-primary btn-sm">
              <span>Compare Now</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

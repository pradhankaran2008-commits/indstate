import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Heart, BookmarkCheck, Calendar, PlusCircle, 
  Building2, Trash2, Eye, ExternalLink, ShieldCheck, 
  BarChart3, User, CheckCircle2 
} from 'lucide-react';
import { useProperty } from '../context/PropertyContext';
import { useAuth } from '../context/AuthContext';
import PropertyCard from '../components/common/PropertyCard';
import { formatIndianPrice, formatIndianNumber } from '../utils/currencyFormatter';

export default function DashboardPage() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'saved';

  const { properties, favorites, savedSearches, deleteSavedSearch, inquiries, deleteProperty } = useProperty();
  const { user, switchRole } = useAuth();

  const [activeTab, setActiveTab] = useState(initialTab);

  // Favorite properties
  const favoriteProperties = properties.filter(p => favorites.includes(p.id));

  // User's own submitted properties (mocked or added)
  const myProperties = properties.filter(p => p.agent?.name === user?.name || p.id.includes(user?.city?.substring(0,2).toUpperCase() || 'MH'));

  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        {/* User Profile Header */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: '28px',
            marginBottom: '32px',
            boxShadow: 'var(--shadow-xs)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img 
              src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'} 
              alt={user?.name || 'User'} 
              style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--saffron)' }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ fontSize: '22px', color: 'var(--primary)' }}>
                  {user?.name || 'Arjun Verma'}
                </h1>
                <span 
                  style={{
                    background: 'var(--saffron-light)',
                    color: 'var(--saffron)',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  {user?.role || 'Buyer'} Account
                </span>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                {user?.phone || '+91 98765 43210'} • {user?.city || 'Mumbai'}, {user?.state || 'Maharashtra'}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
              <span style={{ color: 'var(--text-muted)' }}>Switch View:</span>
              <select 
                value={user?.role || 'Buyer'}
                onChange={e => switchRole(e.target.value)}
                style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '12px', background: '#fff' }}
              >
                <option value="Buyer">Buyer / Tenant</option>
                <option value="Owner">Owner / Seller</option>
                <option value="Agent">Agent / Channel Partner</option>
                <option value="Admin">Admin Portal</option>
              </select>
            </div>

            <Link to="/add-property" className="btn btn-primary btn-sm">
              <PlusCircle size={16} />
              <span>+ Add New Property</span>
            </Link>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div 
          style={{
            display: 'flex',
            gap: '8px',
            borderBottom: '1px solid var(--border-color)',
            marginBottom: '32px',
            overflowX: 'auto'
          }}
        >
          <button
            onClick={() => setActiveTab('saved')}
            style={{
              padding: '10px 18px',
              fontWeight: 600,
              fontSize: '14px',
              borderBottom: activeTab === 'saved' ? '3px solid var(--saffron)' : '3px solid transparent',
              color: activeTab === 'saved' ? 'var(--primary)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <Heart size={16} />
            <span>Saved Favorites ({favoriteProperties.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('searches')}
            style={{
              padding: '10px 18px',
              fontWeight: 600,
              fontSize: '14px',
              borderBottom: activeTab === 'searches' ? '3px solid var(--saffron)' : '3px solid transparent',
              color: activeTab === 'searches' ? 'var(--primary)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <BookmarkCheck size={16} />
            <span>Saved Search Alerts ({savedSearches.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            style={{
              padding: '10px 18px',
              fontWeight: 600,
              fontSize: '14px',
              borderBottom: activeTab === 'inquiries' ? '3px solid var(--saffron)' : '3px solid transparent',
              color: activeTab === 'inquiries' ? 'var(--primary)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <Calendar size={16} />
            <span>Site Visits & Inquiries ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('listings')}
            style={{
              padding: '10px 18px',
              fontWeight: 600,
              fontSize: '14px',
              borderBottom: activeTab === 'listings' ? '3px solid var(--saffron)' : '3px solid transparent',
              color: activeTab === 'listings' ? 'var(--primary)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            <Building2 size={16} />
            <span>My Property Listings ({myProperties.length})</span>
          </button>
        </div>

        {/* TAB 1: Saved Favorites */}
        {activeTab === 'saved' && (
          <div>
            {favoriteProperties.length === 0 ? (
              <div style={{ background: '#fff', padding: '60px 20px', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
                <Heart size={44} color="#CBD5E1" style={{ margin: '0 auto 12px auto' }} />
                <h3 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '6px' }}>No Saved Properties Yet</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Click the heart icon on any property to save it to your wishlist for later review.
                </p>
                <Link to="/properties" className="btn btn-primary">Browse Properties</Link>
              </div>
            ) : (
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                  gap: '24px'
                }}
              >
                {favoriteProperties.map(prop => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Saved Searches */}
        {activeTab === 'searches' && (
          <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '24px' }}>
            <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '16px' }}>Your Saved Search Alerts</h3>
            {savedSearches.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>No active search alerts.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {savedSearches.map(ss => (
                  <div 
                    key={ss.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px',
                      background: 'var(--bg-page)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    <div>
                      <h4 style={{ fontSize: '15px', color: 'var(--primary)', marginBottom: '4px' }}>{ss.title}</h4>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Created on: {ss.date || 'Active'}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link to={`/properties?${ss.query}`} className="btn btn-outline btn-sm">
                        <span>Run Search</span>
                        <ExternalLink size={13} />
                      </Link>
                      <button 
                        onClick={() => deleteSavedSearch(ss.id)}
                        style={{ color: '#EF4444', padding: '6px', borderRadius: '4px' }}
                        title="Delete Alert"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: Site Visits & Inquiries */}
        {activeTab === 'inquiries' && (
          <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '24px' }}>
            <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '16px' }}>Your Scheduled Site Visits & Callback Requests</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {inquiries.map(inq => (
                <div 
                  key={inq.id}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '18px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-color)',
                    gap: '12px'
                  }}
                >
                  <div>
                    <span 
                      style={{
                        background: 'var(--rera-green-light)',
                        color: 'var(--rera-green)',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {inq.status}
                    </span>
                    <h4 style={{ fontSize: '16px', color: 'var(--primary)', margin: '6px 0 2px 0' }}>
                      {inq.propertyTitle}
                    </h4>
                    <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                      Contact: {inq.clientName} ({inq.clientPhone})
                    </span>
                    {inq.preferredDate && (
                      <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary)', marginTop: '4px' }}>
                        📅 Visit: {inq.preferredDate} at {inq.timeSlot} ({inq.visitType})
                      </div>
                    )}
                  </div>

                  <div>
                    {inq.propertyId && (
                      <Link to={`/property/${inq.propertyId}`} className="btn btn-outline btn-sm">
                        View Property
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: My Property Listings */}
        {activeTab === 'listings' && (
          <div style={{ background: '#FFFFFF', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', color: 'var(--primary)' }}>My Managed Properties</h3>
              <Link to="/add-property" className="btn btn-primary btn-sm">
                + Submit Another Property
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {myProperties.map(prop => (
                <div 
                  key={prop.id}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-color)',
                    gap: '14px'
                  }}
                >
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <img 
                      src={prop.images?.[0]} 
                      alt={prop.title} 
                      style={{ width: '80px', height: '65px', borderRadius: '6px', objectFit: 'cover' }}
                    />
                    <div>
                      <span className="badge badge-featured" style={{ fontSize: '10px', padding: '2px 6px' }}>{prop.status}</span>
                      <h4 style={{ fontSize: '15px', color: 'var(--primary)', marginTop: '2px' }}>{prop.title}</h4>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--saffron)' }}>
                        {formatIndianPrice(prop.price, prop.purpose === 'Rent')}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Link to={`/property/${prop.id}`} className="btn btn-outline btn-sm">
                      <Eye size={14} /> View
                    </Link>
                    <button 
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete ${prop.title}?`)) {
                          deleteProperty(prop.id);
                        }
                      }}
                      style={{ color: '#EF4444', padding: '6px', borderRadius: '4px' }}
                      title="Delete Property"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

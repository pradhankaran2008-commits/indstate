import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, Scale, Eye, MapPin, Bed, Bath, 
  Compass, Phone, CheckCircle 
} from 'lucide-react';
import { formatIndianPrice, formatIndianNumber } from '../../utils/currencyFormatter';
import { useProperty } from '../../context/PropertyContext';

export default function PropertyCard({ property, layout = 'grid' }) {
  const { 
    isFavorite, 
    toggleFavorite, 
    isInCompare, 
    addToCompare, 
    setQuickPreviewProperty 
  } = useProperty();

  if (!property) return null;

  const isFav = isFavorite(property.id);
  const inComp = isInCompare(property.id);
  const isRent = property.purpose === 'Rent' || property.purpose === 'PG-Co-living';

  return (
    <div className={`property-card ${layout === 'list' ? 'property-card-list' : ''}`} data-cursor="view">
      {/* Thumbnail and Overlay Tools */}
      <div className="property-card-thumb-wrap" data-cursor="view">
        <Link to={`/property/${property.id}`}>
          <img 
            src={property.images?.[0] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'} 
            alt={property.title} 
            className="property-card-img"
            loading="lazy"
          />
        </Link>

        {/* Card Action Tools */}
        <div className="property-card-tools">
          <button 
            type="button" 
            className="card-tool-btn" 
            title="Quick Preview"
            onClick={(e) => {
              e.preventDefault();
              setQuickPreviewProperty(property);
            }}
          >
            <Eye size={15} />
          </button>
          <button 
            type="button" 
            className={`card-tool-btn ${isFav ? 'active' : ''}`} 
            title={isFav ? "Remove from Favorites" : "Add to Favorites"}
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(property.id);
            }}
          >
            <Heart size={15} fill={isFav ? "#FFFFFF" : "none"} color="#FFFFFF" />
          </button>
          <button 
            type="button" 
            className={`card-tool-btn ${inComp ? 'active' : ''}`} 
            title={inComp ? "Remove from Compare" : "Add to Compare"}
            onClick={(e) => {
              e.preventDefault();
              addToCompare(property);
            }}
          >
            <Scale size={15} />
          </button>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="property-card-body">
        {/* Price Row */}
        <div className="property-card-price-row">
          <div className="property-price">
            {formatIndianPrice(property.price, isRent)}
          </div>
          {property.pricePerSqFt && (
            <div className="property-rate-sqft">
              ₹{formatIndianNumber(property.pricePerSqFt)} / sq.ft.
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="property-card-title">
          <Link to={`/property/${property.id}`} title={property.title}>
            {property.title}
          </Link>
        </h3>

        {/* Location */}
        <div className="property-card-location">
          <MapPin size={14} color="var(--accent)" />
          <span>{property.locality}, {property.city} ({property.state})</span>
        </div>

        {/* Amenities Bar (Beds, Baths, Carpet Area, Vastu) */}
        <div className="property-amenities-bar">
          {property.bhk > 0 && (
            <div className="amenity-item" title={`${property.bhk} BHK Configuration`}>
              <Bed size={15} color="var(--text-muted)" />
              <span><strong className="spec-num">{property.bhk}</strong> <span className="spec-lbl">BHK</span></span>
            </div>
          )}

          {property.bathrooms > 0 && (
            <div className="amenity-item" title={`${property.bathrooms} Bathrooms`}>
              <Bath size={15} color="var(--text-muted)" />
              <span><strong className="spec-num">{property.bathrooms}</strong> <span className="spec-lbl">Baths</span></span>
            </div>
          )}

          {property.carpetArea > 0 && (
            <div className="amenity-item" title="RERA Net Usable Carpet Area">
              <span><strong className="spec-num">{formatIndianNumber(property.carpetArea)}</strong> <span className="spec-lbl">sq.ft.</span> <small style={{ color: 'var(--success)', fontWeight: 700, letterSpacing: '0.02em' }}>Carpet</small></span>
            </div>
          )}

          {property.facing && (
            <div className="amenity-item" title="Vastu Orientation">
              <Compass size={14} color="var(--text-muted)" />
              <span className="spec-lbl" style={{ fontSize: '12px' }}>{property.facing.split(' ')[0]}</span>
            </div>
          )}
        </div>

        {/* Footer with Agent and CTA */}
        <div className="property-card-footer">
          <div className="property-agent-meta">
            {property.agent?.avatar && (
              <img 
              src={property.agent.avatar} 
              alt={property.agent.name} 
              className="agent-mini-avatar"
            />
          )}
            <span className="agent-mini-name">{property.agent?.name || 'Verified Owner'}</span>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            {property.agent?.whatsapp && (
              <a 
                href={`https://wa.me/${property.agent.whatsapp}?text=${encodeURIComponent(`Namaste, I am interested in ${property.title} on INDSTATE (ID: ${property.id})`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ padding: '4px 10px', borderColor: 'var(--success)', color: 'var(--success)', fontWeight: 600, letterSpacing: '0.02em', fontSize: '11px' }}
                title="Chat on WhatsApp"
              >
                WA
              </a>
            )}
            <Link to={`/property/${property.id}`} className="btn btn-primary btn-sm" style={{ padding: '5px 14px', fontSize: '12px', fontWeight: 600, letterSpacing: '0.02em' }}>
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

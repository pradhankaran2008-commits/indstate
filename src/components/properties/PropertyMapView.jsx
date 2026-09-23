import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import { formatIndianPrice } from '../../utils/currencyFormatter';

export default function PropertyMapView({ properties }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Destroy existing map if already initialized
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Determine center: if properties exist, take the first property's coordinates or India center
    const defaultCenter = properties.length > 0 && properties[0].coordinates 
      ? properties[0].coordinates 
      : [19.0760, 72.8777]; // Mumbai center

    const map = L.map(mapContainerRef.current).setView(defaultCenter, properties.length === 1 ? 14 : 6);
    mapInstanceRef.current = map;

    // High quality OpenStreetMap / CartoDB Voyager tiles (clean, modern real estate look)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    const markersGroup = L.featureGroup();

    properties.forEach(prop => {
      if (prop.coordinates && Array.isArray(prop.coordinates)) {
        const isRent = prop.purpose === 'Rent' || prop.purpose === 'PG-Co-living';
        const priceLabel = formatIndianPrice(prop.price, isRent);

        // Custom HTML marker styled like luxury real estate maps with INR price
        const customIcon = L.divIcon({
          className: 'indstate-map-pin',
          html: `
            <div style="
              background: #0F1B3D;
              color: #FFFFFF;
              font-family: 'Inter', sans-serif;
              font-size: 11px;
              font-weight: 700;
              padding: 4px 8px;
              border-radius: 6px;
              border: 2px solid ${prop.isReraVerified ? '#1F5F4A' : '#B5642B'};
              box-shadow: 0 4px 12px rgba(15, 27, 61, 0.35);
              white-space: nowrap;
              cursor: pointer;
              transform: translate(-50%, -100%);
              display: flex;
              align-items: center;
              gap: 4px;
            ">
              <span>${priceLabel}</span>
              ${prop.isReraVerified ? '<span style="color:#A3CEBF;font-size:9px">✓ RERA</span>' : ''}
            </div>
          `,
          iconSize: [80, 30],
          iconAnchor: [40, 15]
        });

        const popupContent = `
          <div style="width: 220px; font-family: 'Inter', sans-serif;">
            <img src="${prop.images?.[0]}" alt="${prop.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-bottom: 8px;" />
            <div style="font-size: 11px; font-weight: 700; color: #B5642B; text-transform: uppercase; letter-spacing: 0.03em;">${prop.purpose}</div>
            <div style="font-family: 'Fraunces', Georgia, serif; font-size: 14px; font-weight: 600; color: #0F1B3D; line-height: 1.35; margin-bottom: 4px;">${prop.title}</div>
            <div style="font-size: 11px; color: #6B7280; margin-bottom: 6px;">📍 ${prop.locality}, ${prop.city}</div>
            <div style="font-family: 'Fraunces', Georgia, serif; font-size: 16px; font-weight: 600; color: #0F1B3D; margin-bottom: 8px; letter-spacing: -0.02em;">${priceLabel}</div>
            <a href="/property/${prop.id}" style="display: block; background: #B5642B; color: #fff; text-align: center; padding: 6px 0; border-radius: 4px; font-size: 11px; font-weight: 600; letter-spacing: 0.02em; text-decoration: none;">View Full Details</a>
          </div>
        `;

        const marker = L.marker(prop.coordinates, { icon: customIcon })
          .bindPopup(popupContent);

        marker.addTo(markersGroup);
      }
    });

    markersGroup.addTo(map);

    if (properties.length > 1) {
      try {
        map.fitBounds(markersGroup.getBounds(), { padding: [40, 40] });
      } catch (e) {
        console.error(e);
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [properties]);

  return (
    <div 
      style={{
        position: 'relative',
        height: '650px',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
      <div 
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(8px)',
          padding: '8px 14px',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-sm)',
          zIndex: 1000,
          fontSize: '12px',
          fontWeight: 600,
          color: 'var(--primary)'
        }}
      >
        🇮🇳 Showing {properties.length} Properties on Indian Map
      </div>
    </div>
  );
}

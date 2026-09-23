import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, MapPin, IndianRupee, ShieldCheck, 
  CheckCircle2, ArrowRight, ArrowLeft, Image as ImageIcon, 
  Layers, Compass 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { INDIAN_STATES, UNION_TERRITORIES } from '../data/indianStatesAndCities';
import { useProperty } from '../context/PropertyContext';
import { formatIndianPrice } from '../utils/currencyFormatter';

export default function AddPropertyPage() {
  const navigate = useNavigate();
  const { addProperty } = useProperty();

  const [step, setStep] = useState(1);
  const [submittedPropertyId, setSubmittedPropertyId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    purpose: 'Buy', // 'Buy' | 'Rent' | 'PG-Co-living' | 'Commercial' | 'Plots'
    propertyType: 'Apartment',
    price: '',
    maintenanceCharges: '',
    state: 'Maharashtra',
    city: 'Mumbai',
    locality: '',
    district: '',
    pinCode: '',
    address: '',
    bhk: 2,
    bathrooms: 2,
    balconies: 1,
    carpetArea: '',
    superBuiltUpArea: '',
    facing: 'East (Vastu Compliant)',
    furnishing: 'Semi-Furnished',
    possessionStatus: 'Ready to Move',
    possessionDate: 'Immediate',
    floor: '5th of 18 Floors',
    parking: '1 Covered Car Bay',
    reraNumber: '',
    description: '',
    contactName: 'Arjun Verma',
    contactPhone: '9876543210',
    contactRole: 'Owner',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      "100% Power Backup", "Clubhouse", "24x7 Security & CCTV", "Vastu Compliant", "Lifts", "Rainwater Harvesting"
    ]
  });

  const allRegions = [...INDIAN_STATES, ...UNION_TERRITORIES];
  const currentStateObj = allRegions.find(r => r.name === formData.state);
  const citiesList = currentStateObj?.cities || [];
  const currentCityObj = citiesList.find(c => c.name === formData.city);
  const localitiesList = currentCityObj?.localities || [];

  const handleStateChange = (e) => {
    const newState = e.target.value;
    const newRegion = allRegions.find(r => r.name === newState);
    const newCity = newRegion && newRegion.cities.length > 0 ? newRegion.cities[0].name : '';
    setFormData({
      ...formData,
      state: newState,
      city: newCity,
      locality: ''
    });
  };

  const toggleAmenity = (amenity) => {
    setFormData(prev => {
      const exists = prev.amenities.includes(amenity);
      return {
        ...prev,
        amenities: exists 
          ? prev.amenities.filter(a => a !== amenity)
          : [...prev.amenities, amenity]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const priceNum = Number(formData.price) || 5000000;
    const carpetNum = Number(formData.carpetArea) || 1000;
    const pricePerSqFt = Math.round(priceNum / carpetNum);

    const newListing = {
      ...formData,
      price: priceNum,
      carpetArea: carpetNum,
      superBuiltUpArea: Number(formData.superBuiltUpArea) || Math.round(carpetNum * 1.3),
      pricePerSqFt: pricePerSqFt,
      maintenanceCharges: Number(formData.maintenanceCharges) || 0,
      isReraVerified: formData.reraNumber.trim().length > 4,
      agent: {
        name: formData.contactName,
        phone: `+91 ${formData.contactPhone}`,
        whatsapp: `91${formData.contactPhone}`,
        agency: formData.contactRole === 'Owner' ? 'Direct Owner (0% Brokerage)' : 'Certified Channel Partner',
        rating: 4.8,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
      },
      coordinates: [19.0760, 72.8777] // Default coordinates
    };

    const saved = addProperty(newListing);
    setSubmittedPropertyId(saved.id);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const amenityOptions = [
    "100% Power Backup", "Clubhouse", "24x7 Security & CCTV", "Vastu Compliant", 
    "Swimming Pool", "Gymnasium", "Children Play Area", "Lifts", 
    "EV Car Charging", "Piped Natural Gas (PNG)", "Rainwater Harvesting", "Intercom"
  ];

  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {submittedPropertyId ? (
          /* Submission Success Screen */
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              padding: '60px 30px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <CheckCircle2 size={64} color="var(--rera-green)" style={{ margin: '0 auto 16px auto' }} />
            <h2 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '8px' }}>
              Property Successfully Published!
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-body)', maxWidth: '520px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
              Namaste <strong>{formData.contactName}</strong>! Your property listing has been assigned INDSTATE ID <strong>{submittedPropertyId}</strong> and is now LIVE across India with instant inquiry notifications.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
              <button 
                onClick={() => navigate(`/property/${submittedPropertyId}`)}
                className="btn btn-primary btn-lg"
              >
                View Published Listing
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="btn btn-navy btn-lg"
              >
                Go to My Dashboard
              </button>
            </div>
          </div>
        ) : (
          /* Wizard Form Container */
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              padding: '36px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span className="section-tag">
                <Building2 size={13} />
                Free Property Submission
              </span>
              <h1 style={{ fontSize: '28px', color: 'var(--primary)', marginBottom: '6px' }}>
                Post Property on INDSTATE
              </h1>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                Reach 2.5 million verified Indian and NRI buyers with 100% legal transparency & 0% brokerage options.
              </p>
            </div>

            {/* Stepper Wizard Indicator */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '36px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '15px', left: '20px', right: '20px', height: '2px', background: 'var(--border-color)', zIndex: 1 }} />
              {[
                { s: 1, label: 'Basic Info' },
                { s: 2, label: 'Location' },
                { s: 3, label: 'Carpet & Specs' },
                { s: 4, label: 'RERA & Price' },
                { s: 5, label: 'Photos & Amenities' }
              ].map(st => (
                <div 
                  key={st.s} 
                  style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div 
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: step >= st.s ? 'var(--saffron)' : '#FFFFFF',
                      color: step >= st.s ? '#FFFFFF' : 'var(--text-muted)',
                      border: step >= st.s ? '2px solid var(--saffron)' : '2px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '13px',
                      fontWeight: 700,
                      marginBottom: '6px'
                    }}
                  >
                    {st.s}
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: step >= st.s ? 'var(--primary)' : 'var(--text-muted)' }}>
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); setStep(step + 1); }}>
              {/* STEP 1: Basic Info */}
              {step === 1 && (
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '16px' }}>
                    Step 1: Basic Details
                  </h3>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Property Title *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Godrej Horizon - Luxury 3 BHK Sea-View Flat in Dadar"
                      value={formData.title}
                      onChange={e => setFormData({ ...formData, title: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Listing Purpose *
                      </label>
                      <select 
                        value={formData.purpose} 
                        onChange={e => setFormData({ ...formData, purpose: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', background: '#fff' }}
                      >
                        <option value="Buy">For Sale (Residential)</option>
                        <option value="Rent">For Rent</option>
                        <option value="PG-Co-living">PG & Co-Living</option>
                        <option value="Commercial">Commercial (Office / Retail)</option>
                        <option value="Plots">Residential / NA Plot</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Property Type *
                      </label>
                      <select 
                        value={formData.propertyType} 
                        onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', background: '#fff' }}
                      >
                        <option value="Apartment">Apartment / Flat</option>
                        <option value="Independent Villa">Independent Villa / Bungalow</option>
                        <option value="Penthouse">Sky Penthouse</option>
                        <option value="Builder Floor">Builder Floor</option>
                        <option value="Commercial Office">Commercial Office</option>
                        <option value="Residential Plot">Residential Plot / Land</option>
                        <option value="PG / Shared Living">PG & Shared Living</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Your Role *
                      </label>
                      <select 
                        value={formData.contactRole} 
                        onChange={e => setFormData({ ...formData, contactRole: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', background: '#fff' }}
                      >
                        <option value="Owner">Property Owner (0% Brokerage)</option>
                        <option value="Agent">Certified Channel Partner / Agent</option>
                        <option value="Builder">Builder / Real Estate Developer</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Contact Mobile (+91) *
                      </label>
                      <input 
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="98765 43210"
                        value={formData.contactPhone}
                        onChange={e => setFormData({ ...formData, contactPhone: e.target.value.replace(/\D/g, '') })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Location Details */}
              {step === 2 && (
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '16px' }}>
                    Step 2: Location & Address (Indian Format)
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Indian State / Union Territory *
                      </label>
                      <select 
                        value={formData.state} 
                        onChange={handleStateChange}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', background: '#fff' }}
                      >
                        <optgroup label="All 28 Indian States">
                          {INDIAN_STATES.map(s => (
                            <option key={s.code} value={s.name}>{s.name}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Union Territories">
                          {UNION_TERRITORIES.map(u => (
                            <option key={u.code} value={u.name}>{u.name}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        City *
                      </label>
                      <select 
                        value={formData.city} 
                        onChange={e => setFormData({ ...formData, city: e.target.value, locality: '' })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', background: '#fff' }}
                      >
                        {citiesList.map(c => (
                          <option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Locality / Neighborhood *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Wakad, Baner, Bandra West"
                        value={formData.locality}
                        onChange={e => setFormData({ ...formData, locality: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        PIN Code (6 Digits) *
                      </label>
                      <input 
                        type="text" 
                        required
                        maxLength={6}
                        placeholder="e.g. 411057"
                        value={formData.pinCode}
                        onChange={e => setFormData({ ...formData, pinCode: e.target.value.replace(/\D/g, '') })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Full Indian Address *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Flat 1204, Tower B, VTP Blue Waters, Hinjawadi Phase 1, Pune, Maharashtra 411057"
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Indian Specs & Carpet Area */}
              {step === 3 && (
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '16px' }}>
                    Step 3: Carpet Area & Property Specifications
                  </h3>

                  <div 
                    style={{
                      background: 'var(--rera-green-light)',
                      border: '1px solid var(--rera-green-border)',
                      padding: '12px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '12px',
                      color: 'var(--text-body)',
                      marginBottom: '18px'
                    }}
                  >
                    🛡️ <strong>RERA Statutory Rule:</strong> Under Indian law, you must declare the <strong>Net Usable Carpet Area</strong> in sq.ft. (inside the walls). Exaggerated super built-up claims are restricted.
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        RERA Carpet Area (sq.ft.) *
                      </label>
                      <input 
                        type="number" 
                        required
                        placeholder="e.g. 1150"
                        value={formData.carpetArea}
                        onChange={e => setFormData({ ...formData, carpetArea: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Super Built-Up Area (sq.ft.)
                      </label>
                      <input 
                        type="number" 
                        placeholder="e.g. 1520"
                        value={formData.superBuiltUpArea}
                        onChange={e => setFormData({ ...formData, superBuiltUpArea: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>BHK *</label>
                      <select 
                        value={formData.bhk} 
                        onChange={e => setFormData({ ...formData, bhk: Number(e.target.value) })}
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--border-color)', background: '#fff' }}
                      >
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4 BHK</option>
                        <option value="5">5+ BHK</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Bathrooms</label>
                      <select 
                        value={formData.bathrooms} 
                        onChange={e => setFormData({ ...formData, bathrooms: Number(e.target.value) })}
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--border-color)', background: '#fff' }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Balconies</label>
                      <select 
                        value={formData.balconies} 
                        onChange={e => setFormData({ ...formData, balconies: Number(e.target.value) })}
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid var(--border-color)', background: '#fff' }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3+</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Vastu Orientation
                      </label>
                      <select 
                        value={formData.facing} 
                        onChange={e => setFormData({ ...formData, facing: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', background: '#fff' }}
                      >
                        <option value="East (Vastu Compliant)">East Facing (Most Preferred)</option>
                        <option value="North-East (Ishan)">North-East (Ishan Corner)</option>
                        <option value="North Facing">North Facing</option>
                        <option value="West Facing">West Facing</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Furnishing Status
                      </label>
                      <select 
                        value={formData.furnishing} 
                        onChange={e => setFormData({ ...formData, furnishing: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', background: '#fff' }}
                      >
                        <option value="Semi-Furnished">Semi-Furnished (Kitchen & Wardrobes)</option>
                        <option value="Fully Furnished">Fully Furnished</option>
                        <option value="Unfurnished">Unfurnished (Bare Shell)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: RERA & Indian Pricing */}
              {step === 4 && (
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '16px' }}>
                    Step 4: RERA Registration & Indian Rupee Pricing
                  </h3>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      RERA Registration ID *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. P51900008345 (MahaRERA) or PRM/KA/RERA/..."
                      value={formData.reraNumber}
                      onChange={e => setFormData({ ...formData, reraNumber: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                    />
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                      All featured listings on INDSTATE must verify project state RERA approval.
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Total Price in Indian Rupees (₹) *
                      </label>
                      <input 
                        type="number" 
                        required
                        placeholder="e.g. 8500000 (85 Lakh)"
                        value={formData.price}
                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                      />
                      {formData.price && (
                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--saffron)', marginTop: '4px', display: 'block' }}>
                          Equivalent: {formatIndianPrice(Number(formData.price), formData.purpose === 'Rent')}
                        </span>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Maintenance Charges (₹ / month)
                      </label>
                      <input 
                        type="number" 
                        placeholder="e.g. 4500"
                        value={formData.maintenanceCharges}
                        onChange={e => setFormData({ ...formData, maintenanceCharges: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Possession Status
                      </label>
                      <select 
                        value={formData.possessionStatus} 
                        onChange={e => setFormData({ ...formData, possessionStatus: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', background: '#fff' }}
                      >
                        <option value="Ready to Move">Ready to Move</option>
                        <option value="Under Construction">Under Construction</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                        Possession Timeline / Date
                      </label>
                      <input 
                        type="text" 
                        placeholder="Immediate or Dec 2026"
                        value={formData.possessionDate}
                        onChange={e => setFormData({ ...formData, possessionDate: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none' }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Photos & Amenities */}
              {step === 5 && (
                <div>
                  <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '16px' }}>
                    Step 5: Photos & Amenities
                  </h3>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>
                      Select Property Amenities (Indian Gated Complex):
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                      {amenityOptions.map(am => (
                        <label 
                          key={am}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            background: formData.amenities.includes(am) ? 'var(--saffron-light)' : 'var(--bg-page)',
                            border: formData.amenities.includes(am) ? '1px solid var(--saffron-border)' : '1px solid var(--border-color)',
                            fontSize: '12px',
                            cursor: 'pointer'
                          }}
                        >
                          <input 
                            type="checkbox"
                            checked={formData.amenities.includes(am)}
                            onChange={() => toggleAmenity(am)}
                            style={{ accentColor: 'var(--saffron)' }}
                          />
                          <span>{am}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Detailed Property Description
                    </label>
                    <textarea 
                      rows={4}
                      placeholder="Mention layout benefits, cross ventilation, connectivity to metro, school or IT parks..."
                      value={formData.description}
                      onChange={e => setFormData({ ...formData, description: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', resize: 'vertical' }}
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
                {step > 1 ? (
                  <button 
                    type="button" 
                    onClick={() => setStep(step - 1)}
                    className="btn btn-outline"
                  >
                    <ArrowLeft size={16} />
                    <span>Previous Step</span>
                  </button>
                ) : <div />}

                <button type="submit" className="btn btn-primary btn-lg">
                  <span>{step === 5 ? 'Publish Property Now' : 'Continue to Next Step'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

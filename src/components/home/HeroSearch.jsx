import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, MapPin, Building, Home, Bed, 
  IndianRupee, ShieldCheck, CheckCircle2, Sparkles 
} from 'lucide-react';
import { INDIAN_STATES, UNION_TERRITORIES } from '../../data/indianStatesAndCities';
import AnimatedCounter from '../common/AnimatedCounter';
import useMagnetic from '../../utils/useMagnetic';
import TextReveal from '../common/TextReveal';
import CursorAmbientBg from '../common/CursorAmbientBg';
import MagneticButton from '../common/MagneticButton';

export default function HeroSearch() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('Buy'); // 'Buy' | 'Rent' | 'PG-Co-living' | 'Commercial' | 'Plots'
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedCity, setSelectedCity] = useState('Mumbai');
  const [selectedLocality, setSelectedLocality] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bhk, setBhk] = useState('');
  const [budgetRange, setBudgetRange] = useState('');

  // Restrained magnetic pull for primary Hero Search button
  const { ref: magneticBtnRef, position: magneticPos } = useMagnetic(7);

  // Find active state object for cascading cities
  const allRegions = [...INDIAN_STATES, ...UNION_TERRITORIES];
  const currentStateObj = allRegions.find(r => r.name === selectedState);
  const citiesList = currentStateObj?.cities || [];

  // Find active city object for cascading localities
  const currentCityObj = citiesList.find(c => c.name === selectedCity);
  const localitiesList = currentCityObj?.localities || [];

  const crevixEase = [0.16, 1, 0.3, 1];

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    const newRegion = allRegions.find(r => r.name === newState);
    if (newRegion && newRegion.cities.length > 0) {
      setSelectedCity(newRegion.cities[0].name);
      setSelectedLocality('');
    } else {
      setSelectedCity('');
      setSelectedLocality('');
    }
  };

  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
    setSelectedLocality('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (activeTab) params.append('purpose', activeTab);
    if (selectedState) params.append('state', selectedState);
    if (selectedCity) params.append('city', selectedCity);
    if (selectedLocality) params.append('locality', selectedLocality);
    if (propertyType) params.append('type', propertyType);
    if (bhk) params.append('bhk', bhk);
    if (budgetRange) params.append('budget', budgetRange);

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="hero-section" data-cursor-section="hero" style={{ position: 'relative' }}>
      {/* MarketingLab Cursor-Aware Ambient Background Accents */}
      <CursorAmbientBg />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          <motion.div 
            className="hero-pill"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: crevixEase, delay: 0.1 }}
          >
            <ShieldCheck size={16} color="var(--success-border)" />
            <span>India's Most Trusted RERA Property Portal</span>
          </motion.div>

          {/* MarketingLab Big Word-by-Word Headline Reveal */}
          <TextReveal 
            text="Discover Your Place To Live in India" 
            className="hero-title"
            tag="h1"
            delay={0.18}
            stagger={0.06}
            style={{ color: '#FFFFFF', justifyContent: 'center' }}
          />

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: crevixEase, delay: 0.4 }}
          >
            Search certified homes, luxury villas & plots across all 28 Indian States & 8 Union Territories
          </motion.p>

          {/* Houzez Demo05 Style Search Builder Box with Crevix Slide-Up */}
          <motion.div 
            className="hero-search-box"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: crevixEase, delay: 0.46 }}
          >
            {/* Search Tabs */}
            <div className="hero-search-tabs">
              {[
                { id: 'Buy', label: 'Buy Properties' },
                { id: 'Rent', label: 'Rent' },
                { id: 'PG-Co-living', label: 'PG & Co-Living' },
                { id: 'Commercial', label: 'Commercial' },
                { id: 'Plots', label: 'Plots / Land' }
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`search-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Cascading Filter Fields */}
            <form onSubmit={handleSearch} className="hero-search-fields">
              {/* State Selector */}
              <div className="search-field-group">
                <label className="search-field-label">1. Select State / UT</label>
                <div className="search-input-wrap">
                  <MapPin size={16} color="var(--accent)" />
                  <select 
                    value={selectedState} 
                    onChange={handleStateChange}
                    className="search-select"
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
              </div>

              {/* Cascading City Selector */}
              <div className="search-field-group">
                <label className="search-field-label">2. City</label>
                <div className="search-input-wrap">
                  <Building size={16} color="var(--primary)" />
                  <select 
                    value={selectedCity} 
                    onChange={handleCityChange}
                    className="search-select"
                  >
                    <option value="">All Cities in {selectedState}</option>
                    {citiesList.map(c => (
                      <option key={c.name} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Cascading Locality Selector */}
              <div className="search-field-group">
                <label className="search-field-label">3. Locality</label>
                <div className="search-input-wrap">
                  <Home size={16} color="var(--text-muted)" />
                  <select 
                    value={selectedLocality} 
                    onChange={e => setSelectedLocality(e.target.value)}
                    className="search-select"
                  >
                    <option value="">All Localities</option>
                    {localitiesList.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* BHK / Property Type */}
              <div className="search-field-group">
                <label className="search-field-label">4. BHK & Type</label>
                <div className="search-input-wrap">
                  <Bed size={16} color="var(--text-muted)" />
                  <select 
                    value={bhk} 
                    onChange={e => setBhk(e.target.value)}
                    className="search-select"
                  >
                    <option value="">Any BHK</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK</option>
                    <option value="5">5+ BHK</option>
                  </select>
                </div>
              </div>

              {/* Primary Search Submit Button with Magnetic Proximity */}
              <div>
                <button 
                  ref={magneticBtnRef}
                  type="submit" 
                  className="btn btn-primary"
                  style={{ 
                    width: '100%', 
                    height: '46px', 
                    padding: '0 24px',
                    transform: `translate3d(${magneticPos.x}px, ${magneticPos.y}px, 0)`,
                    transition: magneticPos.x === 0 && magneticPos.y === 0 
                      ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
                      : 'none'
                  }}
                >
                  <span className="icon-nudge"><Search size={18} /></span>
                  <span>Search</span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Hero Trust Metrics with Animated Counters */}
          <motion.div 
            className="hero-stats-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: crevixEase, delay: 0.6 }}
          >
            <div className="hero-stat-item">
              <span className="hero-stat-number">
                <AnimatedCounter target={28} suffix=" + 8" />
              </span>
              <span className="hero-stat-label">States & UTs Covered</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">
                <AnimatedCounter target={100} suffix="%" />
              </span>
              <span className="hero-stat-label">RERA Verified Projects</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">
                <AnimatedCounter target={14500} prefix="₹" suffix=" Cr+" />
              </span>
              <span className="hero-stat-label">Properties Transacted</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">
                4.9 ★
              </span>
              <span className="hero-stat-label">Customer Trust Score</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

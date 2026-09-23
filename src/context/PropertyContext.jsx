import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PROPERTIES } from '../data/initialProperties';

const PropertyContext = createContext();

const STORAGE_PROPERTIES_KEY = 'indstate_properties_v1';
const STORAGE_FAVORITES_KEY = 'indstate_favorites_v1';
const STORAGE_COMPARE_KEY = 'indstate_compare_v1';
const STORAGE_SAVED_SEARCHES_KEY = 'indstate_saved_searches_v1';
const STORAGE_INQUIRIES_KEY = 'indstate_inquiries_v1';

export function PropertyProvider({ children }) {
  // 1. Properties State (loads persisted + defaults)
  const [properties, setProperties] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PROPERTIES_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error reading properties from storage', e);
    }
    return INITIAL_PROPERTIES;
  });

  // 2. Favorites State
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_FAVORITES_KEY);
      return saved ? JSON.parse(saved) : ["IND-MH-MUM-01", "IND-KA-BLR-02"];
    } catch {
      return [];
    }
  });

  // 3. Compare List (up to 4 properties)
  const [compareList, setCompareList] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_COMPARE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 4. Quick Preview Lightbox Modal
  const [quickPreviewProperty, setQuickPreviewProperty] = useState(null);

  // 5. Inquiries & Site Visits
  const [inquiries, setInquiries] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_INQUIRIES_KEY);
      return saved ? JSON.parse(saved) : [
        {
          id: "inq-101",
          propertyId: "IND-MH-MUM-01",
          propertyTitle: "Lodha World View - Ultra Luxury Sea-Facing Residence",
          clientName: "Vikram Sengupta",
          clientPhone: "+91 98200 11223",
          preferredDate: "2026-09-28",
          timeSlot: "11:00 AM - 01:00 PM",
          status: "Confirmed",
          createdAt: "2026-09-20"
        }
      ];
    } catch {
      return [];
    }
  });

  // 6. Saved Searches
  const [savedSearches, setSavedSearches] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SAVED_SEARCHES_KEY);
      return saved ? JSON.parse(saved) : [
        { id: "ss-1", title: "2-3 BHK Flats in Pune under ₹1.5 Cr", query: "state=Maharashtra&city=Pune&bhk=2,3&maxPrice=15000000" },
        { id: "ss-2", title: "Luxury Villas in Bengaluru Whitefield", query: "state=Karnataka&city=Bengaluru&type=Independent Villa" }
      ];
    } catch {
      return [];
    }
  });

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_PROPERTIES_KEY, JSON.stringify(properties));
  }, [properties]);

  useEffect(() => {
    localStorage.setItem(STORAGE_FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(STORAGE_COMPARE_KEY, JSON.stringify(compareList));
  }, [compareList]);

  useEffect(() => {
    localStorage.setItem(STORAGE_INQUIRIES_KEY, JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem(STORAGE_SAVED_SEARCHES_KEY, JSON.stringify(savedSearches));
  }, [savedSearches]);

  // Actions
  const toggleFavorite = (propertyId) => {
    setFavorites(prev => {
      if (prev.includes(propertyId)) {
        return prev.filter(id => id !== propertyId);
      } else {
        return [...prev, propertyId];
      }
    });
  };

  const isFavorite = (propertyId) => favorites.includes(propertyId);

  const addToCompare = (property) => {
    if (compareList.some(p => p.id === property.id)) {
      removeFromCompare(property.id);
      return;
    }
    if (compareList.length >= 4) {
      alert("You can compare a maximum of 4 properties side by side.");
      return;
    }
    setCompareList(prev => [...prev, property]);
  };

  const removeFromCompare = (propertyId) => {
    setCompareList(prev => prev.filter(p => p.id !== propertyId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (propertyId) => compareList.some(p => p.id === propertyId);

  const addProperty = (newProp) => {
    const propertyWithId = {
      ...newProp,
      id: `IND-${newProp.state?.substring(0, 2).toUpperCase() || 'IN'}-${Date.now().toString().slice(-4)}`,
      status: "Active",
      featured: false,
      createdAt: new Date().toISOString()
    };
    setProperties(prev => [propertyWithId, ...prev]);
    return propertyWithId;
  };

  const updateProperty = (id, updatedFields) => {
    setProperties(prev => prev.map(p => p.id === id ? { ...p, ...updatedFields } : p));
  };

  const deleteProperty = (id) => {
    setProperties(prev => prev.filter(p => p.id !== id));
  };

  const submitInquiry = (inquiryData) => {
    const newInquiry = {
      id: `inq-${Date.now().toString().slice(-5)}`,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Pending Callback',
      ...inquiryData
    };
    setInquiries(prev => [newInquiry, ...prev]);
    return newInquiry;
  };

  const saveSearch = (searchData) => {
    const newSearch = {
      id: `ss-${Date.now().toString().slice(-5)}`,
      ...searchData
    };
    setSavedSearches(prev => [newSearch, ...prev]);
    return newSearch;
  };

  const deleteSavedSearch = (id) => {
    setSavedSearches(prev => prev.filter(s => s.id !== id));
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        favorites,
        toggleFavorite,
        isFavorite,
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        quickPreviewProperty,
        setQuickPreviewProperty,
        addProperty,
        updateProperty,
        deleteProperty,
        inquiries,
        submitInquiry,
        savedSearches,
        saveSearch,
        deleteSavedSearch
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperty() {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
}

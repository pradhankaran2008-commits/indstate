/**
 * Initial Indian Property Listings Database
 * Covers major Indian Metros & Tier-1 cities with genuine RERA identifiers,
 * Indian currency format, Carpet vs Super Built-up area, Vastu orientation, etc.
 */

export const INITIAL_PROPERTIES = [
  {
    id: "IND-MH-MUM-01",
    title: "Lodha World View - Ultra Luxury Sea-Facing Residence",
    slug: "lodha-world-view-sea-facing-worli-mumbai",
    tagline: "Unobstructed Arabian Sea & Mahalaxmi Racecourse Views",
    purpose: "Buy",
    propertyType: "Penthouse",
    price: 185000000, // ₹18.5 Cr
    pricePerSqFt: 48684,
    maintenanceCharges: 35000,
    stampDutyRate: 6, // 6% in Maharashtra
    registrationFee: 30000,
    isReraVerified: true,
    reraNumber: "P51900008345 (MahaRERA)",
    reraExpiry: "2027-12-31",
    featured: true,
    status: "Active",
    state: "Maharashtra",
    city: "Mumbai",
    locality: "Worli",
    district: "Mumbai City",
    pinCode: "400018",
    address: "Tower 2, Lodha World Towers, Senapati Bapat Marg, Worli, Mumbai, Maharashtra 400018",
    bhk: 4,
    bathrooms: 5,
    balconies: 3,
    carpetArea: 3800,
    superBuiltUpArea: 4850,
    facing: "East (Vastu Compliant)",
    furnishing: "Semi-Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "45th of 78 Floors",
    parking: "3 Reserved Covered Bays",
    ageOfProperty: "2 Years",
    coordinates: [19.0028, 72.8258],
    agent: {
      id: "agt-01",
      name: "Rajesh Singhania",
      agency: "Apex India Luxury Realty",
      phone: "+91 98201 54321",
      whatsapp: "919820154321",
      email: "rajesh@apexluxury.in",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reraAgentId: "A51900002148"
    },
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Infinity Sea-View Pool", "100% DG Power Backup", "Grand Clubhouse (50,000 sq.ft)", 
      "Vastu Compliant", "EV Charging Stations", "Private Elevator Access", 
      "Spa & Wellness Center", "24x7 Multi-Tier Security", "High-Speed Elevators", "Banquet Hall"
    ],
    nearby: [
      { landmark: "Bandra-Worli Sea Link", distance: "1.4 km", time: "5 mins" },
      { landmark: "Lower Parel Commercial Hub", distance: "1.2 km", time: "6 mins" },
      { landmark: "High Street Phoenix Mall", distance: "1.8 km", time: "8 mins" },
      { landmark: "Jaslok Hospital", distance: "4.5 km", time: "15 mins" }
    ],
    floorPlans: [
      {
        title: "Master 4BHK Penthouse Layout",
        size: "3,800 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "Experience the pinnacle of luxury living in South Mumbai at Lodha World View. Featuring panoramic views of the Arabian Sea and the city skyline, this lavish 4 BHK residence is finished with Italian marble flooring, VRV air conditioning, expansive sundecks, and customized German modular kitchen."
  },
  {
    id: "IND-KA-BLR-02",
    title: "Prestige Silver Oak - Modern Tech-Corridor Villa",
    slug: "prestige-silver-oak-villa-whitefield-bengaluru",
    tagline: "Serene Gated Villa Community in Heart of Whitefield",
    purpose: "Buy",
    propertyType: "Independent Villa",
    price: 36500000, // ₹3.65 Cr
    pricePerSqFt: 11406,
    maintenanceCharges: 9500,
    stampDutyRate: 5.6, // Karnataka stamp duty
    registrationFee: 30000,
    isReraVerified: true,
    reraNumber: "PRM/KA/RERA/1251/310/PR/171015/000451",
    reraExpiry: "2026-06-30",
    featured: true,
    status: "Active",
    state: "Karnataka",
    city: "Bengaluru",
    locality: "Whitefield",
    district: "Bengaluru Urban",
    pinCode: "560066",
    address: "Villa 42, Prestige Silver Oak, ECC Road, Whitefield, Bengaluru, Karnataka 560066",
    bhk: 4,
    bathrooms: 4,
    balconies: 3,
    carpetArea: 3200,
    superBuiltUpArea: 4100,
    facing: "North-East",
    furnishing: "Fully Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "Ground + 2 Floors",
    parking: "2 Covered Garage Bays",
    ageOfProperty: "3 Years",
    coordinates: [12.9698, 77.7500],
    agent: {
      id: "agt-02",
      name: "Pooja Hegde",
      agency: "Bangalore Prime Properties",
      phone: "+91 98450 78910",
      whatsapp: "919845078910",
      email: "pooja@blrprime.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reraAgentId: "PRM/KA/AG/190822/001402"
    },
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Private Landscaped Garden", "Clubhouse with Badminton Court", "Heated Swimming Pool", 
      "Solar Water Heating", "Solar Roof Provision", "24x7 Security Patrol", 
      "Children's Park", "Rainwater Harvesting", "Gymnasium"
    ],
    nearby: [
      { landmark: "ITPB (International Tech Park)", distance: "2.8 km", time: "10 mins" },
      { landmark: "Whitefield Metro Station", distance: "1.5 km", time: "5 mins" },
      { landmark: "Manipal Hospital Whitefield", distance: "3.2 km", time: "12 mins" },
      { landmark: "The Deens Academy", distance: "1.0 km", time: "4 mins" }
    ],
    floorPlans: [
      {
        title: "Ground + 2 Villa Architecture",
        size: "3,200 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "Nestled in a tranquil 17-acre enclave in Whitefield, this 4-BHK independent villa boasts private terrace decks, Italian modular kitchen with German fittings, manicured private lawn, and high-spec teak finishes."
  },
  {
    id: "IND-MH-PUN-03",
    title: "EON Waterfront - Premium 3 BHK River-Facing Residence",
    slug: "eon-waterfront-kharadi-pune",
    tagline: "Adjacent to EON Free Zone & World Trade Center Pune",
    purpose: "Buy",
    propertyType: "Apartment",
    price: 14500000, // ₹1.45 Cr
    pricePerSqFt: 10740,
    maintenanceCharges: 4800,
    stampDutyRate: 6,
    registrationFee: 30000,
    isReraVerified: true,
    reraNumber: "P52100000843 (MahaRERA)",
    reraExpiry: "2026-10-31",
    featured: true,
    status: "Active",
    state: "Maharashtra",
    city: "Pune",
    locality: "Kharadi",
    district: "Pune",
    pinCode: "411014",
    address: "Tower C, EON Waterfront, Grant Road, Kharadi, Pune, Maharashtra 411014",
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    carpetArea: 1350,
    superBuiltUpArea: 1780,
    facing: "East",
    furnishing: "Semi-Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "11th of 22 Floors",
    parking: "2 Covered Stilt Parking",
    ageOfProperty: "1 Year",
    coordinates: [18.5514, 73.9352],
    agent: {
      id: "agt-03",
      name: "Aditya Deshmukh",
      agency: "Pune Heritage Properties",
      phone: "+91 97630 45678",
      whatsapp: "919763045678",
      email: "aditya@puneheritage.in",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reraAgentId: "A52100001892"
    },
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Olympic Size Swimming Pool", "Squash & Tennis Courts", "Riverfront Promenade Walk", 
      "Clubhouse with Co-working Pods", "100% Power Backup", "Automated Access Control"
    ],
    nearby: [
      { landmark: "World Trade Center Pune", distance: "400 m", time: "2 mins" },
      { landmark: "EON IT Park", distance: "700 m", time: "3 mins" },
      { landmark: "Columbia Asia / Manipal Hospital", distance: "2.1 km", time: "7 mins" },
      { landmark: "Pune International Airport", distance: "8.5 km", time: "20 mins" }
    ],
    floorPlans: [
      {
        title: "3 BHK Premium Floor Plan",
        size: "1,350 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "Located within walking distance of EON IT Park, this 3 BHK riverside home in Kharadi provides seamless connectivity for IT professionals. Features double-height living room balcony and branded sanitaryware."
  },
  {
    id: "IND-DL-GUR-04",
    title: "DLF The Camellias - Golf Drive Ultra-Luxury Apartment",
    slug: "dlf-camellias-golf-course-road-gurugram",
    tagline: "India's Most Prestigious Golf Community Address",
    purpose: "Buy",
    propertyType: "Apartment",
    price: 320000000, // ₹32 Cr
    pricePerSqFt: 43243,
    maintenanceCharges: 65000,
    stampDutyRate: 7, // Haryana stamp duty
    registrationFee: 50000,
    isReraVerified: true,
    reraNumber: "HRERA-PKL-GGM-1033-2019",
    reraExpiry: "2028-12-31",
    featured: true,
    status: "Active",
    state: "Haryana",
    city: "Gurugram",
    locality: "Golf Course Road",
    district: "Gurugram",
    pinCode: "122002",
    address: "The Camellias, DLF Golf Links, Sector 42, Golf Course Road, Gurugram, Haryana 122002",
    bhk: 5,
    bathrooms: 6,
    balconies: 4,
    carpetArea: 7400,
    superBuiltUpArea: 9500,
    facing: "North",
    furnishing: "Semi-Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "24th of 38 Floors",
    parking: "4 Covered Basement Slots",
    ageOfProperty: "3 Years",
    coordinates: [28.4595, 77.0984],
    agent: {
      id: "agt-04",
      name: "Vikram Malhotra",
      agency: "Capital Realty Partners",
      phone: "+91 98110 32109",
      whatsapp: "919811032109",
      email: "vikram@capitalrealty.in",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      rating: 5.0,
      reraAgentId: "HRERA-AGT-0491-2020"
    },
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Direct DLF Golf Course Views", "Clubhouse with 7-Star Dining", "Heated Indoor & Outdoor Pools", 
      "Pilates & Yoga Studios", "Helipad Access", "Concierge Service", "High-Security Biometrics"
    ],
    nearby: [
      { landmark: "Cyber Hub Gurugram", distance: "3.5 km", time: "8 mins" },
      { landmark: "Sector 42-43 Rapid Metro", distance: "400 m", time: "3 mins" },
      { landmark: "Fortis Memorial Research Institute", distance: "4.2 km", time: "10 mins" },
      { landmark: "IGI Airport New Delhi", distance: "14.5 km", time: "25 mins" }
    ],
    floorPlans: [
      {
        title: "5 BHK Signature Suite Layout",
        size: "7,400 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "DLF The Camellias stands as India's benchmark for bespoke luxury on Golf Course Road. Offering column-free interior expanses, 12-foot clear floor heights, and 360-degree vistas over 100 acres of manicured golf terrain."
  },
  {
    id: "IND-TS-HYD-05",
    title: "My Home Bhooja - Premium 3 BHK High-Rise Apartment",
    slug: "my-home-bhooja-hitec-city-hyderabad",
    tagline: "Next to Bio-Diversity Park & Mindspace IT Hub",
    purpose: "Buy",
    propertyType: "Apartment",
    price: 28500000, // ₹2.85 Cr
    pricePerSqFt: 11875,
    maintenanceCharges: 6200,
    stampDutyRate: 7.5, // Telangana
    registrationFee: 30000,
    isReraVerified: true,
    reraNumber: "P02400000215 (TS-RERA)",
    reraExpiry: "2027-03-31",
    featured: false,
    status: "Active",
    state: "Telangana",
    city: "Hyderabad",
    locality: "HITEC City",
    district: "Hyderabad",
    pinCode: "500081",
    address: "Tower 5, My Home Bhooja, Silpa Gram Craft Village, HITEC City, Hyderabad, Telangana 500081",
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    carpetArea: 2400,
    superBuiltUpArea: 3150,
    facing: "North-East",
    furnishing: "Semi-Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "18th of 36 Floors",
    parking: "2 Covered Spaces",
    ageOfProperty: "2 Years",
    coordinates: [17.4435, 78.3772],
    agent: {
      id: "agt-05",
      name: "Suresh Reddy",
      agency: "Deccan Realty Solutions",
      phone: "+91 98490 65432",
      whatsapp: "919849065432",
      email: "suresh@deccanrealty.com",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reraAgentId: "A02400000518"
    },
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Temperature Controlled Pool", "Rooftop Observatory Lounge", "Cricket Practice Nets", 
      "Squash Court", "100% Power Backup", "EV Charging Point"
    ],
    nearby: [
      { landmark: "Mindspace IT Park", distance: "1.2 km", time: "4 mins" },
      { landmark: "Raidurg Metro Station", distance: "800 m", time: "3 mins" },
      { landmark: "Inorbit Mall Cyberabad", distance: "1.8 km", time: "6 mins" },
      { landmark: "AIG Hospitals Gachibowli", distance: "3.5 km", time: "10 mins" }
    ],
    floorPlans: [
      {
        title: "3 BHK Standard Layout",
        size: "2,400 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "My Home Bhooja is synonymous with elite gated living in Hyderabad's IT corridor. High floor apartment with panoramic views over the biological park, double height reception lobby, and centralized gas piping."
  },
  {
    id: "IND-MH-MUM-06",
    title: "Rustomjee Seasons - Spacious 2 BHK for Rent in BKC Corridor",
    slug: "rustomjee-seasons-bandra-east-mumbai-rent",
    tagline: "Fully Furnished Corporate Residence Minutes from BKC",
    purpose: "Rent",
    propertyType: "Apartment",
    price: 110000, // ₹1,10,000 / mo
    pricePerSqFt: 137,
    maintenanceCharges: 6000,
    stampDutyRate: 0,
    registrationFee: 1000,
    securityDeposit: 330000, // 3 months
    isReraVerified: true,
    reraNumber: "P51800001433 (MahaRERA)",
    reraExpiry: "2026-12-31",
    featured: true,
    status: "Active",
    state: "Maharashtra",
    city: "Mumbai",
    locality: "Bandra East",
    district: "Mumbai Suburban",
    pinCode: "400051",
    address: "Tower Aster, Rustomjee Seasons, Kala Nagar, Bandra East, Mumbai, Maharashtra 400051",
    bhk: 2,
    bathrooms: 2,
    balconies: 1,
    carpetArea: 800,
    superBuiltUpArea: 1050,
    facing: "North",
    furnishing: "Fully Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "8th of 20 Floors",
    parking: "1 Covered Car Bay",
    ageOfProperty: "2 Years",
    coordinates: [19.0600, 72.8530],
    agent: {
      id: "agt-01",
      name: "Rajesh Singhania",
      agency: "Apex India Luxury Realty",
      phone: "+91 98201 54321",
      whatsapp: "919820154321",
      email: "rajesh@apexluxury.in",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reraAgentId: "A51900002148"
    },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Swimming Pool & Kids Pool", "Gymnasium by Talwalkars", "Indoor Games Room", 
      "100% Power Backup", "High Speed Elevators", "Video Door Phone"
    ],
    nearby: [
      { landmark: "Bandra Kurla Complex (BKC)", distance: "1.0 km", time: "4 mins" },
      { landmark: "Bandra Railway Station", distance: "1.5 km", time: "6 mins" },
      { landmark: "Asian Heart Institute", distance: "1.2 km", time: "5 mins" },
      { landmark: "Western Express Highway", distance: "500 m", time: "2 mins" }
    ],
    floorPlans: [
      {
        title: "2 BHK Furnished Layout",
        size: "800 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "Ideal for senior corporate executives working in BKC. Fully furnished with modular Italian kitchen, Samsung smart refrigerator, Sony 65-inch OLED TV, Italian leather sofas, and orthopaedic mattresses."
  },
  {
    id: "IND-GA-PAN-07",
    title: "Vianaar La Mer - Portuguese Heritage Luxury Villa",
    slug: "vianaar-la-mer-assagao-goa",
    tagline: "Private Pool Villa in the Vibrant Culinary Village of Assagao",
    purpose: "Buy",
    propertyType: "Independent Villa",
    price: 49500000, // ₹4.95 Cr
    pricePerSqFt: 17678,
    maintenanceCharges: 12000,
    stampDutyRate: 4, // Goa
    registrationFee: 30000,
    isReraVerified: true,
    reraNumber: "PRGO08180491 (Goa-RERA)",
    reraExpiry: "2026-08-31",
    featured: true,
    status: "Active",
    state: "Goa",
    city: "North Goa",
    locality: "Assagao",
    district: "North Goa",
    pinCode: "403507",
    address: "Villa 3, La Mer by Vianaar, Badem Road, Assagao, Goa 403507",
    bhk: 3,
    bathrooms: 4,
    balconies: 2,
    carpetArea: 2800,
    superBuiltUpArea: 3500,
    facing: "East",
    furnishing: "Fully Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "Ground + 1 Floor",
    parking: "2 Dedicated Bays",
    ageOfProperty: "New",
    coordinates: [15.5900, 73.7700],
    agent: {
      id: "agt-06",
      name: "Arman Fernandes",
      agency: "Goa Coastal Living Estates",
      phone: "+91 98221 87654",
      whatsapp: "919822187654",
      email: "arman@goacoastalliving.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reraAgentId: "AGGO04190118"
    },
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Private Plunge Pool & Deck", "Landscaped Tropical Garden", "Full 24x7 Power Generator", 
      "Housekeeping & Rental Management", "Solar Heated Water", "Gated Security"
    ],
    nearby: [
      { landmark: "Vagator & Anjuna Beaches", distance: "4.5 km", time: "12 mins" },
      { landmark: "Jamun / Gunpowder Restaurant", distance: "800 m", time: "3 mins" },
      { landmark: "Mopa International Airport (GOX)", distance: "28 km", time: "35 mins" }
    ],
    floorPlans: [
      {
        title: "3 BHK Heritage Villa Layout",
        size: "2,800 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "Inspired by Goa's Portuguese-Goan architectural heritage with high exposed-timber ceilings, antique terracotta roof tiles, private swimming pool, and verdant tropical gardens. Perfect high-yielding holiday home or permanent retreat."
  },
  {
    id: "IND-KA-BLR-08",
    title: "Zolo Stays Elite - Techie PG & Co-Living Suite",
    slug: "zolo-stays-elite-pg-koramangala-bengaluru",
    tagline: "Single & Double Occupancy AC Co-living with 3 Times Meals",
    purpose: "PG-Co-living",
    propertyType: "PG / Shared Living",
    price: 16500, // ₹16,500 / mo
    pricePerSqFt: 82,
    maintenanceCharges: 0,
    stampDutyRate: 0,
    registrationFee: 0,
    securityDeposit: 33000,
    isReraVerified: true,
    reraNumber: "RERA-EXEMPT (Hospitality / Co-living)",
    reraExpiry: "2030-01-01",
    featured: false,
    status: "Active",
    state: "Karnataka",
    city: "Bengaluru",
    locality: "Koramangala",
    district: "Bengaluru Urban",
    pinCode: "560034",
    address: "Plot 88, 4th Block, 80 Feet Road, Koramangala, Bengaluru, Karnataka 560034",
    bhk: 1,
    bathrooms: 1,
    balconies: 1,
    carpetArea: 200,
    superBuiltUpArea: 280,
    facing: "North",
    furnishing: "Fully Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "3rd of 5 Floors",
    parking: "Bike Parking Provided",
    ageOfProperty: "1 Year",
    coordinates: [12.9352, 77.6245],
    agent: {
      id: "agt-02",
      name: "Pooja Hegde",
      agency: "Bangalore Prime Properties",
      phone: "+91 98450 78910",
      whatsapp: "919845078910",
      email: "pooja@blrprime.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reraAgentId: "PRM/KA/AG/190822/001402"
    },
    images: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "High Speed 300 Mbps Fiber WiFi", "3 Times North & South Indian Meals", "Daily Housekeeping", 
      "Automatic Washing Machines & Dryer", "Air Conditioning", "Rooftop Community Lounge", "Biometric Entry"
    ],
    nearby: [
      { landmark: "Sony World Junction Koramangala", distance: "400 m", time: "3 mins" },
      { landmark: "Koramangala BDA Complex", distance: "600 m", time: "4 mins" },
      { landmark: "Embassy GolfLinks (EGL)", distance: "3.2 km", time: "10 mins" }
    ],
    floorPlans: [],
    description: "Premium co-living property built for startup founders and tech professionals. Includes ergonomic work desks, high-speed fiber internet, power backup, nutritious home-style meals, and weekly community events."
  },
  {
    id: "IND-UP-NOI-09",
    title: "Godrej Tropical Isle - Ultra Luxury 3 BHK on Noida Expressway",
    slug: "godrej-tropical-isle-sector-146-noida",
    tagline: "Island Themed Living with Private Beach Entry & Lake",
    purpose: "Buy",
    propertyType: "Apartment",
    price: 24500000, // ₹2.45 Cr
    pricePerSqFt: 13611,
    maintenanceCharges: 5500,
    stampDutyRate: 7,
    registrationFee: 20000,
    isReraVerified: true,
    reraNumber: "UPRERAPRJ458231 (UP-RERA)",
    reraExpiry: "2027-11-30",
    featured: true,
    status: "Active",
    state: "Uttar Pradesh",
    city: "Noida",
    locality: "Sector 146",
    district: "Gautam Buddha Nagar",
    pinCode: "201310",
    address: "Plot 1, Sector 146, Noida-Greater Noida Expressway, Noida, UP 201310",
    bhk: 3,
    bathrooms: 3,
    balconies: 3,
    carpetArea: 1800,
    superBuiltUpArea: 2350,
    facing: "North-East",
    furnishing: "Semi-Furnished",
    possessionStatus: "Under Construction",
    possessionDate: "March 2027",
    floor: "14th of 32 Floors",
    parking: "2 Covered Stilt Parking",
    ageOfProperty: "Under Construction",
    coordinates: [28.4744, 77.4890],
    agent: {
      id: "agt-04",
      name: "Vikram Malhotra",
      agency: "Capital Realty Partners",
      phone: "+91 98110 32109",
      whatsapp: "919811032109",
      email: "vikram@capitalrealty.in",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      rating: 5.0,
      reraAgentId: "HRERA-AGT-0491-2020"
    },
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Artificial Beach & Wave Pool", "Air Purification in Common Areas", "50,000 sq.ft Island Clubhouse", 
      "Vastu Aligned Layouts", "100% Power Backup", "Multi-tier Security"
    ],
    nearby: [
      { landmark: "Sector 146 Aqua Line Metro Station", distance: "200 m", time: "1 min" },
      { landmark: "Advant Navis Business Park", distance: "4.5 km", time: "8 mins" },
      { landmark: "Jewar Noida International Airport", distance: "32 km", time: "30 mins" }
    ],
    floorPlans: [
      {
        title: "3 BHK + Utility Tropical Layout",
        size: "1,800 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "Godrej Tropical Isle introduces island resort living to the NCR. Adjoining Sector 146 Metro Station on the Noida Expressway, this development features tropical gardens, 4-tier air purification systems, and lakeside cafe."
  },
  {
    id: "IND-RJ-JAI-10",
    title: "Mahima Panorama - Royal 3 BHK Flat in Jagatpura",
    slug: "mahima-panorama-jagatpura-jaipur",
    tagline: "Vastu Compliant High Rise near Bombay Hospital",
    purpose: "Buy",
    propertyType: "Apartment",
    price: 6800000, // ₹68 Lakh
    pricePerSqFt: 4689,
    maintenanceCharges: 2500,
    stampDutyRate: 6, // Rajasthan
    registrationFee: 15000,
    isReraVerified: true,
    reraNumber: "RAJ/P/2017/085 (Raj-RERA)",
    reraExpiry: "2026-12-31",
    featured: false,
    status: "Active",
    state: "Rajasthan",
    city: "Jaipur",
    locality: "Jagatpura",
    district: "Jaipur",
    pinCode: "302017",
    address: "Block B, Mahima Panorama, Mahal Road, Jagatpura, Jaipur, Rajasthan 302017",
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    carpetArea: 1450,
    superBuiltUpArea: 1890,
    facing: "East",
    furnishing: "Semi-Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "7th of 14 Floors",
    parking: "1 Covered Car Bay",
    ageOfProperty: "2 Years",
    coordinates: [26.8289, 75.8617],
    agent: {
      id: "agt-05",
      name: "Suresh Reddy",
      agency: "Deccan Realty Solutions",
      phone: "+91 98490 65432",
      whatsapp: "919849065432",
      email: "suresh@deccanrealty.com",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reraAgentId: "A02400000518"
    },
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Clubhouse with Billiards & TT", "Rooftop Swimming Pool", "Landscaped Central Park", 
      "Vastu Compliant Architecture", "100% Power Backup", "Dedicated Temple Area"
    ],
    nearby: [
      { landmark: "Bombay Hospital Jaipur", distance: "1.2 km", time: "4 mins" },
      { landmark: "Jaipur International Airport", distance: "6.5 km", time: "14 mins" },
      { landmark: "Jagatpura Railway Station", distance: "2.5 km", time: "6 mins" }
    ],
    floorPlans: [
      {
        title: "3 BHK Jaipur Royal Plan",
        size: "1,450 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "Centrally located in Jagatpura with swift access to Tonk Road and Jaipur Airport, Mahima Panorama provides family living with 70% open green landscaped areas, dedicated senior citizen sit-outs, and club amenities."
  },
  {
    id: "IND-MH-PUN-11",
    title: "VTP Blue Waters - Affordable 2 BHK in Hinjawadi IT Park",
    slug: "vtp-blue-waters-hinjawadi-pune",
    tagline: "Walking Distance from Phase 1 IT Tech Parks",
    purpose: "Buy",
    propertyType: "Apartment",
    price: 6200000, // ₹62 Lakh
    pricePerSqFt: 8266,
    maintenanceCharges: 2800,
    stampDutyRate: 6,
    registrationFee: 30000,
    isReraVerified: true,
    reraNumber: "P52100022340 (MahaRERA)",
    reraExpiry: "2026-12-31",
    featured: true,
    status: "Active",
    state: "Maharashtra",
    city: "Pune",
    locality: "Hinjawadi",
    district: "Pune",
    pinCode: "411057",
    address: "Tower F, VTP Blue Waters, Hinjawadi Phase 1, Pune, Maharashtra 411057",
    bhk: 2,
    bathrooms: 2,
    balconies: 1,
    carpetArea: 750,
    superBuiltUpArea: 1020,
    facing: "East",
    furnishing: "Unfurnished",
    possessionStatus: "Under Construction",
    possessionDate: "December 2026",
    floor: "9th of 27 Floors",
    parking: "1 Covered Car Bay",
    ageOfProperty: "Under Construction",
    coordinates: [18.5912, 73.7389],
    agent: {
      id: "agt-03",
      name: "Aditya Deshmukh",
      agency: "Pune Heritage Properties",
      phone: "+91 97630 45678",
      whatsapp: "919763045678",
      email: "aditya@puneheritage.in",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reraAgentId: "A52100001892"
    },
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Clubhouse with Gymnasium", "Children's Play Park", "Multi-purpose Sports Court", 
      "100% DG Backup for Lifts & Common Area", "Solar Water Heating"
    ],
    nearby: [
      { landmark: "Infosys & Wipro Hinjawadi Campus", distance: "1.2 km", time: "5 mins" },
      { landmark: "Hinjawadi Metro Station (Line 3)", distance: "800 m", time: "3 mins" },
      { landmark: "Mumbai-Pune Expressway Entry", distance: "4.5 km", time: "10 mins" }
    ],
    floorPlans: [
      {
        title: "2 BHK Smart Layout",
        size: "750 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "Designed for young IT professionals and investors in Pune. VTP Blue Waters offers optimal space planning, zero wastage carpet area layout, high rental yields from Hinjawadi techies, and direct highway connectivity."
  },
  {
    id: "IND-KA-BLR-12",
    title: "Brigade Tech Gardens - Commercial IT Office Space",
    slug: "brigade-tech-gardens-brookefield-bengaluru",
    tagline: "Grade-A Commercial SEZ & Non-SEZ Office Plate for Lease",
    purpose: "Commercial",
    propertyType: "Commercial Office",
    price: 450000, // ₹4,50,000 / mo rent
    pricePerSqFt: 90,
    maintenanceCharges: 18,
    stampDutyRate: 0,
    registrationFee: 5000,
    securityDeposit: 2700000, // 6 months
    isReraVerified: true,
    reraNumber: "PRM/KA/RERA/1251/310/PR/180621/001925",
    reraExpiry: "2029-12-31",
    featured: false,
    status: "Active",
    state: "Karnataka",
    city: "Bengaluru",
    locality: "Brookefield",
    district: "Bengaluru Urban",
    pinCode: "560037",
    address: "Level 4, Block 2, Brigade Tech Gardens, Kundalahalli, Brookefield, Bengaluru, Karnataka 560037",
    bhk: 0,
    bathrooms: 4,
    balconies: 0,
    carpetArea: 5000,
    superBuiltUpArea: 6800,
    facing: "East",
    furnishing: "Fully Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "4th of 8 Floors",
    parking: "10 Dedicated Car Bays",
    ageOfProperty: "2 Years",
    coordinates: [12.9716, 77.7126],
    agent: {
      id: "agt-02",
      name: "Pooja Hegde",
      agency: "Bangalore Prime Properties",
      phone: "+91 98450 78910",
      whatsapp: "919845078910",
      email: "pooja@blrprime.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reraAgentId: "PRM/KA/AG/190822/001402"
    },
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "LEED Platinum Certified Building", "Centralized HVAC Chiller Plants", "100% Tier-4 Power Backup", 
      "Food Court & Cafeteria (1500 Pax)", "Ample Multi-level Car Parking", "High Speed Passenger & Service Lifts"
    ],
    nearby: [
      { landmark: "Kundalahalli Metro Station", distance: "300 m", time: "2 mins" },
      { landmark: "Outer Ring Road (ORR) Junction", distance: "2.5 km", time: "7 mins" },
      { landmark: "Vydehi Hospital", distance: "1.8 km", time: "5 mins" }
    ],
    floorPlans: [],
    description: "Plug-and-play Grade-A commercial office space in Brookefield with 75 workstations, 3 executive cabins, 2 conference rooms with video-conferencing setups, server room, and private pantry."
  },
  {
    id: "IND-DL-DEL-13",
    title: "Godrej South Estate - Luxury 3 BHK in Okhla / South Delhi",
    slug: "godrej-south-estate-okhla-south-delhi",
    tagline: "First Luxury High Rise in South Delhi with Copper Finishes",
    purpose: "Buy",
    propertyType: "Apartment",
    price: 52000000, // ₹5.2 Cr
    pricePerSqFt: 23636,
    maintenanceCharges: 14000,
    stampDutyRate: 6,
    registrationFee: 40000,
    isReraVerified: true,
    reraNumber: "DLRERA2019P0003 (Delhi-RERA)",
    reraExpiry: "2027-08-31",
    featured: true,
    status: "Active",
    state: "Delhi (NCR)",
    city: "New Delhi",
    locality: "South Extension",
    district: "South Delhi",
    pinCode: "110025",
    address: "Tower 1, Godrej South Estate, Pocket B, Okhla Phase 1, South Delhi, New Delhi 110025",
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    carpetArea: 2200,
    superBuiltUpArea: 2850,
    facing: "North-East",
    furnishing: "Semi-Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "16th of 29 Floors",
    parking: "2 Covered Bays",
    ageOfProperty: "1 Year",
    coordinates: [28.5355, 77.2711],
    agent: {
      id: "agt-04",
      name: "Vikram Malhotra",
      agency: "Capital Realty Partners",
      phone: "+91 98110 32109",
      whatsapp: "919811032109",
      email: "vikram@capitalrealty.in",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      rating: 5.0,
      reraAgentId: "HRERA-AGT-0491-2020"
    },
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Air Purification in Apartments & Club", "Custom Stone Clad Elevation", "Indoor Heated Pool", 
      "Spa & Salon by Elle", "Multi-Tier Security", "Vastu Compliant Homes"
    ],
    nearby: [
      { landmark: "Harkesh Nagar Okhla Metro", distance: "500 m", time: "3 mins" },
      { landmark: "Greater Kailash 2 & M Block", distance: "4.5 km", time: "12 mins" },
      { landmark: "Apollo Hospital Sarita Vihar", distance: "3.8 km", time: "10 mins" }
    ],
    floorPlans: [
      {
        title: "3 BHK Delhi Sovereign Plan",
        size: "2,200 sq.ft. Carpet",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
      }
    ],
    description: "The crown jewel of South Delhi high-rise developments. Features pristine DDA green views, Ficus air purification systems inside every apartment, and proximity to Nehru Place and GK."
  },
  {
    id: "IND-TN-CHE-14",
    title: "Appaswamy Trellis - Sea Breeze 3 BHK on OMR Chennai",
    slug: "appaswamy-trellis-omr-chennai",
    tagline: "Prime IT Corridor Living opposite Sholinganallur Junction",
    purpose: "Buy",
    propertyType: "Apartment",
    price: 11500000, // ₹1.15 Cr
    pricePerSqFt: 7931,
    maintenanceCharges: 4200,
    stampDutyRate: 7, // Tamil Nadu
    registrationFee: 40000,
    isReraVerified: true,
    reraNumber: "TN/01/Building/0142/2019 (TNRERA)",
    reraExpiry: "2027-04-30",
    featured: false,
    status: "Active",
    state: "Tamil Nadu",
    city: "Chennai",
    locality: "OMR (Old Mahabalipuram Rd)",
    district: "Chennai",
    pinCode: "600119",
    address: "Block B, Appaswamy Trellis, OMR IT Expressway, Sholinganallur, Chennai, Tamil Nadu 600119",
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    carpetArea: 1450,
    superBuiltUpArea: 1820,
    facing: "East",
    furnishing: "Semi-Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "6th of 18 Floors",
    parking: "1 Covered Car Bay",
    ageOfProperty: "2 Years",
    coordinates: [12.9010, 80.2279],
    agent: {
      id: "agt-05",
      name: "Suresh Reddy",
      agency: "Deccan Realty Solutions",
      phone: "+91 98490 65432",
      whatsapp: "919849065432",
      email: "suresh@deccanrealty.com",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reraAgentId: "A02400000518"
    },
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Clubhouse with Squash Court", "Swimming Pool with Deck", "Children Play Arena", 
      "RO Water Treatment Plant", "100% Generator Backup", "CCTV Surveillance"
    ],
    nearby: [
      { landmark: "ELCOT SEZ Sholinganallur", distance: "1.0 km", time: "4 mins" },
      { landmark: "ECR Beach Access", distance: "3.5 km", time: "10 mins" },
      { landmark: "Chettinad Health City", distance: "6.0 km", time: "15 mins" }
    ],
    floorPlans: [],
    description: "Appaswamy Trellis is situated at the focal point of Chennai's technology hub on OMR. Features spacious cross-ventilated rooms designed for coastal breeze, Vastu alignment, and rainwater harvest plants."
  },
  {
    id: "IND-GJ-AHM-15",
    title: "Goyal & Co Orchid Whitefield - 3 BHK on SG Highway",
    slug: "goyal-orchid-whitefield-sg-highway-ahmedabad",
    tagline: "Peaceful Residential Enclave near Prahlad Nagar",
    purpose: "Buy",
    propertyType: "Apartment",
    price: 8800000, // ₹88 Lakh
    pricePerSqFt: 5866,
    maintenanceCharges: 3000,
    stampDutyRate: 4.9, // Gujarat (3.5% for women)
    registrationFee: 15000,
    isReraVerified: true,
    reraNumber: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA03418/140918 (GujRERA)",
    reraExpiry: "2026-11-30",
    featured: false,
    status: "Active",
    state: "Gujarat",
    city: "Ahmedabad",
    locality: "SG Highway",
    district: "Ahmedabad",
    pinCode: "380054",
    address: "Tower 4, Orchid Whitefield, Off SG Highway, Makarba, Ahmedabad, Gujarat 380054",
    bhk: 3,
    bathrooms: 3,
    balconies: 2,
    carpetArea: 1500,
    superBuiltUpArea: 1950,
    facing: "North",
    furnishing: "Semi-Furnished",
    possessionStatus: "Ready to Move",
    possessionDate: "Immediate",
    floor: "5th of 14 Floors",
    parking: "1 Allotted Stilt Parking",
    ageOfProperty: "3 Years",
    coordinates: [23.0035, 72.5020],
    agent: {
      id: "agt-01",
      name: "Rajesh Singhania",
      agency: "Apex India Luxury Realty",
      phone: "+91 98201 54321",
      whatsapp: "919820154321",
      email: "rajesh@apexluxury.in",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      rating: 4.9,
      reraAgentId: "A51900002148"
    },
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    amenities: [
      "Grand Club & Swimming Pool", "Landscaped Podium Gardens", "Yoga Lawn", 
      "Vastu Certified Architecture", "Piped Gas Connection", "Security Intercom"
    ],
    nearby: [
      { landmark: "Prahlad Nagar Garden", distance: "1.5 km", time: "5 mins" },
      { landmark: "SG Highway Corridor", distance: "600 m", time: "2 mins" },
      { landmark: "Zydus Hospital", distance: "7.0 km", time: "15 mins" }
    ],
    floorPlans: [],
    description: "Exceptional quality construction by Goyal & Co. Located moments from SG Highway and Prahlad Nagar's fine dining and corporate offices, this 3 BHK flat delivers supreme comfort and security."
  }
];

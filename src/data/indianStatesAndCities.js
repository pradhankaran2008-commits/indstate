/**
 * Complete Indian Geography Database
 * 28 States + 8 Union Territories
 * Cascading State -> City -> Locality hierarchy
 */

export const INDIAN_STATES = [
  {
    name: "Andhra Pradesh",
    code: "AP",
    type: "State",
    cities: [
      { name: "Visakhapatnam", localities: ["Madhurawada", "MVP Colony", "Gajuwaka", "Seethammadhara", "Rushikonda"] },
      { name: "Vijayawada", localities: ["Benz Circle", "MG Road", "Gollapudi", "Poranki", "Kanuru"] },
      { name: "Guntur", localities: ["Arundelpet", "Brodipet", "Pattabhipuram"] },
      { name: "Tirupati", localities: ["Alipiri", "Renigunta Road", "Bhavani Nagar"] }
    ]
  },
  {
    name: "Arunachal Pradesh",
    code: "AR",
    type: "State",
    cities: [
      { name: "Itanagar", localities: ["Ganga", "E-Sector", "Nirjuli", "Chandranagar"] },
      { name: "Naharlagun", localities: ["Model Village", "Barapani"] }
    ]
  },
  {
    name: "Assam",
    code: "AS",
    type: "State",
    cities: [
      { name: "Guwahati", localities: ["GS Road", "Dispur", "Zoo Road", "Beltola", "Six Mile", "Uzan Bazar"] },
      { name: "Silchar", localities: ["Tarapur", "Rangirkhari", "Link Road"] },
      { name: "Dibrugarh", localities: ["Mancotta Road", "Jalan Nagar"] }
    ]
  },
  {
    name: "Bihar",
    code: "BR",
    type: "State",
    cities: [
      { name: "Patna", localities: ["Boring Road", "Bailey Road", "Kankarbagh", "Rajendra Nagar", "Danapur", "Patliputra Colony"] },
      { name: "Gaya", localities: ["Civil Lines", "AP Colony"] },
      { name: "Muzaffarpur", localities: ["Mithanpura", "Brahmpura"] }
    ]
  },
  {
    name: "Chhattisgarh",
    code: "CG",
    type: "State",
    cities: [
      { name: "Raipur", localities: ["Shankar Nagar", "VIP Road", "Civil Lines", "Samta Colony", "Naya Raipur"] },
      { name: "Bhilai", localities: ["Nehru Nagar", "Sector 6", "Civic Center"] },
      { name: "Bilaspur", localities: ["Vyapar Vihar", "Rajkishore Nagar"] }
    ]
  },
  {
    name: "Goa",
    code: "GA",
    type: "State",
    cities: [
      { name: "North Goa", localities: ["Candolim", "Calangute", "Porvorim", "Assagao", "Anjuna", "Panaji", "Siolim"] },
      { name: "South Goa", localities: ["Margao", "Colva", "Benaulim", "Vasco da Gama"] }
    ]
  },
  {
    name: "Gujarat",
    code: "GJ",
    type: "State",
    cities: [
      { name: "Ahmedabad", localities: ["SG Highway", "Prahlad Nagar", "Bodakdev", "Thaltej", "Bopal", "Satellite", "Sindhu Bhavan Road"] },
      { name: "Surat", localities: ["Vesu", "Adajan", "Pal", "Piplod", "Ghod Dod Road"] },
      { name: "Vadodara", localities: ["Alkapuri", "Gotri", "Vasna Road", "Manjalpur"] },
      { name: "Rajkot", localities: ["Kalawad Road", "University Road", "Yagnik Road"] },
      { name: "Gandhinagar", localities: ["Kudasan", "Sargasan", "Randesan", "Infocity"] }
    ]
  },
  {
    name: "Haryana",
    code: "HR",
    type: "State",
    cities: [
      { name: "Gurugram", localities: ["Golf Course Road", "Cyber City", "Sector 57", "Sohna Road", "DLF Phase 5", "Golf Course Extension", "Sector 82"] },
      { name: "Faridabad", localities: ["Sector 14", "Greenfield Colony", "Neharpar", "Sector 21C"] },
      { name: "Panchkula", localities: ["Sector 20", "Sector 4", "MDC Sector 5"] },
      { name: "Panipat", localities: ["Model Town", "Sector 11"] },
      { name: "Karnal", localities: ["Sector 13", "Model Town"] }
    ]
  },
  {
    name: "Himachal Pradesh",
    code: "HP",
    type: "State",
    cities: [
      { name: "Shimla", localities: ["Mall Road", "Chotta Shimla", "Sanjauli", "Kasumpti"] },
      { name: "Dharamshala", localities: ["McLeod Ganj", "Civil Lines", "Kotwali Bazar"] },
      { name: "Solan", localities: ["Mall Road", "Kumarhatti"] }
    ]
  },
  {
    name: "Jharkhand",
    code: "JH",
    type: "State",
    cities: [
      { name: "Ranchi", localities: ["Morabadi", "Harmu Housing Colony", "Ashok Nagar", "Bariatu", "Kanke Road"] },
      { name: "Jamshedpur", localities: ["Bistupur", "Sakchi", "Kadma", "Sonari"] },
      { name: "Dhanbad", localities: ["Bank More", "Saraidhela"] }
    ]
  },
  {
    name: "Karnataka",
    code: "KA",
    type: "State",
    cities: [
      { name: "Bengaluru", localities: ["Whitefield", "Indiranagar", "Koramangala", "HSR Layout", "Electronic City", "Hebbal", "Sarjapur Road", "Bellandur", "Jayanagar"] },
      { name: "Mysuru", localities: ["Gokulam", "Vijayanagar", "Jayalakshmipuram", "VV Mohalla"] },
      { name: "Mangaluru", localities: ["Kadri", "Bejai", "Kodialbail", "Urwa"] },
      { name: "Hubballi-Dharwad", localities: ["Vidyanagar", "Keshwapur"] }
    ]
  },
  {
    name: "Kerala",
    code: "KL",
    type: "State",
    cities: [
      { name: "Kochi", localities: ["Marine Drive", "Kakkanad", "Panampilly Nagar", "Edappally", "Aluva", "Vyttila", "Kaloor"] },
      { name: "Thiruvananthapuram", localities: ["Kowdiar", "Kazhakoottam", "Vellayambalam", "Pattom", "Sasthamangalam"] },
      { name: "Kozhikode", localities: ["Nadakkavu", "Mavoor Road", "Palayam"] },
      { name: "Thrissur", localities: ["Ayyanthole", "Swaraj Round"] }
    ]
  },
  {
    name: "Madhya Pradesh",
    code: "MP",
    type: "State",
    cities: [
      { name: "Indore", localities: ["Vijay Nagar", "Super Corridor", "Palasia", "AB Road", "Mahalaxmi Nagar", "Bicholi Mardana"] },
      { name: "Bhopal", localities: ["Arera Colony", "Kolar Road", "MP Nagar", "Hoshangabad Road", "Shahpura"] },
      { name: "Gwalior", localities: ["City Centre", "Lashkar"] },
      { name: "Jabalpur", localities: ["Civil Lines", "Wright Town"] }
    ]
  },
  {
    name: "Maharashtra",
    code: "MH",
    type: "State",
    cities: [
      { name: "Mumbai", localities: ["Worli", "Bandra West", "Andheri West", "Powai", "Juhu", "Lower Parel", "Dadarm", "Chembur", "Malad West", "Kandivali"] },
      { name: "Thane", localities: ["Ghodbunder Road", "Majiwada", "Naupada", "Kolshet Road", "Vasant Vihar"] },
      { name: "Navi Mumbai", localities: ["Vashi", "Nerul", "Seawoods", "Kharghar", "Ulwe", "Panvel"] },
      { name: "Pune", localities: ["Koregaon Park", "Baner", "Wakad", "Hinjawadi", "Kothrud", "Viman Nagar", "Kalyani Nagar", "Aundh", "Magarpatta"] },
      { name: "Nagpur", localities: ["Dharampeth", "Manish Nagar", "Wardha Road", "Civil Lines", "Ramdaspeth"] },
      { name: "Nashik", localities: ["Gangapur Road", "Indira Nagar", "College Road", "Govind Nagar"] }
    ]
  },
  {
    name: "Manipur",
    code: "MN",
    type: "State",
    cities: [
      { name: "Imphal", localities: ["Thangal Bazar", "Babupara", "Mantripukhri"] }
    ]
  },
  {
    name: "Meghalaya",
    code: "ML",
    type: "State",
    cities: [
      { name: "Shillong", localities: ["Laban", "Laitumkhrah", "Police Bazar", "Nongthymmai"] }
    ]
  },
  {
    name: "Mizoram",
    code: "MZ",
    type: "State",
    cities: [
      { name: "Aizawl", localities: ["Chanmari", "Zarkawt", "Khatla"] }
    ]
  },
  {
    name: "Nagaland",
    code: "NL",
    type: "State",
    cities: [
      { name: "Kohima", localities: ["High School Colony", "Midland", "Officers Hill"] },
      { name: "Dimapur", localities: ["Duncan Bosti", "Circular Road"] }
    ]
  },
  {
    name: "Odisha",
    code: "OD",
    type: "State",
    cities: [
      { name: "Bhubaneswar", localities: ["Patia", "Chandrasekharpur", "Jayadev Vihar", "Saheed Nagar", "Khandagiri", "Nayapalli"] },
      { name: "Cuttack", localities: ["CDA Colony", "Madhupatna", "Cantonment Road"] },
      { name: "Rourkela", localities: ["Civil Township", "Koel Nagar"] }
    ]
  },
  {
    name: "Punjab",
    code: "PB",
    type: "State",
    cities: [
      { name: "Mohali (SAS Nagar)", localities: ["Sector 82", "Sector 68", "Airport Road", "Sector 70"] },
      { name: "Ludhiana", localities: ["Sarabha Nagar", "Model Town", "Ferozepur Road", "Civil Lines"] },
      { name: "Amritsar", localities: ["Mall Road", "Ranjit Avenue", "Majitha Road"] },
      { name: "Jalandhar", localities: ["Model Town", "Cantt Road", "Urban Estate"] }
    ]
  },
  {
    name: "Rajasthan",
    code: "RJ",
    type: "State",
    cities: [
      { name: "Jaipur", localities: ["Malviya Nagar", "Vaishali Nagar", "Jagatpura", "C-Scheme", "Mansarovar", "Tonk Road", "Ajmer Road"] },
      { name: "Udaipur", localities: ["Fatehpura", "Shobhagpura", "Hiran Magri", "Saheli Nagar"] },
      { name: "Jodhpur", localities: ["Shastri Nagar", "Ratanada", "Sardarpura"] },
      { name: "Kota", localities: ["Talwandi", "Vigyan Nagar"] }
    ]
  },
  {
    name: "Sikkim",
    code: "SK",
    type: "State",
    cities: [
      { name: "Gangtok", localities: ["MG Marg", "Deorali", "Tadong"] }
    ]
  },
  {
    name: "Tamil Nadu",
    code: "TN",
    type: "State",
    cities: [
      { name: "Chennai", localities: ["Anna Nagar", "OMR (Old Mahabalipuram Rd)", "Adyar", "Besant Nagar", "Velachery", "T. Nagar", "ECR", "Porur", "Nungambakkam"] },
      { name: "Coimbatore", localities: ["RS Puram", "Peelamedu", "Gandhipuram", "Race Course", "Saravanampatti"] },
      { name: "Madurai", localities: ["KK Nagar", "Anna Nagar", "SS Colony"] },
      { name: "Tiruchirappalli", localities: ["Thillai Nagar", "KK Nagar"] }
    ]
  },
  {
    name: "Telangana",
    code: "TS",
    type: "State",
    cities: [
      { name: "Hyderabad", localities: ["Gachibowli", "HITEC City", "Jubilee Hills", "Banjara Hills", "Kondapur", "Madhapur", "Financial District", "Kokapet", "Kukatpally"] },
      { name: "Warangal", localities: ["Hanamkonda", "Kazipet", "Subedari"] }
    ]
  },
  {
    name: "Tripura",
    code: "TR",
    type: "State",
    cities: [
      { name: "Agartala", localities: ["Kunjaban", "Banamalipur", "Radhanagar"] }
    ]
  },
  {
    name: "Uttar Pradesh",
    code: "UP",
    type: "State",
    cities: [
      { name: "Noida", localities: ["Sector 62", "Sector 150", "Noida Expressway", "Sector 137", "Sector 78", "Sector 44"] },
      { name: "Greater Noida", localities: ["Pari Chowk", "Sector Alpha", "Techzone 4", "Omega 1"] },
      { name: "Lucknow", localities: ["Gomti Nagar", "Hazratganj", "Indira Nagar", "Aliganj", "Vibhuti Khand", "Shaheed Path"] },
      { name: "Kanpur", localities: ["Civil Lines", "Swaroop Nagar", "Kakadeo"] },
      { name: "Varanasi", localities: ["Sigra", "Cantt", "Lanka", "Shivpur"] },
      { name: "Agra", localities: ["Tajganj", "Fatehabad Road", "Dayalbagh"] },
      { name: "Prayagraj", localities: ["Civil Lines", "George Town"] },
      { name: "Ghaziabad", localities: ["Indirapuram", "Vaishali", "Raj Nagar Extension", "Vasundhara"] }
    ]
  },
  {
    name: "Uttarakhand",
    code: "UK",
    type: "State",
    cities: [
      { name: "Dehradun", localities: ["Rajpur Road", "Sahastradhara Road", "Vasant Vihar", "GMS Road", "Chakrata Road"] },
      { name: "Haridwar", localities: ["Ranipur More", "Shivalik Nagar"] },
      { name: "Rishikesh", localities: ["Tapovan", "Muni Ki Reti"] }
    ]
  },
  {
    name: "West Bengal",
    code: "WB",
    type: "State",
    cities: [
      { name: "Kolkata", localities: ["New Town", "Salt Lake (Bidhannagar)", "Ballygunge", "Alipore", "Rajarhat", "Jadavpur", "Gariahat", "EM Bypass", "Park Street"] },
      { name: "Howrah", localities: ["Shibpur", "Bally", "Liluah"] },
      { name: "Siliguri", localities: ["Sevoke Road", "Matigara", "Pradhan Nagar"] }
    ]
  }
];

export const UNION_TERRITORIES = [
  {
    name: "Delhi (NCR)",
    code: "DL",
    type: "Union Territory",
    cities: [
      { name: "New Delhi", localities: ["South Extension", "Vasant Vihar", "Greater Kailash", "Dwarka", "Rohini", "Connaught Place", "Hauz Khas", "Saket", "Janakpuri"] },
      { name: "North Delhi", localities: ["Civil Lines", "Model Town", "Pitampura"] },
      { name: "East Delhi", localities: ["Mayur Vihar", "Preet Vihar", "Laxmi Nagar"] },
      { name: "West Delhi", localities: ["Rajouri Garden", "Punjabi Bagh", "Paschim Vihar"] }
    ]
  },
  {
    name: "Chandigarh",
    code: "CH",
    type: "Union Territory",
    cities: [
      { name: "Chandigarh", localities: ["Sector 17", "Sector 35", "Sector 8", "Sector 9", "Sector 43", "Manimajra"] }
    ]
  },
  {
    name: "Jammu & Kashmir",
    code: "JK",
    type: "Union Territory",
    cities: [
      { name: "Srinagar", localities: ["Rajbagh", "Lal Chowk", "Hyderpora", "Sanat Nagar"] },
      { name: "Jammu", localities: ["Gandhi Nagar", "Trikuta Nagar", "Channi Himmat"] }
    ]
  },
  {
    name: "Ladakh",
    code: "LA",
    type: "Union Territory",
    cities: [
      { name: "Leh", localities: ["Main Bazar", "Choglamsar", "Skara"] }
    ]
  },
  {
    name: "Puducherry",
    code: "PY",
    type: "Union Territory",
    cities: [
      { name: "Puducherry", localities: ["White Town", "Lawspet", "Auroville Road", "Muthialpet"] }
    ]
  },
  {
    name: "Andaman & Nicobar Islands",
    code: "AN",
    type: "Union Territory",
    cities: [
      { name: "Port Blair", localities: ["Aberdeen Bazar", "Dollygunj", "Garacharma"] }
    ]
  },
  {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    code: "DN",
    type: "Union Territory",
    cities: [
      { name: "Daman", localities: ["Nani Daman", "Moti Daman"] },
      { name: "Silvassa", localities: ["Tokarkhada", "Samarvarni"] }
    ]
  },
  {
    name: "Lakshadweep",
    code: "LD",
    type: "Union Territory",
    cities: [
      { name: "Kavaratti", localities: ["Main Island", "Beach Road"] }
    ]
  }
];

export const ALL_REGIONS = [
  ...INDIAN_STATES,
  ...UNION_TERRITORIES
];

export const POPULAR_INDIAN_CITIES = [
  {
    name: "Mumbai",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    listingCount: "1,420+",
    startingPrice: "₹1.10 Cr",
    tag: "Financial Capital",
    popularAreas: ["Worli", "Bandra", "Powai", "Andheri"]
  },
  {
    name: "Bengaluru",
    state: "Karnataka",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    listingCount: "1,850+",
    startingPrice: "₹75 Lakh",
    tag: "Silicon Valley of India",
    popularAreas: ["Whitefield", "Indiranagar", "HSR Layout", "Koramangala"]
  },
  {
    name: "Delhi (NCR)",
    state: "Delhi (NCR)",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    listingCount: "2,100+",
    startingPrice: "₹65 Lakh",
    tag: "Capital Territory",
    popularAreas: ["South Ext", "Gurugram", "Noida Expway", "Dwarka"]
  },
  {
    name: "Pune",
    state: "Maharashtra",
    image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
    listingCount: "980+",
    startingPrice: "₹52 Lakh",
    tag: "Oxford of the East",
    popularAreas: ["Koregaon Park", "Baner", "Wakad", "Hinjawadi"]
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    listingCount: "1,150+",
    startingPrice: "₹68 Lakh",
    tag: "Cyberabad",
    popularAreas: ["Gachibowli", "HITEC City", "Jubilee Hills", "Kokapet"]
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    listingCount: "740+",
    startingPrice: "₹58 Lakh",
    tag: "Gateway of South India",
    popularAreas: ["Anna Nagar", "OMR", "Adyar", "Besant Nagar"]
  },
  {
    name: "Ahmedabad",
    state: "Gujarat",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    listingCount: "630+",
    startingPrice: "₹45 Lakh",
    tag: "Heritage Hub",
    popularAreas: ["SG Highway", "Prahlad Nagar", "Bodakdev", "Bopal"]
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    listingCount: "510+",
    startingPrice: "₹42 Lakh",
    tag: "City of Joy",
    popularAreas: ["New Town", "Salt Lake", "Ballygunge", "Alipore"]
  }
];

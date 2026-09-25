/**
 * Language Detector & Conversational Responder for English & Hinglish
 * Hinglish = Hindi written in Roman/Latin script (e.g. "mujhe Pune me 2BHK flat chahiye")
 */

const HINGLISH_TOKENS = new Set([
  'chahiye', 'hai', 'hain', 'kya', 'me', 'mein', 'ko', 'se', 'ka', 'ki', 'ke',
  'batao', 'dikhao', 'dekhna', 'ghar', 'kitna', 'kitne',
  'kam', 'jyada', 'acha', 'accha', 'achha', 'sasta', 'pe', 'par',
  'nahi', 'nahin', 'hota', 'hoti', 'karte', 'kare', 'kaise', 'kab', 'kaha', 'kahan',
  'mera', 'meri', 'mere', 'aap', 'tum', 'bhai', 'ji', 'namaste', 'shukriya',
  'dhanyawad', 'kiraya', 'kharidna', 'bechna', 'mujhe', 'humko', 'kuch',
  'kripya', 'mil', 'sakta', 'sakti', 'hoga', 'hogi', 'paas', 'thoda', 'theek',
  'paisa', 'paise', 'bhejo', 'karo', 'baat', 'karni', 'bhi', 'wala', 'wali',
  'ho', 'haal', 'kaisa', 'kaisi', 'bataiye', 'aaj', 'kal', 'din', 'tarikh', 'tareekh',
  'taarikh', 'saal', 'samay', 'waqt', 'mausam', 'barish', 'garmi', 'sardi', 'thand',
  'alvida', 'badhiya', 'badiya', 'chal', 'raha', 'rahi', 'rahe', 'suno', 'bhaiya',
  'dost', 'sab', 'bolo', 'sunao', 'biryani', 'khana', 'banaye', 'sawaal', 'sawal',
  'madad', 'batayein', 'dekh', 'janamdin', 'shubh', 'arre', 'waah', 'toh', 'aur',
  'agar', 'kar', 'lo', 'karna', 'mazak', 'chalta', 'gaya', 'gayi', 'hasi', 'acche'
]);

export function detectLanguage(text) {
  if (!text || typeof text !== 'string') return 'en';
  
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) return 'en';

  let hinglishCount = 0;
  for (const word of words) {
    if (HINGLISH_TOKENS.has(word)) {
      hinglishCount++;
    }
  }

  // If even 15% of the query contains prominent Hindi Roman words or >= 2 tokens, classify as Hinglish
  const ratio = hinglishCount / words.length;
  if (hinglishCount >= 2 || (words.length <= 4 && hinglishCount >= 1) || ratio >= 0.2) {
    return 'hinglish';
  }
  
  return 'en';
}

/**
 * Intelligent AI Real Estate Response Generator
 * Generates matching English or Hinglish replies, filters properties, handles FAQs, leads, and callbacks.
 */
export function generateChatbotResponse({
  userMessage,
  language,
  properties = [],
  onCaptureLead = null
}) {
  const cleanMsg = userMessage.toLowerCase();
  const isHinglish = language === 'hinglish';

  // 1. Check for Contact / Agent / Callback request
  if (
    cleanMsg.includes('contact') ||
    cleanMsg.includes('agent') ||
    cleanMsg.includes('call me') ||
    cleanMsg.includes('call karo') ||
    cleanMsg.includes('baat karni') ||
    cleanMsg.includes('phone') ||
    cleanMsg.includes('number') ||
    cleanMsg.includes('whatsapp')
  ) {
    return {
      text: isHinglish
        ? "Haanji bilkul! Aap humare INDSTATE verified real estate advisors se direct connect kar sakte hain. Aap apna mobile number (+91) aur city share kar dijiye, ya niche diye gaye button se seedhe WhatsApp par baat kijiye."
        : "Certainly! You can connect directly with an INDSTATE certified property consultant. Please share your 10-digit mobile number and preferred city, or click below to connect on WhatsApp directly.",
      type: 'lead_prompt',
      action: 'show_contact_card'
    };
  }

  // 2. RERA Queries
  if (cleanMsg.includes('rera')) {
    return {
      text: isHinglish
        ? "INDSTATE par listed sabhi properties 100% RERA compliant hoti hain! RERA Act 2016 ke tahat builder ko Carpet Area, delivery date aur approvals verify karwane hote hain. Aap kisi bhi listing par uska official RERA Registration Number (jaise MahaRERA ya Karnataka RERA) verify kar sakte hain."
        : "Under the Real Estate (Regulation and Development) Act, 2016, all featured INDSTATE properties have mandatory RERA registration numbers. RERA mandates pricing strictly on Carpet Area (not super built-up) and protects buyers against project delays with strict escrow mechanisms.",
      type: 'faq',
      quickReplies: isHinglish 
        ? ["Carpet area kya hai?", "RERA complaint kaise kare?", "Verified flats dikhao"]
        : ["What is Carpet Area?", "Check RERA status", "View verified flats"]
    };
  }

  // 3. Brokerage / Listing Query
  if (
    cleanMsg.includes('brokerage') ||
    cleanMsg.includes('commission') ||
    cleanMsg.includes('charges') ||
    cleanMsg.includes('list property') ||
    cleanMsg.includes('ghar bechna') ||
    cleanMsg.includes('rent pe dena')
  ) {
    return {
      text: isHinglish
        ? "INDSTATE par property list karna bilkul FREE hai! Individual property owners aur builders ke liye 0% brokerage direct-buyer options bhi available hain. Agents ke standard brokerage norms Indian market me 1% se 2% tak hote hain."
        : "Listing your property on INDSTATE is completely FREE for owners! We offer direct Zero-Brokerage options for owners and tenants. For assisted agent deals, standard market facilitation fees apply with total upfront transparency.",
      type: 'faq',
      action: 'navigate_add_property'
    };
  }

  // 4. EMI / Loan / Bank interest rate queries
  if (cleanMsg.includes('emi') || cleanMsg.includes('loan') || cleanMsg.includes('byaj') || cleanMsg.includes('interest')) {
    return {
      text: isHinglish
        ? "Indian Banks me current home loan interest rates 8.40% se shuru hote hain (jaise SBI @ 8.40%, HDFC @ 8.50%, ICICI @ 8.60%). Agar aap ₹50 Lakh ka loan 20 saal ke liye lete hain 8.5% par, toh aapki monthly EMI lagbhag ₹43,391 aayegi. Hamara interactive EMI Calculator try kijiye!"
        : "Current home loan interest rates from major Indian banks start at 8.40% per annum (SBI: 8.40%, HDFC: 8.50%, ICICI: 8.60%). For a ₹50 Lakh loan for 20 years at 8.5%, your monthly EMI is approximately ₹43,391. Would you like to open our dedicated EMI & Eligibility Calculator?",
      type: 'emi',
      action: 'navigate_calculator'
    };
  }

  // 5. Property Search in Chat
  // Extract City, BHK, Budget
  const cities = ['mumbai', 'pune', 'bengaluru', 'bangalore', 'delhi', 'noida', 'gurugram', 'hyderabad', 'chennai', 'kolkata', 'ahmedabad', 'jaipur', 'goa', 'lucknow', 'kochi', 'chandigarh'];
  const matchedCity = cities.find(c => cleanMsg.includes(c));
  
  let bhkMatch = null;
  if (cleanMsg.includes('1bhk') || cleanMsg.includes('1 bhk')) bhkMatch = 1;
  else if (cleanMsg.includes('2bhk') || cleanMsg.includes('2 bhk')) bhkMatch = 2;
  else if (cleanMsg.includes('3bhk') || cleanMsg.includes('3 bhk')) bhkMatch = 3;
  else if (cleanMsg.includes('4bhk') || cleanMsg.includes('4 bhk')) bhkMatch = 4;

  let isRent = cleanMsg.includes('rent') || cleanMsg.includes('kiraya');

  // Filter properties
  let matching = properties.filter(p => {
    let ok = true;
    if (matchedCity) {
      const pCity = p.city.toLowerCase();
      if (!pCity.includes(matchedCity) && !(matchedCity === 'bangalore' && pCity.includes('bengaluru'))) {
        ok = false;
      }
    }
    if (bhkMatch && p.bhk !== bhkMatch) {
      ok = false;
    }
    if (isRent && p.purpose !== 'Rent') {
      ok = false;
    }
    return ok;
  });

  if (matching.length > 0) {
    const topResults = matching.slice(0, 3);
    return {
      text: isHinglish
        ? `Ye lijiye! Aapke search ke hisaab se mujhe ${matchedCity ? matchedCity.toUpperCase() : 'top locations'} me ${matching.length} verified properties mili hain:`
        : `Found ${matching.length} verified properties ${matchedCity ? `in ${matchedCity.toUpperCase()}` : 'across prime locations'} matching your criteria:`,
      type: 'properties',
      properties: topResults,
      quickReplies: isHinglish
        ? ["Site visit schedule karo", "Filters aur badhao", "Agent se baat karni hai"]
        : ["Schedule Site Visit", "Refine Search", "Contact Listing Agent"]
    };
  }

  // 6. Generic greetings & fallback
  if (cleanMsg.includes('hi') || cleanMsg.includes('hello') || cleanMsg.includes('namaste') || cleanMsg.includes('hey')) {
    return {
      text: isHinglish
        ? "Namaste! Main INDSTATE ka AI Property Assistant hu. Main aapko India ke kisi bhi city me verified flats, villas, plots dhoondhne, EMI calculate karne aur RERA details jaan ne me madad kar sakta hu. Aaj aap kis city ya budget me property dekh rahe hain?"
        : "Hello and welcome to INDSTATE — India's Trusted Property Marketplace! I can help you discover RERA-verified homes across 28 Indian states, calculate your home loan EMI, or book a private site visit. How may I assist your property search today?",
      type: 'greeting',
      quickReplies: isHinglish
        ? ["Mumbai me 2BHK flat", "Bengaluru me Villa", "Home loan EMI kitni hogi?", "RERA Verified kya hai?"]
        : ["2 BHK in Mumbai", "Villas in Bengaluru", "Calculate Home Loan EMI", "Explore RERA Projects"]
    };
  }

  // Default response
  return {
    text: isHinglish
      ? "Maine aapki baat note kar li hai. Kya aap mujhe thoda aur detail bata sakte hain — jaise preferred city (Mumbai, Pune, Bengaluru, Delhi NCR etc.), budget (Lakhs/Crores me), ya property type (Buy/Rent/PG)?"
      : "I understand! Could you share a few more specifics — such as your preferred city (e.g. Mumbai, Bengaluru, Pune, Delhi NCR), budget in ₹ Lakhs or Crores, or whether you are looking to Buy, Rent, or Invest?",
    type: 'prompt',
    quickReplies: isHinglish
      ? ["Buy Flats in Pune", "Rent in Bengaluru", "Office Space", "Talk to Expert"]
      : ["Buy Apartments", "Rent in Bengaluru", "Commercial Properties", "Speak to Advisor"]
  };
}

import { detectLanguage } from './languageDetector.js';
import { formatIndianPrice } from './currencyFormatter.js';

/**
 * Enhanced Conversational & Problem-Solving RAG Engine
 * Acts as an experienced senior real estate customer-care advisor and knowledgeable friend:
 * - Proactively clarifies ambiguous problems with diagnostic questions and structured chips
 * - Retains conversational context & memory (city, BHK, previous topics, failed attempts)
 * - Empathizes with user distress and delivers structured step-by-step resolution paths
 * - Detects frustration or "didn't work" signals to smoothly escalate to human advisors
 * - Resolves multi-part queries in a single comprehensive answer
 * - Speaks in warm, natural English and Hinglish (no stiff corporate jargon)
 */

// Common English & Hinglish Stopwords to filter out noise
const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'of', 'to', 'for',
  'with', 'and', 'or', 'it', 'this', 'that', 'i', 'you', 'me', 'my', 'we', 'our',
  'kya', 'hai', 'hain', 'ka', 'ki', 'ke', 'ko', 'se', 'me', 'mein', 'par', 'pe',
  'aur', 'bhi', 'kuch', 'batao', 'dekhna', 'chahiye', 'kripya', 'pls', 'please'
]);

// Real Estate Domain Synonyms & Bilingual Expansion
const SYNONYMS = {
  'delay': ['possession', 'late', 'deri', 'delayed', 'compensation', 'section 18'],
  'deri': ['delay', 'late', 'possession', 'compensation'],
  'late': ['delay', 'possession', 'deri'],
  'deposit': ['security', 'refund', 'advance', 'bayana', 'token'],
  'token': ['advance', 'bayana', 'booking', 'deposit', 'refund'],
  'bayana': ['token', 'advance', 'booking', 'deposit'],
  'refund': ['cancel', 'cancellation', 'wapas', 'money back', 'deposit'],
  'wapas': ['refund', 'cancel', 'return'],
  'loan': ['emi', 'finance', 'interest', 'karz', 'cibil', 'eligibility', 'bank', 'rejection'],
  'emi': ['loan', 'calculator', 'interest', 'monthly'],
  'carpet': ['usable', 'actual', 'builtup', 'super', 'loading', 'area', 'sqft'],
  'loading': ['super', 'carpet', 'difference', 'builtup'],
  'rent': ['kiraya', 'tenant', 'landlord', 'kirayedar', 'agreement', 'lease'],
  'kiraya': ['rent', 'rental', 'tenant', 'agreement'],
  'rera': ['verified', 'legal', 'registration', 'complaint', 'authority', 'maharera', 'up rera'],
  'tax': ['gst', 'stamp', 'duty', 'registration', 'charges', 'kharcha'],
  'stamp': ['duty', 'registration', 'registry', 'tax', 'legal'],
  'registry': ['stamp duty', 'registration', 'possession', 'deed'],
  'brokerage': ['commission', 'dalali', 'fee', 'charge', 'zero brokerage'],
  'dalali': ['brokerage', 'commission', 'fees', 'zero brokerage'],
  'pg': ['coliving', 'co-living', 'hostel', 'sharing', 'paying guest'],
  'inspection': ['site visit', 'visit', 'check', 'escort', 'tour'],
  'builder': ['developer', 'builder delay', 'possession', 'project', 'construction'],
  'agreement': ['contract', 'sale deed', 'registered', 'mou', 'lease agreement'],
  'apartment': ['property', 'flat', 'listing', 'ghar', 'home'],
  'flat': ['property', 'apartment', 'listing', 'ghar', 'home'],
  'police': ['verification', 'tenant verification', 'police verification', 'safety', 'tenant'],
  'list': ['post property', 'list property', 'sell property', 'upload', 'listing'],
  'listing': ['list property', 'post property', 'sell property', 'add property'],
  'bechna': ['sell', 'list', 'post property', 'ghar bechna']
};

/**
 * Expands clean tokens with domain synonyms to maximize semantic recall
 */
function expandSynonyms(tokens) {
  const expanded = [...tokens];
  for (const token of tokens) {
    const syns = SYNONYMS[token];
    if (syns) {
      expanded.push(...syns);
    }
  }
  return expanded;
}

/**
 * Tokenizes text into unigrams, bigrams, and synonym-expanded terms
 */
export function tokenizeAndVectorize(text) {
  if (!text || typeof text !== 'string') return {};

  const clean = text
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOPWORDS.has(w));

  const expandedTokens = expandSynonyms(clean);
  const vector = {};

  // Unigram weights
  for (const word of expandedTokens) {
    vector[word] = (vector[word] || 0) + 1;
  }

  // Bigram weights
  for (let i = 0; i < clean.length - 1; i++) {
    const bigram = `${clean[i]} ${clean[i + 1]}`;
    vector[bigram] = (vector[bigram] || 0) + 2.5;
  }

  return vector;
}

/**
 * Calculates Cosine Similarity between two term vectors
 */
export function cosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (const key in vecA) {
    normA += vecA[key] * vecA[key];
    if (vecB[key]) {
      dotProduct += vecA[key] * vecB[key];
    }
  }

  for (const key in vecB) {
    normB += vecB[key] * vecB[key];
  }

  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

/**
 * Pre-vectorizes a knowledge base entry across questions, tags, and keywords
 */
export function buildEntryVector(entry) {
  const combinedText = `
    ${entry.questionEn || ''} 
    ${entry.questionHi || ''} 
    ${entry.category || ''} 
    ${(entry.tags || []).join(' ')} 
    ${(entry.keywords || []).join(' ')}
  `;
  return tokenizeAndVectorize(combinedText);
}

/**
 * Semantic Vector Search over Knowledge Base
 */
export function searchKnowledgeBase(query, knowledgeBase, threshold = 0.20) {
  const queryVec = tokenizeAndVectorize(query);
  const scored = [];

  for (const entry of knowledgeBase) {
    const entryVec = entry._vector || buildEntryVector(entry);
    const score = cosineSimilarity(queryVec, entryVec);

    if (score > 0) {
      scored.push({ entry, score });
    }
  }

  scored.sort((a, b) => b.score - a.score);

  if (scored.length > 0 && scored[0].score >= threshold) {
    return {
      bestMatch: scored[0].entry,
      score: scored[0].score,
      candidates: scored.slice(0, 3)
    };
  }

  return { bestMatch: null, score: scored[0]?.score || 0, candidates: [] };
}

/**
 * Known Indian Metros and Tier-1 Cities
 */
const KNOWN_CITIES = [
  'mumbai', 'pune', 'bangalore', 'bengaluru', 'hyderabad', 'delhi', 
  'noida', 'gurugram', 'gurgaon', 'goa', 'chennai', 'kolkata', 
  'ahmedabad', 'jaipur', 'lucknow', 'chandigarh', 'patna'
];

/**
 * Extracts entities (city, BHK, price, issue history) from conversation history
 */
export function extractEntitiesFromHistory(conversationHistory = [], currentQuery = '') {
  const combinedText = [
    ...conversationHistory.map(m => m.text || ''),
    currentQuery
  ].join(' ').toLowerCase();

  const entities = {
    city: null,
    bhk: null,
    problemContext: null,
    hasPriorBotSuggestion: false
  };

  // 1. Detect City
  for (const city of KNOWN_CITIES) {
    if (combinedText.includes(city)) {
      // Normalize Bangalore / Gurgaon
      if (city === 'bangalore') entities.city = 'Bengaluru';
      else if (city === 'gurgaon') entities.city = 'Gurugram';
      else entities.city = city.charAt(0).toUpperCase() + city.slice(1);
      break;
    }
  }

  // 2. Detect BHK
  const bhkMatch = combinedText.match(/\b([1-5])\s*bhk\b/i);
  if (bhkMatch) {
    entities.bhk = `${bhkMatch[1]} BHK`;
  } else if (combinedText.includes('villa')) {
    entities.bhk = 'Villa';
  } else if (combinedText.includes('plot')) {
    entities.bhk = 'Plot';
  }

  // 3. Detect Prior Bot Assistance
  const recentBotMessages = conversationHistory.filter(m => m.sender === 'bot');
  if (recentBotMessages.length > 0) {
    entities.hasPriorBotSuggestion = true;
    entities.lastBotCategory = recentBotMessages[recentBotMessages.length - 1].category;
  }

  return entities;
}

/**
 * Detects if the user is expressing frustration or reporting that a previous fix failed
 */
function detectFrustrationOrFailure(cleanMsg, conversationHistory = []) {
  const failurePatterns = [
    /\b(didn'?t work|did not work|not working|failed|useless|nahi hua|kuch nahi hua|kaam nahi kiya|nahi chala|try kiya tha)\b/i,
    /\b(refused again|they refused|mana kar diya|reject ho gaya|fir se reject|bank ne mana|builder ne mana)\b/i,
    /\b(fraud|scam|dhokha|cheated|worst service|bakwaas|pareshan|troubled|stuck|help nahi mil rahi)\b/i,
    /\b(still waiting|still not resolved|no response|no callback|kisi ne call nahi kiya)\b/i
  ];

  for (const pattern of failurePatterns) {
    if (pattern.test(cleanMsg)) {
      return true;
    }
  }

  return false;
}

/**
 * Detects whether the user is stating an ambiguous problem that needs diagnostic questions
 */
function detectAmbiguousProblem(cleanMsg, isHinglish, entities) {
  // Case 1: Loan Rejection or Ambiguous Loan Issue
  if (
    (/\b(loan|home loan|cibil|emi)\b/i.test(cleanMsg)) &&
    (/\b(problem|issue|reject|rejection|pareshani|dikkat|nahi mil raha|atack|atki)\b/i.test(cleanMsg)) &&
    !cleanMsg.includes('cibil score 750') &&
    !cleanMsg.includes('self-employed')
  ) {
    const text = isHinglish
      ? `Arey, ye sunke chinta hui — home loan me dikkat aana kaafi stressful hota hai. Par ghabraiye mat, aksar 70% cases me paperwork, co-applicant add karke ya CIBIL dispute rectify karke loan approve ho jata hai.\n\nAapko exact step-by-step solution batane ke liye, kya aap thoda clarify karenge:\n1. **Kaunse bank se apply kiya tha** (SBI, HDFC, ICICI ya koi NBFC)?\n2. **Bank ne rejection ya delay ka kya reason bataya?** (Low CIBIL score, income/ITR proof, ya property valuation clear nahi tha)?\n\nAap niche diye gaye common options me se bhi chun sakte hain:`
      : `I'm really sorry to hear that — running into a roadblock with home loan approval can be genuinely stressful. But don't worry, in over 70% of cases, issues can be resolved by adding a co-applicant, fixing a bureau reporting glitch, or selecting a lender that fits your income profile.\n\nTo give you the exact resolution path, could you clarify:\n1. **Which bank or lender did you apply with** (e.g. SBI, HDFC, ICICI, or an NBFC)?\n2. **What primary reason was cited by the loan officer?** (Low CIBIL score, ITR/income proofs, or property technical valuation)?\n\nYou can also tap the closest option below:`;

    return {
      text,
      type: 'diagnostic_clarification',
      category: 'Home Loans & Finance',
      language: isHinglish ? 'hinglish' : 'en',
      quickReplies: isHinglish
        ? ["CIBIL score kam hai", "Income / ITR issue", "Property approval pending", "Loan Advisor se baat karein"]
        : ["Low CIBIL Score", "Income / ITR Issue", "Property Valuation", "Connect with Loan Advisor"]
    };
  }

  // Case 2: Builder Delay / Delayed Possession Problem
  if (
    (/\b(builder|possession|handover|flat delay)\b/i.test(cleanMsg)) &&
    (/\b(delay|late|nahi de raha|deri|time par nahi|stuck|delaying)\b/i.test(cleanMsg)) &&
    !cleanMsg.includes('section 18')
  ) {
    const cityMention = entities.city ? ` in ${entities.city}` : '';
    const text = isHinglish
      ? `Ye sunke bilkul accha nahi laga — builder ka possession delay karna home buyers ke sath sabse badi pareshani hoti hai. Par kanoon poori tarah aapke sath hai: RERA Section 18 ke tehat builder ko delay ke har mahine ke liye State Bank of India ke highest lending rate + 2% ka interest compensation dena mandatory hai.\n\nAapko sahi legal recourse batane ke liye, kya aap batayenge:\n1. **Promised date se kitne mahine delay ho chuka hai?**\n2. **Kya builder ne koi written notice ya force majeure letter diya hai?**\n\nYahan aapke liye 3 immediate options hain:`
      : `I'm really sorry to hear that — unexpected possession delays${cityMention} are deeply frustrating. However, Indian law is firmly on your side: Under Section 18 of RERA, builders are legally mandated to pay you monthly interest compensation (typically SBI MCLR + 2%) for every single month of delay until handover.\n\nTo guide your exact recourse, could you share:\n1. **How many months past the promised agreement date has it been?**\n2. **Did the builder send a formal letter citing force majeure, or are they simply non-responsive?**\n\nHere are your 3 immediate resolution steps:`;

    return {
      text,
      type: 'diagnostic_clarification',
      category: 'Legal & RERA',
      language: isHinglish ? 'hinglish' : 'en',
      quickReplies: isHinglish
        ? ["1 se 6 mahine delay", "1 saal se zyada delay", "Interest claim karna hai", "RERA complaint file karein"]
        : ["Delayed by 1-6 months", "Delayed by 1+ years", "Claim Interest Penalty", "File RERA Complaint"]
    };
  }

  // Case 3: Token Money / Deposit Withheld Dispute
  if (
    (/\b(token|bayana|deposit|security deposit)\b/i.test(cleanMsg)) &&
    (/\b(nahi de raha|wapas nahi|deducted|refused|fas gaya|kaat liya|dispute)\b/i.test(cleanMsg))
  ) {
    const text = isHinglish
      ? `Ye bilkul galat baat hai — bina legal proof ke landlord ya seller aapka security deposit ya token amount nahi rok sakta. Chaliye isse step-by-step sort karte hain.\n\nChaliye dekhein aapke paas kya evidence hai:\n• **Signed Rent Agreement / Booking Receipt**?\n• **Flat handover ke waqt ki photos/videos ya inspection sign-off**?\n\nAgar haan, toh yahan 3 solid recourse options hain:\n1. **Formal Legal Notice**: Advocate ke zariye 15-day formal notice bhejna jisse 85% cases me refund aa jata hai.\n2. **Rent Authority Dispute**: State Tenancy Authority me summary complaint file karein.\n3. **Police Breach of Trust (Section 406 IPC)**: Illegal withholding par complaint.`
      : `That is completely unacceptable — landlords or sellers cannot arbitrarily withhold your security deposit or refundable token bayana without verified contractual proof. Let's get this sorted step-by-step.\n\nLet's check if you have these 2 records ready:\n• **Signed agreement or digital token receipt**?\n• **Clear handover photos/videos or inspection sign-off**?\n\nHere is your immediate 3-step action plan:\n1. **Formal Advocate Notice**: A formal 15-day notice with reference to Section 406 IPC (Criminal Breach of Trust) resolves 85% of deposit withholding without court litigation.\n2. **Rent Court Dispute**: File a summary complaint under your state's Tenancy Act.\n3. **Advisor Intervention**: We can have an INDSTATE legal associate review your agreement today.`;

    return {
      text,
      type: 'diagnostic_clarification',
      category: 'Renting a Property',
      language: isHinglish ? 'hinglish' : 'en',
      quickReplies: isHinglish
        ? ["Agreement mere paas hai", "Legal notice bhejna hai", "Rent Court dispute", "Advisor se baat karein"]
        : ["I have signed agreement", "Send Legal Notice", "Rent Authority dispute", "Talk to Legal Advisor"]
    };
  }

  return null;
}

/**
 * Handles multi-part queries (e.g. loan interest AND stamp duty in Pune)
 */
function handleMultiPartQuery(userMessage, knowledgeBase, isHinglish, entities) {
  const clean = userMessage.toLowerCase();
  const hasAnd = clean.includes(' aur ') || clean.includes(' and ') || clean.includes(' plus ') || clean.includes(' also ');
  
  if (!hasAnd) return null;

  // Check if query spans multiple distinct domains
  const wantsLoan = clean.includes('loan') || clean.includes('emi') || clean.includes('interest') || clean.includes('cibil');
  const wantsStamp = clean.includes('stamp') || clean.includes('duty') || clean.includes('tax') || clean.includes('registry');
  const wantsRera = clean.includes('rera') || clean.includes('verified') || clean.includes('delay');

  if (wantsLoan && wantsStamp) {
    const cityText = entities.city ? `**${entities.city}**` : (isHinglish ? 'aapke state' : 'your state');
    const text = isHinglish
      ? `Achha sawaal — aapne dono ahem financial aspects poocha hai. Chaliye dono ko clear kar deta hoon:\n\n` +
        `• **1. Home Loan Interest & Rates:**\n` +
        `Currently, major Indian banks (SBI, HDFC, ICICI) offer home loan interest rates between **8.40% to 8.75% p.a.** (floating, linked to RBI's Repo Rate). Agar aapka CIBIL score 750+ hai toh aapko lowest 8.40% rate milta hai.\n\n` +
        `• **2. Stamp Duty & Registration (${cityText}):**\n` +
        (entities.city && entities.city.toLowerCase() === 'pune' 
          ? `Pune (Maharashtra) me residential property ke liye standard stamp duty **6% se 7%** hoti hai (5% base + 1% local body tax + metro cess) aur registration charges 1% (max ₹30,000) hote hain.\n\n`
          : `Stamp duty aamtaur par **5% se 7%** hoti hai (state ke anusaar) aur ₹30,000 ya 1% registration fee lagti hai. Women buyers ke liye kai states me 1% concession milta hai.\n\n`) +
        `Kya aap specific budget ke liye exact monthly EMI aur stamp duty calculation dekhna chahte hain?`
      : `Great question — you've asked about both primary financial costs upfront. Let me break both down clearly for you:\n\n` +
        `• **1. Home Loan Interest Rates:**\n` +
        `Top national lenders (SBI, HDFC, ICICI) are currently offering home loans starting at **8.40% to 8.75% p.a.** (floating, repo-rate linked). A CIBIL score of 750+ qualifies you for the bottom-tier 8.40% slab.\n\n` +
        `• **2. Stamp Duty & Registration (${cityText}):**\n` +
        (entities.city && entities.city.toLowerCase() === 'pune'
          ? `For Pune (Maharashtra), stamp duty is standard **6% to 7%** (5% base + 1% local body tax + 1% metro cess), plus a flat ₹30,000 registration fee for properties above ₹30 Lakhs.\n\n`
          : `Stamp duty typically ranges from **5% to 7%** of agreement value depending on the state, with registration capped at ₹30,000 or 1%. Female owners frequently receive a 1% state duty concession.\n\n`) +
        `Would you like me to calculate the exact monthly EMI and total closing costs for a specific property price?`;

    return {
      text,
      type: 'multipart_answer',
      category: 'Home Loans & Finance',
      language: isHinglish ? 'hinglish' : 'en',
      quickReplies: isHinglish
        ? ["EMI calculate karein", "Loan eligibility check", "RERA verified properties", "Talk to Advisor"]
        : ["Calculate EMI", "Check Loan Eligibility", "Browse Verified Homes", "Connect with Advisor"]
    };
  }

  return null;
}

/**
 * Transforms a raw knowledge base answer into a warm, friend-like senior advisor voice
 */
function formatWarmFriendAnswer(rawAnswer, match, query, entities, isHinglish) {
  // Conversational openings (friendly, warm, acknowledging)
  const hinglishOpenings = [
    "Achha sawaal — chaliye main aapko iska exact aur verified hisaab batata hoon:\n\n",
    "Bilkul samajh sakta hoon — ghar lene me ye point sabse ahem hota hai. Main clear karta hoon:\n\n",
    "Aapne bilkul sahi waqt par ye poocha! Iska clear rule ye hai:\n\n",
    "Haanji bilkul, main step-by-step samjha deta hoon taaki aapka ek rupaye ka bhi loss na ho:\n\n"
  ];

  const englishOpenings = [
    "Great question — let me break this down clearly so you know exactly where you stand:\n\n",
    "Totally understand — buying or renting a home is a big step, so getting this right is crucial:\n\n",
    "Good thing you're checking this upfront! Here is the verified reality:\n\n",
    "Certainly! Let me walk you through the exact protocol step-by-step:\n\n"
  ];

  const opening = isHinglish 
    ? hinglishOpenings[Math.floor(Math.random() * hinglishOpenings.length)]
    : englishOpenings[Math.floor(Math.random() * englishOpenings.length)];

  // Inject remembered city if relevant and not already mentioned in raw answer
  let contextSnippet = "";
  if (entities.city && !rawAnswer.toLowerCase().includes(entities.city.toLowerCase())) {
    if (match.category === 'Buying a Property' || match.category === 'Legal & RERA' || match.category === 'Renting a Property') {
      contextSnippet = isHinglish 
        ? `*(Aapke **${entities.city}** ke context me bhi ye same state-verified guidelines apply hoti hain)*\n\n`
        : `*(This applies directly to verified properties in **${entities.city}** as well)*\n\n`;
    }
  }

  // Friendly conversational closing
  const closing = isHinglish
    ? `\n\nAgar kisi specific project ya situation me aur detail chahiye, toh batayein — main yahin hoon!`
    : `\n\nIf you need me to check a specific project or need further clarification, just ask — I'm right here to help!`;

  return `${opening}${contextSnippet}${rawAnswer}${closing}`;
}

/**
 * Detects small-talk / greetings / gratitude / farewells
 */
function handleSmallTalk(cleanMsg, isHinglish, lang) {
  // Greetings
  if (
    /^(hi|hello|hey|heya|namaste|namaskar|salaam|kem cho|kya haal|good morning|good afternoon|good evening|pranam)\b/i.test(cleanMsg)
  ) {
    return {
      text: isHinglish
        ? "Namaste! 🙏 Main aapka INDSTATE AI Property Assistant hoon. Main RERA verification, home loans, rent agreements, ya Bharat ke top shahron me verified properties dhoondhne me aapki madad kar sakta hoon. Aaj main aapki kya seva karoon?"
        : "Namaste & Hello! 🙏 I am your INDSTATE AI Property Assistant. I can help you verify RERA registration, calculate home loans, review rent agreements, or discover 100% verified properties across India. What can I help you with today?",
      type: 'small_talk',
      language: lang,
      quickReplies: isHinglish
        ? ["Buy Property", "Rent Property", "RERA verified flats", "Home Loan help"]
        : ["Buy Property", "Rent Property", "Check RERA", "Home Loan EMI"]
    };
  }

  // Gratitude / Compliments
  if (
    /^(thank you|thanks|thx|dhanyawad|shukriya|bahut badiya|awesome|great|superb|good job|helpful|bahut accha)\b/i.test(cleanMsg) ||
    cleanMsg === 'thanks' || cleanMsg === 'thank you' || cleanMsg === 'dhanyawad'
  ) {
    return {
      text: isHinglish
        ? "Aapka bahut swagat hai! 🙏 Mujhe khushi hui ki main aapki madad kar saka. Agar koi aur sawal ho ya aapko verified site visit schedule karni ho, toh zaroor batayein!"
        : "You're most welcome! 🙏 Delighted I could assist you. If you need anything else or want to schedule a verified site inspection, feel free to ask!",
      type: 'small_talk',
      language: lang,
      quickReplies: isHinglish
        ? ["Properties dikhao", "RERA Status check", "Agent se baat karo"]
        : ["Browse Properties", "Check RERA Status", "Talk to Agent"]
    };
  }

  // Farewells
  if (
    /^(bye|goodbye|alvida|see you|tata|phir milte hain)\b/i.test(cleanMsg)
  ) {
    return {
      text: isHinglish
        ? "Alvida aur aapka din shubh ho! Jab bhi aapko verified property ya real estate guidance ki zaroorat ho, INDSTATE hamesha aapke saath hai. 🙏"
        : "Goodbye and have a wonderful day! Whenever you are ready to explore verified homes or need property advice, INDSTATE is always here for you. 🙏",
      type: 'small_talk',
      language: lang,
      quickReplies: isHinglish
        ? ["Main fir aaunga", "Properties save kar lo"]
        : ["Browse Properties", "Talk to Agent"]
    };
  }

  return null;
}

/**
 * Context Augmentation for Follow-Up Queries
 */
function augmentQueryWithContext(userMessage, conversationHistory = []) {
  if (!conversationHistory || conversationHistory.length === 0) {
    return userMessage;
  }

  const clean = userMessage.toLowerCase().trim();
  const isFollowUpPattern = (
    clean.startsWith('what if') ||
    clean.startsWith('and what') ||
    clean.startsWith('what about') ||
    clean.startsWith('aur agar') ||
    clean.startsWith('aur ') ||
    clean.startsWith('how much') ||
    clean.startsWith('can i') ||
    clean.startsWith('kya isme') ||
    clean.includes('delay') ||
    clean.includes('deri') ||
    clean.includes('refund') ||
    clean.includes('this') ||
    clean.includes('ye') ||
    clean.includes('iska') ||
    clean.split(' ').length <= 4
  );

  if (!isFollowUpPattern) {
    return userMessage;
  }

  // Scan backwards through the last 3 conversation turns
  const recentTurns = conversationHistory.slice(-3);
  let contextClues = [];

  for (let i = recentTurns.length - 1; i >= 0; i--) {
    const msg = recentTurns[i];
    if (msg.category) {
      contextClues.push(msg.category);
    }
    if (msg.queryRef) {
      contextClues.push(msg.queryRef);
    }
    if (msg.sender === 'user' && msg.text) {
      contextClues.push(msg.text);
    }
  }

  if (contextClues.length > 0) {
    return `${userMessage} ${contextClues.slice(0, 2).join(' ')}`;
  }

  return userMessage;
}

/**
 * City aliases for flexible Indian metro searches
 */
const CITY_ALIASES = {
  'bangalore': 'bengaluru',
  'bengaluru': 'bengaluru',
  'mumbai': 'mumbai',
  'bombay': 'mumbai',
  'gurgaon': 'gurugram',
  'gurugram': 'gurugram',
  'delhi': 'delhi',
  'noida': 'noida',
  'pune': 'pune',
  'hyderabad': 'hyderabad',
  'kolkata': 'kolkata',
  'calcutta': 'kolkata',
  'chennai': 'chennai',
  'madras': 'chennai',
  'ahmedabad': 'ahmedabad'
};

/**
 * Finds matching properties if user query relates to specific real estate listings
 */
export function findMatchingProperties(query, properties = []) {
  if (!query || properties.length === 0) return [];
  const q = query.toLowerCase();

  const scored = properties.map(p => {
    const pCity = (p.city || '').toLowerCase();
    const cityAlias = CITY_ALIASES[pCity] || pCity;

    let score = 0;
    if (p.title && (p.title.toLowerCase().includes(q) || q.includes(p.title.toLowerCase()))) score += 10;
    if (q.includes(pCity) || q.includes(cityAlias)) score += 5;
    if (p.locality && q.includes(p.locality.toLowerCase())) score += 4;
    if (p.bhk && (q.includes(`${p.bhk}bhk`) || q.includes(`${p.bhk} bhk`))) score += 4;
    if (p.purpose && q.includes(p.purpose.toLowerCase())) score += 2;
    if (p.propertyType && q.includes(p.propertyType.toLowerCase())) score += 2;

    return { property: p, score };
  }).filter(item => item.score >= 4);

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3).map(item => item.property);
}

/**
 * Core Senior RAG Response Synthesizer
 * Generates natural, context-aware answers mirroring detected language (English vs Hinglish)
 */
export function synthesizeRAGResponse({
  userMessage,
  knowledgeBase = [],
  properties = [],
  conversationHistory = []
}) {
  const lang = detectLanguage(userMessage);
  const isHinglish = lang === 'hinglish';
  const cleanMsg = userMessage.toLowerCase().trim();

  // Extract memory entities across session
  const entities = extractEntitiesFromHistory(conversationHistory, userMessage);

  // 1. Check for Casual Small Talk (Greetings, Gratitude, Goodbyes)
  const smallTalkResponse = handleSmallTalk(cleanMsg, isHinglish, lang);
  if (smallTalkResponse) {
    return smallTalkResponse;
  }

  // 2. Frustration / "Didn't Work" / 2-Strike Failure Escalation
  const isFrustratedOrFailed = detectFrustrationOrFailure(cleanMsg, conversationHistory);
  if (isFrustratedOrFailed && (entities.hasPriorBotSuggestion || conversationHistory.length >= 2)) {
    return {
      text: isHinglish
        ? "Ye sunke bura laga ki standard steps se aapki pareshani hal nahi hui. Main bilkul samajh sakta hoon — jab property ya hard-earned money ka sawal ho toh har din ka delay chinta deta hai. Ab aur wait karne ke bajaye, main aapka issue direct humare Senior RERA & Financial Dispute Desk ko escalate kar raha hoon. Niche diye gaye direct connect buttons se aap turant senior advisor se baat kar sakte hain."
        : "I'm genuinely sorry to hear that the initial recourse didn't resolve this for you. I completely understand how stressful it is when your hard-earned savings or property handover is delayed. Rather than giving you more generic suggestions, I am escalating your case directly to our Senior RERA & Financial Escalation Desk for direct intervention.",
      type: 'human_handoff',
      language: lang,
      action: 'show_handoff_card',
      quickReplies: isHinglish 
        ? ["Senior Advisor se WhatsApp", "Direct Callback Request", "Top RERA Lawyers"]
        : ["Chat with Senior Advisor", "Request Immediate Callback", "View Verified Options"]
    };
  }

  // 3. Detect Explicit Human Agent / Advisor Request Intent
  if (
    cleanMsg.includes('agent') ||
    cleanMsg.includes('expert') ||
    cleanMsg.includes('advisor') ||
    cleanMsg.includes('call me') ||
    cleanMsg.includes('call karo') ||
    cleanMsg.includes('talk to') ||
    cleanMsg.includes('baat karni') ||
    cleanMsg.includes('phone number') ||
    cleanMsg.includes('customer care')
  ) {
    return {
      text: isHinglish
        ? "Haanji bilkul! Aap humare INDSTATE verified real estate advisors se seedhe baat kar sakte hain. Aap niche diye gaye WhatsApp button se turant chat shuru kar sakte hain ya Callback schedule kar sakte hain."
        : "Certainly! You can connect directly with an INDSTATE certified RERA advisor. You can chat instantly via WhatsApp below or request an immediate callback.",
      type: 'human_handoff',
      language: lang,
      action: 'show_handoff_card',
      quickReplies: isHinglish 
        ? ["Callback request karein", "WhatsApp par baat karein", "Properties dikhao"]
        : ["Request Callback", "Chat on WhatsApp", "View Properties"]
    };
  }

  // 4. Ambiguous Problem Clarification Engine
  const ambiguousDiagnostic = detectAmbiguousProblem(cleanMsg, isHinglish, entities);
  if (ambiguousDiagnostic) {
    return ambiguousDiagnostic;
  }

  // 5. Multi-Part Query Resolution
  const multiPartResponse = handleMultiPartQuery(userMessage, knowledgeBase, isHinglish, entities);
  if (multiPartResponse) {
    return multiPartResponse;
  }

  // 6. Check for Specific Property Mentions in Database (RAG Property Context)
  const matchedProps = findMatchingProperties(userMessage, properties);
  if (matchedProps.length > 0) {
    const topProp = matchedProps[0];
    const priceFormatted = formatIndianPrice(topProp.price, topProp.purpose === 'Rent');
    const carpetArea = topProp.carpetArea || topProp.carpetAreaSqFt || '1,200+';
    const baths = topProp.bathrooms || topProp.baths || 2;

    const text = isHinglish
      ? `Haanji! Mujhe aapke search ke anusaar **${topProp.title}** (${topProp.locality}, ${topProp.city}) mil gaya hai. 
         \n• **Price:** ${priceFormatted}
         \n• **RERA Status:** ${topProp.isReraVerified ? `Verified (${topProp.reraNumber})` : 'Under Verification'}
         \n• **Carpet Area:** ${carpetArea} sq.ft. (Actual Usable Area)
         \n• **Configuration:** ${topProp.bhk} BHK • ${baths} Baths
         \nKya aap iss property ke liye free escorted site inspection schedule karna chahenge?`
      : `Yes! I found **${topProp.title}** located in ${topProp.locality}, ${topProp.city}.
         \n• **Price:** ${priceFormatted}
         \n• **RERA Status:** ${topProp.isReraVerified ? `Verified (${topProp.reraNumber})` : 'Under Verification'}
         \n• **Carpet Area:** ${carpetArea} sq.ft. (100% Usable Carpet Area)
         \n• **Layout:** ${topProp.bhk} BHK • ${baths} Baths
         \nWould you like to schedule a free escorted site inspection for this property?`;

    return {
      text,
      type: 'property_rag',
      properties: matchedProps,
      language: lang,
      quickReplies: isHinglish
        ? ["Site visit book karo", "More details", "Different city"]
        : ["Book Site Visit", "More Details", "Search Other City"]
    };
  }

  // 7. Perform Semantic Vector Search against Knowledge Base (with Context Augmentation)
  const augmentedQuery = augmentQueryWithContext(userMessage, conversationHistory);
  const searchResult = searchKnowledgeBase(augmentedQuery, knowledgeBase, 0.19);

  if (searchResult.bestMatch) {
    const match = searchResult.bestMatch;
    const baseAnswer = isHinglish ? match.answerHi : match.answerEn;
    const warmAnswer = formatWarmFriendAnswer(baseAnswer, match, userMessage, entities, isHinglish);

    return {
      text: warmAnswer,
      type: 'kb_answer',
      category: match.category,
      matchId: match.id,
      score: searchResult.score,
      language: lang,
      quickReplies: isHinglish
        ? ["Property dikhao", "RERA verified flats", "Site visit schedule karo"]
        : ["View Properties", "Check RERA Listings", "Schedule Site Visit"]
    };
  }

  // 8. Honest Warm Fallback & Human Escalation (Below Confidence Threshold)
  return {
    text: isHinglish
      ? "Dekhiye, main aapko galat ya adhoori jaankari bilkul nahi dena chahta kyunki property decisions me ek ek rupaye ki keemat hoti hai. Mere verified records me iss specific query ka exact rule abhi nahi hai — par humare certified RERA property advisors se main aapki turant baat karwa deta hoon jo direct help karenge."
      : "I want to be completely upfront with you — because real estate decisions involve serious finances, I'd rather not guess or provide incomplete information. I don't have the exact verified documentation for this specific query, but I can connect you directly with an INDSTATE certified RERA advisor right now.",
    type: 'fallback_handoff',
    fallback: true,
    unansweredQuery: userMessage,
    language: lang,
    action: 'show_handoff_card',
    quickReplies: isHinglish
      ? ["WhatsApp Advisor", "Callback request karein", "Top Properties"]
      : ["Chat on WhatsApp", "Request Callback", "Browse Listings"]
  };
}

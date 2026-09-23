/**
 * Indian Real Estate FAQs and Knowledge Base
 * Used for FAQ sections, Chatbot intelligence, and RERA guidance
 */

export const FAQS_DATA = [
  {
    category: "RERA & Legal",
    question: "What is RERA and why is it mandatory for properties on INDSTATE?",
    answer: "The Real Estate (Regulation and Development) Act, 2016 (RERA) is an Act of the Parliament of India designed to protect home buyers and boost real estate investments. All commercial and residential real estate projects with land over 500 square meters or more than eight apartments must register with their state's RERA before launching or advertising. INDSTATE prominently displays the official RERA registration number for all listed projects."
  },
  {
    category: "RERA & Legal",
    question: "How do I verify a property's RERA number online?",
    answer: "You can copy the RERA ID displayed on any INDSTATE listing (for example, P51900008345 for Maharashtra) and verify it directly on the respective state government portal (e.g. maharera.mahaonline.gov.in, rera.karnataka.gov.in, or up-rera.in) to inspect sanctioned building plans, developer track record, escrow accounts, and registered completion dates."
  },
  {
    category: "Buying & Stamp Duty",
    question: "What are the stamp duty and registration charges in major Indian states?",
    answer: "Stamp duty is a state-level tax in India: Maharashtra: ~5% to 7% (1% metro cess in Mumbai/Pune); Karnataka: ~5% (plus 10% cess + 2% surcharge); Delhi: 4% for women, 6% for men; Uttar Pradesh: ~7%; Telangana: 7.5%. Most states cap registration fees at ₹30,000 to 1% of property value."
  },
  {
    category: "Home Loans & EMI",
    question: "What is the minimum down payment required for an Indian home loan?",
    answer: "Per RBI guidelines: For loans up to ₹30 Lakh, banks can fund up to 90% (10% down payment required). For loans between ₹30 Lakh and ₹75 Lakh, banks can fund up to 80% (20% down payment). For loans above ₹75 Lakh, maximum Loan-to-Value (LTV) is 75% (25% down payment required)."
  },
  {
    category: "Listing & Brokerage",
    question: "Does INDSTATE charge any fee or brokerage to list my property?",
    answer: "Listing your property on INDSTATE as an individual owner is 100% FREE with ZERO brokerage! Direct buyers and tenants can contact you seamlessly. For builders and verified channel partners, we offer premium boost packages and managed site-visit escort services."
  }
];

export const STATE_RERA_PORTALS = [
  { state: "Maharashtra", name: "MahaRERA", url: "https://maharera.mahaonline.gov.in" },
  { state: "Karnataka", name: "Karnataka RERA (K-RERA)", url: "https://rera.karnataka.gov.in" },
  { state: "Delhi (NCR)", name: "Delhi RERA", url: "https://rera.delhi.gov.in" },
  { state: "Haryana", name: "HRERA (Gurugram & Panchkula)", url: "https://haryanarera.gov.in" },
  { state: "Uttar Pradesh", name: "UP RERA", url: "https://www.up-rera.in" },
  { state: "Telangana", name: "TS RERA", url: "https://rera.telangana.gov.in" },
  { state: "Tamil Nadu", name: "TNRERA", url: "https://www.rera.tn.gov.in" },
  { state: "Gujarat", name: "GujRERA", url: "https://gujrera.gujarat.gov.in" },
  { state: "Rajasthan", name: "Raj-RERA", url: "https://rera.rajasthan.gov.in" },
  { state: "West Bengal", name: "WB HIRA / WBRERA", url: "https://rera.wb.gov.in" }
];

/**
 * INDSTATE RAG Structured Knowledge Base
 * Comprehensive Real Estate Knowledge Coverage for Indian Property Buyers, Renters & Sellers.
 * Dual English & Natural Romanized Hinglish entries with rich semantic keywords and tags.
 */

export const INITIAL_RAG_KNOWLEDGE_BASE = [
  // =========================================================================
  // 1. BUYING A PROPERTY
  // =========================================================================
  {
    id: "kb-buy-01",
    category: "Buying a Property",
    tags: ["home loan", "interest rate", "eligibility", "documents", "ltv", "down payment", "processing fee", "fixed floating"],
    questionEn: "What is the home loan eligibility, documents required, down payment and interest rate norms?",
    questionHi: "Home loan eligibility, documents, down payment aur interest rates ke kya rules hain?",
    answerEn: "Home loans on INDSTATE start at 8.40% p.a. through partner banks (SBI, HDFC Bank, ICICI Bank). Key details:\n• Down Payment / LTV: RBI permits up to 90% loan for properties under ₹30 Lakh (10% down payment), 80% for ₹30L–₹75L (20% down payment), and 75% for above ₹75 Lakh (25% down payment).\n• Eligibility: Salaried/Self-employed with min. 2 years stable income and CIBIL score ≥ 750.\n• Required Documents: Aadhaar, PAN, last 3 months salary slips, 2 years ITR / Form 16, 6 months bank statements, and property title deed / allotment letter.\n• Fixed vs Floating: Most Indian home loans are floating (repo rate linked); fixed rates carry a 1-2% premium. Processing fees range between 0.25% to 0.50% of the loan amount.",
    answerHi: "INDSTATE par partner banks (SBI, HDFC, ICICI) ke zariye home loan 8.40% p.a. se shuru hota hai. Main points:\n• Down Payment: ₹30 Lakh tak 10% down payment (90% loan), ₹30L–₹75L par 20% down payment, aur ₹75L se upar 25% down payment lagta hai.\n• Documents: Aadhaar, PAN, pichle 3 mahine ki salary slip, 2 saal ka ITR/Form 16, 6 mahine ka bank statement aur builder ka allotment letter.\n• Fixed vs Floating: Zyadatar loans floating (repo rate linked) hote hain jo market ke hisaab se adjust hote hain. Processing fee aamtaur par 0.25% se 0.50% hoti hai.",
    keywords: ["home loan", "loan eligibility", "documents", "down payment", "ltv", "loan to value", "fixed rate", "floating rate", "processing fee", "bank loan", "karz", "kagaz"]
  },
  {
    id: "kb-buy-02",
    category: "Buying a Property",
    tags: ["rera verification", "state rera portal", "red flags", "unregistered", "maharera", "karyare"],
    questionEn: "How do I verify a property or agent on state RERA portals and what are the red flags of unregistered projects?",
    questionHi: "State RERA portal par property kaise verify karein aur unregistered projects ke red flags kya hain?",
    answerEn: "To verify a project:\n1. Note the RERA Registration Number displayed on the INDSTATE listing (e.g. P518000XXXXX for MahaRERA, PRM/KA/RERA/XXXX for Karnataka).\n2. Visit the respective State RERA portal (maharera.mahaonline.gov.in, rera.karnataka.gov.in, etc.) and search under 'Registered Projects'.\n3. Verify: Sanctioned layout plan, proposed completion date, encumbrances, and dedicated 70% escrow bank account.\n• Red Flags: Marketing without a RERA number, promises of possession earlier than RERA date, non-mention of carpet area, or demand for cash payments over ₹20,000.",
    answerHi: "Property verify karne ke steps:\n1. INDSTATE listing par diya gaya RERA number note karein (jaise MahaRERA ya Karnataka RERA).\n2. State RERA ki official website par jakar 'Registered Projects' me number search karein.\n3. Wahan sanctioned floor plan, possession timeline aur 70% escrow account verify karein.\n• Red Flags (Khatre ki baatein): Bina RERA number ke advertisement, RERA date se pehle possession ka jhootha vaada, ya cash me payment maangna. Unregistered projects me invest na karein.",
    keywords: ["rera verification", "rera check", "state rera", "red flags", "unregistered project", "maharera", "karnataka rera", "rera search", "fraud project", "verify builder"]
  },
  {
    id: "kb-buy-03",
    category: "Buying a Property",
    tags: ["carpet area", "built up area", "super built up", "loading", "rera carpet"],
    questionEn: "What is the difference between carpet area, built-up area and super built-up area, and how do builders trick buyers?",
    questionHi: "Carpet area, built-up area aur super built-up area me kya farak hai aur actual space kaise check karein?",
    answerEn: "Key definitions under Indian real estate law:\n• RERA Carpet Area: Net usable floor area inside internal walls (where you can literally spread a carpet). It excludes external walls, common shafts, and balconies, but includes internal partition walls.\n• Built-up Area: Carpet area + wall thickness + exclusive balcony/verandah space (~10-15% more than carpet area).\n• Super Built-up Area (Saleable Area): Built-up area + proportionate share of common areas (corridors, lifts, clubhouse, staircase). The extra addition is called 'Loading' (often 30% to 45%).\n• Builder Trick: Historically, builders quoted per-sq.ft rates on inflated Super Built-up areas. INDSTATE mandates RERA Carpet Area transparency so you pay only for actual usable square footage.",
    answerHi: "Samajhiye 3 main measurements:\n• RERA Carpet Area: Asli andar ki jagah jahan aap carpet bicha sakte hain (net usable space).\n• Built-up Area: Carpet area + deewaron ki motai + private balcony space (~10-15% extra).\n• Super Built-up Area: Built-up area + common areas (lift, lobby, clubhouse, staircase) ka hissa. Isko 'Loading' kehte hain jo 30% se 45% tak ho sakti hai.\n• Builder Trick: Builder super built-up par rate lagakar 40% faltu loading charge karte hain. INDSTATE par mandatory RERA Carpet Area diya hota hai taaki aap sirf asli space ka paisa dein.",
    keywords: ["carpet area", "built up", "super built up", "loading percentage", "usable area", "square feet", "sqft calculation", "sq ft", "carpet size"]
  },
  {
    id: "kb-buy-04",
    category: "Buying a Property",
    tags: ["resale vs under construction", "gst", "possession risk", "ready to move"],
    questionEn: "Should I buy a ready-to-move resale property or an under-construction home? What are the GST implications?",
    questionHi: "Ready-to-move resale property leni chahiye ya under-construction? GST ka kya chakkar hai?",
    answerEn: "Comparison between options:\n• Under-Construction: Usually 15-25% cheaper and allows milestone-based construction-linked payments. However, you face possession delay risks and must pay 5% GST (or 1% for affordable housing under ₹45 Lakh).\n• Ready-to-Move / Resale: Zero GST applies once Completion/Occupancy Certificate (CC/OC) is received. Immediate possession with zero execution risk, immediate tax savings under Section 24, and immediate rental income. However, it requires a larger upfront capital layout.\n• Verdict: If you are paying rent, ready-to-move saves duplicate rent+EMI burden; if investing for appreciation, reputed builder under-construction projects offer higher growth.",
    answerHi: "Dono me yeh farak hai:\n• Under-Construction: 15-25% sasta padta hai aur construction ke sath step-by-step payment karni hoti hai. Par delay ka risk hota hai aur 5% GST dena padta hai.\n• Ready-to-Move / Resale: Zero GST (agar OC mil chuka hai). Turant possession milta hai, koi delay risk nahi, aur rent ya EMI ka double kharcha bach jata hai. Par upfront pura paisa arrange karna hota hai.\n• Agar aap abhi kiraye par hain, toh Ready-to-Move lene se rent aur EMI dono ek sath bharne se bach jayenge.",
    keywords: ["resale", "under construction", "ready to move", "gst on property", "possession risk", "gst rate", "ready flat", "naya flat"]
  },
  {
    id: "kb-buy-05",
    category: "Buying a Property",
    tags: ["registration process", "stamp duty", "timeline", "sub registrar", "khata"],
    questionEn: "What is the property registration process in India, including stamp duty and typical timelines?",
    questionHi: "Property registration ka process, stamp duty aur kitna time lagta hai?",
    answerEn: "Property Registration Process:\n1. Title Search & Draft Deed: Lawyer prepares the Sale Deed.\n2. Stamp Duty & Registration Fee Payment: Paid online via state portals (e-Challan / e-GRAS). Stamp duty typically ranges from 4% to 7% of property value (often 1% lower for female buyers); registration fee is usually 1% (capped at ₹30,000 in states like Maharashtra).\n3. Slot Booking: Book an appointment at the local Sub-Registrar's Office (SRO).\n4. Physical / Biometric Execution: Buyer, seller, and 2 witnesses attend the SRO with Aadhaar biometric verification.\n5. Document Handover: Registered Sale Deed and Index-II are issued within 2 to 5 business days, followed by Municipal Khata/Mutation transfer.",
    answerHi: "Property Registration ke 5 steps:\n1. Sale Deed draft karwayein.\n2. State portal par online Stamp Duty (4-7%) aur Registration charges (1%) pay karein (auraton ke naam par aksar 1% discount milta hai).\n3. Sub-Registrar Office (SRO) ka appointment book karein.\n4. Buyer, seller aur 2 witnesses ke sath SRO jakar biometric thumb impression aur photo dein.\n5. 2-5 din me Registered Sale Deed aur Index-II copy mil jaati hai, jiske baad Khata mutation karwana hota hai.",
    keywords: ["registration process", "stamp duty", "sub registrar", "sale deed", "index 2", "khata mutation", "registry", "property registration timeline"]
  },
  {
    id: "kb-buy-06",
    category: "Buying a Property",
    tags: ["property fraud", "title verification", "encumbrance certificate", "poa scam"],
    questionEn: "What are the common real estate frauds in India and how can I verify clean title and encumbrance?",
    questionHi: "Property frauds se kaise bachein aur clean title/encumbrance certificate kaise check karein?",
    answerEn: "Common property scams include: 1) Selling the same unit to multiple buyers using fake copies of deeds, 2) Selling on cancelled Power of Attorney (PoA), 3) Selling mortgaged properties without bank NOC, and 4) Unauthorized floors exceeding sanctioned FSI.\n• Protection Checklist:\n1. Encumbrance Certificate (EC): Obtain an EC for the last 30 years from the sub-registrar to confirm no pending bank mortgages or legal disputes.\n2. Original Chain of Deeds: Inspect all original parent documents dating back 30 years.\n3. Public Notice: Publish a 14-day notice in two local newspapers through a lawyer.\n4. INDSTATE Audits: Every property marked 'Verified' on INDSTATE has undergone preliminary title & RERA document validation.",
    answerHi: "Aam property scams aur unse bachne ke tarike:\n1. Farzi kagaz banakar ek hi flat kayi logon ko bechna.\n2. Purani Power of Attorney (PoA) par bechna.\n3. Bank loan wali property bina NOC ke bech dena.\n• Bachne ka tarika:\n1. Pichle 30 saal ka Encumbrance Certificate (EC) nikalein taaki pata chale koi mortgage ya court case toh nahi hai.\n2. Original documents aur unki chain check karein.\n3. Newspaper me public notice nikalwayein.\n4. INDSTATE par 'Verified' listings hi select karein jahan document checks pehle se kiye hote hain.",
    keywords: ["fraud", "title verification", "scam", "encumbrance certificate", "fake documents", "poa", "power of attorney", "legal dispute", "dhoka", "safe buying"]
  },

  // =========================================================================
  // 2. RENTING A PROPERTY
  // =========================================================================
  {
    id: "kb-rent-01",
    category: "Renting a Property",
    tags: ["security deposit", "city norms", "bangalore deposit", "mumbai deposit", "refundable"],
    questionEn: "What are the standard security deposit norms across Indian cities and what is refundable?",
    questionHi: "Kiraye ke ghar ke liye alag alag shehron me kitna deposit lagta hai aur kitna refund hota hai?",
    answerEn: "Security deposit norms vary by city:\n• Bengaluru & Hyderabad: Historically 5 to 6 months of rent (sometimes 10 months for independent houses).\n• Mumbai & Pune: Usually 2 to 3 months of rent for residential flats.\n• Delhi NCR & Kolkata: Typically 1 to 2 months of rent.\n• Refund Rules: The entire deposit is 100% refundable upon vacating. Landlords may only deduct unpaid utility bills, society maintenance dues, and agreed repainting or verified damage charges as specified in your agreement. Normal wear-and-tear cannot legally be deducted.",
    answerHi: "City-wise security deposit ka hisaab:\n• Bengaluru aur Hyderabad: Aamtaur par 5 se 6 mahine ka rent deposit hota hai.\n• Mumbai aur Pune: 2 se 3 mahine ka rent deposit lagta hai.\n• Delhi NCR aur Kolkata: 1 se 2 mahine ka rent deposit hota hai.\n• Refund Rules: Pura deposit refundable hota hai ghar khali karte waqt. Landlord sirf unpaid bijli/paani ke bill ya agreement me tay kiye gaye painting charges deduct kar sakta hai. Normal wear-and-tear ka paisa nahi kaata ja sakta.",
    keywords: ["security deposit", "rent deposit", "bangalore deposit", "mumbai deposit", "refundable deposit", "kiraya deposit", "deposit refund"]
  },
  {
    id: "kb-rent-02",
    category: "Renting a Property",
    tags: ["rent agreement", "11 month rule", "lock in period", "notice period", "maintenance"],
    questionEn: "What are the essentials of a rent agreement (lock-in, notice period, 11-month rule, registration)?",
    questionHi: "Rent agreement ke zaroori niyam kya hain (11 mahine ka rule, lock-in period, notice period)?",
    answerEn: "Key Rent Agreement Clauses:\n1. 11-Month Rule: Agreements for 11 months avoid mandatory Registration Act registration in certain states, but states like Maharashtra mandate registration regardless of duration.\n2. Lock-in Period: Usually 1 to 3 months where neither party can terminate without paying the remaining rent.\n3. Notice Period: Standard is 1 month written notice from either tenant or owner before vacating.\n4. Maintenance Responsibility: Routine minor repairs (plumbing washers, bulbs) are tenant's responsibility; structural repairs (seepage, electrical wiring) are owner's responsibility.\n5. Annual Rent Escalation: Standard escalation in India is 5% to 10% per annum.",
    answerHi: "Rent agreement ke 5 ahem niyam:\n1. 11-Month Rule: 11 mahine ka agreement registration stamp duty se bachne ke liye banta hai, par Maharashtra me registration har duration ke liye mandatory hai.\n2. Lock-in Period: Aamtaur par 1 se 3 mahine hota hai, jisme dono parties agreement cancel nahi kar sakti.\n3. Notice Period: Ghar khali karne se pehle 1 mahine ka written notice dena zaroori hota hai.\n4. Maintenance: Chhote mote kharche (bulb, tap) tenant ke hote hain, aur badi samasya (seepage, deewar) owner ko theek karwani hoti hai.\n5. Har saal rent 5% se 10% badhne ka clause hota hai.",
    keywords: ["rent agreement", "11 month agreement", "lock in period", "notice period", "maintenance clause", "rent contract", "kirayanama"]
  },
  {
    id: "kb-rent-03",
    category: "Renting a Property",
    tags: ["tenant rights", "deposit dispute", "early eviction", "landlord harassment"],
    questionEn: "What are my rights if a landlord refuses to refund the deposit or threatens early eviction?",
    questionHi: "Agar landlord deposit wapas na kare ya bina notice ke nikalne ki dhamki de toh kya karein?",
    answerEn: "Under Indian tenancy law and the Model Tenancy Act:\n• Early Eviction: A landlord cannot evict a tenant without serving the contractual notice period (minimum 30 days) and without legitimate grounds (such as non-payment of rent for 2+ months or misuse of premises). Forceful lockouts or cutting electricity/water is illegal.\n• Withheld Deposit: If a landlord unjustifiably refuses to refund the deposit, you can: 1) Issue a formal legal notice via an advocate, 2) Approach the local Rent Authority / Rent Court under the state Tenancy Act, or 3) File a police complaint for criminal breach of trust (Section 406 IPC). Maintaining video proof of the flat condition when vacating is strongly advised.",
    answerHi: "Tenant ke kanooni adhikar:\n• Early Eviction: Landlord bina 30 din ke notice ke aur bina thos wajah ke aapko bahar nahi nikal sakta. Bijli ya paani ka connection kaatna kanoonan jurm hai.\n• Deposit na milne par: 1) Lawyer ke zariye legal notice bhejein, 2) State Tenancy Court ya Consumer Forum me complaint file karein, 3) Ghar chhodte waqt flat ki video bana kar rakhein taaki landlord jhootha damage claim na kar sake.",
    keywords: ["tenant rights", "deposit dispute", "landlord problem", "eviction", "deposit nahi diya", "kirayedar adhikar", "rent dispute"]
  },
  {
    id: "kb-rent-04",
    category: "Renting a Property",
    tags: ["pg", "co living", "meals", "visitor policy", "pg vs rent"],
    questionEn: "How does PG / Co-living differ from standard rental flats regarding meals, visitor policies, and deposits?",
    questionHi: "PG aur Co-living me standard rental flat se kya farak hota hai?",
    answerEn: "PG (Paying Guest) & Co-Living vs Independent Rental:\n• Security Deposit: PG/Co-living typically requires only 1 to 2 months deposit (vs 5-6 months for Bangalore flats).\n• Inclusions: Rent usually covers high-speed WiFi, daily housekeeping, electricity, water, and optional meal plans (breakfast + dinner).\n• Flexibility: Shorter lock-in periods (often 1-3 months) ideal for tech professionals, students, and relocating workers.\n• House Rules: Co-living spaces have defined visitor timings, quiet hours, and gender-specific or co-ed visitor policies.\n• INDSTATE lists verified PG & Co-living spaces with real room photos, amenity audits, and transparent fee breakdowns.",
    answerHi: "PG aur Co-living ke fayde:\n• Kam Deposit: Sirf 1 se 2 mahine ka deposit lagta hai (jabki flat me 5-6 mahine lagte hain).\n• Sab Shamil: Rent me WiFi, cleaning, bijli, paani aur khana (optional meal plan) shamil hota hai.\n• Aasan Flexibility: Chhota lock-in period hota hai jo IT techies aur students ke liye perfect hai.\n• Rules: Visitor policy aur timing rules hote hain.\n• INDSTATE par verified PG listings real photos aur verified amenities ke sath available hain.",
    keywords: ["pg", "co living", "paying guest", "food included", "visitor policy", "single room", "sharing room", "hostel", "techie stay"]
  },
  {
    id: "kb-rent-05",
    category: "Renting a Property",
    tags: ["police verification", "tenant verification", "mandatory", "police portal", "safety"],
    questionEn: "Is tenant police verification mandatory in India and how is it done online or offline?",
    questionHi: "Kya kirayedaar ki police verification karwana mandatory hai aur ye kaise hoti hai?",
    answerEn: "Yes, tenant police verification is legally mandatory under Section 188 of the Indian Penal Code across all major metro police commissionerates (Mumbai, Delhi, Bengaluru, Pune, Gurugram, etc.). Failure by the property owner can lead to legal penalties and fines.\n• Online: Most state police portals (e.g. Mumbai Police citizen portal, Delhi Police Tenant Verification app, Karnataka KSP app) allow 100% digital submission with Aadhaar and tenant photos.\n• Offline: Fill the 2-page Tenant Verification form with passport photos, ID proofs, and submit it with acknowledgment at your local jurisdictional police station.",
    answerHi: "Haan, Bharat ke lagbhag sabhi bade shehron (Mumbai, Delhi, Pune, Bengaluru, Gurugram) me tenant police verification karwana kanoonan mandatory hai under Section 188 of IPC. Agar owner verification nahi karwata toh legal fine lag sakta hai.\n• Online Process: Delhi Police, Mumbai Police aur state police portals par online form bharke Aadhaar aur tenant photo upload kar sakte hain.\n• Offline Process: Local police thane se tenant verification form lekar dono ki ID aur photo ke sath submit karein aur stamped receipt lein.",
    keywords: ["police verification", "tenant verification", "police inquiry", "tenant background check", "police thana", "mandatory verification", "police verification online"]
  },

  // =========================================================================
  // 3. LISTING / SELLING A PROPERTY
  // =========================================================================
  {
    id: "kb-sell-01",
    category: "Listing / Selling a Property",
    tags: ["post property", "list property", "documents required", "verification", "owner vs agent"],
    questionEn: "How do I list my property or apartment on INDSTATE and what documents are verified?",
    questionHi: "INDSTATE par property ya flat kaise list karein aur verification ke liye kya chahiye? Dalali lagegi kya?",
    answerEn: "To list your property on INDSTATE:\n1. Click the '+ Post Property' button in the top navigation or visit /add-property.\n2. Fill in property configuration, carpet area, expected price, and upload at least 3 high-resolution photos.\n3. Zero Brokerage: Direct owners list 100% free with zero brokerage commission.\n4. Verification Requirements:\n   • Individual Owners: Upload Electricity Bill / Property Tax receipt + Aadhaar for 'Verified Owner' badge.\n   • Channel Partners / Agents: Upload State RERA Agent Registration certificate.\n   • Builders: Upload Project State RERA Registration Number, sanctioned floor layout, and completion milestone sheet.\n5. Listings are audited and activated within 2 hours.",
    answerHi: "Property list karne ka aasan tarika:\n1. Website ke top par '+ Post Property' button par click karein ya /add-property par jayein.\n2. Property details, RERA carpet area, price aur kam se kam 3 acchi photos upload karein.\n3. Zero Dalali: Direct owners bilkul free me bina kisi brokerage ke apna flat list kar sakte hain.\n4. Verification:\n   • Owners: Electricity bill ya Property Tax receipt upload karein 'Verified Owner' badge ke liye.\n   • Agents: Apna RERA Agent license number dein.\n   • Builders: Project ka official RERA number aur layout plan dein.\n5. Hamari team 2 ghante ke andar listing verify karke live kar deti hai.",
    keywords: ["list property", "post property", "sell property", "ghar bechna hai", "add property", "property upload", "listing process", "list apartment", "flat list", "dalali", "zero brokerage", "list flat", "flat bechna"]
  },
  {
    id: "kb-sell-02",
    category: "Listing / Selling a Property",
    tags: ["zero brokerage", "direct owner", "commission", "brokerage fee"],
    questionEn: "How does INDSTATE's Zero Brokerage direct model work?",
    questionHi: "INDSTATE ka Zero Brokerage direct model kaise kaam karta hai?",
    answerEn: "Under INDSTATE's Zero Brokerage model:\n• Direct Owner Listings: Genuine buyers and tenants connect directly with property owners via phone or WhatsApp with 0% commission.\n• Savings: Saves buyers and tenants up to ₹1 Lakh to ₹5 Lakhs in standard 1-2% brokerage fees.\n• Optional Verified Agent Support: If you prefer an escorted walkthrough, physical title assistance, or registration documentation, you can choose to work with certified RERA channel partners clearly identified with transparent fee structures.",
    answerHi: "INDSTATE Zero Brokerage model:\n• Direct Connect: Buyers aur tenants seedhe genuine property owners se baat kar sakte hain. Beech me koi middleman ya commission nahi hota.\n• Badi Bachat: Isse aapke 1% se 2% brokerage ke lakho rupaye bach jaate hain.\n• Verified Agents: Agar aapko site visit escort ya legal documentation ke liye expert chahiye, toh RERA certified agents bhi available hain jinki fees pehle se transparent hoti hai.",
    keywords: ["zero brokerage", "no brokerage", "commission", "direct owner", "bina dalal", "brokerage free", "broker fee"]
  },
  {
    id: "kb-sell-03",
    category: "Listing / Selling a Property",
    tags: ["pricing property", "locality trends", "per sqft benchmark", "valuation"],
    questionEn: "How do I price my property competitively using INDSTATE's locality price trends?",
    questionHi: "Apne flat ya property ka sahi market price kaise tay karein?",
    answerEn: "INDSTATE provides localized market valuation insights:\n1. Check Local Benchmarks: Search your micro-market (e.g. Whitefield, Baner, Andheri West) on INDSTATE to inspect current per-sq.ft rate averages for comparable BHKs.\n2. Age & Floor Rise: Consider building age, floor level (higher floors in metro high-rises often carry ₹50-100/sq.ft floor rise per tier), and parking allotment.\n3. RERA Carpet vs Super Area: Quote on clear carpet area terms so serious buyers can compare accurately.\n4. Advisory: You can also request an automated price evaluation report through our advisory desk.",
    answerHi: "Property ka sahi price nikalne ke tips:\n1. INDSTATE par apni locality (jaise Whitefield, Baner, Andheri) search karein aur dekhein ki comparable flats ka per sq.ft rate kya chal raha hai.\n2. Floor rise, building ki age aur covered parking ko dhyan me rakhein.\n3. RERA carpet area ke hisaab se price rakhein taaki genuine buyers turant contact karein.\n4. Aap hamare automated property valuation tool ka use karke instant rate estimate nikaal sakte hain.",
    keywords: ["price property", "market rate", "per sqft rate", "locality trends", "valuation", "sahi rate", "property price check"]
  },
  {
    id: "kb-sell-04",
    category: "Listing / Selling a Property",
    tags: ["leads", "site visits", "buyer inquiries", "response time"],
    questionEn: "What happens after a buyer inquiry comes in? How does site-visit scheduling work?",
    questionHi: "Jab buyer lead aati hai toh kya hota hai aur site visit kaise schedule hoti hai?",
    answerEn: "Once a buyer inquires on your listing:\n1. Instant Notification: You receive an instant SMS, WhatsApp alert, and portal notification with the verified buyer's details.\n2. Direct Contact: You can call or WhatsApp the interested buyer immediately. Sellers who respond within 15 minutes have a 4x higher closing rate.\n3. Guided Site-Visits: Buyers can request a physical inspection through the 'Schedule Visit' feature, allowing you to confirm a mutually convenient weekend time slot.",
    answerHi: "Lead aane ke baad ka process:\n1. Instant Alert: Jaise hi koi buyer inquiry karta hai, aapko SMS, WhatsApp aur portal notification turant milta hai.\n2. Direct Chat: Aap buyer ko seedhe call ya WhatsApp kar sakte hain. 15 minute ke andar contact karne se deal jaldi final hoti hai.\n3. Site Visit: Buyer website par 'Schedule Visit' se date aur time request bhej sakta hai jise aap accept ya reschedule kar sakte hain.",
    keywords: ["buyer inquiry", "leads", "site visit", "schedule visit", "lead notification", "buyer call"]
  },

  // =========================================================================
  // 4. LEGAL / RERA / DOCUMENTATION
  // =========================================================================
  {
    id: "kb-legal-01",
    category: "Legal / RERA / Documentation",
    tags: ["rera guarantee", "escrow account", "builder liability", "quality warranty"],
    questionEn: "What does RERA registration actually guarantee vs what does it NOT guarantee?",
    questionHi: "RERA registration se kya kya guarantee milti hai aur kya nahi milti?",
    answerEn: "What RERA Guarantees:\n• 70% Escrow Protection: 70% of buyer funds must be kept in a dedicated project bank account used strictly for land and construction costs.\n• Mandatory Carpet Area: Builders can only sell on net usable carpet area, not imaginary super built-up loading.\n• 5-Year Structural Defect Warranty: Builder is legally obligated to repair any structural or workmanship defects free of charge for 5 years after possession.\n• Delay Penalties: Monthly interest payouts (SBI MCLR + 2%) for delayed handovers.\n• What RERA Does NOT Guarantee: It does not guarantee market price appreciation or protect against builder bankruptcy if the project is under insolvency proceedings.",
    answerHi: "RERA kya guarantee deta hai:\n• 70% Escrow Account: Builder ko 70% paisa alag bank account me rakhna hota hai jo sirf usi project ke construction me kharch ho sakta hai.\n• Carpet Area: Sirf asli usable carpet area becha ja sakta hai.\n• 5 Saal ki Structural Warranty: Possession ke 5 saal baad tak koi bhi building crack ya structural kharabi builder ko free me theek karni padegi.\n• Delay Penalty: Late possession par builder ko har mahine interest penalty deni hoti hai.\n• RERA yeh guarantee nahi deta ki property ka daam future me badhega ya nahi.",
    keywords: ["rera guarantee", "escrow", "5 year warranty", "structural defect", "rera rules", "rera faida", "rera act"]
  },
  {
    id: "kb-legal-02",
    category: "Legal / RERA / Documentation",
    tags: ["builder track record", "past delivery", "rera portal check"],
    questionEn: "How do I check a builder's past project delivery track record on RERA?",
    questionHi: "Builder ka purana track record aur past delivery RERA par kaise check karein?",
    answerEn: "To check a builder's track record:\n1. Go to the State RERA portal (e.g. MahaRERA, HRERA, TNRERA, RERA Karnataka).\n2. Search by Promoter/Builder Name.\n3. Review all registered projects under that builder name: Check how many projects were completed on time vs extended.\n4. Check the 'Complaints / Orders' tab to see if any recovery warrants or pending buyer disputes exist against the developer.",
    answerHi: "Builder ka track record check karne ka tarika:\n1. State RERA portal par jayein.\n2. Promoter/Builder ka naam search karein.\n3. Dekhein unke purane kitne projects time par complete hue hain aur kitno me date extend karni padi.\n4. 'Orders & Judgments' tab me dekhein ki builder ke khilaaf koi complaint ya court penalty toh pending nahi hai.",
    keywords: ["builder track record", "promoter history", "past projects", "delivery record", "builder rating", "rera complaints"]
  },
  {
    id: "kb-legal-03",
    category: "Legal / RERA / Documentation",
    tags: ["encumbrance certificate", "occupancy certificate", "completion certificate", "ec", "oc", "cc"],
    questionEn: "What are Encumbrance Certificate (EC), Occupancy Certificate (OC), and Completion Certificate (CC)? Why are they crucial?",
    questionHi: "Encumbrance Certificate (EC), Occupancy Certificate (OC) aur Completion Certificate (CC) kya hote hain?",
    answerEn: "The 3 Critical Real Estate Certificates:\n1. Encumbrance Certificate (EC): Issued by the Sub-Registrar. Proves the property is free of legal and monetary liabilities (like bank mortgages or unpaid debts). Always demand a 30-year Non-Encumbrance Certificate.\n2. Completion Certificate (CC): Issued by the municipal authority certifying the building was constructed in accordance with the sanctioned building plan.\n3. Occupancy Certificate (OC): The most important document! Issued by municipal authorities certifying the building is structurally safe for habitation with approved civic amenities (water, electricity, sewage). Never move into a building without an OC, as it risks demolition or utility disconnection.",
    answerHi: "3 sabse zaroori certificates:\n1. Encumbrance Certificate (EC): Yeh sub-registrar se milta hai jo sabit karta hai ki property par koi bank loan ya kanooni vivaad nahi hai. 30 saal ka EC check karna chahiye.\n2. Completion Certificate (CC): Nagar nigam se milta hai ki building sanctioned plan ke mutabiq banayi gayi hai.\n3. Occupancy Certificate (OC): Sabse zaroori kagaz! Yeh confirm karta hai ki building rehne layak surakshit hai aur paani-bijli connection approved hain. Bina OC ke flat me rehna illegal maana jata hai.",
    keywords: ["encumbrance certificate", "occupancy certificate", "completion certificate", "ec oc cc", "oc certificate", "cc certificate", "zaroori kagaz"]
  },
  {
    id: "kb-legal-04",
    category: "Legal / RERA / Documentation",
    tags: ["delayed possession", "section 18", "rera compensation", "builder delay refund"],
    questionEn: "What can I do if a builder delays possession beyond the agreed date? What are RERA remedies?",
    questionHi: "Agar builder possession me delay kare toh RERA me kya action le sakte hain?",
    answerEn: "Under Section 18 of the RERA Act 2016, if a builder fails to deliver possession on the date specified in the Agreement for Sale:\n1. Option A (Stay in Project): The builder must pay you monthly interest for every month of delay until possession is handed over. The interest rate is mandated at SBI Highest Marginal Cost of Lending Rate (MCLR) + 2% (approx. 10.5% p.a.).\n2. Option B (Exit Project): You can withdraw from the project and demand a 100% refund of all money paid plus interest at SBI MCLR + 2% from the date of payment until the refund is realized.\n3. How to File: File an online complaint on the State RERA portal with a nominal fee (usually ₹1,000).",
    answerHi: "RERA Section 18 ke tahat aapke paas 2 options hain:\n1. Option A (Project me bane rahein): Builder ko har mahine delay hone par SBI MCLR + 2% ka interest penalty (lagbhag 10.5% p.a.) aapko dena hoga jab tak possession na mile.\n2. Option B (Refund lein): Aap project se bahar nikal sakte hain aur apna 100% paisa pure interest ke sath wapas maang sakte hain.\n3. Complaint kaise karein: State RERA ki website par jakar ₹1,000 ki fee dekar online complaint darj ki ja sakti hai.",
    keywords: ["delayed possession", "section 18", "rera compensation", "builder delay", "late delivery", "delay penalty", "refund", "builder delay compensation"]
  },
  {
    id: "kb-legal-05",
    category: "Legal / RERA / Documentation",
    tags: ["stamp duty rates", "state rates", "calculator", "maharashtra", "karnataka", "delhi"],
    questionEn: "What are the stamp duty rates across Indian states? How do I calculate them?",
    questionHi: "Alag alag states me stamp duty kitni lagti hai aur kaise calculate karein?",
    answerEn: "Stamp duty is state-specific and determined by state revenue departments:\n• Maharashtra: 5% to 7% (e.g., 6% in Mumbai including Metro cess; 1% rebate for female buyers).\n• Karnataka: 2% for up to ₹20L, 3% for ₹21L–₹45L, 5% for above ₹45L + 10% cess.\n• Delhi: 4% for females, 6% for males.\n• Uttar Pradesh / Haryana: 5% to 7%.\n• Calculation Tool: Use INDSTATE's integrated Stamp Duty & EMI Calculator (/calculator) to get an exact calculation based on your selected state and property price.",
    answerHi: "Stamp duty har state me alag hoti hai:\n• Maharashtra: 5% se 7% (auraton ke naam par 1% rebate).\n• Karnataka: ₹45 Lakh se upar par 5% + cess.\n• Delhi: Mahilaon ke liye 4%, purushon ke liye 6%.\n• UP aur Haryana: 5% se 7%.\n• Aap hamare Stamp Duty & EMI Calculator (/calculator) par jakar apne state aur price ke mutabiq exact charges check kar sakte hain.",
    keywords: ["stamp duty", "stamp duty rates", "registration charges", "state stamp duty", "delhi stamp duty", "mumbai stamp duty", "calculator"]
  },

  // =========================================================================
  // 5. HOME LOANS & FINANCE
  // =========================================================================
  {
    id: "kb-fin-01",
    category: "Home Loans & Finance",
    tags: ["emi calculator", "how emi works", "principal interest", "bank rate comparison"],
    questionEn: "How does the EMI calculator work and how do I compare bank rates on INDSTATE?",
    questionHi: "EMI calculator kaise kaam karta hai aur bank rates kaise compare karein?",
    answerEn: "Home Loan EMI is computed using the standard reducing balance formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1].\n• On INDSTATE's Calculator (/calculator): Adjust the Loan Amount, Interest Rate, and Tenure (up to 30 years) to see monthly EMI and total interest payable.\n• Bank Benchmarks: INDSTATE tracks real-time lending rates across SBI (8.40%+), HDFC Bank (8.50%+), ICICI Bank (8.55%+), and Bank of Baroda (8.40%+), so you can pick the most cost-effective lender.",
    answerHi: "EMI Calculator Reducing Balance par kaam karta hai:\n• INDSTATE ke Calculator (/calculator) par aap Loan Amount, Interest Rate aur Tenure (30 saal tak) set karke apni monthly EMI aur total interest jaan sakte hain.\n• Bank Comparison: INDSTATE par SBI (8.40%+), HDFC (8.50%+), aur ICICI (8.55%+) ke live rates compare karke sabse sasta loan chuna ja sakta hai.",
    keywords: ["emi calculator", "calculate emi", "home loan emi", "bank comparison", "sbi rate", "hdfc rate", "monthly emi", "kist"]
  },
  {
    id: "kb-fin-02",
    category: "Home Loans & Finance",
    tags: ["cibil score", "credit score", "loan rejection", "interest discount"],
    questionEn: "What CIBIL / credit score is needed for a home loan, and how does it affect the interest rate?",
    questionHi: "Home loan ke liye kitna CIBIL score hona chahiye aur iska rate par kya asar padta hai?",
    answerEn: "Credit score impact on Indian home loans:\n• CIBIL 750+: Tier-1 borrowers. Eligible for lowest interest rates (starting at 8.40% p.a.), fast-track approval, and zero processing fee discounts.\n• CIBIL 700 to 749: Standard approval, but interest rates may be 0.25% to 0.50% higher.\n• CIBIL Below 700: High risk of loan rejection or mandatory demand for co-applicants, higher down payment, and 1% to 2% higher interest rates.\n• Tip: Check your CIBIL report before applying and clear any unpaid credit card dues or personal loan EMIs.",
    answerHi: "CIBIL Score ka asar:\n• 750 se upar: Best score! Sabse saste interest rate (8.40% se shuru) aur turant loan approve hota hai.\n• 700 se 749: Loan mil jata hai par interest rate 0.25% se 0.50% thoda zyada lag sakta hai.\n• 700 se kam: Loan reject hone ka risk hota hai ya bank co-applicant aur zyada down payment maangta hai.\n• Apply karne se pehle apna CIBIL report zaroor check karein aur credit card ke dues clear karein.",
    keywords: ["cibil score", "credit score", "cibil", "credit history", "loan interest discount", "score check"]
  },
  {
    id: "kb-fin-03",
    category: "Home Loans & Finance",
    tags: ["balance transfer", "refinance", "switch bank", "lower rate"],
    questionEn: "When does a Home Loan Balance Transfer make sense and what is the process?",
    questionHi: "Home loan balance transfer kab karwana chahiye aur iska kya fayda hai?",
    answerEn: "Home Loan Balance Transfer:\n• When to consider: If your current bank charges 9.25%+ and another lender offers 8.40%, switching can save ₹3 Lakh to ₹10 Lakhs over a 15-20 year tenure.\n• Breakeven Check: Ensure total switching costs (MODT cancellation, new processing fee, valuation fee — approx. ₹15,000 to ₹35,000) are recovered within 6 to 9 months of EMI savings.\n• Process: Obtain an outstanding balance letter and list of documents (LOD) from your existing bank, submit them to the new bank, and complete the foreclosure handover.",
    answerHi: "Home Loan Balance Transfer ke fayde:\n• Kab karwayein: Agar aapka bank 9.25% ya usse zyada le raha hai aur doosra bank 8.40% de raha hai, toh loan transfer karne se 15-20 saal me ₹3 Lakh se ₹10 Lakh tak ki bachat ho sakti hai.\n• Kharcha vs Fayda: Transfer karne me processing aur legal fee lagti hai (lagbhag ₹15,000-₹30,000). Yeh bachat agar 6-9 mahine me recover ho rahi ho tabhi transfer karwayein.\n• Purane bank se List of Documents (LOD) aur Foreclosure letter le kar naye bank me jama karwana hota hai.",
    keywords: ["balance transfer", "loan transfer", "refinance", "switch bank", "lower interest", "loan bachat"]
  },
  {
    id: "kb-fin-04",
    category: "Home Loans & Finance",
    tags: ["joint home loan", "tax benefits", "section 24", "section 80c", "co borrower"],
    questionEn: "What are the benefits of a joint home loan (eligibility, tax benefits under Section 24 and 80C)?",
    questionHi: "Joint home loan lene ke kya fayde hain (eligibility aur tax benefits)?",
    answerEn: "Joint Home Loan Benefits (with spouse, parent, or sibling):\n1. Higher Loan Eligibility: Combining incomes can increase total borrowing power by 40% to 70%.\n2. Double Tax Deductions (under Old Tax Regime):\n   • Section 24(b): Each co-borrower/co-owner can claim up to ₹2 Lakh deduction on interest paid per financial year (Total: up to ₹4 Lakhs).\n   • Section 80C: Each can claim up to ₹1.5 Lakh deduction on principal repayment (Total: up to ₹3 Lakhs).\n   • Stamp Duty Rebate: If the primary applicant or co-owner is female, many states offer 1% lower stamp duty.\n*(Note: Consult a chartered accountant for personalized tax planning).*",
    answerHi: "Joint Home Loan ke fayde:\n1. Zyada Loan Milta Hai: Dono ki income milakar loan amount 40% se 70% badh jata hai.\n2. Double Tax Saving (Old Tax Regime me):\n   • Section 24: Dono co-owners saal me ₹2-2 Lakh (kul ₹4 Lakh) tak interest par tax bacha sakte hain.\n   • Section 80C: Dono ₹1.5-1.5 Lakh (kul ₹3 Lakh) tak principal par tax rebate le sakte hain.\n   • Female co-owner hone par Stamp Duty me bhi 1% tak discount milta hai.",
    keywords: ["joint home loan", "tax benefit", "section 24", "section 80c", "co applicant", "double tax saving", "wife name loan"]
  },

  // =========================================================================
  // 6. PAYMENTS & PLATFORM TRUST
  // =========================================================================
  {
    id: "kb-trust-01",
    category: "Payments & Platform Trust",
    tags: ["token money", "booking amount", "legal standing", "bayana"],
    questionEn: "What is the legal standing of booking / token amount (Bayana) and how should it be paid?",
    questionHi: "Booking / token amount (Bayana) ke kanooni niyam kya hain aur kaise dena chahiye?",
    answerEn: "Token Amount (Bayana) Guidelines:\n• Legal Standing: Token amount confirms an 'Agreement to Sell / Expression of Interest'. Paying without written terms carries risk. Under RERA Section 13, a promoter/builder cannot accept more than 10% of the property value without entering into a registered Agreement for Sale.\n• Best Practices: 1) Never pay cash above ₹20,000 (violates Section 269SS of the Income Tax Act), 2) Always pay via account payee cheque or RTGS/NEFT, 3) Clearly mention 'Subject to clean title and bank loan approval' on the receipt so money is refundable if the property title fails scrutiny.",
    answerHi: "Token Amount (Bayana) ke niyam:\n• RERA Section 13 ke mutabiq builder bina registered Agreement for Sale ke 10% se zyada amount nahi le sakta.\n• Savdhaniyan: 1) Cash me ₹20,000 se zyada na dein, 2) Payment hamesha cheque ya online bank transfer (RTGS) se karein, 3) Receipt par zaroor likhwayein 'Subject to legal title & loan approval' taaki loan reject hone par paisa wapas mil sake.",
    keywords: ["token amount", "booking amount", "bayana", "token money", "advance payment", "receipt"]
  },
  {
    id: "kb-trust-02",
    category: "Payments & Platform Trust",
    tags: ["deal cancellation", "refund policy", "deal fall through"],
    questionEn: "What is the refund policy if a property deal falls through during legal scrutiny?",
    questionHi: "Agar legal check me property fail ho jaye toh token money refund kaise milta hai?",
    answerEn: "Deal Cancellation & Refund:\n• Legal Failure / Title Defect: If the property fails title due diligence (e.g. pending bank mortgage, forged documents, lack of building sanction), the buyer is legally entitled to a 100% refund of the token amount.\n• Buyer Default: If the buyer backs out without any legal or property defect, the seller may forfeit the token advance as per contract terms.\n• Recommendation: Use INDSTATE's standardized Memorandum of Understanding (MoU) template, which protects buyer deposits during the 15-day due diligence window.",
    answerHi: "Deal Cancel hone par refund:\n• Title Kharab Hone Par: Agar lawyer ki search me property par loan, court case ya farzi kagaz nikalte hain, toh seller ko 100% token refund karna padta hai.\n• Buyer ki marzi se cancel hone par: Agar bina kisi kanooni wajah ke buyer mana kare, toh seller token zapt kar sakta hai.\n• INDSTATE ka safe agreement template use karein jisme 15 din ka due-diligence period hota hai.",
    keywords: ["refund policy", "deal cancel", "token refund", "deal fall through", "paisa wapas", "cancellation"]
  },
  {
    id: "kb-trust-03",
    category: "Payments & Platform Trust",
    tags: ["verified badge", "rera approved badge", "audit process"],
    questionEn: "How are 'RERA Verified' and 'Owner Verified' badges earned and audited on INDSTATE?",
    questionHi: "INDSTATE par 'RERA Verified' aur 'Owner Verified' badges kaise diye jaate hain?",
    answerEn: "INDSTATE's 3-Tier Verification Audit:\n1. State RERA Validation: Our compliance team cross-references the project registration number with the live State RERA database, confirming active status, sanctioned floor plan, and escrow account details.\n2. Title & Ownership Screening: For 'Verified Owner' badges, we verify government electricity utility bills and property tax receipts matching the lister's identity.\n3. Spot Audit: High-engagement properties undergo physical geo-tagging and site audits to confirm construction status and actual carpet area dimensions before receiving top verified rankings.",
    answerHi: "INDSTATE ka 3-Tier Verification process:\n1. State RERA Audit: Hum State RERA ki official database se project number, sanctioned layout aur escrow account live check karte hain.\n2. Ownership Check: 'Verified Owner' ke liye bijli ka bill aur property tax receipt check ki jaati hai.\n3. Physical Audit: Top properties ka geo-tagging aur physical check hota hai taaki carpet area aur photos 100% genuine hon.",
    keywords: ["verified badge", "rera verified badge", "audit", "trust", "asli flat", "verification process"]
  },
  {
    id: "kb-trust-04",
    category: "Payments & Platform Trust",
    tags: ["report fraud", "suspicious listing", "fake agent"],
    questionEn: "How do I report a suspicious listing or suspected fraud on INDSTATE?",
    questionHi: "Farzi listing ya suspicious agent ki complaint kaise karein?",
    answerEn: "To report fraud or a suspicious listing:\n1. Click the 'Report Listing' flag icon on any property page or chatbot handoff.\n2. Provide the Property ID and reason (e.g., incorrect price, fake photos, unavailable property, or cash demand).\n3. Our trust & safety team investigates within 2 hours. If non-compliance is verified, the listing is de-listed immediately and the user account is blacklisted across our network.",
    answerHi: "Complaint karne ka tarika:\n1. Property page par 'Report Listing' button par click karein ya chatbot me batayein.\n2. Property ID aur wajah likhein (jaise galat rate, farzi photo, ya broker cash maang raha ho).\n3. Hamari Trust & Safety team 2 ghante me audit karke farzi listing ko turant remove aur block kar deti hai.",
    keywords: ["report fraud", "suspicious listing", "complaint", "fake listing", "report agent", "shikayat"]
  },

  // =========================================================================
  // 7. ACCOUNT / PLATFORM USAGE
  // =========================================================================
  {
    id: "kb-usage-01",
    category: "Account / Platform Usage",
    tags: ["create account", "save search", "alerts", "compare properties"],
    questionEn: "How do I create an account, save favorite homes, set price alerts, and compare properties?",
    questionHi: "Account kaise banayein, favorites save karein aur properties compare kaise karein?",
    answerEn: "Platform Features on INDSTATE:\n• Account: Click 'Sign In / Register' on the top bar. You can sign up using mobile OTP or email in 30 seconds.\n• Favorites: Click the Heart icon on any property card to save homes to your Dashboard (/dashboard?tab=favorites).\n• Compare Tool: Click the Scale icon on up to 4 property cards, then visit /compare to view side-by-side pricing, carpet area, per-sq.ft rate, and RERA compliance.\n• Alerts: Save your search filter to receive WhatsApp notifications when new verified homes match your budget.",
    answerHi: "INDSTATE features use karne ka tarika:\n• Account: Top bar par 'Sign In' par click karke 30 second me mobile OTP se account banayein.\n• Save Favorites: Property card par bane Heart icon par click karke flats ko Dashboard me save karein.\n• Compare Properties: Scale icon par click karke 4 properties ko ek sath /compare page par side-by-side compare karein.\n• Price Alerts: Search save karein aur naye matching flats aane par WhatsApp notification paayein.",
    keywords: ["account", "register", "favorites", "compare properties", "price alerts", "dashboard", "how to use"]
  },
  {
    id: "kb-usage-02",
    category: "Account / Platform Usage",
    tags: ["contact agent", "whatsapp handoff", "talk to human", "phone support"],
    questionEn: "How do I talk to a human advisor directly or chat with verified agents on WhatsApp?",
    questionHi: "Kisi human agent se seedhe baat ya WhatsApp par contact kaise karein?",
    answerEn: "To connect with a human advisor:\n• On Any Property Page: Click the 'WhatsApp' button or 'Call Agent' button in the agent contact sidebar.\n• In this Chatbot: Simply type 'Talk to agent' or click the WhatsApp Advisor button below to start a live chat.\n• National Toll-Free: Call 1800 208 4000 (Mon–Sat, 9:00 AM to 8:00 PM IST) for free escorted site-visit scheduling.",
    answerHi: "Human advisor se contact karne ke tarike:\n• Property Card ya Page par 'WA' ya 'Call Agent' button par click karein.\n• Iss Chatbot me 'Talk to agent' likhein ya niche diye gaye WhatsApp button par click karein.\n• National Toll-Free number 1800 208 4000 par call karke free site visit schedule karwayein.",
    keywords: ["contact agent", "talk to human", "whatsapp chat", "call advisor", "customer care", "baat karni hai", "human support"]
  },
  {
    id: "kb-usage-03",
    category: "Account / Platform Usage",
    tags: ["data privacy", "phone privacy", "spam protection"],
    questionEn: "How does INDSTATE protect my data and phone number from broker spam?",
    questionHi: "INDSTATE mere phone number ko broker spam aur calls se kaise bachata hai?",
    answerEn: "Spam Protection Policy:\n• Zero Number Selling: INDSTATE never sells or broadcasts your contact number to bulk broker databases.\n• Virtual Connect: Your contact details are shared only with the specific owner or certified RERA agent of the property you explicitly inquiried about.\n• Do-Not-Disturb: You can toggle privacy mode in your Dashboard settings at any time to halt automated callback notifications.",
    answerHi: "Spam Protection Policy:\n• Hum aapka phone number kisi bhi third-party broker ya marketing agency ko nahi bechte.\n• Aapka contact sirf usi property ke verified owner ya agent ko jata hai jisme aapne khud inquiry submit ki ho.\n• Dashboard me jakar aap privacy mode on kar sakte hain jisse unwanted calls na aayein.",
    keywords: ["privacy", "data privacy", "spam calls", "phone protection", "privacy policy", "surakshit"]
  },

  // =========================================================================
  // 8. GENERAL
  // =========================================================================
  {
    id: "kb-gen-01",
    category: "General",
    tags: ["company info", "offices", "city hubs", "toll free", "support email"],
    questionEn: "What is INDSTATE, where are your office hubs, and how do I contact support?",
    questionHi: "INDSTATE company kya hai, aapke offices kahan hain aur contact details kya hain?",
    answerEn: "About INDSTATE:\n• Who We Are: India's Trusted Property Marketplace, localized across all 28 Indian States & UTs with 100% RERA verification.\n• National Toll-Free: 1800 208 4000\n• Support Email: helpdesk@indstate.in / support@indstate.in\n• Regional City Hubs:\n  - Mumbai: Bandra-Kurla Complex (BKC)\n  - Bengaluru: Indiranagar 100 Feet Rd\n  - Delhi NCR: Cyber City, Gurugram\n  - Pune: Koregaon Park\n  - Hyderabad: HITEC City",
    answerHi: "INDSTATE ke baare me:\n• INDSTATE India ka 100% RERA verified property marketplace hai jo 28 Indian states me service provide karta hai.\n• Toll-Free Number: 1800 208 4000\n• Email: helpdesk@indstate.in\n• Regional Hubs: Mumbai (BKC), Bengaluru (Indiranagar), Delhi NCR (Cyber City Gurugram), Pune (Koregaon Park), aur Hyderabad (HITEC City).",
    keywords: ["company info", "about indstate", "office address", "toll free number", "email support", "headquarters", "customer care"]
  },
  {
    id: "kb-gen-02",
    category: "General",
    tags: ["working hours", "response time", "turnaround"],
    questionEn: "What are your working hours and expected response times for property leads?",
    questionHi: "Aapke working hours kya hain aur lead par kitni der me call aati hai?",
    answerEn: "Working Hours & Response Time:\n• Portal & AI Assistant: Available 24/7/365 across web and mobile.\n• Advisor Support Hours: Monday to Saturday, 9:00 AM to 8:00 PM IST; Sunday 10:00 AM to 6:00 PM IST.\n• Lead Turnaround: Certified property advisors respond to callbacks and site-visit inquiries within 30 minutes during working hours.",
    answerHi: "Working Hours aur Response Time:\n• Portal aur AI Assistant: 24 ghante, saaton din (24x7) live rehta hai.\n• Phone Support Hours: Somwar se Shanivar, subah 9:00 baje se raat 8:00 baje tak.\n• Lead Response: Callback ya site visit request submit karne par hamare verified advisors 30 minute ke andar aapse contact karte hain.",
    keywords: ["working hours", "timing", "response time", "call back time", "office timings", "kab call aayega"]
  }
];

export const KNOWLEDGE_BASE_CATEGORIES = [
  "Buying a Property",
  "Renting a Property",
  "Listing / Selling a Property",
  "Legal / RERA / Documentation",
  "Home Loans & Finance",
  "Payments & Platform Trust",
  "Account / Platform Usage",
  "General"
];

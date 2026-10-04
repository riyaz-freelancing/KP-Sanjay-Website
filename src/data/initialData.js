export const INITIAL_ANNOUNCEMENTS = [
  "🔥 Enrollment Open for 2026 Global Trader Masterclass — Limited Seats Available!",
  "📌 Today's Current Affairs & Daily GK Sheet (12 Sept 2026) Published — Check Hub Below!",
  "🚢 Exclusive Live Webinar on Customs Clearance & Buyer Verification this Sunday at 11 AM."
];

export const INITIAL_DAILY_AFFAIRS = [
  {
    id: "affair-12092026",
    date: "2026-09-12",
    displayDate: "12 September 2026",
    dayName: "Friday",
    title: "Current Affairs & Global Trade Roundup — 12 Sept 2026",
    category: "International Trade & Defence",
    subtitle: "UPSC | APPSC | TGPSC | Competitive & Export Exam Special",
    posterUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
    pdfUrl: "#",
    tagline: "Read • Revise • Practice • Succeed",
    topics: [
      {
        id: "t1",
        number: "1",
        title: "18th BRICS Summit 2026",
        theme: "Building for Resilience, Innovation, Cooperation and Sustainability",
        venue: "Bharat Mandapam, New Delhi",
        dates: "12 - 13 September 2026",
        chair: "India (BRICS Chair 2026)",
        newMembers: "Saudi Arabia, UAE, Egypt, Iran, Ethiopia, Indonesia",
        significance: "Strengthens Global South cooperation and inclusive growth in international commerce."
      },
      {
        id: "t2",
        number: "2",
        title: "BRICS - Bharat Innovates Exposition",
        venue: "Bharat Mandapam, New Delhi",
        dates: "11 - 12 September 2026",
        organisedBy: "Ministry of Education + Ministry of External Affairs",
        participants: "37 Indian deep-tech innovators / start-ups",
        focus: "Research, Innovations and Start-up Ecosystem in Export Tech."
      },
      {
        id: "t3",
        number: "3",
        title: "DILRMP 3.0 - Digital Land Records Modernization Programme",
        outlay: "₹565.50 Crore (2026 - 2031)",
        nodalMinistry: "Ministry of Rural Development",
        keyFeature: "GIS-enabled Land Stack with 14-digit Unique Land Parcel ID (ULPIN)",
        objective: "Digitize land records, improve transparency, and streamline export logistics hubs."
      },
      {
        id: "t4",
        number: "4",
        title: "Defence Acquisition Council (DAC) - ₹1.10 Lakh Crore Approval",
        estimatedValue: "₹1,10,000 Crore (Acceptance of Necessity - AoN)",
        indigenousContent: "~98% to be sourced from Indian defence industry exporters",
        keyAcquisitions: "CBRN Recce Vehicles, ALHs, mine layers, bridge systems, logistic support vessels",
        significance: "Major boost to Atmanirbhar Bharat and indigenous defence exports."
      },
      {
        id: "t5",
        number: "5",
        title: "Critical Minerals - India's Strategic Export Priority",
        importance: "Essential for energy security, industrial competitiveness, and clean tech supply chains",
        keySectors: "EVs, semiconductors, green energy, aerospace, telecom",
        focus: "Reduce import dependence and build resilient domestic & global supply chains."
      }
    ],
    mcqs: [
      {
        id: "q1",
        question: "Which city is hosting the 18th BRICS Summit 2026 under India's Chairmanship?",
        options: ["Mumbai", "Bharat Mandapam, New Delhi", "Bengaluru", "Hyderabad"],
        correctIndex: 1,
        explanation: "The 18th BRICS Summit 2026 is held at Bharat Mandapam, New Delhi from 12-13 September 2026 under India's BRICS Chairmanship."
      },
      {
        id: "q2",
        question: "What percentage of indigenous content is mandated for the ₹1.10 Lakh Crore DAC approval?",
        options: ["50%", "75%", "98%", "100%"],
        correctIndex: 2,
        explanation: "Approximately 98% of the ₹1.10 Lakh Crore defence acquisition approved by DAC will be sourced from Indian industry."
      },
      {
        id: "q3",
        question: "Under DILRMP 3.0, what is the length of the Bhu-Aadhaar (ULPIN) parcel ID?",
        options: ["10-digit", "12-digit", "14-digit", "16-digit"],
        correctIndex: 2,
        explanation: "Bhu-Aadhaar under DILRMP 3.0 is a 14-digit Unique Land Parcel Identification Number (ULPIN)."
      }
    ]
  },
  {
    id: "affair-11092026",
    date: "2026-09-11",
    displayDate: "11 September 2026",
    dayName: "Thursday",
    title: "India Foreign Trade Policy & Maritime Logistics Update",
    category: "Foreign Trade & Logistics",
    subtitle: "Daily Current Affairs & Export Documentation Special",
    posterUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    pdfUrl: "#",
    tagline: "Stay Updated • Stay Ahead",
    topics: [
      {
        id: "t11",
        number: "1",
        title: "National Maritime Heritage Complex at Lothal",
        venue: "Lothal, Gujarat",
        significance: "Showcasing India's 4,500-year-old maritime trade legacy and boosting maritime tourism & trade education."
      },
      {
        id: "t12",
        number: "2",
        title: "RBI Digital Rupee (e₹) for International Trade Settlement",
        keyFeature: "Cross-border Instant Settlement without traditional Nostro/Vostro delays",
        objective: "Reduce currency conversion costs for Indian exporters selling to Asian & Gulf markets."
      }
    ],
    mcqs: [
      {
        id: "q11",
        question: "Where is India's National Maritime Heritage Complex being constructed?",
        options: ["Kochi", "Visakhapatnam", "Lothal, Gujarat", "Mundra"],
        correctIndex: 2,
        explanation: "The National Maritime Heritage Complex is being built at Lothal, Gujarat to celebrate India's ancient trade heritage."
      }
    ]
  }
];

export const INITIAL_SOLUTIONS = [
  {
    id: "sol-1",
    title: "Product Selection Masterclass",
    icon: "Target",
    desc: "Identify high-demand, high-margin export products using real-time global customs trade data.",
    highlights: ["HNS Code Identification", "Margin Calculation", "Niche Market Mapping"]
  },
  {
    id: "sol-2",
    title: "International Buyer Finding",
    icon: "Users",
    desc: "Proven techniques to reach genuine overseas importers without paying expensive broker fees.",
    highlights: ["Embassy Database Access", "B2B Portal Strategy", "Cold Emailing Templates"]
  },
  {
    id: "sol-3",
    title: "Payment Terms & Financial Risk",
    icon: "CreditCard",
    desc: "Master Letters of Credit (LC), Advance Payment, TT, and ECGC Credit Insurance policy coverage.",
    highlights: ["Irrevocable LC Audit", "ECGC Risk Cover", "Bank Realization Certificate (BRC)"]
  },
  {
    id: "sol-4",
    title: "Customs & Port Freight Documentation",
    icon: "FileText",
    desc: "Complete step-by-step guidance for Cha Filing, Shipping Bill, Invoice, Bill of Lading, and COO.",
    highlights: ["ICEGATE Registration", "FSSAI & APEDA License", "Certificate of Origin"]
  },
  {
    id: "sol-5",
    title: "Export Business Strategy",
    icon: "TrendingUp",
    desc: "Blueprint to build your own IEC registered export firm from zero capital to recurring shipments.",
    highlights: ["Firm Registration (LLP/Pvt)", "IEC Application", "GST Refund Setup"]
  },
  {
    id: "sol-6",
    title: "Shipping & Freight Forwarding",
    icon: "Ship",
    desc: "Negotiate freight rates with shipping lines (FCL/LCL), container stuffing, and customs clearing.",
    highlights: ["FCL vs LCL Optimization", "Incoterms 2020", "Port Handling"]
  }
];

export const INITIAL_COURSES = [
  {
    id: "c-1",
    badge: "Most Popular",
    title: "Practical Export-Import Mastery Program",
    duration: "4 Weeks Live Mentorship",
    price: "₹9,999",
    originalPrice: "₹19,999",
    features: [
      "Live Step-by-Step Practical Training by KP Sanjay",
      "Access to Verified Overseas Buyer Database",
      "Lifetime WhatsApp Mentorship Community Access",
      "Daily Current Affairs & Customs Updates PDF",
      "Practical IEC & ICEGATE Registration Walkthrough"
    ]
  },
  {
    id: "c-2",
    badge: "Advanced Exporter",
    title: "1-on-1 VIP Export Mentorship & Buyer Guarantee",
    duration: "3 Months Direct Coaching",
    price: "₹24,999",
    originalPrice: "₹45,000",
    features: [
      "1-on-1 Personal Strategy Sessions with KP Sanjay",
      "Personalized Buyer Outreach Campaign Execution",
      "Customs & Legal Contract Vetting",
      "First Deal Handholding until Payment Credit",
      "24/7 Priority Helpline"
    ]
  }
];

export const INITIAL_TESTIMONIALS = [
  {
    id: "t-1",
    name: "Rameshwar Patel",
    city: "Gujarat",
    product: "Spices Exporter to UAE",
    comment: "KP Sanjay sir's buyer finding techniques changed my business! Sent my first 20ft container of cumin seeds to Dubai within 45 days of joining.",
    rating: 5
  },
  {
    id: "t-2",
    name: "Siddharth Reddy",
    city: "Hyderabad",
    product: "Garments Exporter to US",
    comment: "The Daily GK & Customs updates helped me clear my Export Executive certification and start my own clothing export firm. Outstanding mentor!",
    rating: 5
  },
  {
    id: "t-3",
    name: "Ananya Sharma",
    city: "Indore",
    product: "Handicrafts Exporter to Europe",
    comment: "I was scared of payment fraud and LC terms. KP Sanjay taught us ECGC policies so clearly. Now shipping stress-free!",
    rating: 5
  }
];

export const INITIAL_LEADS = [
  {
    id: "lead-1",
    date: "2026-09-13",
    name: "Vikram Malhotra",
    phone: "+91 98765 43210",
    email: "vikram@example.com",
    city: "Delhi",
    interest: "Practical Export-Import Mastery",
    status: "New"
  },
  {
    id: "lead-2",
    date: "2026-09-12",
    name: "Kavitha Swamy",
    phone: "+91 91234 56789",
    email: "kavitha@example.com",
    city: "Chennai",
    interest: "1-on-1 VIP Export Mentorship",
    status: "Contacted"
  }
];

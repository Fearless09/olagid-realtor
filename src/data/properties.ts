export type PropertyType =
  | "Duplex"
  | "Bungalow"
  | "Terrace"
  | "Land Plot"
  | "Commercial Land"
  | "Apartment"
  | "Office Space";
export type PropertyCategory = "sale" | "rent" | "land" | "off-plan";
export type PropertyArea =
  | "Magboro"
  | "Arepo"
  | "Mowe"
  | "Ibafo"
  | "Berger Axis"
  | "Lagos-Ibadan Expressway";
export type PropertyTitleDocument =
  | "Governor's Consent"
  | "Certificate of Occupancy (C of O)"
  | "Registered Survey & Deed"
  | "Gazette"
  | "Court Judgement & Survey";
export type PropertyStatus =
  "Available" | "Selling Fast" | "Newly Listed" | "Under Offer";
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Property {
  id: string;
  title: string;
  slug: string;
  price: number;
  priceFormatted: string;
  usdPrice: string;
  pricePeriod?: string; // e.g. "/ year"
  type: PropertyType;
  category: PropertyCategory;
  location: string;
  area: PropertyArea;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  toilets?: number;
  landSize: string;
  titleDocument: PropertyTitleDocument;
  status: PropertyStatus;
  featured: boolean;
  images: string[];
  description: string;
  amenities: string[];
  paymentPlan?: string;
  neighborhood: string[];
  coordinates?: Coordinates;
}

export const PROPERTIES: Property[] = [
  {
    id: "olagid-prop-01",
    title: "Contemporary 4-Bedroom Fully Detached Duplex + BQ",
    slug: "contemporary-4-bed-detached-duplex-bq-magboro",
    price: 95000000,
    priceFormatted: "₦95,000,000",
    usdPrice: "$68,000",
    type: "Duplex",
    category: "sale",
    location: "Magboro, Ogun State",
    area: "Magboro",
    address: "Off Happy People Estate corridor, Magboro",
    bedrooms: 4,
    bathrooms: 4,
    toilets: 5,
    landSize: "500 SQM",
    titleDocument: "Certificate of Occupancy (C of O)",
    status: "Newly Listed",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "An architectural masterpiece built with structural excellence and modern smart-home provisions. Features a massive anteroom, high-grade Italian porcelain tiles, POP ceiling with ambient LED cove lighting, a chef-grade fitted kitchen with heat extractor and granite countertops, and all en-suite bedrooms with walk-in closets. Located inside a secure, gated environment with uniform security patrol just 12 minutes from Berger, Lagos.",
    amenities: [
      "24/7 Gated Security Patrol",
      "Dedicated High-Voltage Transformer",
      "Water Treatment & Industrial Borehole",
      "Chef-grade Kitchen with Heat Extractor",
      "Spacious Stamp Concrete Compound",
      "CCTV Infrastructure Ready",
      "Pre-installed Inverter & Solar Wiring",
      "Family Lounge Upstairs",
    ],
    paymentPlan: "Outright or 30% Initial Deposit with 12 Months Spread",
    neighborhood: [
      "12 Minutes to Berger Bus Stop, Lagos",
      "5 Minutes to Mountain Top University & MFM Prayer City",
      "3 Minutes to Magboro Central Market & Banks",
      "Near Happy People Estate Gate",
    ],
  },
  {
    id: "olagid-prop-02",
    title: "Prime Dry Residential Plot in Royal Palms Scheme",
    slug: "prime-dry-residential-plot-arepo",
    price: 32000000,
    priceFormatted: "₦32,000,000",
    usdPrice: "$23,000",
    type: "Land Plot",
    category: "land",
    location: "Arepo, Ogun State",
    area: "Arepo",
    address: "Journalists Corridor Extension, Arepo",
    landSize: "648 SQM (1 Full Plot)",
    titleDocument: "Governor's Consent",
    status: "Selling Fast",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "100% dry, table land ready for instant building foundation. Free from all government acquisition and family encumbrances ('Omo Onile' free). Positioned in the prime residential hub of Arepo, popularly referred to as 'Magodo of Ogun State', with interlocking access roads, underground drainage, and high-value neighborhood.",
    amenities: [
      "100% Dry Table Land (No Raft Foundation Required)",
      "Instant Physical Allocation Upon Deposit",
      "Interlocking Access Roads",
      "Drainage & Underground Conduit Electrification",
      "Perimeter Fencing & Guard House",
      "Zero Omo-Onile / Community Disturbance",
    ],
    paymentPlan:
      "Outright Payment attracts 5% discount, or 6 Months Zero-Interest spread",
    neighborhood: [
      "8 Minutes to Berger Lagos Bridge",
      "Near Journalists Estate Phase 1 & 2",
      "Top Private International Schools nearby",
      "Multiple Supermarkets & Fitness Centers",
    ],
  },
  {
    id: "olagid-prop-03",
    title: "Luxury 3-Bedroom Fully Serviced Apartment with Balcony",
    slug: "luxury-3-bed-serviced-apartment-rent-arepo",
    price: 3500000,
    priceFormatted: "₦3,500,000",
    usdPrice: "$2,500",
    pricePeriod: "/ year",
    type: "Apartment",
    category: "rent",
    location: "Arepo, Ogun State",
    area: "Arepo",
    address: "Citadel View Boulevard, Arepo",
    bedrooms: 3,
    bathrooms: 3,
    toilets: 4,
    landSize: "350 SQM",
    titleDocument: "Registered Survey & Deed",
    status: "Available",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Executive brand-new 3-bedroom serviced apartment crafted for modern professionals and families. Offers cross-ventilation, scenic balcony views, expansive living area, modern sanitary wares, water heaters in all bathrooms, fitted wardrobes, and dedicated prepaid electricity meter.",
    amenities: [
      "Serviced Compound with Facility Caretaker",
      "Clean Treated Running Water",
      "Designated Parking (2 Cars per flat)",
      "Uniformed Night & Day Security",
      "Prepaid Meter Installed",
      "Modern Water Heaters & Kitchen Pantry",
    ],
    paymentPlan: "Annual lease (Refundable Caution Deposit & Legal apply)",
    neighborhood: [
      "10 Minutes drive to Alausa Secretariat, Ikeja",
      "Walking distance to Grocery Marts & Pharmacies",
      "Quiet, peaceful residential street",
    ],
  },
  {
    id: "olagid-prop-04",
    title: "Off-Plan: 4-Bedroom Semi-Detached Smart Terraces",
    slug: "off-plan-4-bed-smart-terraces-magboro",
    price: 72000000,
    priceFormatted: "₦72,000,000",
    usdPrice: "$51,500",
    type: "Terrace",
    category: "off-plan",
    location: "Magboro, Ogun State",
    area: "Magboro",
    address: "Happy People Estate Extension, Magboro",
    bedrooms: 4,
    bathrooms: 4,
    toilets: 5,
    landSize: "400 SQM",
    titleDocument: "Certificate of Occupancy (C of O)",
    status: "Selling Fast",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Invest early into Olagid Realtors' signature off-plan smart estate development. Built to European structural benchmarks with anti-seepage damp proofing, reinforced foundation, automated gate access, solar streetlights, and smart locks. Complete milestone reporting provided for clients in Nigeria and Diaspora.",
    amenities: [
      "Smart Keyless Door Access",
      "Solar Street Lighting System",
      "Children's Play Arena & Green Area",
      "Underground Cable Reticulation",
      "24-Hour Armed Security & Electric Fencing",
      "Milestone Construction Video Updates for Diaspora",
    ],
    paymentPlan:
      "25% Commitment Deposit, Balance spread across 18 Months milestone delivery",
    neighborhood: [
      "Close to Lagos-Ibadan Expressway entry slipway",
      "Proximity to international schools & medical clinic",
      "High capital appreciation potential (projected 35% at completion)",
    ],
  },
  {
    id: "olagid-prop-05",
    title: "Commercial Expressway Land (2 Acres / 12 Plots)",
    slug: "commercial-expressway-land-mowe-ibafo",
    price: 180000000,
    priceFormatted: "₦180,000,000",
    usdPrice: "$128,500",
    type: "Commercial Land",
    category: "land",
    location: "Mowe - Ibafo Corridor, Ogun State",
    area: "Mowe",
    address: "Facing Lagos-Ibadan Expressway, Mowe Axis",
    landSize: "2 Acres (8,100 SQM)",
    titleDocument: "Certificate of Occupancy (C of O)",
    status: "Available",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Exceptional commercial real estate asset directly facing the newly expanded 10-lane Lagos-Ibadan Expressway. Ideal for industrial logistics warehousing, manufacturing depot, commercial plaza, filling station, or private school/church campus. Verified documentation and immediate perimeter survey.",
    amenities: [
      "Direct Expressway Frontage",
      "Commercial C of O Title",
      "Solid Dry Ground with High Load-Bearing Capacity",
      "Unrestricted Trailer & Heavy Vehicle Ingress/Egress",
      "Fast Industrial Zone Growth",
    ],
    paymentPlan: "Outright Sale (Flexible structured corporate closing terms)",
    neighborhood: [
      "Adjacent to mega distribution logistics centers",
      "15 minutes to Berger interchange",
      "High daily vehicular traffic count",
    ],
  },
  {
    id: "olagid-prop-06",
    title: "Executive 3-Bedroom Contemporary Bungalow",
    slug: "executive-3-bedroom-contemporary-bungalow-mowe",
    price: 48000000,
    priceFormatted: "₦48,000,000",
    usdPrice: "$34,200",
    type: "Bungalow",
    category: "sale",
    location: "Mowe Town, Ogun State",
    area: "Mowe",
    address: "Off Ofada Road, Mowe",
    bedrooms: 3,
    bathrooms: 3,
    toilets: 4,
    landSize: "450 SQM",
    titleDocument: "Registered Survey & Deed",
    status: "Newly Listed",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Beautifully finished modern bungalow with ample compound space for future expansion or garden. Designed with expansive windows for natural light, security doors, stamped concrete flooring, and contemporary kitchen cabinets.",
    amenities: [
      "All Rooms En-suite",
      "Spacious Compound Parking for 5 Cars",
      "Perimeter Wall with Security Razor Wire",
      "Constant Water Supply with Overhead Tanks",
      "Tarred Estate Access",
    ],
    paymentPlan: "Outright or 40% initial deposit with 6 months tenure",
    neighborhood: [
      "5 Minutes from Mowe Central Roundabout",
      "Easy link to Redemption Camp & RCCG New Auditorium",
      "Serene, quiet residential neighborhood",
    ],
  },
  {
    id: "olagid-prop-07",
    title: "Commercial Office / Retail Space on Expressway Link",
    slug: "commercial-office-retail-space-magboro",
    price: 2200000,
    priceFormatted: "₦2,200,000",
    usdPrice: "$1,570",
    pricePeriod: "/ year",
    type: "Office Space",
    category: "rent",
    location: "Magboro, Ogun State",
    area: "Magboro",
    address: "Main Commercial Avenue, Magboro",
    landSize: "120 SQM",
    titleDocument: "Registered Survey & Deed",
    status: "Available",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "High visibility commercial unit suitable for banking agencies, corporate offices, healthcare diagnostics, real estate advisory, or retail flagship store. Features ample parking, private restroom, and backup generator provisions.",
    amenities: [
      "High Foot & Vehicular Traffic",
      "Dedicated Customer Parking Bay",
      "Modern Glass Facade",
      "24-Hour Security on Duty",
    ],
    paymentPlan: "Annual or Biennial Lease Available",
    neighborhood: [
      "Directly along the primary Magboro arterial road",
      "Surrounded by residential estates and commercial businesses",
    ],
  },
  {
    id: "olagid-prop-08",
    title: "Gated Estate Residential Plots in Emerald Gardens",
    slug: "gated-estate-plots-ibafo",
    price: 18500000,
    priceFormatted: "₦18,500,000",
    usdPrice: "$13,200",
    type: "Land Plot",
    category: "land",
    location: "Ibafo, Ogun State",
    area: "Ibafo",
    address: "Behind Deeper Life Conference Grounds, Ibafo",
    landSize: "500 SQM",
    titleDocument: "Gazette",
    status: "Selling Fast",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Affordable luxury estate land in a rapidly growing corridor. Ideal for building your family home or holding for aggressive capital appreciation. Instant corner-piece allocation option available for early subscribers.",
    amenities: [
      "Gated Community with Gatehouse",
      "Graded Estate Road Network",
      "Electricity Poles Installed",
      "Free Architectural Consultation with Olagid Build Team",
    ],
    paymentPlan: "₦3,000,000 Initial Deposit, balance spread over 12 months",
    neighborhood: [
      "8 Minutes to Berger Lagos",
      "Close to Deeper Life Conference Centre",
      "Fast developing area with new houses under construction",
    ],
  },
];

export const COMPANY_DETAILS = {
  name: "Olagid Realtors Limited",
  shortName: "Olagid Realtors",
  tagline: "Building Wealth Through Verified Lands & Contemporary Homes",
  subheading:
    "Your trusted real estate partner for buying, selling, leasing, and turnkey building construction along the vibrant Lagos-Ogun corridor.",
  address: "No 1, Happy People Estate, Magboro, Ogun State, Nigeria",
  phonePrimary: "0814 871 9223",
  phoneSecondary: "0706 069 9192",
  phoneIntlPrimary: "+2348148719223",
  phoneIntlSecondary: "+2347060699192",
  email: "info@olagidrealtors.com",
  whatsappNumber: "2348148719223",
  whatsappLink:
    "https://wa.me/2348148719223?text=Hello%20Olagid%20Realtors%2C%20I%20would%20like%20to%20inquire%20about%20your%20properties%20and%20building%20services.",
  socialHandles: {
    facebook: "https://facebook.com/Olagidrealtors",
    instagram: "https://instagram.com/Olagidrealtors",
    twitter: "https://twitter.com/Olagidrealtors",
    linkedin: "https://linkedin.com/company/olagidrealtors",
  },
  stats: [
    { value: "500+", label: "Verified Plots Sold" },
    { value: "120+", label: "Homes Built & Handed Over" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Years Experience in Ogun & Lagos" },
  ],
  services: [
    {
      id: "property-sales",
      title: "Property & Land Sales",
      icon: "building",
      description:
        "Carefully vetted luxury homes, contemporary duplexes, bungalows, and dry table land with indisputable government titles (C of O, Governor's Consent, Gazette).",
    },
    {
      id: "building-construction",
      title: "Building & Turnkey Construction",
      icon: "hammer",
      description:
        "From architectural drawings and structural engineering to full foundation-to-roof construction, interior styling, and handover.",
    },
    {
      id: "property-leasing",
      title: "Property Leasing & Rent",
      icon: "key",
      description:
        "High-yield residential apartments, commercial buildings, and retail shops with professional tenancy management.",
    },
    {
      id: "land-documentation",
      title: "Survey & Title Documentation",
      icon: "file-text",
      description:
        "Registered survey plans, perimeter beaconing, Governor's Consent processing, and legal title regularization with zero hassle.",
    },
    {
      id: "diaspora-management",
      title: "Diaspora Real Estate Concierge",
      icon: "globe",
      description:
        "Transparent real estate transactions for Nigerians abroad with HD video inspections, milestone billing, and scam-free guarantees.",
    },
    {
      id: "facility-management",
      title: "Facility & Estate Management",
      icon: "shield-check",
      description:
        "Comprehensive maintenance, security coordination, water treatment servicing, and tenant screening for property owners.",
    },
  ],
  constructionStages: [
    {
      step: "01",
      title: "Consultation & Architectural Design",
      desc: "We discuss your vision, budget, and lifestyle needs, producing 3D realistic exterior renders, detailed floor plans, and structural drawings.",
    },
    {
      step: "02",
      title: "Land Survey & Approvals",
      desc: "Our registered surveyors execute soil tests, perimeter beacon verification, and facilitate all necessary state government building permits.",
    },
    {
      step: "03",
      title: "Structural Engineering & Construction",
      desc: "Robust foundation casting, block laying, beam reinforcement, and roofing using high-grade tested cement and British standard steel.",
    },
    {
      step: "04",
      title: "Luxury Finishing & Handover",
      desc: "Plumbing, electrical wiring, POP ceiling designs, modern tiles, sanitary installations, and official key handover with warranty.",
    },
  ],
  faqs: [
    {
      question:
        "Are your lands and properties free from 'Omo-Onile' (family) disputes?",
      answer:
        "Yes, 100%. Every land and property listed by Olagid Realtors undergoes rigorous legal verification, perimeter survey searches at the Bureau of Lands, and title confirmation before being offered to the public. You get peaceful possession without extortion.",
    },
    {
      question:
        "I live outside Nigeria (Diaspora). How can I monitor my building project?",
      answer:
        "We offer our dedicated Diaspora Concierge service. You receive structured milestone contracts, weekly high-definition video walkthroughs, drone footage, and direct video calls with the supervising project engineer at every stage before milestone funds are disbursed.",
    },
    {
      question: "Can I pay in installments for land or off-plan homes?",
      answer:
        "Yes! Most of our estates and off-plan homes offer flexible installment structures ranging from 6 to 18 months following an initial commitment deposit.",
    },
    {
      question: "Where is your corporate office located?",
      answer:
        "Our head office is located at No. 1, Happy People Estate, Magboro, Ogun State, Nigeria (along the Lagos-Ibadan expressway corridor, just minutes from Berger).",
    },
    {
      question: "What documents do I receive upon purchasing a property?",
      answer:
        "Depending on the property and payment tier, you receive an official Payment Receipt, Contract of Sale, Letter of Allocation, Registered Survey Plan, and Deed of Assignment executed by Olagid Realtors Limited.",
    },
  ],
};

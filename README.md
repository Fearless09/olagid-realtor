# Olagid Realtors Limited — Web Platform (MVP Frontend Demo)

> **"Building Wealth Through Verified Lands & Contemporary Homes"**  
> Physical Headquarters: **No 1, Happy People Estate, Magboro, Ogun State, Nigeria**  
> Operational Territory: **Magboro, Arepo, Mowe, Ibafo, Berger / Lagos-Ibadan Expressway Corridor**

---

## 🌟 Overview

**Olagid Realtors Limited** is a registered Nigerian real estate development and brokerage firm. This project provides a web platform engineered for property buyers, land investors, tenants, and Nigerians in the Diaspora.

The MVP demo implements the full client-side experience:
- **Interactive Multi-Category Property & Land Marketplace** (Buying, Selling, Leasing, and Off-Plan developments).
- **Turnkey Architectural & Building Construction Hub** with milestone roadmaps, portfolio showcases, and a free feasibility/quote calculator.
- **Diaspora Safe-Invest Concierge** addressing cross-border investor fraud with video tours, milestone-gated escrow, and verified survey searches.
- **Mortgage & Developer Installment Planner** with real-time 0% developer direct spread calculations.
- **Inspection Booking Modal** supporting both Physical On-Site Visits and Virtual HD Video Tours with direct WhatsApp routing.
- **Land Documentation & Title Perfection Services** (C of O, Governor's Consent, Registered Survey & Beaconing).

---

## 🚀 Key Features

### 1. Dynamic Property Catalog & Search Engine (`/properties`)
- Search by keyword (title, area, specs, description).
- Filter by category (**For Sale**, **Land Plots**, **For Rent**, **Off-Plan**).
- Filter by location (**Magboro**, **Arepo**, **Mowe**, **Ibafo**, **Berger Axis**).
- Filter by budget range and property type (Duplex, Bungalow, Terrace, Land Plot, Commercial Acreage, Serviced Apartment).
- Sorting by Price (Low to High, High to Low) and Newest.

### 2. Comprehensive Property Dossier (`/properties/[id]`)
- Interactive photo gallery with thumbnail switcher.
- Specifications bar (Bedrooms, Bathrooms, Plot/Floor Size in SQM, Verified Title).
- Detailed narrative, verified title documents badge, and estate amenities list.
- Neighborhood landmarks and proximity highlights.
- Property-specific installment estimator.
- Direct inspection booking and pre-populated WhatsApp agent chat.

### 3. Turnkey Architectural & Construction Hub (`/build`)
- 4-stage construction roadmap (Design & 3D Renders ➔ Survey & Approvals ➔ Civil Construction ➔ Luxury Finishing & Handover).
- Visual portfolio of delivered duplexes, terraces, and bungalows.
- Interactive Construction Feasibility & Quote Request Form.

### 4. Land Survey & Title Documentation (`/services`)
- Cadastral boundary survey and permanent beacon placement.
- Certificate of Occupancy (C of O) & Governor's Consent regularizations.
- Legal title search at Ogun and Lagos state land registries.
- Facility and tenancy management services for diaspora property owners.

### 5. Corporate Credibility (`/about` & `/contact`)
- Verified physical office: No 1, Happy People Estate, Magboro, Ogun State.
- Verified hotlines: `0814 871 9223` / `0706 069 9192`.
- Direct interactive messaging form with instant feedback and direct WhatsApp handoff.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with React 19 & Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with bespoke luxury real estate design tokens
- **Icons**: `react-icons` (Fi, Fa, Fa6, Io5, Pi)
- **State Management**: React Hooks (`useState`, `useMemo`, `useSearchParams`)
- **Documentation**: [PRD.md](./PRD.md)

---

## 📂 Project Structure

```bash
olagid/
├── PRD.md                  # Comprehensive Product Requirements Document
├── README.md               # Project documentation
├── public/                 # Static assets and icons
├── src/
│   ├── app/
│   │   ├── about/          # Company history, mission, and core values
│   │   ├── build/          # Turnkey architectural & construction services
│   │   ├── contact/        # Office address, telephone hotlines, inquiry form
│   │   ├── properties/     # Filterable marketplace & dynamic listing details
│   │   │   ├── [id]/       # Dynamic single property dossier with gallery
│   │   │   └── page.tsx    # Property catalog page
│   │   ├── services/       # Land survey, title regularization, facility care
│   │   ├── globals.css     # Tailwind v4 theme & glassmorphic styles
│   │   ├── layout.tsx      # Root layout with SEO and metadata
│   │   └── page.tsx        # Home page (Hero, Search, Featured, Diaspora, FAQs)
│   ├── components/
│   │   ├── DiasporaConcierge.tsx   # Cross-border investment security block
│   │   ├── Footer.tsx              # Corporate footer with address and links
│   │   ├── HeroSearch.tsx          # Multi-tab search component
│   │   ├── InspectionModal.tsx     # Physical/video tour booking scheduler
│   │   ├── MortgageCalculator.tsx  # Installment & mortgage financial planner
│   │   ├── Navbar.tsx              # Glassmorphic header with quick contact
│   │   └── PropertyCard.tsx        # High-conversion property preview card
│   └── data/
│       └── properties.ts   # Property catalog, company details, FAQs
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+ or 20+
- `pnpm` (recommended), `npm`, or `yarn`

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd olagid

# Install dependencies
pnpm install
```

### Running Locally (Development)
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production
```bash
pnpm build
pnpm start
```

---

## 📄 Documentation

For full product specifications, user personas, data models, and the post-MVP roadmap, read the [Product Requirements Document (PRD.md)](./PRD.md).

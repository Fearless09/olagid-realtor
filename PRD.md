# Product Requirements Document (PRD)

## Project Name: Olagid Realtors Web Platform (MVP Frontend Demo)
**Company**: Olagid Realtors Limited  
**Operational Headquarters**: No. 1, Happy People Estate, Magboro, Ogun State, Nigeria  
**Version**: 1.0.0 (MVP)  
**Status**: Completed (Frontend Demo Stage)  
**Target Markets**: Lagos–Ogun Growth Corridor (Magboro, Arepo, Mowe, Ibafo, Berger Axis) & Nigerian Diaspora (UK, US, Canada, Europe)

---

## 1. Executive Summary
**Olagid Realtors Limited** is a premier real estate brokerage, property development, and land acquisition firm operating strategically along the Lagos-Ibadan expressway corridor. 

The primary business objectives of Olagid Realtors are:
1. Facilitating scam-free sales of verified residential and commercial lands with authentic titles (C of O, Governor's Consent, Gazette).
2. Selling contemporary residential homes (luxury duplexes, terraces, bungalows).
3. Leasing high-yield residential apartments and commercial properties.
4. Providing turnkey architectural design and construction supervision from foundation casting to luxury handover.
5. Offering secure, transparent real estate acquisition for Nigerians in Diaspora.

This document outlines the requirements and system design for the frontend MVP demo platform.

---

## 2. Target Personas & Problem Statements

### Persona 1: The Aspirant Lagos/Ogun Homebuyer
- **Profile**: Working professionals and families in Lagos seeking affordable luxury, serenity, and value appreciation along the Magboro/Arepo corridor (10–15 mins from Berger/Alausa).
- **Pain Point**: Fear of buying encumbered property, family disputes ("Omo-Onile"), double-selling, and poor estate infrastructure.
- **Solution**: Olagid's verified title badge guarantee, transparent pricing, and instant on-site inspection booking.

### Persona 2: The Diaspora Investor
- **Profile**: Nigerians living in the United Kingdom, United States, Canada, and Europe who want to build a family home or acquire wealth-generating real estate in Nigeria.
- **Pain Point**: Past experiences of being defrauded by friends or relatives, inflated building material receipts, and abandoned construction projects.
- **Solution**: Dedicated **Diaspora Safe-Invest Concierge** with scheduled live HD video inspections, milestone-gated payment structures, and courier delivery of original title documents.

### Persona 3: Commercial & Land Speculators
- **Profile**: Business owners seeking logistics depots, factories, schools, or churches facing the Lagos-Ibadan expressway corridor.
- **Pain Point**: Difficulty verifying land zoning, survey boundaries, and high-voltage transmission rights of way.
- **Solution**: Cadastral boundary maps, licensed surveyor documentation, and dry table land readiness.

---

## 3. Core Product Modules (MVP Implementation)

### Module 1: Navigation & Corporate Credibility Engine
- **Sticky Glassmorphic Header**: Corporate branding, quick-contact bar (direct telephone `0814 871 9223`, Magboro HQ indicator), and primary navigation links.
- **Corporate Footer**: Full legal registration statement, physical office location (*No 1, Happy People Estate, Magboro*), operational hours, social media links (`@Olagidrealtors`), and direct WhatsApp link.

### Module 2: Dynamic Property & Land Marketplace
- **Multi-Category Filter**: Instant switching between **All Properties**, **Houses For Sale**, **Land Plots**, **Rentals & Leases**, and **Off-Plan Builds**.
- **Interactive Multi-Filter Tool**:
  - Keyword Search (titles, locations, specs).
  - Corridor Location (Magboro, Arepo, Mowe, Ibafo, Berger Axis).
  - Property Type (Duplex, Bungalow, Terrace, Land Plot, Commercial Land, Apartment, Office Space).
  - Budget Brackets (Under ₦25M, ₦25M–₦50M, ₦50M–₦100M, Above ₦100M).
  - Sorting (Newest, Price: Low to High, Price: High to Low).
- **Verified Property Cards**: Badges for Title Documents (*C of O, Governor's Consent, Gazette*), currency formatting (₦ NGN with estimated $ USD), bedroom/bathroom specs, land dimension in SQM, and direct inspection booking.

### Module 3: Deep-Dive Property Dossier (`/properties/[id]`)
- **Interactive Photo Gallery**: Main hero display with thumbnail selector and counter.
- **Technical Specifications**: Bedrooms, bathrooms, land size, title document category, and neighborhood proximity.
- **Amenities Checklist**: Checked verification of 24/7 security, power transformer, drainage, and smart home provisions.
- **Payment Structure**: Details on outright purchases vs. 6–18 month developer installment spreads.
- **Contextual Installment Calculator**: Preloaded with the specific property's price tag.
- **Direct Agent Lead Capture**: Pre-populated WhatsApp message link containing the property ID, title, and asking price.

### Module 4: Turnkey Building & Construction Hub (`/build`)
- **4-Stage Construction Roadmap**:
  1. *Consultation & 3D Architectural Blueprinting*
  2. *Land Survey, Soil Test & Government Permits*
  3. *Structural Engineering & Civil Construction*
  4. *Luxury Finishing, POP & Final Handover*
- **Realized Project Portfolio**: Visual showcase of duplexes and terraces delivered in Magboro, Arepo, and Mowe.
- **Interactive Construction Feasibility Form**: Collects land ownership status, building preference, location, and budget with instant confirmation and direct WhatsApp routing.

### Module 5: Land Documentation & Survey Desk (`/services`)
- **Land Surveying & Beaconing**: Registered survey plan lodgement and boundary beaconing.
- **Title Perfection**: Certificate of Occupancy (C of O), Governor's Consent, and Deed of Assignment legal processing.
- **Due Diligence & Title Search**: Forensic investigation at the Ogun & Lagos State Ministry of Lands archives.
- **Facility & Tenancy Management**: Tenant vetting, rent collection, and facility preservation for absentee landlords.

### Module 6: Diaspora Safe-Invest Concierge
- **4 Pillars of Diaspora Security**:
  - Live HD Video & Drone Walkthroughs (no proxy hearsay).
  - Zero "Omo-Onile" legal guarantee.
  - Milestone-gated escrow disbursements.
  - International courier delivery of stamped legal deeds.
- **Live Video Tour Booking**: Modal scheduling option specifically tailored for virtual inspections across global time zones.

### Module 7: Financial Decision Tools (Mortgage & Installment Planner)
- Real-time client-side calculation of:
  - Down payment amount (20%, 30%, 40%, 50%).
  - Financed balance.
  - Spread tenure (6, 12, 18, 24 months, or extended years).
  - Toggle between **0% Olagid Developer Spread** and commercial bank mortgage rates.

### Module 8: Lead Generation & Inspection Scheduler
- Universal modal dialog accessible across all pages.
- Allows user to choose between **Physical On-Site Inspection** or **Virtual Video Tour**.
- Captures Name, Phone, Email, Date, Time Slot, and Custom Notes.
- Provides immediate success confirmation and instant WhatsApp handoff.

---

## 4. Technical Architecture & Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | High-performance Static Site Generation (SSG) with React 19 & Turbopack |
| **Language** | TypeScript | Strict type safety for data models (`Property`, `CompanyDetails`) |
| **Styling** | Tailwind CSS v4 | Bespoke real estate aesthetic (Emerald `#064e3b`, Gold `#d97706`, Dark Slate `#022c22`) |
| **Icons** | React Icons (`fi`, `fa`, `fa6`, `io5`, `pi`) | Semantic icon system for specs, contacts, and badges |
| **State & Interactivity** | React Hooks (`useState`, `useMemo`) | Zero-latency client-side filtering, sorting, and modal controls |
| **SEO & Sharing** | OpenGraph + JSON-LD Schema | Pre-configured for Google RealEstateAgent indexing |

---

## 5. Non-Functional Requirements

1. **Performance**: Initial load under 1.5s on 4G networks; lightweight asset bundle.
2. **Mobile-First Experience**: 100% responsive on all mobile devices (crucial for Nigerian WhatsApp-driven traffic).
3. **Accessibility**: Semantic HTML5 tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), descriptive ARIA labels, high-contrast text.
4. **Data Privacy**: Client inquiry details handled client-side without public exposure.

---

## 6. Future Post-MVP Roadmap (Phase 2 & 3)

- **Backend Integration**: Supabase or PostgreSQL database with Prisma ORM for dynamic property updates.
- **Admin CMS**: Secure management dashboard for Olagid staff to upload new listings, mark properties as "Sold", and manage inspection bookings.
- **Client Project Portal**: Private login area for building clients to track daily construction logs, photos, and approve milestone invoices.
- **Interactive Map Search**: Mapbox/Leaflet integration showing verified land beacons and neighborhood infrastructure.

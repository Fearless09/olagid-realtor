"use client";

import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import InspectionModal from "@/components/modals/InspectionModal";
import { COMPANY_DETAILS } from "@/data/properties";
import {
  FiFileText,
  FiCompass,
  FiShield,
  FiKey,
  FiCheckCircle,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ServicesPage() {
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);

  const servicesList = [
    {
      icon: <FiCompass className="text-3xl text-emerald-700" />,
      title: "Land Surveying & Beaconing",
      desc: "Accurate cadastral boundary surveys conducted by registered surveyors. We establish permanent concrete boundary pillars (beacons) and lodge certified survey plans with the Surveyor General's office.",
      features: [
        "Perimeter & Topographical Boundary Surveys",
        "Registered Survey Plan Lodgement",
        "Permanent Boundary Beacon Placement",
        "Ogun & Lagos Charting & Verification",
      ],
    },
    {
      icon: <FiFileText className="text-3xl text-amber-600" />,
      title: "Title Processing & Regularization",
      desc: "Fast-track and legally secure your land title. We facilitate Certificate of Occupancy (C of O) applications, Governor's Consent processing, Deed of Assignment execution, and title perfection at state land registries.",
      features: [
        "Certificate of Occupancy (C of O) Filing",
        "Governor's Consent Procurement",
        "Deed of Legal Assignment Drafting & Stamping",
        "Gazette & Excision Regularization",
      ],
    },
    {
      icon: <FiShield className="text-3xl text-emerald-700" />,
      title: "Legal Land Due Diligence & Search",
      desc: "Never buy land blind. Our legal and surveyor team performs forensic investigation into title registries to verify government acquisition status, court judgements, and true ownership lineage before you commit funds.",
      features: [
        "Bureau of Lands Archive Verification",
        "Government Committed Acquisition Checks",
        "Family / Community Chieftaincy Confirmation",
        "Comprehensive Title Investigation Report",
      ],
    },
    {
      icon: <FiKey className="text-3xl text-amber-600" />,
      title: "Facility & Tenancy Management",
      desc: "Maximizing rental yields and keeping your real estate assets in prime condition. Ideal for property owners in Nigeria or residing in diaspora.",
      features: [
        "Rigorous Tenant Vetting & Screening",
        "Prompt Annual Rent Collection & Remittance",
        "Routine Facility Maintenance & Servicing",
        "Dedicated Caretaker & Security Coordination",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfdfd]">
      <Navbar onOpenInspectionModal={() => setInspectionModalOpen(true)} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#022c22] via-[#064e3b] to-[#047857] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">
              Legal Security • Surveying • Property Care
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
              Land Documentation & Advisory Services
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-emerald-100/80 sm:text-base">
              We eliminate real estate risks with authentic title searches,
              registered survey plans, title perfection, and comprehensive
              property facility management.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {servicesList.map((srv, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xs transition-all duration-300 hover:border-emerald-600/40 hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                    {srv.icon}
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-slate-900">
                    {srv.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {srv.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    {srv.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700"
                      >
                        <FiCheckCircle className="shrink-0 text-emerald-700" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Olagid Realtors, I would like to inquire about your "${srv.title}" service.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-900 transition-all hover:bg-emerald-100"
                  >
                    <FaWhatsapp className="text-sm text-emerald-700" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setInspectionModalOpen(true)}
                    className="cursor-pointer rounded-xl bg-[#064e3b] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#047857]"
                  >
                    Request Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Title Verification Alert Box */}
        <section className="border-y border-amber-500/20 bg-amber-500/10 py-12">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-bold text-slate-900">
                Bought Land Elsewhere and Need a Registered Survey or C of O?
              </h4>
              <p className="text-xs text-slate-600 sm:text-sm">
                Our licensed surveyors and legal associates handle
                regularizations directly at Abeokuta & Alausa registries.
              </p>
            </div>
            <a
              href={`tel:${COMPANY_DETAILS.phonePrimary}`}
              className="flex shrink-0 items-center gap-2 rounded-xl bg-[#064e3b] px-6 py-3 text-xs font-bold text-white shadow-md sm:text-sm"
            >
              <FiPhone className="text-amber-300" />
              <span>Speak to Survey Desk: {COMPANY_DETAILS.phonePrimary}</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />

      <InspectionModal
        isOpen={inspectionModalOpen}
        onClose={() => setInspectionModalOpen(false)}
      />
    </div>
  );
}

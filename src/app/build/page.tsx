"use client";

import React, { useState } from "react";
import Image from "next/image";
import InspectionModal from "@/components/modals/InspectionModal";
import DiasporaConcierge from "@/components/shared/DiasporaConcierge";
import { COMPANY_DETAILS } from "@/data/properties";
import {
  FiCheckCircle,
  FiArrowRight,
  FiPhone,
  FiUser,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaHammer } from "react-icons/fa6";

export default function BuildPage() {
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [plotStatus, setPlotStatus] = useState("I already own a land plot");
  const [projectType, setProjectType] = useState(
    "4-Bedroom Contemporary Duplex",
  );
  const [budgetBracket, setBudgetBracket] = useState("₦40M - ₦70M");
  const [projectLocation, setProjectLocation] = useState("Magboro");

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  const whatsappQuoteMsg = encodeURIComponent(
    `Hello Olagid Realtors Build Team! I requested a construction quote:\n` +
      `• Name: ${clientName}\n` +
      `• Project Type: ${projectType}\n` +
      `• Land Status: ${plotStatus}\n` +
      `• Target Location: ${projectLocation}\n` +
      `• Estimated Budget: ${budgetBracket}\n` +
      `• Phone: ${phone}\n` +
      `Please provide an architectural and structural feasibility assessment.`,
  );

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#022c22] via-[#043b2f] to-[#064e3b] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px] opacity-10" />

        <div className="wrapper relative z-10 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-emerald-900/80 px-4 py-1.5 text-xs font-bold tracking-wider text-amber-300 uppercase">
            <FaHammer className="text-amber-400" />
            <span>Turnkey Architectural Design & Construction</span>
          </div>
          <h1 className="text-3xl leading-tight font-black tracking-tight sm:text-5xl lg:text-6xl">
            We Build Contemporary Homes With{" "}
            <span className="text-amber-400">Structural Excellence</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-emerald-100/80 sm:text-base">
            From soil testing and 3D architectural blueprint to solid foundation
            casting, roofing, and luxury interior finishing. We turn your land
            into a lasting legacy.
          </p>
        </div>
      </section>

      {/* 4-Stage Building Lifecycle */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl space-y-2 text-center">
          <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase">
            Transparent Project Management
          </span>
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Our 4-Stage Turnkey Building Roadmap
          </h2>
          <p className="text-xs text-slate-500 sm:text-sm">
            Clear milestone progression so you know exactly where every kobo of
            your investment goes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COMPANY_DETAILS.constructionStages.map((stage, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xs transition-all duration-300 hover:border-emerald-600/30 hover:shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-2xl font-black text-amber-600">
                    {stage.step}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                    Stage {idx + 1}
                  </span>
                </div>
                <h3 className="text-lg leading-snug font-bold text-slate-900">
                  {stage.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  {stage.desc}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-4 text-xs font-bold text-emerald-800">
                <FiCheckCircle className="text-emerald-600" />
                <span>Quality Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Construction Portfolio Gallery */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">
                Realized Projects
              </span>
              <h2 className="mt-1 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Recent Architectural & Construction Portfolio
              </h2>
              <p className="mt-1 max-w-xl text-xs text-slate-400 sm:text-sm">
                A snapshot of turnkey residential and commercial projects
                developed by Olagid Realtors along the Lagos-Ibadan axis.
              </p>
            </div>

            <a
              href={COMPANY_DETAILS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 self-start rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white transition-all hover:bg-emerald-700 md:self-auto"
            >
              <FaWhatsapp className="text-base" />
              <span>Request Project Video Catalogue</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Executive 4-Bedroom Detached Contemporary Duplex",
                loc: "Magboro, Ogun State",
                stage: "Handed Over (100% Complete)",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Smart 4-Bedroom Semi-Detached Terrace Units",
                loc: "Arepo, Ogun State",
                stage: "Finishing & Interior Styling",
                img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80",
              },
              {
                title: "Contemporary 3-Bedroom Raised Bungalow",
                loc: "Mowe Town, Ogun State",
                stage: "Handed Over to Diaspora Client",
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
              },
            ].map((proj, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-amber-400/50"
              >
                <div className="relative aspect-16/11 w-full overflow-hidden bg-slate-800">
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded bg-emerald-900/90 px-2.5 py-1 text-[10px] font-bold text-amber-300 backdrop-blur-xs">
                    {proj.stage}
                  </div>
                </div>
                <div className="space-y-1 p-5">
                  <h3 className="text-base font-bold text-white transition-colors group-hover:text-amber-400">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <FiMapPin className="text-amber-400" />
                    <span>{proj.loc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Construction Quote Estimator Form */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl sm:p-10">
          <div className="mx-auto mb-8 max-w-2xl space-y-2 text-center">
            <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase">
              Direct Construction Feasibility
            </span>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Request A Construction Quote & Feasibility
            </h2>
            <p className="text-xs text-slate-500 sm:text-sm">
              Tell us about your target building project. Our engineering desk
              will prepare a free preliminary cost estimate and milestone
              schedule.
            </p>
          </div>

          {quoteSubmitted ? (
            <div className="mx-auto max-w-md space-y-4 py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-800">
                <FiCheckCircle />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Quote Request Received!
              </h3>
              <p className="text-xs leading-relaxed text-slate-600">
                Thank you,{" "}
                <strong className="text-emerald-950">{clientName}</strong>. Our
                chief structural engineer will review your project details and
                contact you via{" "}
                <strong className="text-emerald-950">{phone}</strong>.
              </p>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappQuoteMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-800"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Send Directly via WhatsApp</span>
                </a>
                <button
                  onClick={() => setQuoteSubmitted(false)}
                  className="rounded-xl border border-slate-300 px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleQuoteSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute top-3.5 left-3.5 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chief Adeleke"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 py-2.5 pr-3 pl-10 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase">
                    Phone Number / WhatsApp *
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute top-3.5 left-3.5 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+234 or international format"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 py-2.5 pr-3 pl-10 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase">
                    Land Status
                  </label>
                  <select
                    value={plotStatus}
                    onChange={(e) => setPlotStatus(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 focus:border-emerald-600 sm:text-sm"
                  >
                    <option>I already own a land plot</option>
                    <option>I want to buy land + build</option>
                    <option>Need land survey & soil test first</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase">
                    Building Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 focus:border-emerald-600 sm:text-sm"
                  >
                    <option>4-Bedroom Contemporary Duplex</option>
                    <option>5-Bedroom Luxury Mansion</option>
                    <option>Block of 4 Flats / Terraces</option>
                    <option>3-Bedroom Detached Bungalow</option>
                    <option>Commercial Plaza / Warehouses</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase">
                    Target Location
                  </label>
                  <select
                    value={projectLocation}
                    onChange={(e) => setProjectLocation(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 focus:border-emerald-600 sm:text-sm"
                  >
                    <option>Magboro</option>
                    <option>Arepo</option>
                    <option>Mowe</option>
                    <option>Ibafo</option>
                    <option>Berger / Lagos Border</option>
                    <option>Other Ogun/Lagos Area</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold text-slate-700 uppercase">
                  Approximate Construction Budget
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    "₦30M - ₦50M",
                    "₦50M - ₦80M",
                    "₦80M - ₦120M",
                    "Above ₦120M",
                  ].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudgetBracket(b)}
                      className={`cursor-pointer rounded-xl px-3 py-2 text-xs font-bold transition-all ${
                        budgetBracket === b
                          ? "bg-[#064e3b] text-white shadow-xs"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#064e3b] to-[#047857] px-6 py-4 text-sm font-bold text-white shadow-md transition-all hover:from-[#047857] hover:to-[#065f46]"
                >
                  <span>Request Free Construction Assessment & Quote</span>
                  <FiArrowRight />
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Diaspora Section Reusable */}
      <DiasporaConcierge />
    </main>
  );
}

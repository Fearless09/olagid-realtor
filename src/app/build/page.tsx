"use client";

import React, { SubmitEvent, useMemo, useState } from "react";
import Image from "next/image";
import DiasporaConcierge from "@/components/shared/DiasporaConcierge";
import {
  COMPANY_DETAILS,
  PROPERTIES,
  PropertyArea,
  PropertyType,
} from "@/data/properties";
import { FiCheckCircle, FiPhone, FiUser, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaHammer } from "react-icons/fa6";
import Link from "next/link";
import SelectGroup from "@/components/ui/SelectGroup";
import { LuMoveRight } from "react-icons/lu";

export default function BuildPage() {
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [plotStatus, setPlotStatus] = useState(landStatus[0]);
  const [projectType, setProjectType] = useState<PropertyType>("Duplex");
  const [budgetBracket, setBudgetBracket] = useState("₦40M - ₦70M");
  const [projectLocation, setProjectLocation] =
    useState<PropertyArea>("Magboro");

  const handleQuoteSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  const whatsappLink = useMemo(() => {
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
    return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappQuoteMsg}`;
  }, [
    clientName,
    phone,
    plotStatus,
    projectType,
    budgetBracket,
    projectLocation,
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#022c22] via-[#043b2f] to-[#064e3b] py-16 text-white lg:py-24">
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px] opacity-10" />

        <section className="wrapper relative z-10 space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-emerald-900/80 px-4 py-1.5 text-xs font-bold tracking-wider text-amber-300 uppercase">
            <FaHammer className="text-amber-400" />
            <span>Turnkey Architectural Design & Construction</span>
          </span>

          <h1 className="text-3xl leading-tight font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
            We Build Contemporary Homes With{" "}
            <span className="text-amber-400">Structural Excellence</span>
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-emerald-100/80 sm:text-base">
            From soil testing and 3D architectural blueprint to solid foundation
            casting, roofing, and luxury interior finishing. We turn your land
            into a lasting legacy.
          </p>
        </section>
      </section>

      {/* 4-Stage Building Lifecycle */}
      <section className="wrapper py-20">
        <div className="mx-auto mb-16 max-w-2xl space-y-2 text-center text-balance">
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

        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COMPANY_DETAILS.constructionStages.map((stage, idx) => (
            <div
              key={idx}
              className="transition-300 flex flex-col justify-between space-y-4 rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xs hover:border-emerald-600/30 hover:shadow-xl md:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-2xl font-black text-amber-600">
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

              <div className="flex items-center gap-1.5 border-t border-slate-100 pt-4 text-xs font-bold text-emerald-800">
                <FiCheckCircle className="text-emerald-600" />
                <span>Quality Verified</span>
              </div>
            </div>
          ))}
        </main>
      </section>

      {/* Construction Portfolio Gallery */}
      <section className="bg-slate-900 py-20 text-white">
        <section className="wrapper">
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

          <main className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROPERTIES.slice(0, 3).map((proj, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-amber-400/50"
              >
                <div className="relative aspect-16/11 w-full overflow-hidden bg-slate-800">
                  <Image
                    src={proj.images[0]}
                    alt={proj.title}
                    fill
                    className="transition-300 object-cover object-center group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded bg-emerald-900/90 px-2.5 py-1 text-[10px] font-bold text-amber-300 backdrop-blur-xs">
                    {tags[idx]}
                  </span>
                </div>

                <div className="space-y-1 p-5">
                  <h3 className="transition-300 text-base font-bold text-white group-hover:text-amber-400">
                    {proj.title}
                  </h3>
                  <p className="flex items-center gap-1 text-xs text-slate-400">
                    <FiMapPin className="text-amber-400" />
                    <span>{proj.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </main>
        </section>
      </section>

      {/* Interactive Construction Quote Estimator Form */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl sm:px-8 sm:py-10">
          <div className="mx-auto mb-8 max-w-2xl space-y-2 text-center text-pretty">
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
            <main className="mx-auto max-w-md space-y-4 py-8 text-center">
              <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-800">
                <FiCheckCircle />
              </span>

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
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-300 flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-xs font-bold text-white shadow-md hover:bg-emerald-800"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Send Directly via WhatsApp</span>
                </Link>
                <button
                  onClick={() => setQuoteSubmitted(false)}
                  className="cursor-pointer rounded-xl border border-slate-300 px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Submit Another Request
                </button>
              </div>
            </main>
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
                <SelectGroup
                  id="land-status"
                  label="Land Status"
                  value={plotStatus}
                  onChange={(e) => setPlotStatus(e.target.value)}
                  options={landStatus.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                />

                <SelectGroup
                  id="building-type"
                  label="Property Type"
                  value={projectType}
                  onChange={(e) =>
                    setProjectType(e.target.value as PropertyType)
                  }
                  options={types.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                />

                <SelectGroup
                  id="location"
                  label="Target Location"
                  value={projectLocation}
                  onChange={(e) =>
                    setProjectLocation(e.target.value as PropertyArea)
                  }
                  options={locations.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                />
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
                      className={`transition-300 cursor-pointer rounded-xl px-3 py-2 text-xs font-bold ${
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
                  className="transition-300 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#064e3b] to-[#047857] px-6 py-4 text-sm font-bold text-white shadow-md hover:from-[#047857] hover:to-[#065f46]"
                >
                  <span>Request Free Construction Assessment & Quote</span>
                  <LuMoveRight />
                </button>
              </div>
            </form>
          )}
        </section>
      </section>

      {/* Diaspora Section Reusable */}
      <DiasporaConcierge />
    </>
  );
}

const landStatus = [
  "I already own a land plot",
  "I want to buy land & build",
  "Need land survey & soil test first",
];

const tags = [
  "Handed Over (100% Complete)",
  "Finishing & Interior Styling",
  "Handed Over to Diaspora Client",
  "Foundation Casting & Lintels",
];

const locations: { value: PropertyArea; label: string }[] = [
  { value: "Magboro", label: "Magboro" },
  { value: "Arepo", label: "Arepo" },
  { value: "Mowe", label: "Mowe" },
  { value: "Ibafo", label: "Ibafo" },
  { value: "Berger Axis", label: "Berger Axis" },
  { value: "Lagos-Ibadan Expressway", label: "Lagos-Ibadan Expressway" },
];

const types: { value: PropertyType; label: string }[] = [
  { value: "Duplex", label: "Contemporary Duplex" },
  { value: "Bungalow", label: "Detached Bungalow" },
  { value: "Terrace", label: "Smart Terrace" },
  { value: "Land Plot", label: "Dry Land Plot (500-648 SQM)" },
  { value: "Commercial Land", label: "Commercial Acreage" },
  { value: "Apartment", label: "Serviced Apartment" },
  { value: "Office Space", label: "Office Space" },
];

const recent = [
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
];

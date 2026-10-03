"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FiSearch,
  FiMapPin,
  FiHome,
  FiDollarSign,
  FiShield,
} from "react-icons/fi";
import {
  PropertyArea,
  PropertyCategory,
  PropertyType,
} from "@/data/properties";
import { LuMoveRight } from "react-icons/lu";
import SelectGroup from "../ui/SelectGroup";

export default function HeroSearch() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("sale");
  const [location, setLocation] = useState<Location>("all");
  const [propertyType, setPropertyType] = useState<Type>("all");
  const [budget, setBudget] = useState<string>("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === "build") {
      router.push("/build");
      return;
    }

    const params = new URLSearchParams();
    if (activeTab !== "sale") params.set("category", activeTab);
    if (location !== "all") params.set("location", location);
    if (propertyType !== "all") params.set("type", propertyType);
    if (budget !== "all") params.set("budget", budget);

    const queryString = params.toString();
    router.push(`/properties${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <div className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-200/90 bg-white/95 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
      {/* Category Tabs */}
      <div className="grid w-full max-w-200 grid-cols-2 gap-2 border-b border-slate-100 pb-4 md:grid-cols-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key as any)}
            className={`transition-300 cursor-pointer rounded-xl px-4 py-2.5 text-xs font-bold sm:text-sm ${
              activeTab === tab.key
                ? "scale-102 bg-[#064e3b] text-white shadow-md shadow-emerald-950/20"
                : "border border-slate-200/50 bg-slate-100 text-slate-700 hover:bg-slate-200/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filter Fields Form */}
      {activeTab === "build" ? (
        <main className="flex flex-col items-center justify-between gap-4 px-2 py-6 sm:flex-row">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Own Land Already or Need Land + Turnkey Construction?
            </h4>
            <p className="text-sm text-balance text-slate-500">
              We design 3D architectural plans, process government permits, and
              construct with British standard reinforcement along the
              Lagos-Ibadan expressway.
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push("/build")}
            className="transition-300 flex w-full shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md hover:from-amber-600 hover:to-amber-700 sm:w-auto sm:text-sm"
          >
            <span>Explore Turnkey Building Packages</span>
            <LuMoveRight className="size-4" />
          </button>
        </main>
      ) : (
        <form
          onSubmit={handleSearch}
          className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Location */}
          <SelectGroup
            label="Location / Corridor"
            Icon={FiMapPin}
            value={location}
            onChange={(e) => setLocation(e.target.value as Location)}
            options={locations.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          />

          {/* Property Type */}
          <SelectGroup
            label="Property Type"
            Icon={FiHome}
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value as Type)}
            options={types.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          />

          {/* Budget Range */}
          <SelectGroup
            label="Budget Range"
            Icon={FiDollarSign}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            options={budgets.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          />

          {/* Title Document / Search Button */}
          <div className="flex flex-col justify-end">
            <button
              type="submit"
              className="transition-300 flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#064e3b] to-[#047857] px-4 py-3 text-xs font-bold text-white shadow-md shadow-emerald-950/20 hover:from-[#047857] hover:to-[#065f46] sm:text-sm"
            >
              <FiSearch className="size-4 text-amber-300" />
              <span>Search Listings</span>
            </button>
          </div>
        </form>
      )}

      {/* Guarantee Footnote */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
        <span className="flex items-center gap-1 font-semibold text-emerald-800">
          <FiShield className="size-3.5 text-amber-500" />
          <span>
            Every listing verified with registered surveyor and legal search
          </span>
        </span>
        <span className="text-slate-400">
          Showing verified properties in Ogun & Lagos States
        </span>
      </div>
    </div>
  );
}

type Tab = PropertyCategory | "build";
const tabs: { key: Tab; label: string; desc: string }[] = [
  {
    key: "sale",
    label: "🏡 Buy Properties",
    desc: "Duplexes, Bungalows, Terraces",
  },
  {
    key: "land",
    label: "📐 Land Plots",
    desc: "Residential & Commercial Sites",
  },
  {
    key: "rent",
    label: "🔑 Rent & Lease",
    desc: "Apartments & Commercial Units",
  },
  {
    key: "build",
    label: "🏗️ Build With Us",
    desc: "Turnkey Design & Construction",
  },
];

type Location = PropertyArea | "all";
const locations: { value: Location; label: string }[] = [
  { value: "all", label: "All Growth Areas" },
  { value: "Magboro", label: "Magboro" },
  { value: "Arepo", label: "Arepo" },
  { value: "Mowe", label: "Mowe" },
  { value: "Ibafo", label: "Ibafo" },
  { value: "Berger Axis", label: "Berger Axis" },
];

type Type = PropertyType | "all";
const types: { value: Type; label: string }[] = [
  { value: "all", label: "All Property Types" },
  { value: "Duplex", label: "Contemporary Duplex" },
  { value: "Bungalow", label: "Detached Bungalow" },
  { value: "Terrace", label: "Smart Terrace" },
  { value: "Land Plot", label: "Dry Land Plot (500-648 SQM)" },
  { value: "Commercial Land", label: "Commercial Acreage" },
  { value: "Apartment", label: "Serviced Apartment" },
];

const budgets = [
  { value: "all", label: "Any Budget" },
  { value: "under-25m", label: "nder ₦25,000,000" },
  { value: "25m-50m", label: "₦25,000,000 - ₦50,000,000" },
  { value: "50m-100m", label: "₦50,000,000 - ₦100,000,000" },
  { value: "above-100m", label: "Above ₦100,000,000" },
];

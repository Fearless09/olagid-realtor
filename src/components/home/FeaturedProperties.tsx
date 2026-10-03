"use client";

import { PROPERTIES, PropertyCategory } from "@/data/properties";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FiHome } from "react-icons/fi";
import PropertyCard from "../shared/PropertyCard";
import { LuMoveRight } from "react-icons/lu";

type Filter = PropertyCategory | "all";
const FeaturedProperties = () => {
  const [propertyFilter, setPropertyFilter] = useState<Filter>("all");

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (propertyFilter === "all") return p.featured;
      return p.category === propertyFilter;
    });
  }, [PROPERTIES, propertyFilter]);

  return (
    <section className="wrapper py-20">
      <main className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase">
            <FiHome className="size-3.5 text-amber-500" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="mt-1 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Featured Properties & Lands
          </h2>
          <p className="mt-1 max-w-xl text-xs text-slate-500 sm:text-sm">
            Every listing is physically verified with authenticated title
            documents, clear perimeter surveys, and rapid allocation.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-slate-100 p-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setPropertyFilter(tab.key as any)}
              className={`transition-300 cursor-pointer rounded-xl px-3.5 py-1.5 text-xs font-bold ${
                propertyFilter === tab.key
                  ? "bg-[#064e3b] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </main>

      {/* Properties Grid */}
      <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.slice(0, 6).map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </main>

      <main className="mt-12 text-center">
        <Link
          href="/properties"
          className="transition-300 inline-flex items-center gap-2 rounded-2xl bg-[#064e3b] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-950/20 hover:scale-[1.02] hover:bg-[#047857]"
        >
          <span>Explore All {PROPERTIES.length} Available Listings</span>
          <LuMoveRight className="size-4 text-amber-300" />
        </Link>
      </main>
    </section>
  );
};

export default FeaturedProperties;

const tabs: { key: Filter; label: string }[] = [
  { key: "all", label: "All Featured" },
  { key: "sale", label: "For Sale" },
  { key: "land", label: "Land Plots" },
  { key: "rent", label: "For Rent" },
];

"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/shared/PropertyCard";
import {
  PROPERTIES,
  PropertyArea,
  PropertyCategory,
  PropertyType,
} from "@/data/properties";
import {
  FiSearch,
  FiRotateCcw,
  FiHome,
  FiMapPin,
  FiDollarSign,
} from "react-icons/fi";
import SelectGroup from "@/components/ui/SelectGroup";
import { FaSort } from "react-icons/fa";

function PropertiesContent() {
  const searchParams = useSearchParams();

  // Initial values from query params
  const initialCategory = searchParams.get("category") || "all";
  const initialLocation = searchParams.get("location") || "all";
  const initialType = searchParams.get("type") || "all";
  const initialBudget = searchParams.get("budget") || "all";
  const initialTitle = searchParams.get("title") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<Category>(
    initialCategory as Category,
  );
  const [location, setLocation] = useState<string>(initialLocation);
  const [propertyType, setPropertyType] = useState<string>(initialType);
  const [budget, setBudget] = useState<string>(initialBudget);
  const [titleDoc, setTitleDoc] = useState<string>(initialTitle);
  const [sortBy, setSortBy] = useState<Sort>("newest");

  const handleResetFilters = () => {
    setSearchQuery("");
    setCategory("all");
    setLocation("all");
    setPropertyType("all");
    setBudget("all");
    setTitleDoc("all");
    setSortBy("newest");
  };

  // Filter logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((item) => {
      // Search text
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matches =
          item.title.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.area.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Category
      if (category !== "all" && item.category !== category) {
        return false;
      }

      // Location
      if (
        location !== "all" &&
        !item.location.toLowerCase().includes(location.toLowerCase())
      ) {
        return false;
      }

      // Property Type
      if (propertyType !== "all" && item.type !== propertyType) {
        return false;
      }

      // Title Document
      if (
        titleDoc !== "all" &&
        !item.titleDocument.toLowerCase().includes(titleDoc.toLowerCase())
      ) {
        return false;
      }

      // Budget Range
      if (budget === "under-25m" && item.price >= 25000000) return false;
      if (
        budget === "25m-50m" &&
        (item.price < 25000000 || item.price > 50000000)
      )
        return false;
      if (
        budget === "50m-100m" &&
        (item.price < 50000000 || item.price > 100000000)
      )
        return false;
      if (budget === "above-100m" && item.price <= 100000000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0; // default order
    });
  }, [searchQuery, category, location, propertyType, budget, titleDoc, sortBy]);

  return (
    <>
      {/* Page Header */}
      <section className="bg-linear-to-r from-[#022c22] via-[#064e3b] to-[#047857] py-14 text-white">
        <main className="wrapper space-y-3">
          <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">
            Real Estate Directory • Magboro, Arepo, Mowe & Corridor
          </span>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Verified Properties & Land For Sale
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-emerald-100/80">
            Browse our physically inspected inventory of luxury duplexes,
            bungalows, dry residential estate lands, and commercial expressway
            plots.
          </p>
        </main>
      </section>

      {/* Filter Controls Bar */}
      <section className="wrapper -mt-6">
        <section className="space-y-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xl">
          {/* Search Input & Category Pills */}
          <main className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="relative w-full lg:w-96">
              <FiSearch className="absolute top-1/2 left-3.5 -translate-y-1/2 text-base text-slate-400" />
              <input
                type="text"
                placeholder="Search by area, duplex, plot size..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-300 py-2.25 pr-4 pl-10 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
              />
            </div>

            {/* Category Pills */}
            <div className="flex w-full flex-wrap items-center gap-1.5 lg:w-auto">
              {categories.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setCategory(tab.key)}
                  className={`transition-300 cursor-pointer rounded-xl px-3 py-1.5 text-xs font-bold ${
                    category === tab.key
                      ? "bg-[#064e3b] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </main>

          {/* Granular Filters Grid */}
          <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-3 text-xs sm:grid-cols-4">
            {/* Location Select */}
            <SelectGroup
              id="location"
              label="Location"
              Icon={FiMapPin}
              value={location}
              onChange={(e) => setLocation(e.target.value as Location)}
              options={locations.map((loc) => (
                <option key={loc.value} value={loc.value}>
                  {loc.label}
                </option>
              ))}
              size="sm"
            />

            {/* Property Type */}
            <SelectGroup
              id="type"
              label="Type"
              Icon={FiHome}
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value as Location)}
              options={types.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
              size="sm"
            />

            {/* Budget */}
            <SelectGroup
              id="budget"
              label="Budget"
              Icon={FiDollarSign}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              options={budgets.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
              size="sm"
            />

            {/* Sort By */}
            <SelectGroup
              id="sort"
              label="Sort By"
              Icon={FaSort}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as Sort)}
              options={sorts.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
              size="sm"
            />
          </div>

          {/* Results count & Clear */}
          <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
            <span>
              Found{" "}
              <strong className="font-bold text-emerald-950">
                {filteredProperties.length}
              </strong>{" "}
              matching listings
            </span>
            {(searchQuery ||
              category !== "all" ||
              location !== "all" ||
              propertyType !== "all" ||
              budget !== "all") && (
              <button
                onClick={handleResetFilters}
                className="transition-300 flex cursor-pointer items-center gap-1 font-bold text-emerald-700 hover:text-emerald-900"
              >
                <FiRotateCcw />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </section>
      </section>

      {/* Listings Grid */}
      <section className="wrapper py-14">
        {filteredProperties.length === 0 ? (
          <main className="mx-auto max-w-lg space-y-4 rounded-3xl border border-slate-200 bg-white px-4 py-12 text-center">
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-400">
              <FiHome />
            </span>

            <h3 className="text-xl font-bold text-slate-900">
              No matching listings found
            </h3>
            <p className="text-xs text-balance text-slate-500">
              We couldn&apos;t find properties matching your exact criteria. Try
              adjusting the filters or contact our team directly for off-market
              inventory.
            </p>
            <button
              onClick={handleResetFilters}
              className="transition-300 cursor-pointer rounded-xl bg-[#064e3b] px-5 py-2.5 text-xs font-bold text-white"
            >
              Reset All Filters
            </button>
          </main>
        ) : (
          <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </main>
        )}
      </section>
    </>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
          Loading properties catalog...
        </div>
      }
    >
      <PropertiesContent />
    </Suspense>
  );
}

type Category = PropertyCategory | "all";
const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Properties" },
  { key: "sale", label: "Houses For Sale" },
  { key: "land", label: "Land & Plots" },
  { key: "rent", label: "Rentals" },
  { key: "off-plan", label: "Off-Plan Builds" },
];

type Location = PropertyArea | "all";
const locations: { value: Location; label: string }[] = [
  { value: "all", label: "All Locations" },
  { value: "Magboro", label: "Magboro" },
  { value: "Arepo", label: "Arepo" },
  { value: "Mowe", label: "Mowe" },
  { value: "Berger Axis", label: "Berger Axis" },
  { value: "Ibafo", label: "Ibafo" },
  { value: "Lagos-Ibadan Expressway", label: "Lagos-Ibadan Expressway" },
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

type Sort = "newest" | "price-asc" | "price-desc";
const sorts: { value: Sort; label: string }[] = [
  { value: "newest", label: "Featured & Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

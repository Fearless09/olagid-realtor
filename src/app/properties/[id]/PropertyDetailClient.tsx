"use client";

import { ComponentProps, FC, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PropertyCard from "@/components/shared/PropertyCard";
import MortgageCalculator from "@/components/shared/MortgageCalculator";
import { Property, COMPANY_DETAILS } from "@/data/properties";
import {
  FiMapPin,
  FiShield,
  FiMaximize2,
  FiCheck,
  FiCalendar,
  FiPhone,
  FiShare2,
  FiInfo,
} from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { PiShowerLight } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { cn, formatMoney, getBadge } from "@/utils/utils";
import { LuMoveRight } from "react-icons/lu";
import { useAppDispatch } from "@/redux/hook";
import { openInspection } from "@/redux/slice/inspectionSlice";

interface PropertyDetailClientProps {
  property: Property;
  relatedProperties: Property[];
}

export default function PropertyDetailClient({
  property,
  relatedProperties,
}: PropertyDetailClientProps) {
  const dispatcher = useAppDispatch();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedNotification, setCopiedNotification] = useState(false);

  const whatsappUrl = useMemo(() => {
    const whatsappMessage = encodeURIComponent(
      `Hello Olagid Realtors, I am interested in "${property.title}" (Ref: ${property.id}) priced at ${property.priceFormatted}. Can we schedule an inspection?`,
    );
    return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappMessage}`;
  }, []);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 3000);
    }
  };

  return (
    <>
      {/* Breadcrumbs */}
      <section className="border-b border-slate-200/80 bg-slate-100/80">
        <section className="wrapper flex items-center justify-between py-3 text-xs text-slate-500">
          <div className="flex items-center gap-2 truncate">
            <Link href="/" className="transition-300 hover:text-emerald-900">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/properties"
              className="transition-300 hover:text-emerald-900"
            >
              Properties
            </Link>
            <span>/</span>
            <span className="max-w-50 truncate font-semibold text-slate-900 sm:max-w-xs">
              {property.title}
            </span>
          </div>

          <button
            onClick={handleShare}
            className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 font-semibold text-slate-700 transition-all hover:border-emerald-600 hover:text-emerald-900"
          >
            <FiShare2 />
            <span>{copiedNotification ? "Link Copied!" : "Share"}</span>
          </button>
        </section>
      </section>

      {/* Hero Gallery & Header */}
      <section className="wrapper pt-8 pb-24">
        {/* Header Strip */}
        <main className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-6 lg:flex-row lg:items-end">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  `rounded-md px-3 py-1 text-xs font-bold tracking-wider text-white uppercase`,
                  getBadge(property.category).bg,
                )}
              >
                {getBadge(property.category).name}
              </span>

              <span className="flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-950">
                <FiShield className="text-amber-500" />
                <span>Verified Title: {property.titleDocument}</span>
              </span>

              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                Ref: {property.id}
              </span>
            </div>

            <h1 className="text-2xl leading-tight font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              {property.title}
            </h1>

            <p className="flex items-center gap-1.5 text-xs font-medium text-slate-600 sm:text-sm">
              <FiMapPin className="shrink-0 text-base text-amber-600" />
              <span>
                {property.address}, {property.location}
              </span>
            </p>
          </div>

          {/* Price block */}
          <div className="shrink-0 lg:text-right">
            <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
              Price Tag
            </p>
            <h2 className="mt-0.5 flex items-baseline gap-1.5 lg:justify-end">
              <span className="text-3xl font-black tracking-tight text-[#064e3b] sm:text-4xl">
                {formatMoney(property.price)}
              </span>
              {property.pricePeriod && (
                <span className="text-sm font-semibold text-slate-500">
                  {property.pricePeriod}
                </span>
              )}
            </h2>
            <p className="mt-1 text-xs font-semibold text-slate-400">
              Estimated conversion:{" "}
              <strong className="text-slate-700">{property.usdPrice}</strong>
            </p>
          </div>
        </main>

        {/* Photo Gallery Grid */}
        <main className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Primary active view */}
          <div className="relative aspect-16/10 overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-md lg:col-span-8">
            <Image
              src={property.images[activeImageIndex] || property.images[0]}
              alt={property.title}
              fill
              sizes="100%"
              priority
              loading="eager"
              className="transition-300 object-cover object-center"
            />
            <span className="absolute bottom-3 left-4 rounded-xl bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              Photo {activeImageIndex + 1} of {property.images.length}
            </span>
          </div>

          {/* Thumbnails list */}
          <div className="flex max-h-128.5 gap-3 overflow-x-auto lg:col-span-4 lg:flex-col lg:overflow-y-auto">
            {property.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`transition-300 relative aspect-16/10 w-36 shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2 lg:aspect-video lg:w-full ${
                  activeImageIndex === idx
                    ? "border-emerald-700 ring-2 ring-emerald-300"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  sizes="100%"
                  className="object-cover object-center"
                />
              </button>
            ))}
          </div>
        </main>

        {/* Specifications Highlight Bar */}
        <main className="mt-8 grid grid-cols-2 gap-6 rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-xs sm:grid-cols-4">
          {!!property.bedrooms && (
            <Spec
              Icon={IoBedOutline}
              name={`${property.bedrooms} Bedrooms`}
              value="All En-suite"
            />
          )}

          {!!property.bathrooms && (
            <Spec
              Icon={PiShowerLight}
              name={`${property.bathrooms} Bathrooms`}
              value={`${property.toilets || 4} Toilets`}
            />
          )}

          <Spec
            Icon={FiMaximize2}
            name={property.landSize}
            value="Plot / Floor Dimension"
          />
          <Spec
            Icon={FiShield}
            name={property.titleDocument.split(" ")[0]}
            value={property.titleDocument}
          />
        </main>

        {/* Main Content Layout */}
        <section className="my-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left Column (8 Cols): Narrative, Amenities, Payment terms */}
          <main className="space-y-10 lg:col-span-8">
            {/* Description */}
            <div className="space-y-4 rounded-3xl border border-slate-200/90 bg-white px-5 py-6 shadow-xs sm:p-8">
              <h3 className="text-xl font-black tracking-tight text-slate-900">
                Property Overview & Description
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                {property.description}
              </p>
              {property.paymentPlan && (
                <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-amber-200/60 bg-amber-50/80 p-4 text-xs text-amber-950 sm:text-sm">
                  <FiInfo className="mt-0.5 shrink-0 text-lg text-amber-600" />
                  <p>
                    <strong className="font-bold">
                      Flexible Payment Structure:
                    </strong>{" "}
                    {property.paymentPlan}
                  </p>
                </div>
              )}
            </div>

            {/* Amenities & Infrastructure */}
            <div className="space-y-4 rounded-3xl border border-slate-200/90 bg-white px-5 py-6 shadow-xs sm:p-8">
              <h3 className="text-xl font-black tracking-tight text-slate-900">
                Features & Estate Amenities
              </h3>
              <ul className="grid grid-cols-1 gap-3.5 pt-2 sm:grid-cols-2">
                {property.amenities.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200/70 bg-slate-50 p-3 text-xs text-slate-800 sm:text-sm"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                      <FiCheck />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Neighborhood & Strategic Proximity */}
            <div className="space-y-4 rounded-3xl border border-slate-200/90 bg-white px-5 py-6 shadow-xs sm:p-8">
              <h3 className="text-xl font-black tracking-tight text-slate-900">
                Neighborhood & Strategic Landmarks
              </h3>
              <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {property.neighborhood.map((landmark, i) => (
                  <li
                    key={i}
                    className="flex gap-2 rounded-xl border border-emerald-100 bg-emerald-50/40 p-3 text-xs text-slate-700 sm:text-sm"
                  >
                    <FiMapPin className="mt-1 shrink-0 text-sm text-emerald-700" />
                    <span>{landmark}</span>
                  </li>
                ))}
              </ul>
            </div>
          </main>

          {/* Right Column (4 Cols): Direct Inspection Card & Contact Agent */}
          <main className="sticky top-24 space-y-6 rounded-3xl border border-slate-200/90 bg-white p-5 shadow-xl sm:p-7 lg:col-span-4">
            <div>
              <h6 className="text-xs font-bold tracking-wider text-amber-600 uppercase">
                Direct Realtor Desk
              </h6>
              <h3 className="mt-1 text-xl font-black tracking-tight text-slate-900">
                Book An Inspection
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Free on-site or live video consultation for this specific
                listing.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => dispatcher(openInspection({}))}
                className="transition-300 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#064e3b] to-[#047857] px-4 py-3.5 text-sm font-bold text-white shadow-md hover:from-[#047857] hover:to-[#065f46]"
              >
                <FiCalendar className="text-amber-300" />
                <span>Schedule Physical / Video Tour</span>
              </button>

              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-300 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-bold text-white shadow-xs hover:bg-emerald-700"
              >
                <FaWhatsapp className="text-lg" />
                <span>Chat Agent on WhatsApp</span>
              </Link>

              <Link
                href={`tel:${COMPANY_DETAILS.phonePrimary}`}
                className="transition-300 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                <FiPhone className="text-emerald-700" />
                <span>Call {COMPANY_DETAILS.phonePrimary}</span>
              </Link>
            </div>

            <ul className="space-y-3 border-t border-slate-100 pt-4 text-xs text-slate-600">
              {[
                "Instant physical allocation available",
                "Verified root of title at Bureau of Lands",
                "Zero agency consultation fee",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FiCheck className="font-bold text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Office address reminder */}
            <div className="space-y-1 rounded-2xl border border-slate-200/80 bg-slate-50 p-4 text-[11px] text-slate-500">
              <h6 className="font-bold text-slate-800">
                Inspection Meeting Point:
              </h6>
              <p>
                Olagid Realtors HQ, No 1 Happy People Estate, Magboro, Ogun
                State.
              </p>
            </div>
          </main>
        </section>

        <MortgageCalculator initialPrice={property.price} />

        {/* Related Listings */}
        {relatedProperties.length > 0 && (
          <main className="mt-20 border-t border-slate-200 pt-12">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  Similar Properties in this Corridor
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Other verified listings in {property.area} and neighboring
                  zones.
                </p>
              </div>

              <Link
                href="/properties"
                className="transition-300 flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
              >
                <span>View All</span>
                <LuMoveRight />
              </Link>
            </div>

            <main className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedProperties.map((relProp) => (
                <PropertyCard key={relProp.id} property={relProp} />
              ))}
            </main>
          </main>
        )}
      </section>
    </>
  );
}

type SpecProps = {
  name: string;
  value: string;
  Icon: FC<ComponentProps<"svg">>;
};
const Spec = ({ Icon, name, value }: SpecProps) => {
  return (
    <div className="group space-y-1">
      <Icon className="mx-auto text-2xl text-emerald-700 group-last:text-amber-500" />
      <h4 className="text-base font-black text-slate-900">{name}</h4>
      <p className="text-xs font-medium text-slate-500">{value}</p>
    </div>
  );
};

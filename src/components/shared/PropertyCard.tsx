"use client";

import Link from "next/link";
import Image from "next/image";
import { Property, COMPANY_DETAILS } from "@/data/properties";
import { FiMapPin, FiMaximize2, FiShield, FiCheck } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import { PiShowerLight } from "react-icons/pi";
import { useAppDispatch } from "@/redux/hook";
import { openInspection } from "@/redux/slice/inspectionSlice";
import { FaWhatsapp } from "react-icons/fa";
import { useMemo } from "react";
import { cn, formatMoney, getBadge } from "@/utils/utils";
import { LuMoveRight } from "react-icons/lu";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const dispatcher = useAppDispatch();

  const whatsappUrl = useMemo(() => {
    const whatsappText = encodeURIComponent(
      `Hello Olagid Realtors, I am interested in inspecting "${property.title}" (Ref: ${property.id}) priced at ${property.priceFormatted}. Please share inspection details.`,
    );
    return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappText}`;
  }, [property]);

  return (
    <main className="group transition-300 flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:border-emerald-600/40 hover:shadow-xl">
      <div>
        {/* Image Container with Badges */}
        <Link
          href={`/properties/${property.id}`}
          className="relative block aspect-16/10 w-full overflow-hidden bg-slate-100"
        >
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition-300 object-cover object-center group-hover:scale-105"
          />
          <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

          {/* Top Badges */}
          <div className="pointer-events-none absolute top-3 right-3 left-3 flex items-center justify-between gap-2">
            <span
              className={cn(
                `rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wider text-white uppercase shadow-sm`,
                getBadge(property.category).bg,
              )}
            >
              {getBadge(property.category).name}
            </span>

            <span className="flex items-center gap-1 rounded-md border border-emerald-100 bg-white/90 px-2.5 py-1 text-[11px] font-bold text-emerald-950 shadow-sm backdrop-blur-md">
              <FiShield className="size-4 fill-amber-100 text-amber-500" />
              <span>{property.titleDocument.split(" ")[0]}</span>
            </span>
          </div>

          {/* Bottom Overlay Info on Image */}
          <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between text-white">
            <span className="flex items-center gap-1 text-xs font-medium text-white/90 drop-shadow-sm">
              <FiMapPin className="size-4 shrink-0 text-sm text-amber-400" />
              <span className="max-w-50 truncate">{property.location}</span>
            </span>

            <span className="rounded bg-black/40 px-2 py-0.5 text-[11px] font-semibold text-amber-300 backdrop-blur-sm">
              {property.status}
            </span>
          </div>
        </Link>

        {/* Card Content */}
        <div className="p-5">
          {/* Price Header */}
          <div className="mb-2 flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-1">
              <h3 className="text-xl font-black tracking-tight text-[#064e3b] sm:text-2xl">
                {formatMoney(property.price)}
              </h3>
              {property.pricePeriod && (
                <span className="text-xs font-medium text-slate-500">
                  {property.pricePeriod}
                </span>
              )}
            </div>

            <span className="rounded-sm bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
              ≈ {property.usdPrice}
            </span>
          </div>

          {/* Title */}
          <Link
            href={`/properties/${property.id}`}
            className="group/title block"
          >
            <h4 className="transition-300 line-clamp-1 text-base font-bold text-slate-900 group-hover/title:text-emerald-800">
              {property.title}
            </h4>
          </Link>

          {/* Address / Subtitle */}
          <p className="mt-1 line-clamp-1 text-xs text-slate-500">
            {property.address}
          </p>

          {/* Meta Specifications */}
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-600">
            {!!property.bedrooms && (
              <span className="flex items-center gap-1.5 font-medium">
                <IoBedOutline className="text-base text-emerald-700" />
                <span>{property.bedrooms} Beds</span>
              </span>
            )}

            {!!property.bathrooms && (
              <span className="flex items-center gap-1.5 font-medium">
                <PiShowerLight className="text-base text-emerald-700" />
                <span>{property.bathrooms} Baths</span>
              </span>
            )}

            <span className="flex items-center gap-1.5 font-medium">
              <FiMaximize2 className="text-xs text-emerald-700" />
              <span>{property.landSize}</span>
            </span>
          </div>

          {/* Title verification strip */}
          <div className="mt-3 flex items-center gap-1.5 rounded-lg border border-emerald-100 bg-emerald-50/70 px-2.5 py-1.5 text-[11px] text-emerald-900">
            <FiCheck className="size-3.5 shrink-0" />
            <span className="truncate">
              Title:{" "}
              <strong className="font-semibold">
                {property.titleDocument}
              </strong>
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-2 flex items-center gap-2 p-5 pt-0">
        <Link
          href={`/properties/${property.id}`}
          className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-slate-300 px-3 py-2.5 text-center text-xs font-bold text-slate-700 transition-all hover:border-emerald-700 hover:bg-emerald-50/50 hover:text-emerald-900"
        >
          <span>Explore</span>
          <LuMoveRight className="text-xs" />
        </Link>

        <button
          onClick={() => dispatcher(openInspection({ property }))}
          className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-xl bg-[#064e3b] px-3 py-2.5 text-center text-xs font-bold text-white shadow-xs transition-all hover:bg-[#047857]"
        >
          <span>Book Tour</span>
        </button>
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-300 flex items-center justify-center gap-1 rounded-xl bg-emerald-600 px-3 py-2.5 text-center text-xs font-bold text-white shadow-xs hover:bg-emerald-700"
        >
          <FaWhatsapp className="text-sm" />
        </Link>
      </div>
    </main>
  );
}

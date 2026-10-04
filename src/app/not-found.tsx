import Link from "next/link";
import {
  FiHome,
  FiSearch,
  FiPhone,
  FiCompass,
  FiTool,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaHammer } from "react-icons/fa6";
import { COMPANY_DETAILS } from "@/data/properties";

export default function NotFound() {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    "Hello Olagid Realtors, I was trying to access a page on your website that appears to be missing or under construction. Can you help me find what I am looking for?",
  )}`;

  return (
    <main className="relative">
      {/* Background ambient decorative elements */}
      <span className="pointer-events-none absolute top-1/4 -left-20 size-80 rounded-full bg-emerald-200/30 blur-3xl" />
      <span className="pointer-events-none absolute -right-20 bottom-10 size-96 rounded-full bg-amber-300/25 blur-3xl" />

      {/* Subtle blueprint grid pattern */}
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(#064e3b_1px,transparent_1px)] bg-size-[24px_24px] opacity-10" />

      <section className="relative z-10 mx-auto w-full max-w-3xl space-y-8 px-4 py-16 text-center">
        {/* Animated Construction / Blueprint Icon Badge */}
        <main className="relative mx-auto size-25 sm:size-29">
          {/* Glow ring */}
          <span className="absolute -inset-2 animate-pulse rounded-3xl bg-linear-to-r from-emerald-600 via-amber-500 to-emerald-800 opacity-30 blur-lg" />

          <div className="relative flex size-full flex-col items-center justify-center rounded-3xl border-2 border-amber-400/40 bg-linear-to-br from-[#064e3b] to-[#022c22] text-center text-white shadow-2xl">
            <FaHammer className="animate-bounce text-xs text-amber-400" />
            <span className="text-3xl font-black tracking-tighter text-amber-400 sm:text-4xl">
              404
            </span>
            <span className="mt-1 text-[10px] font-bold tracking-wider text-emerald-200 uppercase">
              Under Construction
            </span>
          </div>
        </main>

        {/* Heading & Contextual Message */}
        <main className="mx-auto max-w-xl space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-bold tracking-wider text-amber-900 uppercase">
            <FiTool className="text-amber-600" />
            <span>Site Blueprint Notice</span>
          </span>

          <h1 className="text-3xl leading-tight font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Page Not Found or{" "}
            <span className="text-[#064e3b]">Under Construction</span>
          </h1>

          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            The property, link, or blueprint you are trying to reach
            doesn&apos;t exist yet or is currently undergoing site preparation
            and architectural upgrades.
          </p>
        </main>

        {/* Quick Action Navigation Buttons */}
        <main className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="transition-300 flex items-center gap-2 rounded-xl bg-linear-to-r from-[#064e3b] to-[#047857] px-6 py-3 text-xs font-bold text-white shadow-md shadow-emerald-950/20 hover:scale-102 hover:from-[#047857] hover:to-[#065f46] sm:text-sm"
          >
            <FiHome className="text-base text-amber-300" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/properties"
            className="transition-300 flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-xs font-bold text-slate-800 shadow-xs hover:border-emerald-600 hover:bg-slate-300/40 sm:text-sm"
          >
            <FiSearch className="text-base text-emerald-700" />
            <span>Browse Active Listings</span>
          </Link>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-300 flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-6 py-3 text-xs font-bold text-emerald-900 hover:bg-emerald-200/40 sm:text-sm"
          >
            <FaWhatsapp className="text-base text-emerald-600" />
            <span>Chat Help on WhatsApp</span>
          </Link>
        </main>

        {/* Directory Card: Where to Go Next */}
        <main className="mx-auto mt-8 max-w-2xl rounded-3xl border border-slate-200/90 bg-white/90 px-5 py-6 text-left shadow-lg backdrop-blur-md sm:p-8">
          <h4 className="mb-4 flex items-center gap-2 text-xs font-bold tracking-wider text-emerald-800 uppercase">
            <FiCompass className="text-sm text-amber-500" />
            <span>Popular Destinations</span>
          </h4>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {items.map(({ description, href, title }, index) => (
              <Link
                key={index}
                href={href}
                className="group transition-300 rounded-2xl border border-slate-200/80 bg-slate-50 p-3.5 hover:border-emerald-300 hover:bg-emerald-50/70"
              >
                <h3 className="flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-emerald-900">
                  <span>{title}</span>
                  <span className="text-xs text-slate-400 group-hover:text-emerald-700">
                    →
                  </span>
                </h3>
                <p className="mt-1 text-[11px] text-slate-500">{description}</p>
              </Link>
            ))}
          </div>

          {/* Direct telephone assistance */}
          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500 sm:flex-row">
            <span className="flex items-center gap-1.5">
              <FiMapPin className="text-emerald-700" />
              <span>Magboro Head Office Hotline:</span>
            </span>

            <div className="flex items-center gap-3">
              <Link
                href={`tel:${COMPANY_DETAILS.phonePrimary}`}
                className="flex items-center gap-1 font-bold text-slate-800 hover:text-emerald-900"
              >
                <FiPhone className="text-amber-500" />
                <span>{COMPANY_DETAILS.phonePrimary}</span>
              </Link>
              <span className="text-slate-300">|</span>
              <Link
                href={`tel:${COMPANY_DETAILS.phoneSecondary}`}
                className="font-bold text-slate-800 hover:text-emerald-900"
              >
                <span>{COMPANY_DETAILS.phoneSecondary}</span>
              </Link>
            </div>
          </div>
        </main>
      </section>
    </main>
  );
}

const items = [
  {
    href: "/properties?category=sale",
    title: "🏡 Houses & Duplexes For Sale",
    description:
      "Luxury contemporary duplexes and bungalows in Magboro & Arepo.",
  },
  {
    href: "/properties?category=land",
    title: "📐 Verified Land & Plots",
    description:
      "Dry table lands with C of O and Governor&apos;s Consent titles.",
  },
  {
    href: "/build",
    title: "🏗️ Turnkey Building Construction",
    description:
      "From architectural 3D designs to foundation and luxury handover.",
  },
  {
    href: "/contact",
    title: "📍 Contact & Office Directions",
    description:
      "Visit our head office at No. 1, Happy People Estate, Magboro.",
  },
];

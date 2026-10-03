"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiPhone, FiMenu, FiX, FiMapPin, FiCalendar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY_DETAILS } from "@/data/properties";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { cn } from "@/utils/utils";
import { openInspection } from "@/redux/slice/inspectionSlice";
import { useAppDispatch } from "@/redux/hook";

export default function Navbar() {
  const dispatcher = useAppDispatch();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href.split("?")[0])) return true;
    return false;
  };

  return (
    <>
      {/* Top micro bar for corporate credibility */}
      <MicroBar />

      <header className="sticky inset-x-0 top-0 z-50 w-full">
        {/* Main Navigation Bar */}
        <nav className="border-b border-slate-200/80 bg-white shadow-xs">
          <section className="wrapper flex h-20 items-center justify-between">
            {/* Brand Logo */}
            {/* <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/30 bg-gradient-to-br from-[#064e3b] to-[#022c22] shadow-md shadow-emerald-950/20 transition-transform duration-300 group-hover:scale-105">
                <span className="text-xl font-extrabold tracking-tight text-amber-400">
                  O
                </span>
                <span className="ml-[-2px] text-xs font-bold tracking-tighter text-white">
                  R
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-emerald-900">
                    OLAGID
                  </span>
                  <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                    REALTORS
                  </span>
                </div>
                <span className="text-[10px] font-medium tracking-wide text-slate-500">
                  Properties • Lands • Turnkey Building
                </span>
              </div>
            </Link> */}
            <Link
              href={"/"}
              className="relative aspect-922/340 h-15 overflow-clip"
            >
              <Image
                alt=""
                src={"/logo.webp"}
                fill
                sizes="100%"
                className="object-contain object-center"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden items-center space-x-1 lg:flex xl:space-x-2">
              {desktopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`transition-300 rounded-lg px-3 py-2 text-sm font-medium ${
                      isActive(link.href)
                        ? "bg-emerald-50/80 font-semibold text-[#064e3b] shadow-xs"
                        : "text-slate-600 hover:bg-slate-100/70 hover:text-emerald-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Actions (Desktop) */}
            <div className="flex items-center gap-3 sm:gap-2">
              <Link
                href={COMPANY_DETAILS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-300 hidden items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50/60 p-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100/80 hover:text-emerald-900 md:flex"
                title="Chat directly on WhatsApp"
              >
                <FaWhatsapp className="size-4 text-emerald-600" />
                <span className="hidden xl:inline">Chat</span>
              </Link>

              <button
                onClick={() => dispatcher(openInspection({}))}
                className="transition-300 flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-[#064e3b] to-[#047857] px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-900/15 hover:from-[#047857] hover:to-[#065f46] hover:shadow-lg active:scale-95 sm:text-sm"
              >
                <FiCalendar className="hidden size-4 text-amber-300 sm:inline" />
                <span>Book Inspection</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="transition-300 cursor-pointer rounded-lg p-1.5 text-slate-700 hover:bg-slate-100 lg:hidden [&>svg]:size-6"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </section>
        </nav>

        {/* Mobile Menu Dropdown */}
        <section
          className={cn(
            "wrapper transition-300 h-auto max-h-140 space-y-2 overflow-hidden border-b border-slate-200 bg-white/95 pt-3 pb-6 shadow-xl backdrop-blur-xl lg:hidden",
            {
              "pointer-events-none max-h-0 -translate-y-1 border-transparent py-0":
                !mobileMenuOpen,
            },
          )}
        >
          <ul className="space-y-1">
            {mobileLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-300 block rounded-xl px-4 py-3 text-base font-medium ${
                    isActive(link.href)
                      ? "bg-emerald-50 font-bold text-emerald-900"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2.5 border-t border-slate-100 pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                dispatcher(openInspection({}));
              }}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#064e3b] py-3 text-center font-semibold text-white shadow-md"
            >
              <FiCalendar className="text-amber-300" />
              <span>Schedule Property Inspection</span>
            </button>
            <Link
              href={COMPANY_DETAILS.whatsappLink}
              onClick={() => setMobileMenuOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300/50 bg-emerald-100/70 py-3 text-center font-semibold text-emerald-900"
            >
              <FaWhatsapp className="text-lg text-emerald-700" />
              <span>Chat Agent via WhatsApp</span>
            </Link>
          </div>
        </section>
      </header>
    </>
  );
}

const desktopLinks = [
  { label: "Properties", href: "/properties" },
  { label: "Build With Us", href: "/build" },
  { label: "Documentation & Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "Land Plots", href: "/properties?category=land" },
  { label: "Build With Us", href: "/build" },
  { label: "Documentation & Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MicroBar = () => {
  const [open, setOpen] = useState(true);

  if (!open) return;
  return (
    <section className="border-b border-emerald-800/40 bg-[#022c22] py-1.5 text-xs text-emerald-100/90 sm:px-8">
      <main className="wrapper flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 font-medium text-amber-400">
            <FiMapPin className="size-3.5 text-amber-400" />
            <span>Magboro HQ: Happy People Estate, Ogun State</span>
          </span>

          <span className="hidden text-emerald-300/40 md:inline-block">|</span>

          <span className="hidden text-emerald-200 md:inline-block">
            Lagos-Ibadan Corridor & Diaspora Specialist
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <Link
            href={`tel:${COMPANY_DETAILS.phonePrimary}`}
            className="transition-300 flex items-center gap-1.5 hover:text-white"
          >
            <FiPhone className="text-amber-400" />
            <span>{COMPANY_DETAILS.phonePrimary}</span>
          </Link>
          <Link
            href={COMPANY_DETAILS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-300 transition-colors hover:text-white"
          >
            <FaWhatsapp className="text-emerald-400" />
            <span>WhatsApp Chat</span>
          </Link>

          <button
            className="transition-300 cursor-pointer rounded-lg p-1 hover:bg-red-400/20"
            onClick={() => setOpen(false)}
          >
            <IoClose className="size-3.5" />
          </button>
        </div>
      </main>
    </section>
  );
};

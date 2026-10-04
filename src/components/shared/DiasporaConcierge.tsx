"use client";

import Link from "next/link";
import {
  FiGlobe,
  FiVideo,
  FiShield,
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY_DETAILS } from "@/data/properties";
import { useMemo } from "react";
import { useAppDispatch } from "@/redux/hook";
import { openInspection } from "@/redux/slice/inspectionSlice";
import { cn } from "@/utils/utils";

export default function DiasporaConcierge() {
  const dispatcher = useAppDispatch();

  const whatsappLink = useMemo(() => {
    const diasporaWhatsappText = encodeURIComponent(
      "Hello Olagid Realtors Diaspora Desk! I am reaching out from abroad and would like to learn more about verified land purchase and building project supervision.",
    );

    return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${diasporaWhatsappText}`;
  }, []);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#022c22] via-[#033a2e] to-[#022c22] py-20 text-white">
      {/* Glow shapes */}
      <span className="pointer-events-none absolute top-10 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <span className="pointer-events-none absolute right-10 bottom-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <section className="wrapper relative z-10">
        <main className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-emerald-900/80 px-3.5 py-1.5 text-xs font-bold tracking-wider text-amber-400 uppercase">
            <FiGlobe />
            <span>Diaspora Real Estate Concierge</span>
          </span>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Invest in Nigeria from Anywhere in the World with{" "}
            <span className="text-amber-400">100% Peace of Mind</span>
          </h2>

          <p className="text-sm leading-relaxed text-emerald-100/80 sm:text-base">
            Eliminate family excuses, inflated material receipts, and abandoned
            building projects. Olagid Realtors provides a structured, legally
            protected corporate gateway for diaspora Nigerians in the UK, US,
            Canada, and Europe.
          </p>
        </main>

        {/* Pillars Grid */}
        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="transition-300 flex flex-col justify-between rounded-2xl border border-emerald-500/20 bg-white/5 p-6 backdrop-blur-md hover:border-amber-400/50 hover:bg-white/10"
            >
              <div className="space-y-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-emerald-700/50 bg-emerald-950/90">
                  <item.icon
                    className={cn("text-2xl text-emerald-600", {
                      "text-amber-500": idx % 2 == 0,
                    })}
                  />
                </span>
                <h3 className="text-lg leading-snug font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-emerald-100/70">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-1.5 border-t border-emerald-800/50 pt-4 text-xs font-semibold text-amber-400">
                <FiCheckCircle className="text-emerald-400" />
                <span>Guaranteed Protocol</span>
              </div>
            </div>
          ))}
        </main>

        {/* Action Banner */}
        <main className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-amber-500/30 bg-linear-to-r from-emerald-900/90 to-[#022c22] px-4 py-15">
          <div className="space-y-2 text-center">
            <h4 className="text-xl font-bold text-white sm:text-2xl">
              Ready to verify a land plot or start your dream home build?
            </h4>
            <p className="mx-auto max-w-xl text-xs text-emerald-200/80 sm:text-sm">
              Book a live 1-on-1 virtual consultation with our lead surveyor and
              project engineer at your convenience.
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-3 sm:flex-row lg:w-auto">
            <button
              onClick={() => dispatcher(openInspection({}))}
              className="transition-300 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md hover:from-amber-600 hover:to-amber-700 sm:w-auto sm:text-sm"
            >
              <FiVideo className="text-base" />
              <span>Book Virtual Video Inspection</span>
            </button>

            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-300 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/40 px-6 py-3.5 text-xs font-bold text-white hover:bg-emerald-800 sm:w-auto sm:text-sm"
            >
              <FaWhatsapp className="text-base text-emerald-400" />
              <span>Direct WhatsApp Concierge</span>
            </Link>
          </div>
        </main>
      </section>
    </section>
  );
}

const pillars = [
  {
    icon: FiVideo,
    title: "Live HD Video & Drone Walkthroughs",
    desc: "Never rely on hearsay. Receive scheduled weekly live Zoom/WhatsApp video calls and drone site footage directly from your plot or building project.",
  },
  {
    icon: FiShield,
    title: "Zero 'Omo-Onile' & Double-Sale Guarantee",
    desc: "Every inch of land has clear title ancestry verified at the Ogun & Lagos State Ministry of Lands before we present it to you.",
  },
  {
    icon: FiCheckCircle,
    title: "Milestone-Gated Construction Payments",
    desc: "For building projects, you only release funds in stages (Foundation, DPC, Lintel, Roofing, Finishing) after independent engineering approval.",
  },
  {
    icon: FiFileText,
    title: "International Document Courier Delivery",
    desc: "All signed Deeds of Assignment, Survey Plans, and original title deeds can be securely couriered to your overseas address via DHL/FedEx.",
  },
];

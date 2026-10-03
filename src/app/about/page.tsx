"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import InspectionModal from "@/components/modals/InspectionModal";
import { COMPANY_DETAILS } from "@/data/properties";
import {
  FiShield,
  FiTarget,
  FiAward,
  FiCheckCircle,
  FiUsers,
  FiMapPin,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function AboutPage() {
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfdfd]">
      <Navbar onOpenInspectionModal={() => setInspectionModalOpen(true)} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#022c22] via-[#064e3b] to-[#047857] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl max-w-7xl space-y-4 text-center">
            <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">
              About Olagid Realtors Limited
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
              Pioneering Trust, Quality & Innovation in Nigerian Real Estate
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-emerald-100/80 sm:text-base">
              Headquartered in Magboro, Ogun State, we empower families,
              businesses, and diaspora investors to acquire verified land and
              build contemporary homes without fear.
            </p>
          </div>
        </section>

        {/* Narrative & Headquarters */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold tracking-wider text-emerald-900 uppercase">
                <FiTarget />
                <span>Our Heritage & Vision</span>
              </div>

              <h2 className="text-3xl leading-tight font-black tracking-tight text-slate-900 sm:text-4xl">
                Built On An Unshakable Foundation Of{" "}
                <span className="text-[#064e3b]">Integrity & Precision</span>
              </h2>

              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Founded with a clear mandate to solve the widespread trust
                deficit in the Nigerian property sector,{" "}
                <strong>Olagid Realtors Limited</strong> has grown into a
                leading development and brokerage firm along the critical
                Lagos-Ibadan growth corridor.
              </p>

              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Whether you are purchasing a dry residential plot in Arepo or
                Magboro, leasing an executive apartment, or entrusting us with
                the turnkey construction of your family duplex from foundation
                to handover, our multidisciplinary team of licensed surveyors,
                structural engineers, and property attorneys ensure your asset
                is legally watertight and structurally durable.
              </p>

              <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <FiMapPin className="text-amber-600" />
                  <span>Physical Corporate Office:</span>
                </div>
                <p className="text-xs text-slate-600">
                  {COMPANY_DETAILS.address} (Easily accessible from the
                  Lagos-Ibadan expressway, just 10 minutes past Berger bus
                  stop).
                </p>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="Olagid Realtors Project"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#064e3b] to-[#022c22] p-6 text-white shadow-xl sm:block">
                <div className="text-3xl font-black text-amber-400">100%</div>
                <div className="mt-0.5 text-xs font-bold text-white">
                  Title Document Verification
                </div>
                <p className="mt-1 text-[11px] text-emerald-100/70">
                  Zero Omo-Onile dispute recorded across all our sites.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="border-y border-slate-200/80 bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl space-y-2 text-center">
              <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase">
                Guiding Principles
              </span>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                Our Core Company Values
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Absolute Transparency",
                  desc: "Clear pricing, zero hidden agency charges, and open legal verification. What you see is what you get.",
                  icon: <FiShield className="text-2xl text-emerald-700" />,
                },
                {
                  title: "Structural Excellence",
                  desc: "We never compromise on building standards. Tested cement, British standard steel, and rigorous civil engineering supervision.",
                  icon: <FiAward className="text-2xl text-amber-600" />,
                },
                {
                  title: "Client-First Empathy",
                  desc: "We understand that property acquisition is a life-defining milestone. We treat your investment with the same care as our own.",
                  icon: <FiUsers className="text-2xl text-emerald-700" />,
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="space-y-4 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {val.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#022c22] to-[#064e3b] py-20 text-white">
          <div className="mx-auto max-w-5xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Ready to Partner with Olagid Realtors?
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-emerald-100/80">
              Book a meeting at our Magboro office or connect with an authorized
              property advisor on WhatsApp right now.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button
                onClick={() => setInspectionModalOpen(true)}
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md transition-all hover:from-amber-600 hover:to-amber-700 sm:text-sm"
              >
                <span>Book On-Site Inspection</span>
                <FiArrowRight />
              </button>
              <a
                href={COMPANY_DETAILS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-white/20 sm:text-sm"
              >
                <FaWhatsapp className="text-base text-emerald-400" />
                <span>Chat Desk on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <InspectionModal
        isOpen={inspectionModalOpen}
        onClose={() => setInspectionModalOpen(false)}
      />
    </div>
  );
}

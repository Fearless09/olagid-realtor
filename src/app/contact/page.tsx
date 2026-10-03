"use client";

import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import InspectionModal from "@/components/modals/InspectionModal";
import { COMPANY_DETAILS } from "@/data/properties";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiCheckCircle,
  FiSend,
  FiUser,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [inspectionModalOpen, setInspectionModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Property Inquiry");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
    `Hello Olagid Realtors, I sent an inquiry:\n` +
      `• Name: ${fullName}\n` +
      `• Topic: ${subject}\n` +
      `• Phone: ${phone}\n` +
      `• Message: ${message}`,
  )}`;

  return (
    <div className="flex min-h-screen flex-col bg-[#fcfdfd]">
      <Navbar onOpenInspectionModal={() => setInspectionModalOpen(true)} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#022c22] via-[#064e3b] to-[#047857] px-4 py-14 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-3">
            <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">
              Get in Touch
            </span>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
              Contact Olagid Realtors Limited
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-emerald-100/80 sm:text-base">
              Have questions about buying land, inspecting a duplex, or
              commissioning a turnkey building project? We are ready to assist
              you.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Info Cards (5 Cols) */}
            <div className="space-y-6 lg:col-span-5">
              <div className="space-y-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-black tracking-tight text-slate-900">
                  Headquarters & Contacts
                </h3>

                <div className="space-y-5 text-sm text-slate-700">
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800">
                      <FiMapPin className="text-lg" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Head Office Location
                      </div>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                        {COMPANY_DETAILS.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800">
                      <FiPhone className="text-lg" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Telephone Lines
                      </div>
                      <div className="mt-0.5 space-y-0.5 text-xs text-slate-600">
                        <div>
                          <a
                            href={`tel:${COMPANY_DETAILS.phonePrimary}`}
                            className="font-semibold hover:text-emerald-800"
                          >
                            {COMPANY_DETAILS.phonePrimary}
                          </a>
                        </div>
                        <div>
                          <a
                            href={`tel:${COMPANY_DETAILS.phoneSecondary}`}
                            className="font-semibold hover:text-emerald-800"
                          >
                            {COMPANY_DETAILS.phoneSecondary}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800">
                      <FiMail className="text-lg" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Official Email
                      </div>
                      <a
                        href={`mailto:${COMPANY_DETAILS.email}`}
                        className="text-xs font-semibold text-slate-600 hover:text-emerald-800"
                      >
                        {COMPANY_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-800">
                      <FiClock className="text-lg" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        Office Working Hours
                      </div>
                      <p className="mt-0.5 text-xs text-slate-600">
                        Monday – Friday: 8:00 AM – 6:00 PM
                        <br />
                        Saturday: 9:00 AM – 4:00 PM
                        <br />
                        Sunday: By Appointment (Emergency inspections)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <a
                    href={COMPANY_DETAILS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-800 sm:text-sm"
                  >
                    <FaWhatsapp className="text-lg" />
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Inquiry Form (7 Cols) */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm lg:col-span-7">
              <h3 className="mb-2 text-2xl font-black tracking-tight text-slate-900">
                Send Us a Direct Message
              </h3>
              <p className="mb-6 text-xs text-slate-500">
                Fill in the details below and an Olagid Realtors property
                representative will respond within 2 business hours.
              </p>

              {formSubmitted ? (
                <div className="mx-auto max-w-md space-y-4 py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-800">
                    <FiCheckCircle />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Message Successfully Sent!
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600">
                    Thank you{" "}
                    <strong className="text-emerald-950">{fullName}</strong>. We
                    have logged your request and our desk will contact you via{" "}
                    <strong className="text-emerald-950">{phone}</strong>.
                  </p>
                  <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-800"
                    >
                      <FaWhatsapp className="text-base" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="rounded-xl border border-slate-300 px-4 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-700 uppercase">
                        Full Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute top-3.5 left-3.5 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Samuel Olawale"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 py-2.5 pr-3 pl-10 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-700 uppercase">
                        Phone / WhatsApp *
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute top-3.5 left-3.5 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="+234 800 000 0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 py-2.5 pr-3 pl-10 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-700 uppercase">
                        Email Address
                      </label>
                      <div className="relative">
                        <FiMail className="absolute top-3.5 left-3.5 text-slate-400" />
                        <input
                          type="email"
                          placeholder="your.email@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl border border-slate-300 py-2.5 pr-3 pl-10 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-slate-700 uppercase">
                        Inquiry Subject
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-xs font-medium text-slate-800 focus:border-emerald-600 sm:text-sm"
                      >
                        <option>Land Purchase in Magboro / Arepo</option>
                        <option>Contemporary Duplex for Sale</option>
                        <option>Turnkey Building Construction Quote</option>
                        <option>Property Leasing / Rental</option>
                        <option>Land Survey & Title Regularization</option>
                        <option>Diaspora Investment Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-bold text-slate-700 uppercase">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please specify your budget, target property or location, and any questions regarding title documents or inspection timing..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full resize-none rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#064e3b] to-[#047857] px-6 py-4 text-sm font-bold text-white shadow-md transition-all hover:from-[#047857] hover:to-[#065f46]"
                  >
                    <FiSend className="text-amber-300" />
                    <span>Submit Message</span>
                  </button>
                </form>
              )}
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

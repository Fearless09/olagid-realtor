"use client";

import React, { useEffect, useState } from "react";
import { Property, PROPERTIES, COMPANY_DETAILS } from "@/data/properties";
import {
  FiX,
  FiCalendar,
  FiClock,
  FiUser,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiVideo,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { closeInspection } from "@/redux/slice/inspectionSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function InspectionModal() {
  const { isInspectionOpen, selectedProperty } = useAppSelector(
    (root) => root.inspection,
  );
  const dispatcher = useAppDispatch();

  const [propertyId, setPropertyId] = useState<string>(
    selectedProperty ? selectedProperty.id : PROPERTIES[0].id,
  );
  const [inspectionType, setInspectionType] = useState<"physical" | "virtual">(
    "physical",
  );
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("10:00 AM");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if selectedProperty changes
  useEffect(() => {
    if (selectedProperty) {
      setPropertyId(selectedProperty.id);
    }
  }, [selectedProperty]);

  const activeProperty =
    PROPERTIES.find((p) => p.id === propertyId) || PROPERTIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Olagid Realtors! I just booked an inspection for:\n` +
      `• Property: ${activeProperty.title}\n` +
      `• Type: ${inspectionType === "physical" ? "On-Site Physical Inspection" : "Live HD Video Call (Diaspora)"}\n` +
      `• Name: ${fullName}\n` +
      `• Date & Time: ${preferredDate || "Earliest available"} at ${preferredTime}\n` +
      `• Contact: ${phone}\n` +
      `Kindly confirm our appointment.`,
  );

  if (!isInspectionOpen) return null;

  return (
    <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-2xl">
        {/* Header */}
        <div className="relative bg-linear-to-r from-[#022c22] to-[#064e3b] p-6 text-white">
          <button
            onClick={() => dispatcher(closeInspection())}
            className="absolute top-5 right-5 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close modal"
          >
            <FiX className="text-xl" />
          </button>

          <div className="mb-1 flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase">
            <FiCalendar />
            <span>Inspection Scheduler</span>
          </div>
          <h3 className="text-xl font-black tracking-tight">
            Schedule Property Inspection
          </h3>
          <p className="mt-1 text-xs text-emerald-100/80">
            Free on-site or high-definition live video inspection with an Olagid
            project consultant.
          </p>
        </div>

        {/* Form Body or Success State */}
        <div className="max-h-[80vh] overflow-y-auto p-6">
          {isSubmitted ? (
            <div className="space-y-4 py-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">
                <FiCheckCircle />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Inspection Request Received!
              </h4>
              <p className="mx-auto max-w-md text-sm text-slate-600">
                Thank you{" "}
                <strong className="text-emerald-950">{fullName}</strong>. An
                Olagid property specialist will contact you on{" "}
                <strong className="text-emerald-950">{phone}</strong> within 1
                hour to finalize the arrangements.
              </p>

              <div className="mt-4 space-y-1.5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-left text-xs text-slate-700">
                <p>
                  <strong>Property:</strong> {activeProperty.title}
                </p>
                <p>
                  <strong>Inspection Format:</strong>{" "}
                  {inspectionType === "physical"
                    ? "On-Site Physical Inspection"
                    : "Virtual Video Tour (Diaspora Concierge)"}
                </p>
                <p>
                  <strong>Preferred Time:</strong> {preferredDate} (
                  {preferredTime})
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-800"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Instant Confirm on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    dispatcher(closeInspection());
                  }}
                  className="rounded-xl border border-slate-300 px-4 py-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Property */}
              <div>
                <label className="mb-1.5 block text-xs font-bold tracking-wider text-slate-700 uppercase">
                  Selected Property or Land
                </label>
                <select
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-800 outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                >
                  {PROPERTIES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.priceFormatted}) - {p.area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Inspection Type Radio Tabs */}
              <div>
                <label className="mb-1.5 block text-xs font-bold tracking-wider text-slate-700 uppercase">
                  Inspection Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInspectionType("physical")}
                    className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-left transition-all ${
                      inspectionType === "physical"
                        ? "border-emerald-700 bg-emerald-50/70 text-emerald-950 ring-1 ring-emerald-700"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <FiMapPin className="mt-0.5 text-base text-emerald-700" />
                    <div>
                      <div className="text-xs font-bold">Physical On-Site</div>
                      <div className="text-[10px] text-slate-500">
                        Guided tour at the location
                      </div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInspectionType("virtual")}
                    className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 text-left transition-all ${
                      inspectionType === "virtual"
                        ? "border-emerald-700 bg-emerald-50/70 text-emerald-950 ring-1 ring-emerald-700"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <FiVideo className="mt-0.5 text-base text-amber-600" />
                    <div>
                      <div className="text-xs font-bold">Live Video Call</div>
                      <div className="text-[10px] text-slate-500">
                        Recommended for Diaspora
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute top-3 left-3 text-sm text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Babatunde Adeyemi"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 py-2 pr-3 pl-9 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute top-3 left-3 text-sm text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+234 or Int'l number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 py-2 pr-3 pl-9 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute top-3 left-3 text-sm text-slate-400" />
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 py-2 pr-3 pl-9 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-700">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <FiClock className="absolute top-3 left-3 text-sm text-slate-400" />
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white py-2 pr-3 pl-9 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                    >
                      <option>09:00 AM - 11:00 AM</option>
                      <option>11:00 AM - 01:00 PM</option>
                      <option>02:00 PM - 04:00 PM</option>
                      <option>04:00 PM - 06:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-700">
                  Specific Questions / Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Any particular questions regarding title documents, payment spread, or directions?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full resize-none rounded-xl border border-slate-300 px-3 py-2 text-xs outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 sm:text-sm"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#064e3b] to-[#047857] px-4 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:from-[#047857] hover:to-[#065f46]"
                >
                  <FiCheckCircle className="text-amber-300" />
                  <span>Confirm Inspection Booking</span>
                </button>
                <p className="mt-2 text-center text-[11px] text-slate-500">
                  🔒 No inspection fee. Genuine direct consultation from Olagid
                  Realtors.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { COMPANY_DETAILS } from "@/data/properties";
import { useAppDispatch } from "@/redux/hook";
import { openInspection } from "@/redux/slice/inspectionSlice";
import Link from "next/link";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { LuMoveRight } from "react-icons/lu";

const CTA = () => {
  const dispatcher = useAppDispatch();

  return (
    <section className="bg-linear-to-r from-[#022c22] to-[#064e3b] py-20 text-white">
      <section className="wrapper">
        <main className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/20 bg-white/10 px-4 py-8 backdrop-blur-xl sm:p-12">
          <div className="space-y-3 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-3 py-1 text-xs font-bold text-amber-400">
              <FiMapPin />
              <span>Visit Our Magboro Office</span>
            </div>
            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              Ready to inspect a property or start your build?
            </h3>
            <p className="mx-auto max-w-xl text-xs text-emerald-100/80 sm:text-sm">
              {COMPANY_DETAILS.address}. Our doors and telephone lines are open
              Monday through Saturday.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <button
              onClick={() => dispatcher(openInspection({}))}
              className="transition-300 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md hover:from-amber-600 hover:to-amber-700 sm:text-sm"
            >
              <span>Book Free Inspection</span>
              <LuMoveRight className="shrink-0" />
            </button>
            <Link
              href={`tel:${COMPANY_DETAILS.phoneIntlPrimary}`}
              className="transition-300 flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/15 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/25 sm:text-sm"
            >
              <FiPhone className="shrink-0 text-amber-400" />
              <span>Call {COMPANY_DETAILS.phoneIntlPrimary}</span>
            </Link>
          </div>
        </main>
      </section>
    </section>
  );
};

export default CTA;

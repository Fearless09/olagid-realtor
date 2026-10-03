"use client";

import { COMPANY_DETAILS } from "@/data/properties";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-slate-200/80 bg-slate-50 py-20">
      <section className="wrapper max-w-4xl">
        <div className="mb-12 space-y-2 text-center">
          <span className="text-xs font-bold tracking-wider text-emerald-800 uppercase">
            Buyer & Investor Clarifications
          </span>
          <h2 className="text-3xl font-black tracking-tight text-balance text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <main className="space-y-3">
          {COMPANY_DETAILS.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="transition-300 overflow-hidden rounded-2xl border border-slate-200/90 bg-white text-balance shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="transition-300 flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left text-sm font-bold text-slate-900 hover:text-emerald-900 sm:text-base"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <FiChevronUp className="shrink-0 text-xl text-emerald-700" />
                  ) : (
                    <FiChevronDown className="shrink-0 text-xl text-slate-400" />
                  )}
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-5 pt-3 pb-5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </main>
      </section>
    </section>
  );
};

export default FAQ;

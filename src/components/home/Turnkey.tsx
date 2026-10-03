import { COMPANY_DETAILS } from "@/data/properties";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { FaHammer, FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { LuMoveRight } from "react-icons/lu";

const Turnkey = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px] opacity-10" />

      <section className="wrapper relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <main className="space-y-6 lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-emerald-950 px-3.5 py-1.5 text-xs font-bold tracking-wider text-amber-400 uppercase">
            <FaHammer />
            <span>Turnkey Architectural & Building Services</span>
          </span>

          <h2 className="text-3xl leading-tight font-black tracking-tight sm:text-4xl lg:text-5xl">
            Have Land Already? We Will{" "}
            <span className="text-amber-400">Build Your Dream Home</span> to
            Perfection.
          </h2>

          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Avoid the stress of rogue bricklayers and inflated materials. Olagid
            Realtors provides a comprehensive design-to-handover construction
            service with registered structural engineers, British standard
            reinforcement, and guaranteed delivery timelines.
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            {tab.map((t, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <FiCheckCircle
                  className={cn("mt-0.5 shrink-0 text-xl text-amber-400", {
                    "text-emerald-400": (index + 1) % 2 == 0,
                  })}
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{t.title}</h4>
                  <p className="mt-0.5 text-xs text-slate-400">{t.des}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 max-sm:justify-center">
            <Link
              href="/build"
              className="transition-300 flex w-full max-w-72 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:from-amber-600 hover:to-amber-700"
            >
              <span>View Building Portfolio & Costs</span>
              <LuMoveRight className="size-4" />
            </Link>
            <Link
              href={COMPANY_DETAILS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-300 flex w-full max-w-72 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10"
            >
              <FaWhatsapp className="text-lg text-emerald-400" />
              <span>Chat Construction Lead</span>
            </Link>
          </div>
        </main>

        {/* 4-Step Process Cards */}
        <main className="space-y-4 lg:col-span-6">
          {COMPANY_DETAILS.constructionStages.map((stage, idx) => (
            <div
              key={idx}
              className="transition-300 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-amber-400/40"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-2xl font-black text-amber-400">
                {stage.step}
              </span>
              <div>
                <h4 className="mb-1 text-base font-bold text-white">
                  {stage.title}
                </h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </main>
      </section>
    </section>
  );
};

export default Turnkey;

const tab = [
  {
    title: "3D Renders & Approvals",
    des: "Custom architectural floor plans and government permits.",
  },
  {
    title: "Milestone Billing",
    des: "Pay in structured stages after physical quality verification.",
  },
];

import { cn } from "@/utils/utils";
import { FaHammer } from "react-icons/fa";
import { FiAward, FiCheckCircle, FiCompass, FiShield } from "react-icons/fi";

const Why = () => {
  return (
    <section className="border-y border-slate-200/80 bg-slate-50 py-20">
      <section className="wrapper">
        <header className="mx-auto mb-16 max-w-3xl space-y-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3.5 py-1.5 text-xs font-bold tracking-wider text-emerald-900 uppercase">
            <FiAward />
            <span>The Olagid Distinction</span>
          </span>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Why Property Buyers & Investors Choose Us
          </h2>
          <p className="text-xs text-slate-500 sm:text-sm">
            We combine deep grassroots mastery of the Lagos-Ogun property market
            with unwavering corporate integrity.
          </p>
        </header>

        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tab.map((card, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 transition-all duration-300 hover:border-emerald-600/30 hover:shadow-xl"
            >
              <div className="space-y-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
                  <card.icon
                    className={cn("text-2xl text-amber-600", {
                      "text-emerald-600": i % 2 == 0,
                    })}
                  />
                </span>
                <h3 className="text-lg leading-snug font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  {card.desc}
                </p>
              </div>

              <span className="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-4 text-xs font-semibold text-emerald-800">
                <FiCheckCircle className="text-amber-500" />
                <span>Guaranteed Security</span>
              </span>
            </div>
          ))}
        </main>
      </section>
    </section>
  );
};

export default Why;

const tab = [
  {
    icon: FiShield,
    title: "100% Scam-Free & Omo-Onile Free",
    desc: "Zero double-selling, zero community interference. You get direct peaceful possession and immediate boundary beaconing.",
  },
  {
    icon: FiCompass,
    title: "Prime Growth Corridors",
    desc: "We curate lands in fast-appreciating nodes like Magboro, Arepo, and Mowe with 25% - 40% historical annual capital growth.",
  },
  {
    icon: FiAward,
    title: "Rigorous Legal Title Search",
    desc: "Every property comes with traceable title deeds (C of O, Governor's Consent, Gazette) verified through state land archives.",
  },
  {
    icon: FaHammer,
    title: "Turnkey In-House Construction",
    desc: "No middlemen. Our certified architects and builders handle the entire project lifecycle with guaranteed structural warranty.",
  },
];

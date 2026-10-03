import HeroSearch from "../shared/HeroSearch";
import { COMPANY_DETAILS } from "@/data/properties";
import { FiShield } from "react-icons/fi";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#022c22] via-[#043b2f] to-[#064e3b] pt-12 pb-24 text-white lg:pt-20 lg:pb-32">
      {/* Background architectural image overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Architecture"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Ambient colored orbs */}
      <span className="pointer-events-none absolute top-1/4 -left-20 size-96 rounded-full bg-emerald-400/15 blur-3xl" />
      <span className="pointer-events-none absolute right-0 bottom-10 size-96 rounded-full bg-amber-400/10 blur-3xl" />

      <main className="wrapper relative z-10">
        {/* Top pill badge */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-emerald-900/80 px-4 py-1.5 text-xs font-bold tracking-wider text-amber-300 uppercase shadow-lg">
            <FiShield className="size-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Real Estate Broker & Developer • Magboro HQ</span>
          </span>
        </div>

        {/* Main Headline */}
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h1 className="text-4xl leading-[1.15] font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Buy, Sell & Build Contemporary Properties With{" "}
            <span className="text-amber-400">Total Security</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-emerald-100/85 sm:text-lg">
            Specialized in genuine dry lands, luxury duplexes, rental
            investments, and turnkey building construction along the thriving
            Lagos-Ibadan corridor.
          </p>
        </div>

        {/* Interactive Search Tool */}
        <div className="mt-10">
          <HeroSearch />
        </div>

        {/* Credibility Stats Bar */}
        <dt className="mt-14 grid grid-cols-2 gap-6 border-t border-emerald-800/60 pt-10 text-center md:grid-cols-4">
          {COMPANY_DETAILS.stats.map((stat, i) => (
            <dl key={i} className="space-y-1">
              <h6 className="text-2xl font-black tracking-tight text-amber-400 sm:text-3xl lg:text-4xl">
                {stat.value}
              </h6>
              <p className="text-xs font-medium text-emerald-200/80 sm:text-sm">
                {stat.label}
              </p>
            </dl>
          ))}
        </dt>
      </main>
    </section>
  );
};

export default Hero;

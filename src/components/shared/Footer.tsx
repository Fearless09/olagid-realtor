import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { COMPANY_DETAILS } from "@/data/properties";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-900/60 bg-[#022c22] pt-16 pb-12 text-slate-300">
      {/* Background ambient lighting */}
      <span className="pointer-events-none absolute top-0 right-1/4 size-96 rounded-full bg-emerald-600/10 blur-3xl" />
      <span className="pointer-events-none absolute bottom-0 left-10 size-80 rounded-full bg-amber-500/5 blur-3xl" />

      <section className="wrapper relative z-10">
        <main className="grid grid-cols-1 gap-10 border-b border-emerald-800/40 pb-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Column 1: Company Profile */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/40 bg-linear-to-br from-emerald-600 to-emerald-900 shadow-inner">
                <span className="text-xl font-extrabold text-amber-400">O</span>
                <span className="ml-[-2px] text-xs font-bold tracking-tighter text-white">
                  R
                </span>
              </div> */}
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  OLAGID
                </span>
                <span className="ml-1.5 text-xs font-bold tracking-widest text-amber-400 uppercase">
                  REALTORS LTD
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-emerald-100/70">
              Your certified partner for genuine land acquisition, contemporary
              home development, property leasing, and transparent diaspora
              investment across the Lagos-Ogun growth corridor.
            </p>

            <div className="flex items-center pt-2">
              <span className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-emerald-900/60 px-3 py-1.5 text-xs font-medium text-amber-300">
                <FiShield className="text-amber-400" />
                <span>100% Verified Titles & Zero Omo-Onile</span>
              </span>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <Link
                href={COMPANY_DETAILS.socialHandles.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-300 flex size-9 items-center justify-center rounded-lg border border-emerald-700/50 bg-emerald-900/80 text-white hover:bg-emerald-700"
                aria-label="Facebook"
              >
                <FaFacebook className="text-base" />
              </Link>
              <Link
                href={COMPANY_DETAILS.socialHandles.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-300 flex size-9 items-center justify-center rounded-lg border border-emerald-700/50 bg-emerald-900/80 text-white hover:bg-emerald-700"
                aria-label="Instagram"
              >
                <FaInstagram className="text-base" />
              </Link>
              <Link
                href={COMPANY_DETAILS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-300 flex size-9 items-center justify-center rounded-lg border border-emerald-700/50 bg-emerald-900/80 text-white hover:bg-emerald-700"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-base" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {nav.map(({ href, name }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="flex items-center gap-1 transition-colors hover:text-amber-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map(({ href, name }, indx) => (
                <li key={indx}>
                  <Link
                    href={href}
                    className="transition-300 hover:text-amber-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Head Office & Contacts */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Corporate Office
            </h4>
            <ul className="space-y-3 text-xs text-emerald-100/80 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="mt-0.5 shrink-0 text-lg text-amber-400" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex gap-2.5">
                <FiPhone className="mt-1 shrink-0 text-amber-400" />
                <div className="flex flex-col">
                  <Link
                    href={`tel:${COMPANY_DETAILS.phoneIntlPrimary}`}
                    className="hover:text-white"
                  >
                    {COMPANY_DETAILS.phoneIntlPrimary}
                  </Link>
                  <Link
                    href={`tel:${COMPANY_DETAILS.phoneSecondary}`}
                    className="hover:text-white"
                  >
                    {COMPANY_DETAILS.phoneSecondary}
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="shrink-0 text-amber-400" />
                <Link
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="hover:text-white"
                >
                  {COMPANY_DETAILS.email}
                </Link>
              </li>
            </ul>
          </div>
        </main>

        {/* Bottom bar */}
        <main className="flex flex-col items-center justify-between gap-4 pt-4 text-xs text-emerald-200/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Olagid Realtors Limited. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-300">
              <FiCheckCircle className="text-amber-400" /> Registered Real
              Estate Entity
            </span>
            <span>•</span>
            <Link href="/contact" className="hover:text-white">
              Privacy & Legal
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white">
              Inspection Policy
            </Link>
          </div>
        </main>
      </section>
    </footer>
  );
}

const services = [
  { name: "Architectural 3D Designs", href: "/build" },
  { name: "Project Construction & Supervision", href: "/build" },
  { name: "Land Survey & Beaconing", href: "/services" },
  { name: "C of O & Title Regularization", href: "/services" },
  { name: "Diaspora Building Concierge", href: "/services" },
];

const nav = [
  { name: "Properties For Sale", href: "/properties" },
  { name: "land & Plots", href: "/properties?category=land" },
  { name: "Rentals & Leases", href: "/properties?category=rent" },
  { name: "Turnkey Contruction", href: "/build" },
  { name: "About Olagid", href: "/about" },
];

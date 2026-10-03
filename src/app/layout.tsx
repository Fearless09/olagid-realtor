import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import InspectionModal from "@/components/modals/InspectionModal";
import { ReduxProvider } from "@/redux/hook";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Olagid Realtors Limited | Lands, Contemporary Homes & Turnkey Construction",
  description:
    "Olagid Realtors Limited specializes in buying, selling, leasing, and turnkey building construction across Magboro, Arepo, Mowe, and the Lagos-Ibadan expressway corridor. 100% verified titles and scam-free guarantee.",
  icons: "/icon.webp",
  keywords: [
    "Olagid Realtors Limited",
    "Real Estate Magboro",
    "Land for sale in Arepo",
    "Properties in Ogun State",
    "Lagos-Ibadan expressway land",
    "Duplex for sale Magboro",
    "Turnkey building contractor Nigeria",
    "Diaspora real estate Nigeria",
    "Registered survey and C of O",
  ],
  authors: [{ name: "Olagid Realtors Limited" }],
  openGraph: {
    title:
      "Olagid Realtors Limited | Lands, Contemporary Homes & Building Services",
    description:
      "Buy, sell, lease and build with confidence. Verified lands, modern duplexes, and turnkey construction in Magboro, Arepo, Mowe, and Lagos corridor.",
    type: "website",
    locale: "en_NG",
    siteName: "Olagid Realtors Limited",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
    >
      <ReduxProvider>
        <body className="relative flex min-h-full flex-col bg-[#fcfdfd] text-[#0f172a]">
          <Navbar />
          <section className="flex-1">{children}</section>
          <Footer />

          <InspectionModal />
        </body>
      </ReduxProvider>
    </html>
  );
}

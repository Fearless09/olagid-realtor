import MortgageCalculator from "@/components/shared/MortgageCalculator";
import DiasporaConcierge from "@/components/shared/DiasporaConcierge";
import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Turnkey from "@/components/home/Turnkey";
import Why from "@/components/home/Why";
import FAQ from "@/components/shared/FAQ";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <Turnkey />
      <Why />
      <DiasporaConcierge />
      <section className="wrapper py-20">
        <MortgageCalculator />
      </section>
      <FAQ />
      <CTA />
    </>
  );
}

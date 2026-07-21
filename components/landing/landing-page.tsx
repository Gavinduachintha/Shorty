import Header from "@/components/header/header";
import React from "react";
import Hero from "@/components/hero/hero";
import Footer from "@/components/landing/footer";
import LandingBenefits from "@/components/landing/landing-benefits";
import LandingProcess from "@/components/landing/landing-process";
import LandingCta from "@/components/landing/landing-cta";

const LandingPage = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0D0D0D] text-white">
      <div className="relative z-10">
        <Header />
        <Hero />
        <LandingBenefits />
        <LandingProcess />
        <LandingCta />
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;

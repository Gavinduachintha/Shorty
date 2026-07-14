import Header from "@/components/header/header";
import React from "react";
import Hero from "@/components/hero/hero";
import Footer from "@/app/landing/footer/footer";
import LandingBenefits from "@/components/landing/landing-benefits";
import LandingProcess from "@/components/landing/landing-process";
import LandingCta from "@/components/landing/landing-cta";
const Landing = () => {
  return (
    <main className="min-h-screen  text-white">
      <Header />
      <Hero />
      <LandingBenefits />
      <LandingProcess />
      <LandingCta />
      <Footer />
    </main>
  );
};

export default Landing;

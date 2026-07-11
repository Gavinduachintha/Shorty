import Header from "@/components/header/header";
import React from "react";
import Hero from "@/components/hero/hero";
import Footer from "@/app/footer/footer";
import LandingBenefits from "@/components/landing/landing-benefits";
import LandingProcess from "@/components/landing/landing-process";
import LandingCta from "@/components/landing/landing-cta";
const Landing = () => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(93,41,240,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%),linear-gradient(135deg,#0d0d0d_0%,#111111_45%,#080808_100%)] text-white">
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

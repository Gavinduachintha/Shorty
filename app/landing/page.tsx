import Header from "@/components/header/header";
import React from "react";
import Hero from "@/components/hero/hero";
import Footer from "@/app/landing/footer/footer";
import LandingBenefits from "@/components/landing/landing-benefits";
import LandingProcess from "@/components/landing/landing-process";
import LandingCta from "@/components/landing/landing-cta";
const Landing = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0D0D0D] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(circle at center, black 35%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 35%, transparent 100%)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-[#8B5CF6]/12 blur-3xl"
          style={{ height: "32rem", width: "32rem" }}
        />
        <div
          className="absolute rounded-full bg-[#14B8A6]/8 blur-3xl"
          style={{
            right: "-8rem",
            top: "28rem",
            height: "24rem",
            width: "24rem",
          }}
        />
      </div>
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

export default Landing;

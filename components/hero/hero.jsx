import React from "react";
import HeroContent from "./hero-content";
import HeroDashboard from "./hero-dashboard";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0D0D0D]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        
      />

      <div className="relative px-4 pt-20 pb-12 lg:px-8 lg:pt-28">
        <HeroContent />
      </div>

      <div className="relative mt-12 px-4 pb-0 lg:mt-16 lg:px-12">
        <HeroDashboard />
      </div>
    </section>
  );
};

export default Hero;

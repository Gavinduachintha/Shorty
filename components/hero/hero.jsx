import React from "react";
import HeroContent from "./hero-content";
import HeroDashboard from "./hero-dashboard";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 opacity-[0.28]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,92,246,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_60%)]"
          style={{ height: "40rem" }}
        />
      </div>

      <div className="relative px-4 pt-20 pb-12 lg:px-8 lg:pt-28">
        <HeroContent />
        <div className="relative mt-12 px-4 pb-0 lg:mt-16 lg:px-12">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
};

export default Hero;

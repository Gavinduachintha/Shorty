import React from "react";
import HeroContent from "./hero-content";
import HeroDashboard from "./hero-dashboard";
import AnimatedBeams from "./animated-beams";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Subtle dot-grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,92,246,0.2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          }}
        />
      </div>

      {/* Animated beam lines */}
      <AnimatedBeams />

      <div className="relative px-4 pt-20 pb-12 lg:px-8 lg:pt-32">
        <HeroContent />
        <div className="relative mt-16 px-4 pb-0 lg:mt-20 lg:px-12">
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Link from "next/link";
import React from "react";

const HeroContent = () => {
  return (
    <section className="relative py-6 md:py-8 lg:py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium mb-8 animate-fade-in-down motion-reduce:animate-none backdrop-blur-sm transition-all duration-300 bg-purple-500/10 border border-purple-500/20 text-purple-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" aria-hidden="true"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" aria-hidden="true"></span>
            </span>
            <span>Free & Open Source • No Limits</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight animate-fade-in-up motion-reduce:animate-none text-white">
            Shrink Links.
            <br />
            <span className="relative">
              <span className="gradient-text">Expand Reach.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-purple-500/30"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M2 10C50 4 150 4 198 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up motion-reduce:animate-none stagger-2 text-zinc-400">
            Transform lengthy URLs into powerful short links. Track every click
            with real-time analytics
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fade-in-up motion-reduce:animate-none stagger-3">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex px-8 py-4 bg-[#5D29F0] hover:bg-[#4A20C0] text-white font-semibold rounded-xl transition-all duration-300 text-base items-center justify-center gap-3 shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/40 focus-visible:ring-offset-2"
            >
              Start Free — No Card Required
            </Link>

            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-300 text-base backdrop-blur-sm border-zinc-700 text-white hover:border-[#5D29F0] focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-500/20 focus-visible:ring-offset-2"
            >
              View Dashboard
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16 animate-fade-in motion-reduce:animate-none stagger-4 text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="text-sm">Instant Creation</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">Real-time Analytics</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">SSL Secured</span>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default HeroContent;
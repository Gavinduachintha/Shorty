import Link from "next/link";
import React from "react";
import StatusIndicator from "./status-indicator";
import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Status badge */}
      <div className="flex justify-center">
        <StatusIndicator />
      </div>

      {/* Main headline */}
      <h1 className="mx-auto mt-8 max-w-3xl text-[40px] font-semibold leading-[1.15] tracking-tight text-[#F4F4F5] sm:text-5xl lg:text-[64px]">
        Turn long URLs into short, trackable links
      </h1>

      {/* Subheadline */}
      <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#A1A1AA] sm:text-lg">
        Create branded short links in seconds. Track every click with real-time
        analytics. No complexity, no bloat—just clean URLs that work.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/auth/register"
          className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#8B5CF6] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#7C4DE8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
        >
          Get started free
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#131316] px-7 py-3.5 text-sm font-semibold text-[#F4F4F5] transition-all hover:border-[#8B5CF6] hover:bg-[#1A1A1E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
        >
          View live demo
        </Link>
      </div>

      {/* Trust indicators */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
          <span className="text-sm text-[#A1A1AA]">42ms average redirect</span>
        </div>
        <div className="hidden sm:block h-4 w-[1px] bg-[#2A2A2E]" />
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
          <span className="text-sm text-[#A1A1AA]">99.98% uptime</span>
        </div>
        <div className="hidden sm:block h-4 w-[1px] bg-[#2A2A2E]" />
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
          <span className="text-sm text-[#A1A1AA]">SSL on every link</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;

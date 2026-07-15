import Link from "next/link";
import React from "react";
import StatusIndicator from "./status-indicator";

const HeroContent = () => {
  return (
    <>
      <div className="mx-auto max-w-4xl text-center items-center flex flex-col">
        <div className="flex flex-col w-2xl items-center justify-center p-0.5 gap-0.5 rounded border-white">
          <StatusIndicator />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717A]">
          {" "}
          {/* shorty.sh */}
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[#F4F4F5] sm:text-5xl lg:text-6xl">
          Short links that stay fast, branded, and measurable.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#A1A1AA] sm:text-xl">
          Create clean short URLs, track every click, and keep your redirects
          simple enough to trust in production.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-lg bg-[#8B5CF6] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#7C4DE8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
          >
            Start free - no card required
          </Link>

          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-lg border border-[#2A2A2E] px-6 py-3.5 text-sm font-semibold text-[#F4F4F5] transition-colors hover:border-[#8B5CF6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
          >
            View dashboard
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-[#71717A]">
          <span>42ms avg redirect</span>
          <span className="text-[#2A2A2E]">·</span>
          <span>99.98% uptime</span>
          <span className="text-[#2A2A2E]">·</span>
          <span>ssl on every link</span>
        </div>
      </div>
    </>
  );
};

export default HeroContent;

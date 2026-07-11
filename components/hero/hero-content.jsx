import Link from "next/link";
import React from "react";

const HeroContent = () => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#71717A]">
        shorty.sh
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
          href="/signup"
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

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#2A2A2E] bg-[#0D0D0D]/80 px-5 py-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:px-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[#A1A1AA]">
          <span className="font-mono text-[#8B5CF6]">shorty.sh/x7k9</span>
          <span className="text-[#3F3F46]">→</span>
          <span className="truncate font-mono text-[#71717A]">
            https://example.com/blog/2026/how-we-scaled-our-api-to-handle-10x-traffic
          </span>
        </div>

        <div className="mt-4 flex items-start gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3F3F46"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <p className="max-w-xl text-sm leading-6 text-[#A1A1AA]">
            That&apos;s the whole product: paste a link, get a short one back,
            and keep the data you need without slowing users down.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-[#71717A]">
        <span>42ms avg redirect</span>
        <span className="text-[#2A2A2E]">·</span>
        <span>99.98% uptime</span>
        <span className="text-[#2A2A2E]">·</span>
        <span>ssl on every link</span>
      </div>
    </div>
  );
};

export default HeroContent;

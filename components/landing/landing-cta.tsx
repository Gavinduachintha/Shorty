import Link from "next/link";
import React from "react";

const LandingCta = () => {
  return (
    <section className="relative border-t border-[#2A2A2E]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(139,92,246,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:px-8 lg:py-24">
        <div className="rounded-3xl border border-[#2A2A2E] bg-[#131316] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#A1A1AA]">
              Get started
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F4F5] sm:text-4xl">
              Try it out and make your first short link.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#A1A1AA] sm:text-lg">
              It stays simple: create a link, share it, and keep moving.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-lg bg-[#8B5CF6] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#7C4DE8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#131316]"
              >
                Start free - no card required
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-lg border border-[#2A2A2E] px-6 py-3.5 text-sm font-semibold text-[#F4F4F5] transition-colors hover:border-[#8B5CF6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#131316]"
              >
                View dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCta;
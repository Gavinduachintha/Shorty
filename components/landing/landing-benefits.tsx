import React from "react";
import LandingSectionShell from "./landing-section-shell";

const benefits = [
  {
    title: "Short links",
    description: "Turn a long URL into something easier to share.",
  },
  {
    title: "Basic clicks",
    description: "Keep a simple count of how often a link gets used.",
  },
  {
    title: "Fast redirects",
    description: "Keep the redirect path light and quick.",
  },
];

const LandingBenefits = () => {
  return (
    <LandingSectionShell
      id="about"
      eyebrow="What it does"
      title="A tiny link shortener with the basics covered."
      description="Make a short link, share it, and check a few simple stats without extra noise."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-2xl border border-[#2A2A2E] bg-[#131316] p-6 transition-colors hover:border-[#8B5CF6]/60"
          >
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A2A2E] bg-[#0D0D0D] text-sm font-semibold text-[#8B5CF6]">
              {benefit.title.slice(0, 1)}
            </div>
            <h3 className="text-lg font-semibold text-[#F4F4F5]">
              {benefit.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#A1A1AA]">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>
    </LandingSectionShell>
  );
};

export default LandingBenefits;
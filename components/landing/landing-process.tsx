import React from "react";
import LandingSectionShell from "./landing-section-shell";

const steps = [
  {
    number: "01",
    title: "Paste a link",
    description: "Drop in the URL you want to shorten.",
  },
  {
    number: "02",
    title: "Pick a slug",
    description: "Use a short name that is easy to remember.",
  },
  {
    number: "03",
    title: "Share it",
    description: "Send the link out and see basic click counts later.",
  },
];

const LandingProcess = () => {
  return (
    <LandingSectionShell
      id="how-it-works"
      eyebrow="How it works"
      title="Three small steps."
      description="Nothing fancy: make the link, share it, and check the clicks when you want to."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.number}
            className="relative overflow-hidden rounded-2xl border border-[#2A2A2E] bg-[#131316] p-6"
          >
            <div className="absolute right-4 top-4 text-5xl font-semibold text-[#8B5CF6]/10">
              0{index + 1}
            </div>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A2A2E] bg-[#0D0D0D] font-mono text-xs tracking-[0.2em] text-[#8B5CF6]">
              {step.number}
            </div>
            <h3 className="mt-6 text-lg font-semibold text-[#F4F4F5]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#A1A1AA]">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </LandingSectionShell>
  );
};

export default LandingProcess;
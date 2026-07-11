import React from "react";

type LandingSectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

const LandingSectionShell = ({
  id,
  eyebrow,
  title,
  description,
  children,
}: LandingSectionShellProps) => {
  return (
    <section id={id} className="relative border-t border-[#2A2A2E]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(139,92,246,0.16) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#A1A1AA]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F4F5] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#A1A1AA] sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
};

export default LandingSectionShell;

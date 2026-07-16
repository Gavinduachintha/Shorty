"use client";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { Globe, Link2, BarChart2, Layers } from "lucide-react";

// ============================================
// DATA
// ============================================
const STACK = [
  { name: "Next.js", role: "Application framework" },
  { name: "Supabase", role: "Database & authentication" },
  { name: "Tailwind CSS", role: "Styling" },
] as const;

const FEATURES = [
  {
    title: "Short links",
    description: "Generate short, branded links from any URL in seconds.",
    icon: Link2,
  },
  {
    title: "Analytics",
    description: "Track clicks, locations, and referrers in real time.",
    icon: BarChart2,
  },
  {
    title: "Custom domains",
    description: "Use your own domain for every link you create.",
    icon: Layers,
  },
] as const;

const SOCIAL_LINKS = {
  github: "https://github.com/Gavinduachintha",
  linkedin: "https://www.linkedin.com/in/gavindu-achintha/",
  website: "https://gavindu-achintha.vercel.app/",
} as const;

// ============================================
// COMPONENTS
// ============================================

const FeatureCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => (
  <div className="group rounded-2xl border border-[#2A2A2E] bg-[#131316] p-6 transition-all duration-200 hover:border-[#8B5CF6]/60">
    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#2A2A2E] bg-[#0D0D0D] text-[#8B5CF6] transition-colors duration-200 group-hover:border-[#8B5CF6]/40">
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </div>
    <h3 className="text-base font-semibold text-[#F4F4F5]">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">{description}</p>
  </div>
);

const StackItem = ({ name, role }: { name: string; role: string }) => (
  <div className="flex items-center justify-between rounded-xl border border-[#2A2A2E] bg-[#131316] px-5 py-3.5 transition-all duration-200 hover:border-[#8B5CF6]/50">
    <span className="font-mono text-sm font-medium text-[#F4F4F5]">{name}</span>
    <span className="rounded-full border border-[#2A2A2E] bg-[#0D0D0D] px-2.5 py-0.5 text-xs text-[#71717A]">
      {role}
    </span>
  </div>
);

const SocialIconButton = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#131316] text-[#A1A1AA] transition-all duration-200 hover:border-[#8B5CF6] hover:text-[#F4F4F5] hover:bg-[#1A1A1E]"
  >
    <Icon className="h-4 w-4" />
  </a>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8B5CF6]">
    {children}
  </p>
);

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function AboutPage() {
  return (
    <main className="relative mx-auto w-full max-w-3xl px-4 pt-16 pb-24 lg:px-0">

      {/* Ambient dot-grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,92,246,0.18) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 60%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative">
        {/* About Section */}
        <section>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8B5CF6]">
            About
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#F4F4F5]">
            shorty.sh
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#A1A1AA]">
            Shorty is a link shortener built for people who want their links
            short, fast, and measurable. Every link comes with real-time click
            analytics, without the bloat of a full marketing platform.
          </p>
        </section>

        {/* Features Section */}
        <section className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {FEATURES.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mt-14">
          <SectionHeading>Built with</SectionHeading>
          <div className="mt-4 space-y-2.5">
            {STACK.map((item) => (
              <StackItem key={item.name} {...item} />
            ))}
          </div>
        </section>

        {/* Developer Section */}
        <section className="mt-16 border-t border-[#2A2A2E] pt-12">
          <SectionHeading>Meet the developer</SectionHeading>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#2A2A2E] bg-[#131316] p-6 transition-all duration-300 hover:border-[#8B5CF6]/40 hover:shadow-[0_0_48px_rgba(139,92,246,0.10)]">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

              {/* Left — avatar + bio */}
              <div className="flex items-start gap-5">
                {/* Avatar with radial glow */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-[#8B5CF6] opacity-25 blur-xl" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6C47FF] text-2xl font-bold text-white shadow-lg">
                    G
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#F4F4F5]">
                    Gavi
                  </h3>
                  <p className="mt-0.5 text-sm text-[#8B5CF6]">
                    Founder · Zenlab64
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#A1A1AA]">
                    I build modern developer tools, AI-powered products, and
                    clean, performance-focused web experiences. Shorty is
                    designed to make link management simple, beautiful, and fast.
                  </p>
                </div>
              </div>

              {/* Right — socials + badge */}
              <div className="flex flex-row items-center gap-3 sm:flex-col sm:items-end sm:gap-4">
                <div className="flex items-center gap-2">
                  <SocialIconButton
                    href={SOCIAL_LINKS.github}
                    icon={LuGithub}
                    label="GitHub"
                  />
                  <SocialIconButton
                    href={SOCIAL_LINKS.linkedin}
                    icon={FaLinkedinIn}
                    label="LinkedIn"
                  />
                  <SocialIconButton
                    href={SOCIAL_LINKS.website}
                    icon={Globe}
                    label="Website"
                  />
                </div>
                <div className="rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 px-3 py-1 text-xs font-medium text-[#A78BFA]">
                  Building in public 🚀
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

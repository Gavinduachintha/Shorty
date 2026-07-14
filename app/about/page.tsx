"use client";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { Globe } from "lucide-react";

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
    description: "Generate short, branded links from any URL.",
  },
  {
    title: "Analytics",
    description: "Track clicks, locations, and referrers in real time.",
  },
  {
    title: "Custom domains",
    description: "Use your own domain for every link you create.",
  },
] as const;

const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  website: "https://zenlab64.com",
} as const;

// ============================================
// COMPONENTS
// ============================================

// Feature Card Component
const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-4 transition-all duration-200 hover:border-purple-500/50">
    <h3 className="text-sm font-medium text-[#F4F4F5]">{title}</h3>
    <p className="mt-1.5 text-sm leading-6 text-[#A1A1AA]">{description}</p>
  </div>
);

// Stack Item Component
const StackItem = ({ name, role }: { name: string; role: string }) => (
  <div className="flex items-center justify-between rounded-lg border border-[#2A2A2E] bg-[#131316] px-4 py-3 transition-all duration-200 hover:border-purple-500/50">
    <span className="font-mono text-sm text-[#F4F4F5]">{name}</span>
    <span className="text-xs text-[#71717A]">{role}</span>
  </div>
);

// Social Icon Button Component
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
    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#131316] text-[#A1A1AA] transition-all duration-200 hover:border-purple-500 hover:text-[#F4F4F5] hover:bg-[#1A1A1E]"
  >
    <Icon className="h-4 w-4" />
  </a>
);

// Section Heading Component
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xs font-medium uppercase tracking-[0.16em] text-[#71717A]">
    {children}
  </h2>
);

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 pt-16 pb-24 lg:px-0">
      {/* About Section */}
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-[#F4F4F5]">
          About shorty.sh
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-7 text-[#A1A1AA]">
          Shorty is a link shortener built for people who want their links
          short, fast, and measurable. Every link comes with real-time click
          analytics, without the bloat of a full marketing platform.
        </p>
      </section>

      {/* Features Section */}
      <section className="mt-10">
        <h2 className="sr-only">Features</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mt-12">
        <SectionHeading>Built with</SectionHeading>
        <div className="mt-4 space-y-3">
          {STACK.map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </div>
      </section>

      {/* Developer Section */}
      <section className="mt-14 border-t border-[#2A2A2E] pt-10">
        <SectionHeading>Meet the developer</SectionHeading>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#2A2A2E] bg-[#0D0D0D] text-base font-semibold text-purple-400">
            G
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#F4F4F5]">Gavi</h3>
            <p className="text-sm text-[#A1A1AA]">Founder, Zenlab64</p>
          </div>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-6 text-[#A1A1AA]">
          Shorty is built and maintained by Gavi, founder of Zenlab64.
        </p>

        {/* Social Links */}
        <div className="mt-5 flex items-center gap-2">
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
            label="Zenlab64"
          />
        </div>
      </section>
    </main>
  );
}
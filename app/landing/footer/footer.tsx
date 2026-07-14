"use client";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t border-[#2A2A2E] bg-[#0D0D0D]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2A2A2E 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-5 pb-5 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Left Side */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#131316] text-sm font-semibold text-[#8B5CF6]">
                S
              </span>

              <span className="font-mono text-sm text-[#F4F4F5]">
                shorty.sh
              </span>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Gavinduachintha"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#131316] text-[#A1A1AA] transition-colors hover:border-[#8B5CF6] hover:text-[#F4F4F5]"
            >
              <LuGithub className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/gavindu-achintha/"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#131316] text-[#A1A1AA] transition-colors hover:border-[#8B5CF6] hover:text-[#F4F4F5]"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>

            <a
              href="https://gavindu-achintha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Meet the developer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#131316] text-[#A1A1AA] transition-colors hover:border-[#8B5CF6] hover:text-[#F4F4F5]"
            >
              <Code2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-5 flex flex-col-reverse items-center gap-4 border-t border-[#2A2A2E] pt-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs text-[#71717A]">
            © 2026 shorty.sh — all rights reserved
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-[#2A2A2E] bg-[#131316] px-3 py-1.5 font-mono text-xs text-[#A1A1AA] transition-colors hover:text-[#F4F4F5]"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"
              aria-hidden="true"
            />
            All systems operational
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

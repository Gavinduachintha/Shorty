"use client";
import RegisterForm from "@/components/auth/register-form";
import Link from "next/link";
import { Link6 } from "reicon-react";

const RegisterPage = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-[44%_56%] bg-[#0D0D0D] overflow-hidden">
      {/* Left: form */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-6 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#2A2A2E] text-[#8B5CF6]">
              <Link6 weight="Filled" size={17} />
            </span>
            <span className="text-sm font-medium tracking-wide text-[#F4F4F5]">
              <Link href="/">Shorty</Link>
            </span>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-[#F4F4F5]">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-[#A1A1AA]">
            Free to start. No card required.
          </p>

          <div className="mt-8">
            <RegisterForm />
          </div>
        </div>
      </div>

      {/* Right: product panel */}
      <div className="relative hidden lg:flex flex-col justify-center border-l border-[#2A2A2E] px-16 overflow-hidden">
        {/* dot-grid texture, single color, no gradient fill */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #2A2A2E 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-md">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#8B5CF6]">
            Link management, done right
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-[#F4F4F5]">
            Every link, tracked and tidy.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#A1A1AA]">
            Shorten, brand, and measure your links from one dashboard — click
            data included by default.
          </p>

          {/* Signature element: live shorten demo */}
          <div className="mt-10 rounded-xl border border-[#2A2A2E] bg-[#131316] p-5">
            <div className="flex items-center gap-3">
              <div className="min-w-0 flex-1 truncate rounded-md border border-[#2A2A2E] bg-[#0D0D0D] px-3 py-2 font-mono text-[13px] text-[#71717A]">
                https://example.com/blog/2026/how-we-scaled-our-api-to-handle-10x-traffic
              </div>
            </div>

            <div className="my-3 flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#52525B"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>

            <div className="flex items-center justify-between rounded-md border border-[#2A2A2E] bg-[#0D0D0D] px-3 py-2">
              <span className="font-mono text-[13px] text-[#F4F4F5]">
                shorty.sh/<span className="text-[#8B5CF6]">api-scale</span>
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#71717A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="9" y="9" width="11" height="11" rx="2" />
                <path d="M5 15V5a2 2 0 012-2h10" />
              </svg>
            </div>

            <div className="mt-4 flex items-center gap-5 border-t border-[#2A2A2E] pt-4 text-xs text-[#A1A1AA]">
              <span>
                <span className="font-medium text-[#F4F4F5]">1,204</span> clicks
              </span>
              <span>
                <span className="font-medium text-[#F4F4F5]">38</span> countries
              </span>
              <span>
                <span className="font-medium text-[#F4F4F5]">98.2%</span> uptime
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

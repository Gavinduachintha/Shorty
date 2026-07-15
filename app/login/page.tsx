'use client'
import LoginBox from "./loginBox";
import { Link6 } from "reicon-react";
import Link from "next/link";

const LoginPage = () => {
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
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-[#A1A1AA]">
            Sign in to get to your links and stats.
          </p>

          <div className="mt-8">
            <LoginBox />
          </div>
        </div>
      </div>

      {/* Right: product panel */}
      <div className="relative hidden lg:flex flex-col justify-center border-l border-[#2A2A2E] px-16 overflow-hidden">
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
            Your workspace
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-[#F4F4F5]">
            Welcome back to your workspace.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[#A1A1AA]">
            Your links, clicks, and destinations — right where you left
            them.
          </p>

          {/* Signature element: dashboard snapshot */}
          <div className="mt-10 rounded-xl border border-[#2A2A2E] bg-[#131316] p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#71717A]">
                Recent links
              </span>
              <span className="text-xs text-[#71717A]">Last 7 days</span>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-md border border-[#2A2A2E] bg-[#0D0D0D] px-3 py-2.5">
                <span className="font-mono text-[13px] text-[#F4F4F5]">
                  shorty.sh/<span className="text-[#8B5CF6]">api-scale</span>
                </span>
                <span className="text-xs text-[#A1A1AA]">412 clicks</span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-[#2A2A2E] bg-[#0D0D0D] px-3 py-2.5">
                <span className="font-mono text-[13px] text-[#F4F4F5]">
                  shorty.sh/<span className="text-[#8B5CF6]">q3-launch</span>
                </span>
                <span className="text-xs text-[#A1A1AA]">208 clicks</span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-[#2A2A2E] bg-[#0D0D0D] px-3 py-2.5">
                <span className="font-mono text-[13px] text-[#F4F4F5]">
                  shorty.sh/<span className="text-[#8B5CF6]">docs</span>
                </span>
                <span className="text-xs text-[#A1A1AA]">96 clicks</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-5 border-t border-[#2A2A2E] pt-4 text-xs text-[#A1A1AA]">
              <span><span className="font-medium text-[#F4F4F5]">24</span> active links</span>
              <span><span className="font-medium text-[#F4F4F5]">1,204</span> total clicks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
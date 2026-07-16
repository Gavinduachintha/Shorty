import React from "react";
import { BarChart3, Clock, Link2 } from "lucide-react";

const links = [
  {
    slug: "x7k9",
    dest: "example.com/blog/2026/how-we-scaled-our-api",
    clicks: "1,204",
    created: "Jul 8",
  },
  {
    slug: "launch",
    dest: "example.com/product/launch-day",
    clicks: "892",
    created: "Jul 6",
  },
  {
    slug: "q3-docs",
    dest: "example.com/docs/quarterly-report",
    clicks: "431",
    created: "Jul 3",
  },
  {
    slug: "promo",
    dest: "example.com/campaigns/summer-promo",
    clicks: "218",
    created: "Jun 29",
  },
];

const HeroDashboard = () => {
  return (
    <div
      className="relative mx-auto w-full max-w-5xl"
      style={{
        maskImage: "linear-gradient(to bottom, black 50%, transparent 95%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 50%, transparent 95%)",
      }}
    >
      <div className="overflow-hidden rounded-t-xl border border-b-0 border-[#2A2A2E] bg-[#131316]">
        {/* Window bar */}
        <div className="flex items-center justify-between border-b border-[#2A2A2E] bg-[#0D0D0D] px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#3F3F46]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#3F3F46]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#3F3F46]" />
            </div>
            <span className="ml-3 font-mono text-xs text-[#71717A]">
              app.shorty.sh/dashboard
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-[#2A2A2E] bg-[#131316] px-2.5 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            <span className="text-xs font-medium text-[#A1A1AA]">Live</span>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden sm:block w-48 shrink-0 border-r border-[#2A2A2E] bg-[#0D0D0D] p-4">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#131316] text-[#8B5CF6]">
                <Link2 className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm font-semibold text-[#F4F4F5]">
                Shorty
              </span>
            </div>
            <nav className="space-y-1 text-sm">
              <div className="flex items-center gap-2.5 rounded-lg bg-[#8B5CF6]/10 px-3 py-2.5 text-[#8B5CF6] font-medium">
                <BarChart3 className="h-4 w-4" />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2.5 text-[#A1A1AA] hover:text-[#F4F4F5]">
                <Link2 className="h-4 w-4" />
                <span>Links</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2.5 text-[#A1A1AA] hover:text-[#F4F4F5]">
                <Clock className="h-4 w-4" />
                <span>Analytics</span>
              </div>
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 p-6">
            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-[#2A2A2E] bg-[#0D0D0D] p-4">
                <div className="text-xs font-medium text-[#71717A]">
                  Total clicks
                </div>
                <div className="mt-2 text-2xl font-semibold text-[#F4F4F5]">
                  12.8k
                </div>
                <div className="mt-1 text-xs text-[#22C55E]">
                  +12.5% this week
                </div>
              </div>
              <div className="rounded-xl border border-[#2A2A2E] bg-[#0D0D0D] p-4">
                <div className="text-xs font-medium text-[#71717A]">
                  Active links
                </div>
                <div className="mt-2 text-2xl font-semibold text-[#F4F4F5]">
                  64
                </div>
                <div className="mt-1 text-xs text-[#A1A1AA]">
                  Across 3 domains
                </div>
              </div>
              <div className="rounded-xl border border-[#2A2A2E] bg-[#0D0D0D] p-4">
                <div className="text-xs font-medium text-[#71717A]">
                  Avg. redirect
                </div>
                <div className="mt-2 text-2xl font-semibold text-[#F4F4F5]">
                  38ms
                </div>
                <div className="mt-1 text-xs text-[#22C55E]">-8ms from avg</div>
              </div>
            </div>

            {/* Recent links table */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#2A2A2E] bg-[#0D0D0D]">
              <div className="border-b border-[#2A2A2E] px-4 py-3">
                <h3 className="text-sm font-semibold text-[#F4F4F5]">
                  Recent links
                </h3>
              </div>
              <div className="divide-y divide-[#2A2A2E]">
                {links.map((l) => (
                  <div
                    key={l.slug}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-3 hover:bg-[#131316]"
                  >
                    <div className="min-w-0">
                      <div className="font-mono text-[13px] text-[#F4F4F5]">
                        shorty.sh/
                        <span className="text-[#8B5CF6] font-semibold">
                          {l.slug}
                        </span>
                      </div>
                      <div className="mt-0.5 truncate text-xs text-[#71717A]">
                        {l.dest}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-[#F4F4F5]">
                      {l.clicks}
                    </span>
                    <span className="text-xs text-[#A1A1AA]">{l.created}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;

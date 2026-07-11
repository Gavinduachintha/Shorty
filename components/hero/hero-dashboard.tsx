import React from "react";

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
        maskImage: "linear-gradient(to bottom, black 55%, transparent 96%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 55%, transparent 96%)",
      }}
    >
      <div className="overflow-hidden rounded-t-2xl border border-b-0 border-[#2A2A2E] bg-[#131316] shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
        {/* window bar */}
        <div className="flex items-center justify-between border-b border-[#2A2A2E] px-4 py-3">
          <span className="font-mono text-xs text-[#71717A]">
            app.shorty.sh/links
          </span>
          <span className="rounded-md border border-[#2A2A2E] bg-[#0D0D0D] px-2.5 py-1 text-xs text-[#A1A1AA]">
            Live
          </span>
        </div>

        <div className="flex">
          {/* sidebar */}
          <div className="hidden sm:block w-44 shrink-0 border-r border-[#2A2A2E] p-4">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded border border-[#2A2A2E] text-[#8B5CF6] text-[10px] font-bold">
                S
              </span>
              <span className="text-xs font-medium text-[#F4F4F5]">Shorty</span>
            </div>
            <div className="space-y-1 text-sm">
              <div className="rounded-md bg-[#8B5CF6]/10 px-3 py-2 text-[#8B5CF6] font-medium">
                Links
              </div>
              <div className="px-3 py-2 text-[#A1A1AA]">Analytics</div>
              <div className="px-3 py-2 text-[#A1A1AA]">Domains</div>
              <div className="px-3 py-2 text-[#A1A1AA]">Settings</div>
            </div>
          </div>

          {/* main */}
          <div className="flex-1 p-5">
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] p-3">
                <div className="text-[11px] text-[#71717A]">Total clicks</div>
                <div className="mt-1 text-xl font-semibold text-[#F4F4F5]">
                  12.8k
                </div>
              </div>
              <div className="rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] p-3">
                <div className="text-[11px] text-[#71717A]">Active links</div>
                <div className="mt-1 text-xl font-semibold text-[#F4F4F5]">
                  64
                </div>
              </div>
              <div className="rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] p-3">
                <div className="text-[11px] text-[#71717A]">Avg. redirect</div>
                <div className="mt-1 text-xl font-semibold text-[#F4F4F5]">
                  38ms
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] overflow-hidden">
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-[#2A2A2E] px-4 py-2 text-[11px] uppercase tracking-wide text-[#71717A]">
                <span>Link</span>
                <span>Clicks</span>
                <span>Created</span>
              </div>
              {links.map((l) => (
                <div
                  key={l.slug}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-[#2A2A2E] px-4 py-3 last:border-b-0"
                >
                  <div className="min-w-0">
                    <div className="font-mono text-[13px] text-[#F4F4F5]">
                      shorty.sh/<span className="text-[#8B5CF6]">{l.slug}</span>
                    </div>
                    <div className="truncate font-mono text-[11px] text-[#71717A]">
                      {l.dest}
                    </div>
                  </div>
                  <span className="text-xs text-[#A1A1AA]">{l.clicks}</span>
                  <span className="text-xs text-[#A1A1AA]">{l.created}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;

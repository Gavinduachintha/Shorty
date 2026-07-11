import React from 'react';

const quickTags = ['Secure auth', 'Custom domains', 'Share-ready'];

const HeroPreview = () => {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="relative overflow-hidden rounded-2xl border border-[#2A2A2E] bg-[#131316]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2A2A2E 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative p-5">
          <div className="flex items-center justify-between border-b border-[#2A2A2E] pb-4">
            <div>
              <p className="text-xs text-[#A1A1AA]">Dashboard preview</p>
              <h2 className="mt-1 text-lg font-semibold text-[#F4F4F5]">Link Shortener</h2>
            </div>
            <div className="rounded-md border border-[#2A2A2E] bg-[#0D0D0D] px-3 py-1 text-xs font-medium text-[#A1A1AA]">
              Active
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-[#2A2A2E] bg-[#0D0D0D] p-4">
              <div className="text-xs uppercase tracking-[0.24em] text-[#71717A]">
                Paste your URL
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-lg border border-[#2A2A2E] bg-[#131316] px-4 py-3">
                <div className="min-w-0 flex-1 truncate font-mono text-[13px] text-[#A1A1AA]">
                  https://www.example.com/your-very-long-link-here
                </div>
                <button className="shrink-0 rounded-md bg-[#8B5CF6] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#7C4DE8]">
                  Shorten
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-xl border border-[#2A2A2E] bg-[#0D0D0D] p-4">
                <div className="flex items-center justify-between font-mono text-[13px] text-[#F4F4F5]">
                  <span>
                    shorty.app/<span className="text-[#8B5CF6]">launch</span>
                  </span>
                  <span className="text-xs text-[#8B5CF6]">Copied</span>
                </div>
                <div className="mt-4 text-sm leading-6 text-[#A1A1AA]">
                  Analytics overview, branded links, and conversion tracking
                  in one place.
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-[#2A2A2E] bg-[#0D0D0D] p-4">
                  <div className="text-xs text-[#71717A]">Clicks today</div>
                  <div className="mt-2 text-2xl font-semibold text-[#F4F4F5]">2.4k</div>
                </div>
                <div className="rounded-xl border border-[#2A2A2E] bg-[#0D0D0D] p-4">
                  <div className="text-xs text-[#71717A]">Avg. speed</div>
                  <div className="mt-2 text-2xl font-semibold text-[#F4F4F5]">0.2s</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {quickTags.map((label) => (
                <span
                  key={label}
                  className="rounded-md border border-[#2A2A2E] bg-[#0D0D0D] px-3 py-1.5 text-xs font-medium text-[#A1A1AA]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPreview;
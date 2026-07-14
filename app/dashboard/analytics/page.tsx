"use client";

import { useState } from "react";

const ranges = ["7d", "30d", "90d"] as const;

const clicksByDay = [
  { day: "Mon", clicks: 320 },
  { day: "Tue", clicks: 480 },
  { day: "Wed", clicks: 410 },
  { day: "Thu", clicks: 610 },
  { day: "Fri", clicks: 540 },
  { day: "Sat", clicks: 290 },
  { day: "Sun", clicks: 350 },
];

const topLinks = [
  { slug: "x7k9", clicks: 1204 },
  { slug: "launch", clicks: 892 },
  { slug: "q3-docs", clicks: 431 },
];

const topCountries = [
  { country: "United States", pct: 42 },
  { country: "Sri Lanka", pct: 18 },
  { country: "United Kingdom", pct: 11 },
  { country: "Germany", pct: 8 },
];

const stats = [
  { label: "Total clicks", value: "12.8k" },
  { label: "Unique visitors", value: "9.2k" },
  { label: "Avg. CTR", value: "4.3%" },
  { label: "Top country", value: "US" },
];

function ClicksChart({ data }: { data: { day: string; clicks: number }[] }) {
  const max = Math.max(...data.map((d) => d.clicks));

  return (
    <div className="flex h-40 items-end gap-3">
      {data.map((d) => (
        <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
          <div className="flex h-32 w-full items-end">
            <div
              className="w-full rounded-t-sm bg-[#8B5CF6]/80 transition-all"
              style={{ height: `${(d.clicks / max) * 100}%` }}
            />
          </div>
          <span className="text-[11px] text-[#71717A]">{d.day}</span>
        </div>
      ))}
    </div>
  );
}

export default function AnalyticsPage() {
  const [range, setRange] = useState<(typeof ranges)[number]>("7d");

  return (
    <div className="mx-auto w-full max-w-6xl pt-5 pb-16">
      {/* header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#F4F4F5]">
            Analytics
          </h1>
          <p className="mt-1 text-sm text-[#A1A1AA]">
            Click activity across all your links.
          </p>
        </div>

        <div className="inline-flex items-center rounded-lg border border-[#2A2A2E] bg-[#131316] p-1">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                range === r
                  ? "bg-[#8B5CF6]/10 text-[#8B5CF6]"
                  : "text-[#A1A1AA] hover:text-[#F4F4F5]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* stats */}
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-4"
          >
            <span className="text-xs text-[#71717A]">{s.label}</span>
            <div className="mt-1 font-mono text-2xl font-semibold text-[#F4F4F5]">
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* chart */}
      <div className="mt-6 rounded-xl border border-[#2A2A2E] bg-[#131316] p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-[#F4F4F5]">Clicks over time</h2>
          <span className="font-mono text-xs text-[#71717A]">
            {clicksByDay.reduce((a, b) => a + b.clicks, 0).toLocaleString()} total
          </span>
        </div>
        <div className="mt-6">
          <ClicksChart data={clicksByDay} />
        </div>
      </div>

      {/* breakdowns */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-6">
          <h2 className="text-sm font-medium text-[#F4F4F5]">Top links</h2>
          <div className="mt-4 space-y-3">
            {topLinks.map((l) => (
              <div key={l.slug} className="flex items-center justify-between">
                <span className="font-mono text-sm text-[#F4F4F5]">
                  shorty.sh/<span className="text-[#8B5CF6]">{l.slug}</span>
                </span>
                <span className="text-sm text-[#A1A1AA]">
                  {l.clicks.toLocaleString()} clicks
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-6">
          <h2 className="text-sm font-medium text-[#F4F4F5]">Top countries</h2>
          <div className="mt-4 space-y-3">
            {topCountries.map((c) => (
              <div key={c.country}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#F4F4F5]">{c.country}</span>
                  <span className="text-[#A1A1AA]">{c.pct}%</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-[#0D0D0D]">
                  <div
                    className="h-1.5 rounded-full bg-[#8B5CF6]"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
'use client';

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BarChart3,
  ChevronRight,
  CircleDollarSign,
  FolderKanban,
  Globe2,
  Grip,
  LayoutDashboard,
  Link2,
  Menu,
  Plus,
  Settings,
  Sparkles,
  X,
} from "lucide-react";

const navigation = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Links", icon: Link2 },
  { label: "Campaigns", icon: FolderKanban },
  { label: "Analytics", icon: BarChart3 },
  { label: "Domains", icon: Globe2 },
  { label: "Billing", icon: CircleDollarSign },
  { label: "Settings", icon: Settings },
];

const metrics = [
  { label: "Active links", value: "128", change: "+18%" },
  { label: "Clicks today", value: "4.8k", change: "+7.2%" },
  { label: "Conversion rate", value: "32.4%", change: "+2.1%" },
];

const recentLinks = [
  { name: "Launch campaign", slug: "shorty.ly/launch", clicks: "1,248", status: "Live" },
  { name: "Product teaser", slug: "shorty.ly/teaser", clicks: "836", status: "Live" },
  { name: "Winter promo", slug: "shorty.ly/winter", clicks: "391", status: "Paused" },
];

export default function DashboardShell() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarWidthClass = useMemo(
    () => (isCollapsed ? "md:w-24" : "md:w-72"),
    [isCollapsed],
  );

  const sidebarContent = (
    <div className="flex h-full flex-col border-r border-white/10 bg-[#111111]/95 px-4 py-5 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <Link href="/landing" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-semibold text-[#C7B7FF] shadow-[0_0_0_1px_rgba(108,71,255,0.1)]">
            S
          </span>
          {!isCollapsed && (
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A1A1AA]">Shorty</p>
              <p className="text-sm font-medium text-white">Workspace</p>
            </div>
          )}
        </Link>

        <button
          type="button"
          onClick={() => setIsCollapsed((current) => !current)}
          className="hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-[#6C47FF]/50 hover:text-white md:inline-flex"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Grip className="h-4 w-4" />
        </button>
      </div>

      <nav className="mt-8 flex-1 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href="#"
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                item.active
                  ? "bg-[#6C47FF]/15 text-white ring-1 ring-[#6C47FF]/30"
                  : "text-[#A1A1AA] hover:bg-white/5 hover:text-white"
              } ${isCollapsed ? "md:justify-center md:px-3" : ""}`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className={`rounded-3xl border border-white/10 bg-gradient-to-br from-[#6C47FF]/20 to-transparent p-4 ${isCollapsed ? "md:p-3" : ""}`}>
        <div className={`flex items-start gap-3 ${isCollapsed ? "md:justify-center" : ""}`}>
          <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#C7B7FF]" />
          {!isCollapsed && (
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-white">Upgrade your reach</p>
                <p className="mt-1 text-sm leading-6 text-[#A1A1AA]">
                  Unlock branded domains, deeper analytics, and team access.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#6C47FF] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5B3BE6]">
                Upgrade plan
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(108,71,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_24%),linear-gradient(135deg,#0d0d0d_0%,#111111_52%,#090909_100%)] text-white">
      <div className="flex min-h-screen">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-72 transform transition-transform duration-300 md:static md:translate-x-0 ${sidebarWidthClass} ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          {sidebarContent}
        </aside>

        {isSidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close menu overlay"
          />
        )}

        <div className="relative z-10 flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0d0d0d]/75 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSidebarOpen((current) => !current)}
                  className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white/85 transition hover:border-[#6C47FF]/50 hover:text-white md:hidden"
                  aria-label="Toggle navigation menu"
                >
                  {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>

                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">Dashboard</p>
                  <h1 className="text-lg font-semibold text-white">Overview</h1>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-[#6C47FF]/50 hover:text-white sm:inline-flex">
                  Export report
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl bg-[#6C47FF] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5B3BE6]">
                  <Plus className="h-4 w-4" />
                  New link
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <section className="grid gap-4 md:grid-cols-3">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                >
                  <p className="text-sm text-[#A1A1AA]">{metric.label}</p>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-3xl font-semibold tracking-tight text-white">{metric.value}</p>
                      <p className="mt-2 text-sm text-emerald-400">{metric.change} from last week</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#6C47FF]/30 bg-[#6C47FF]/10 text-[#C7B7FF]">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
              <article className="rounded-3xl border border-white/10 bg-[#111111]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">Recent links</p>
                    <h2 className="mt-2 text-xl font-semibold text-white">Keep the best performers in view</h2>
                  </div>
                  <Link href="#" className="text-sm font-medium text-[#C7B7FF] transition hover:text-white">
                    View all
                  </Link>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                  {recentLinks.map((link, index) => (
                    <div
                      key={link.slug}
                      className={`grid grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-[1.2fr_1fr_auto] sm:items-center ${index !== recentLinks.length - 1 ? "border-b border-white/10" : ""}`}
                    >
                      <div>
                        <p className="font-medium text-white">{link.name}</p>
                        <p className="mt-1 text-sm text-[#A1A1AA]">{link.slug}</p>
                      </div>
                      <div className="text-sm text-[#A1A1AA]">
                        <span className="block text-white">{link.clicks}</span>
                        clicks
                      </div>
                      <div className="flex items-center gap-3 sm:justify-end">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${link.status === "Live" ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}>
                          {link.status}
                        </span>
                        <button className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 transition hover:border-[#6C47FF]/50 hover:text-white">
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-[#111111]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#A1A1AA]">Quick actions</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">Build faster</h2>

                  <div className="mt-5 space-y-3">
                    <button className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-[#6C47FF]/40 hover:bg-white/8">
                      Create short link
                      <ChevronRight className="h-4 w-4 text-[#A1A1AA]" />
                    </button>
                    <button className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-[#6C47FF]/40 hover:bg-white/8">
                      Add branded domain
                      <ChevronRight className="h-4 w-4 text-[#A1A1AA]" />
                    </button>
                    <button className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium text-white transition hover:border-[#6C47FF]/40 hover:bg-white/8">
                      Review analytics
                      <ChevronRight className="h-4 w-4 text-[#A1A1AA]" />
                    </button>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#6C47FF]/20 via-[#111111] to-[#111111] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#C7B7FF]">Focus</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Your dashboard is ready for the next layer.</h2>
                  <p className="mt-3 text-sm leading-6 text-[#D4D4D8]">
                    This shell gives you a retractable navigation rail, a responsive mobile drawer, and the same dark indigo accent used across the rest of Shorty.
                  </p>
                </div>
              </article>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
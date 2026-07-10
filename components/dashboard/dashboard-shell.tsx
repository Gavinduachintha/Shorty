"use client";

import Link from "next/link";
import {
  BarChart3,
  CircleDollarSign,
  FolderKanban,
  Globe2,
  LayoutDashboard,
  Link2,
  Plus,
  Settings,
} from "lucide-react";

const navigation = [
  { label: "", icon: LayoutDashboard, active: true },
  { label: "", icon: Link2 },
  { label: "", icon: FolderKanban },
  { label: "", icon: BarChart3 },
  { label: "", icon: Globe2 },
  { label: "", icon: CircleDollarSign },
  { label: "", icon: Settings },
];

export default function DashboardShell() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white">
      <div className="relative z-10 flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex min-h-15 max-w-6xl flex-col gap-4 rounded-2xl border border-white/15 bg-black/10 px-4 py-4 text-white backdrop-blur-xl backdrop-saturate-150 lg:flex-row lg:items-center lg:justify-between lg:px-6">
            <div className="flex items-center gap-3">
              <Link href="/landing" className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg font-semibold text-[#C7B7FF] shadow-[0_0_0_1px_rgba(108,71,255,0.1)]">
                  S
                </span>
                <div></div>
              </Link>
            </div>

            <nav className="flex flex-wrap items-center gap-2 lg:justify-center">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href="#"
                    className={`inline-flex items-center gap-2 rounded px-3 py-2 text-sm font-medium transition ${
                      item.active
                        ? "bg-white/10 text-white"
                        : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-5 lg:justify-end">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                aria-label="Open account menu"
              >
                GA
              </button>
              <button className="inline-flex items-center gap-2 rounded bg-[#6C47FF] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5B3BE6]">
                <Plus className="h-4 w-4" />
                New link
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8"></main>
      </div>
    </div>
  );
}

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
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Links", icon: Link2 },
  { label: "Folders", icon: FolderKanban },
  { label: "Analytics", icon: BarChart3 },
  { label: "Domains", icon: Globe2 },
  { label: "Billing", icon: CircleDollarSign },
  { label: "Settings", icon: Settings },
];

export default function DashboardShell() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F4F5]">
      <div className="relative z-10 flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex min-h-15 max-w-6xl flex-col gap-4 rounded-2xl border border-[#2A2A2E] bg-[#131316] px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
            <div className="flex items-center gap-3">
              <Link href="/landing" className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] text-sm font-semibold text-[#8B5CF6]">
                  S
                </span>
              </Link>
            </div>

            <nav className="flex flex-wrap items-center gap-1 lg:justify-center">
              {navigation.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href="#"
                    title={item.label}
                    className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-[#8B5CF6]/10 text-[#8B5CF6]"
                        : "text-[#A1A1AA] hover:bg-[#1A1A1D] hover:text-[#F4F4F5]"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3 lg:justify-end">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] text-xs font-semibold text-[#F4F4F5]"
                aria-label="Open account menu"
              >
                GA
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#8B5CF6] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#7C4DE8]">
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
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SquareChartGantt,
  Link2,
  ChartLine,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/dashboard/overview", label: "Overview", icon: SquareChartGantt },
  { href: "/dashboard/links", label: "Links", icon: Link2 },
  { href: "/dashboard/analytics", label: "Analytics", icon: ChartLine },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-48 flex-col border-r border-[#2A2A2E] bg-[#0D0D0D]">
      {/* Navigation */}
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 px-3 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-[#8B5CF6]/10 text-[#8B5CF6]"
                        : "text-[#A1A1AA] hover:bg-[#131316] hover:text-[#F4F4F5]"
                    }`}
                  >
                    {item.label}
                    <Icon className="ml-2 inline-block h-4 w-4" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-[#2A2A2E] p-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-md border border-red-500/30 px-3 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10">
          Sign out
          <LogOut className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
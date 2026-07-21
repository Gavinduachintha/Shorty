"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  SquareChartGantt,
  Link2,
  ChartLine,
  Settings,
  LogOut,
} from "lucide-react";
import { logout } from "@/app/action/auth";
import { useState } from "react";
import toast from "react-hot-toast";

const navItems = [
  { href: "/dashboard/overview", label: "Overview", icon: SquareChartGantt },
  { href: "/dashboard/links", label: "Links", icon: Link2 },
  { href: "/dashboard/analytics", label: "Analytics", icon: ChartLine },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    try {
      setLoading(true);
      toast.success("Logged out successfully");
      await logout();
    } catch (error) {
      console.error(error);
      toast.error("Failed to log out");
      setLoading(false);
    }
  };
  return (
    <aside className="flex h-full w-52 flex-col border-r border-[#2A2A2E] bg-[#0D0D0D]">
      {/* Brand */}
      <div className="flex items-center gap-2.5 border-b border-[#2A2A2E] px-4 py-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#2A2A2E] bg-[#131316] text-sm font-bold text-[#8B5CF6]">
          S
        </span>
        <span className="font-mono text-sm font-medium text-[#F4F4F5]">
          shorty.sh
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-[#8B5CF6]/10 text-[#8B5CF6]"
                      : "text-[#A1A1AA] hover:bg-[#131316] hover:text-[#F4F4F5]"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-[#2A2A2E] p-3">
        <button
          className="flex w-full items-center gap-2 rounded-md border border-red-500/30 px-3 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 disabled:opacity-50"
          onClick={handleLogout}
          disabled={loading}
        >
          <LogOut className="h-4 w-4 shrink-0" />

          {loading ? "Logging Out..." : "Log Out"}
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

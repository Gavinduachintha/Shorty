"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SquareChartGantt, Link2, ChartLine, Settings } from "lucide-react";

const navItems = [
  { href: "/dashboard/overview", label: "Overview", icon: SquareChartGantt },
  { href: "/dashboard/links", label: "Links", icon: Link2 },
  { href: "/dashboard/analytics", label: "Analytics", icon: ChartLine },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

const MobileBottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#2A2A2E] bg-[#0D0D0D] md:hidden">
      <ul className="flex">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 py-3 text-[10px] font-medium transition-colors ${
                  isActive ? "text-[#8B5CF6]" : "text-[#71717A]"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;

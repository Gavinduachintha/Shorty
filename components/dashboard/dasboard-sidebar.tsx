import React from "react";
import Link from "next/link";
import { Login4 } from "reicon-react";
import { SquareChartGantt, Link2, ChartLine, Settings } from "lucide-react";

const DashboardSidebar = () => {
  return (
    <aside className="flex h-full w-45 flex-col border-r border-white/10 bg-[#0D0D0D]">
      {" "}
      {/* Navigation */}
      <div className="flex flex-1 flex-col overflow-y-auto">
        <nav className="flex-1 px-3 py-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard/overview"
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Overview{" "}
                <SquareChartGantt className="w-4 h-4 inline-block ml-2" />
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/links"
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Links <Link2 className="w-4 h-4 inline-block ml-2" />
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/analytics"
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Analytics <ChartLine className="w-4 h-4 inline-block ml-2" />
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/settings"
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                Settings <Settings className="w-4 h-4 inline-block ml-2" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Footer */}
      <div className="border-t border-white/10 p-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-md border border-red-500/20 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/20">
          Sign Out
          <Login4 weight="Filled" className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

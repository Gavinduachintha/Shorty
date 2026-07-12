import React from "react";
import Link from "next/link";
import { Login4 } from "reicon-react";

const DashboardSidebar = () => {
  return (
    <aside className="flex h-full w-56 flex-col border-r border-white/10 bg-[#0D0D0D]">
      {" "}
      {/* Header */}
      {/* <div className="border-b border-white/10 px-5 py-4">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
          Dashboard
        </p>
      </div> */}
      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          <li>
            <Link
              href="/dashboard/overview"
              className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              Overview
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/links"
              className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              Links
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/analytics"
              className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              Analytics
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/settings"
              className="block rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
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

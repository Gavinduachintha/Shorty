"use client";

import { Desktop, Phone4 } from "reicon-react";

export default function SessionsCard() {
  return (
    <div className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-6">
      <h2 className="text-lg font-semibold text-[#F4F4F5]">Active Sessions</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] p-4">
          <div className="flex items-center gap-3">
            <Desktop size={18} className="text-[#A1A1AA]" />
            <div>
              <p className="text-sm text-[#F4F4F5]">Chrome · Windows</p>
              <p className="text-xs text-green-400">Current device</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] p-4">
          <div className="flex items-center gap-3">
            <Phone4 weight="Filled" size={18} className="text-[#A1A1AA]" />
            <div>
              <p className="text-sm text-[#F4F4F5]">Safari · iPhone</p>
              <p className="text-xs text-[#71717A]">2 days ago</p>
            </div>
          </div>
          <button className="text-sm font-medium text-red-400 transition-colors hover:text-red-300">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

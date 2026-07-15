"use client";

import { Lock } from "lucide-react";

export default function SecurityCard() {
  return (
    <div className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-6">
      <h2 className="text-lg font-semibold text-[#F4F4F5]">Security</h2>

      <p className="mt-1 text-sm text-[#A1A1AA]">Update your password.</p>

      <div className="mt-6 space-y-4">
        <input
          type="password"
          placeholder="Current password"
          className="w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
        />

        <input
          type="password"
          placeholder="New password"
          className="w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
        />

        <input
          type="password"
          placeholder="Confirm password"
          className="w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
        />
      </div>

      <div className="mt-6 flex justify-end">
        <button className="flex items-center gap-2 rounded-lg bg-[#8B5CF6] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#7C4DE8]">
          <Lock className="h-4 w-4" />
          Update password
        </button>
      </div>
    </div>
  );
}
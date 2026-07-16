"use client";
import { AlertTriangle } from "lucide-react";

export default function DangerZoneCard() {
  return (
    <div className="rounded-xl border border-red-500/20 bg-[#131316] p-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-red-400">
        <AlertTriangle className="h-5 w-5" />
        Danger zone
      </h2>

      <p className="mt-2 text-sm text-[#A1A1AA]">
        Permanently delete your account and all associated data.
      </p>

      <div className="mt-6 rounded-lg border border-red-500/20 bg-[#0D0D0D] p-4">
        <p className="text-sm text-[#D4D4D8]">This action cannot be undone.</p>

        <button className="mt-4 rounded-lg border border-red-500/30 px-4 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10">
          Delete account
        </button>
      </div>
    </div>
  );
}

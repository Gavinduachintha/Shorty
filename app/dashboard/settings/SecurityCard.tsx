"use client";

import { Lock } from "reicon-react";

export default function SecurityCard() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="text-lg font-semibold text-zinc-100">
        Security
      </h2>

      <p className="mt-1 text-sm text-zinc-400">
        Update your password.
      </p>

      <div className="mt-6 space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-zinc-100 outline-none focus:border-violet-500"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-zinc-100 outline-none focus:border-violet-500"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-zinc-100 outline-none focus:border-violet-500"
        />
      </div>

      <div className="mt-6 flex justify-end">
        <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm text-white hover:bg-violet-700">
          <Lock size={16} />
          Update Password
        </button>
      </div>
    </div>
  );
}
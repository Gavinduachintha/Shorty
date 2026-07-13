"use client";

import { useState } from "react";
import {
  UserCircle,
  Envelope,
  Pen,
} from "reicon-react";

export default function ProfileCard() {
  const [name, setName] = useState("Gavi Amarasinghe");
  const [email, setEmail] = useState("gavi@example.com");

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="text-lg font-semibold text-zinc-100">
        Profile
      </h2>

      <p className="mt-1 text-sm text-zinc-400">
        Update your personal information.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-600 text-lg font-bold text-white">
          {initials}
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-300 hover:border-violet-500">
            <Pen weight="Filled" />
          Change Avatar
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-300">
            <UserCircle size={16} />
            Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-zinc-100 outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm text-zinc-300">
            <Envelope size={16} />
            Email
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-zinc-100 outline-none focus:border-violet-500"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-violet-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}
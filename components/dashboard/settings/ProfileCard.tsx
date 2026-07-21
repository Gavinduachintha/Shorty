"use client";

import { useState } from "react";
import { UserCircle, Mail, Pencil } from "lucide-react";
import type { User } from "@supabase/supabase-js";

interface ProfileCardProps {
  user: User;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  const [name, setName] = useState<string>(
    user.user_metadata?.full_name ?? user.user_metadata?.name ?? "",
  );
  const [email, setEmail] = useState<string>(user.email ?? "");

  const initials =
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ||
    user.email?.charAt(0).toUpperCase() ||
    "U";

  return (
    <div className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-6">
      <h2 className="text-lg font-semibold text-[#F4F4F5]">Profile</h2>

      <p className="mt-1 text-sm text-[#A1A1AA]">
        Update your personal information.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#2A2A2E] bg-[#0D0D0D] text-lg font-semibold text-[#8B5CF6]">
          {initials}
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-[#2A2A2E] px-3 py-2 text-sm text-[#A1A1AA] transition-colors hover:border-[#8B5CF6] hover:text-[#F4F4F5]">
          <Pencil className="h-4 w-4" />
          Change avatar
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="profile-name"
            className="mb-2 flex items-center gap-2 text-sm text-[#D4D4D8]"
          >
            <UserCircle className="h-4 w-4" />
            Name
          </label>
          <input
            id="profile-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-[#F4F4F5] outline-none transition-colors focus:border-[#8B5CF6]"
          />
        </div>

        <div>
          <label
            htmlFor="profile-email"
            className="mb-2 flex items-center gap-2 text-sm text-[#D4D4D8]"
          >
            <Mail className="h-4 w-4" />
            Email
          </label>
          <input
            id="profile-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-[#F4F4F5] outline-none transition-colors focus:border-[#8B5CF6]"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="rounded-lg bg-[#8B5CF6] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#7C4DE8]">
          Save changes
        </button>
      </div>
    </div>
  );
}

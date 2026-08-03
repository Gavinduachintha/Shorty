// REMOVE: `createClient` is imported but never used — the commented-out block
// below should be deleted along with this import.
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
const DashboardHeader = async () => {
  // REMOVE: this entire commented-out block. getCurrentUser() already does
  // exactly this internally, so keeping these lines around as dead code is
  // misleading. Delete them.
  // const supabase = await createClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  const user = await getCurrentUser();
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-[#2A2A2E] bg-[#0D0D0D] px-4 sm:px-6">
      {/* Logo — visible on mobile (hidden on md+ where sidebar shows it) */}
      <Link
        href="/dashboard/overview"
        className="flex items-center gap-2 md:hidden"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#2A2A2E] bg-[#131316] text-sm font-bold text-[#8B5CF6]">
          S
        </span>
        <span className="font-mono text-sm font-medium text-[#F4F4F5]">
          shorty.sh
        </span>
      </Link>

      {/* Desktop: just the domain label */}
      <p className="hidden font-mono text-xs uppercase tracking-[0.24em] text-[#71717A] md:block">
        shorty.sh
      </p>

      {/* User badge */}
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2A2A2E] bg-[#131316] font-mono text-xs uppercase text-[#A1A1AA]">
          {user?.email?.charAt(0).toUpperCase() ?? "U"}
        </span>
        {/* WRONG: `user_metadata.name` is only populated for OAuth sign-ups
            (Google/GitHub pass a `name` field). For email/password sign-ups you
            store `full_name` in metadata (see register-form.tsx). Use
            `user?.user_metadata?.full_name ?? user?.user_metadata?.name` to
            cover both cases, or normalise the metadata key on sign-up. */}
        <span className="hidden font-mono text-sm text-[#A1A1AA] sm:block">
          {user?.user_metadata?.name}
        </span>
      </div>
    </header>
  );
};

export default DashboardHeader;

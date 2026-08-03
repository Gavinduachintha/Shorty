import TotalLinks from "@/components/dashboard/widgets/total-links";
import TotalUsers from "@/components/dashboard/widgets/total-users";
import TotalClicks from "@/components/dashboard/widgets/total-clicks";
import RecentLinks from "@/components/dashboard/widgets/recent-links";
import TopPerformingLinks from "@/components/dashboard/widgets/top-performing-links";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function OverviewPage() {
  // UNNECESSARY: the middleware already guards /dashboard/* and redirects
  // unauthenticated users. You don't need a second auth check here.
  // The only reason to keep it is if you ever disable the middleware guard,
  // in which case this acts as a safety net. Otherwise remove the redirect block.
  // Consider using getCurrentUser() from lib/auth.ts for consistency with the
  // rest of the app instead of calling createClient directly.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  return (
    <div className="space-y-6 px-4 py-6 sm:px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <TotalLinks userId={user.id} />
        <TotalUsers />
        <TotalClicks />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <RecentLinks userId={user.id} />
        <TopPerformingLinks />
      </div>
    </div>
  );
}

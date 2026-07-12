import TotalLinks from "@/components/dashboard/widgets/total-links";
import TotalUsers from "@/components/dashboard/widgets/total-users";
import TotalClicks from "@/components/dashboard/widgets/total-clicks";
import RecentLinks from "@/components/dashboard/widgets/recent-links";
import TopPerformingLinks from "@/components/dashboard/widgets/top-performing-links";

export default function OverviewPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <TotalLinks />
        <TotalUsers />
        <TotalClicks />
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <RecentLinks />
        <TopPerformingLinks />
      </div>
    </div>
  );
}

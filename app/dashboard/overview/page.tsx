import TotalLinks from "@/components/dashboard/widgets/total-links";
import TotalUsers from "@/components/dashboard/widgets/total-users";
import TotalClicks from "@/components/dashboard/widgets/total-clicks";
export default function OverviewPage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <TotalLinks />
        <TotalUsers />
        <TotalClicks />
      </div>
    </div>
  );
}

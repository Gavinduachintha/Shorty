
import DashboardHeader from "./dashboard-header";
import DashboardSidebar from "./dasboard-sidebar";
import MobileBottomNav from "./mobile-bottom-nav";
export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#0D0D0D]">
      {/* Top Header */}
      <DashboardHeader />

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — desktop only */}
        <div className="hidden md:flex">
          <DashboardSidebar />
        </div>

        {/* Main content — extra bottom padding on mobile for the tab bar */}
        <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
          {children}
        </main>
      </div>

      {/* Bottom tab nav — mobile only */}
      <MobileBottomNav />
    </div>
  );
}

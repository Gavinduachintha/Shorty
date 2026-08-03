import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import ProfileCard from "@/components/dashboard/settings/ProfileCard";
import SecurityCard from "@/components/dashboard/settings/SecurityCard";
import AppearanceCard from "@/components/dashboard/settings/AppearanceCard";
import NotificationsCard from "@/components/dashboard/settings/NotificationsCard";
import SessionsCard from "@/components/dashboard/settings/SessionsCard";
import DangerZoneCard from "@/components/dashboard/settings/DangerZoneCard";

export default async function SettingsPage() {
  const user = await getCurrentUser();
  // UNNECESSARY: same as overview/page.tsx — middleware already handles this.
  // Safe to remove unless you want belt-and-suspenders protection.
  if (!user) redirect("/auth/login");

  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-6 sm:px-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#F4F4F5]">Settings</h1>
        <p className="mt-1 text-sm text-[#A1A1AA]">
          Manage your account preferences and profile.
        </p>
      </div>
      <ProfileCard user={user} />
      <SecurityCard />
      <AppearanceCard />
      <NotificationsCard />
      <SessionsCard />
      <DangerZoneCard />
    </div>
  );
}

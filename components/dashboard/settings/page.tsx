
'use client';
import ProfileCard from "./ProfileCard";
import SecurityCard from "./SecurityCard";
import AppearanceCard from "./AppearanceCard";
import NotificationsCard from "./NotificationsCard";
import SessionsCard from "./SessionsCard";
import DangerZoneCard from "./DangerZoneCard";

export default function SettingsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 py-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#F4F4F5]">Settings</h1>
        <p className="mt-1 text-sm text-[#A1A1AA]">
          Manage your account preferences and profile.
        </p>
      </div>

      <ProfileCard />
      <SecurityCard />
      <DangerZoneCard />
    </div>
  );
}
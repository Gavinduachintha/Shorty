"use client";

import { useState } from "react";

export default function NotificationsCard() {
  const [notifications, setNotifications] = useState({
    product: true,
    security: true,
    marketing: false,
  });

  const Toggle = ({
    checked,
    onClick,
  }: {
    checked: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`relative h-6 w-11 rounded-full transition ${
        checked ? "bg-violet-600" : "bg-zinc-700"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
          checked ? "left-6" : "left-1"
        }`}
      />
    </button>
  );

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="text-lg font-semibold text-zinc-100">
        Notifications
      </h2>

      <div className="mt-6 space-y-4">
        {[
          ["Product Updates", "product"],
          ["Security Alerts", "security"],
          ["Marketing Emails", "marketing"],
        ].map(([label, key]) => (
          <div
            key={key}
            className="flex items-center justify-between"
          >
            <span className="text-zinc-300">{label}</span>

            <Toggle
              checked={
                notifications[
                  key as keyof typeof notifications
                ]
              }
              onClick={() =>
                setNotifications((prev) => ({
                  ...prev,
                  [key]:
                    !prev[
                      key as keyof typeof notifications
                    ],
                }))
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
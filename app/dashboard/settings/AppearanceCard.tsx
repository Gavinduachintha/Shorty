"use client";

import { useState } from "react";
import { Moon, Sun, Monitor } from "reicon-react";

export default function AppearanceCard() {
  const [theme, setTheme] = useState("dark");

  const options = [
    {
      id: "light",
      label: "Light",
      icon: Sun,
    },
    {
      id: "dark",
      label: "Dark",
      icon: Moon,
    },
    {
      id: "system",
      label: "System",
      icon: Monitor,
    },
  ];

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
      <h2 className="text-lg font-semibold text-zinc-100">
        Appearance
      </h2>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {options.map((option) => {
          const Icon = option.icon;

          return (
            <button
              key={option.id}
              onClick={() => setTheme(option.id)}
              className={`rounded-xl border p-4 transition ${
                theme === option.id
                  ? "border-violet-500 bg-violet-500/10"
                  : "border-zinc-800 hover:border-zinc-700"
              }`}
            >
              <Icon size={20} />
              <p className="mt-2 text-sm">{option.label}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
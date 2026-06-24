import React from "react";
import { FiLink, FiCalendar, FiClock } from "react-icons/fi";

const DashboardStatsCards = ({ darkMode, urls }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div
        className={`p-5 rounded-2xl border transition-all duration-300 ${
          darkMode
            ? "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
            : "bg-white border-zinc-200 hover:border-zinc-300 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`text-sm font-medium ${
                darkMode ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Total Links
            </p>
            <p
              className={`text-3xl font-bold mt-1 ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              {urls.length}
            </p>
          </div>
          <div
            className={`p-3 rounded-xl ${
              darkMode ? "bg-purple-500/10" : "bg-purple-50"
            }`}
          >
            <FiLink className="w-6 h-6 text-purple-500" />
          </div>
        </div>
      </div>

      <div
        className={`p-5 rounded-2xl border transition-all duration-300 ${
          darkMode
            ? "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
            : "bg-white border-zinc-200 hover:border-zinc-300 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`text-sm font-medium ${
                darkMode ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              This Month
            </p>
            <p
              className={`text-3xl font-bold mt-1 ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              {
                urls.filter((url) => {
                  const now = new Date();
                  const created = new Date(url.created_at);
                  return (
                    created.getMonth() === now.getMonth() &&
                    created.getFullYear() === now.getFullYear()
                  );
                }).length
              }
            </p>
          </div>
          <div
            className={`p-3 rounded-xl ${
              darkMode ? "bg-emerald-500/10" : "bg-emerald-50"
            }`}
          >
            <FiCalendar className="w-6 h-6 text-emerald-500" />
          </div>
        </div>
      </div>

      <div
        className={`p-5 rounded-2xl border transition-all duration-300 ${
          darkMode
            ? "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
            : "bg-white border-zinc-200 hover:border-zinc-300 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className={`text-sm font-medium ${
                darkMode ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              Last 7 Days
            </p>
            <p
              className={`text-3xl font-bold mt-1 ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              {
                urls.filter((url) => {
                  const now = new Date();
                  const created = new Date(url.created_at);
                  const diffDays = Math.ceil(
                    (now - created) / (1000 * 60 * 60 * 24)
                  );
                  return diffDays <= 7;
                }).length
              }
            </p>
          </div>
          <div
            className={`p-3 rounded-xl ${
              darkMode ? "bg-blue-500/10" : "bg-blue-50"
            }`}
          >
            <FiClock className="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatsCards;

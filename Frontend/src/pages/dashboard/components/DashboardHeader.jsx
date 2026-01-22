import React from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun, FiLogOut, FiHome } from "react-icons/fi";
import linkIcon from "../../../assets/link.png";

const DashboardHeader = ({ darkMode, onToggleDarkMode, onLogout }) => {
  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        darkMode
          ? "bg-zinc-950/80 border-zinc-800"
          : "bg-white/80 border-zinc-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-600 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-all duration-300">
              <img
                src={linkIcon}
                alt="Shorty"
                className="w-5 h-5 filter brightness-0 invert"
              />
            </div>
            <div>
              <h1
                className={`text-xl font-bold ${
                  darkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Shorty
              </h1>
              <p
                className={`text-[10px] font-medium tracking-wider uppercase ${
                  darkMode ? "text-zinc-500" : "text-zinc-500"
                }`}
              >
                Dashboard
              </p>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Home Button */}
            <Link
              to="/"
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                darkMode
                  ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
              }`}
              title="Go to Home"
            >
              <FiHome size={18} />
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={onToggleDarkMode}
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                darkMode
                  ? "text-amber-400 hover:bg-zinc-800"
                  : "text-zinc-600 hover:bg-zinc-100"
              }`}
              title="Toggle theme"
              type="button"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Logout */}
            <button
              onClick={onLogout}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                darkMode
                  ? "text-red-400 hover:bg-red-500/10"
                  : "text-red-600 hover:bg-red-50"
              }`}
              type="button"
            >
              <FiLogOut size={16} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

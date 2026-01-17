import React from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";
import linkIcon from "../../assets/link.png";
import { FiGithub, FiCrosshair } from "react-icons/fi";

const Header = ({ darkMode, setDarkMode, showNavigation = false }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div
        className={`border-b transition-colors duration-200 ${
          darkMode
            ? "bg-[#09090b]/80 border-[#27272a] shadow-lg shadow-black/10"
            : "bg-white/90 border-gray-200 shadow-sm"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-3.5 max-w-7xl mx-auto">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="relative">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  darkMode
                    ? "bg-gradient-to-br from-violet-600 to-purple-600"
                    : "bg-violet-600"
                }`}
              >
                <img
                  src={linkIcon}
                  alt="Shorty Logo"
                  className="w-5 h-5 filter brightness-0 invert"
                />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
            </div>
            <div>
              <h1
                className={`text-xl font-bold ${
                  darkMode ? "text-zinc-50" : "text-gray-900"
                }`}
              >
                Shorty
              </h1>
              <p
                className={`text-[9px] font-medium tracking-wider ${
                  darkMode ? "text-zinc-500" : "text-gray-500"
                }`}
              >
                URL SHORTENER
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-3">
            {showNavigation && (
              <nav className="hidden md:flex items-center space-x-1 mr-3">
                {["About", "Dashboard"].map((label, i) => (
                  <Link
                    key={i}
                    to={`/${label.toLowerCase()}`}
                    className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-150 ${
                      darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {label}
                  </Link>
                ))}

                <div
                  className={`flex items-center space-x-2 ml-3 pl-3 border-l ${
                    darkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <a
                    href="https://github.com/Gavinduachintha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-all duration-150 ${
                      darkMode
                        ? "hover:bg-[#18181b] text-zinc-400 hover:text-zinc-50"
                        : "hover:bg-gray-100 text-gray-500 hover:text-gray-900"
                    }`}
                    title="View on GitHub"
                  >
                    {/* <img src={FiGithub} alt="GitHub" className="w-5 h-5" /> */}
                  </a>

                  <Link to="/login">
                    <button className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm rounded-lg transition-all duration-150">
                      Log In
                    </button>
                  </Link>
                </div>
              </nav>
            )}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-150 ${
                darkMode
                  ? "bg-[#18181b] text-amber-400 hover:bg-[#27272a] hover:text-amber-300"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              title="Toggle Theme"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

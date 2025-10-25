import React from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = ({ darkMode, setDarkMode, showNavigation = false }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 animate-fade-in-down">
      <div
        className={`border-b transition-colors duration-300 ${
          darkMode
            ? "bg-gray-900/90 border-gray-700/50 shadow-lg shadow-black/5"
            : "bg-white/90 border-gray-200/50 shadow-lg shadow-gray-200/50"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-11 h-11 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src="src/assets/link.png"
                  alt="Shorty Logo"
                  className="w-6 h-6 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:from-violet-500 group-hover:via-purple-500 group-hover:to-blue-500 transition-all duration-300">
                Shorty
              </h1>
              <p
                className={`text-[10px] font-medium tracking-wider ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                URL SHORTENER
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-3">
            {showNavigation && (
              <nav className="hidden md:flex items-center space-x-6 mr-4">
                {["Pricing", "About", "Dashboard"].map((label, i) => (
                  <Link
                    key={i}
                    to={`/${label.toLowerCase()}`}
                    className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${
                      darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                    }`}
                  >
                    {label}
                  </Link>
                ))}

                <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-300 dark:border-gray-600">
                  <a
                    href="https://github.com/Gavinduachintha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-xl transition-all duration-200 hover:scale-110 ${
                      darkMode
                        ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                        : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
                    }`}
                    title="View on GitHub"
                  >
                    <img
                      src="src/assets/github.png"
                      alt="GitHub"
                      className="w-5 h-5"
                    />
                  </a>

                  <Link to="/login">
                    <button className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-200 transform hover:scale-105">
                      Log In
                    </button>
                  </Link>
                </div>
              </nav>
            )}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all duration-200 ${
                darkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-md"
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

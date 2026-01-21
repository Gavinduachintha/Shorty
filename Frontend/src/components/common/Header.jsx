import React from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun, FiGithub, FiMenu, FiX } from "react-icons/fi";
import linkIcon from "../../assets/link.png";

const Header = ({ darkMode, setDarkMode, showNavigation = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`backdrop-blur-xl transition-all duration-300 ${
          darkMode
            ? "bg-zinc-900/70 border-b border-zinc-800/50"
            : "bg-white/70 border-b border-zinc-200/50"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 group-hover:scale-105">
                <img
                  src={linkIcon}
                  alt="Shorty Logo"
                  className="w-5 h-5 filter brightness-0 invert"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-zinc-900"></span>
              </div>
            </div>
            <div>
              <h1
                className={`text-xl font-bold tracking-tight ${
                  darkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Shorty
              </h1>
              <p
                className={`text-[10px] font-semibold tracking-widest ${
                  darkMode ? "text-zinc-500" : "text-zinc-500"
                }`}
              >
                URL SHORTENER
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {showNavigation && (
              <nav className="flex items-center space-x-1 mr-4">
                {["About", "Dashboard"].map((label) => (
                  <Link
                    key={label}
                    to={`/${label.toLowerCase()}`}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      darkMode
                        ? "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            )}

            <div
              className={`flex items-center space-x-3 ${
                showNavigation ? "pl-4 border-l" : ""
              } ${darkMode ? "border-zinc-800" : "border-zinc-200"}`}
            >
              {/* GitHub Link */}
              <a
                href="https://github.com/Gavinduachintha"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  darkMode
                    ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
                title="View on GitHub"
              >
                <FiGithub size={18} />
              </a>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  darkMode
                    ? "text-amber-400 hover:bg-zinc-800 hover:text-amber-300"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
                title="Toggle Theme"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* Login Button */}
              {showNavigation && (
                <Link to="/login">
                  <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-medium text-sm rounded-lg transition-all duration-200 shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-[1.02]">
                    Log In
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                darkMode
                  ? "text-amber-400 hover:bg-zinc-800"
                  : "text-zinc-600 hover:bg-zinc-100"
              }`}
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {showNavigation && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  darkMode
                    ? "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {showNavigation && mobileMenuOpen && (
          <div
            className={`md:hidden px-6 pb-6 ${
              darkMode ? "bg-zinc-900/95" : "bg-white/95"
            } backdrop-blur-xl`}
          >
            <nav className="flex flex-col space-y-2">
              {["About", "Dashboard"].map((label) => (
                <Link
                  key={label}
                  to={`/${label.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                    darkMode
                      ? "text-zinc-300 hover:text-white hover:bg-zinc-800"
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium text-sm rounded-lg transition-all duration-200">
                  Log In
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

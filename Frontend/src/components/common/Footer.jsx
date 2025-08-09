import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ darkMode, onContactClick }) => {
  return (
    <footer
      className={`relative py-16 px-6 border-t ${
        darkMode
          ? "bg-gray-900/50 border-gray-700/50"
          : "bg-gray-50/50 border-gray-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
                <img
                  src="src/assets/link.png"
                  alt="Shorty Logo"
                  className="w-6 h-6 filter brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Shorty
              </h3>
            </div>
            <p
              className={`text-lg mb-6 max-w-md ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              The free, open-source URL shortener that helps you create, manage,
              and track your links with ease.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Gavinduachintha"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
                    : "bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-900 shadow-md"
                }`}
              >
                <img
                  src="src/assets/github.png"
                  alt="GitHub"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Dashboard", "Pricing", "About"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className={`transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className={`font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Support
            </h4>
            <ul className="space-y-3">
              {["Documentation", "API"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`transition-colors duration-200 ${
                      darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onContactClick}
                  className={`transition-colors duration-200 ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center ${
            darkMode ? "border-gray-700/50" : "border-gray-200/50"
          }`}
        >
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Made with love ❤️ by Gavi &copy; {new Date().getFullYear()}. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className={`text-sm transition-colors duration-200 ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`text-sm transition-colors duration-200 ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

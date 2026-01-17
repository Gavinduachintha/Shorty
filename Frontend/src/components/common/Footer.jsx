import React, { useState } from "react";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";

const Footer = ({ darkMode = true }) => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/Gavinduachintha",
      label: "GitHub",
    },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:support@shorty.com", label: "Email" },
  ];

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        darkMode
          ? "bg-[#09090b] text-zinc-300 border-[#18181b]"
          : "bg-gradient-to-b from-white to-gray-50 text-gray-700 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-2.5 rounded-lg transition hover:scale-110 ${
                      darkMode
                        ? "bg-[#18181b] hover:bg-[#27272a] text-zinc-400 hover:text-zinc-50"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Shorty
              </h3>
            </div>
            <p
              className={`text-xs ${
                darkMode ? "text-zinc-500" : "text-gray-500"
              }`}
            >
              © {year} Shorty. Made with{" "}
              <span className="text-red-500 animate-pulse">❤️</span> by{" "}
              <a
                href="https://github.com/Gavinduachintha"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium ${
                  darkMode ? "hover:text-violet-400" : "hover:text-violet-600"
                }`}
              >
                Gavi
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

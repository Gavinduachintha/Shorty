import React from "react";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiHeart,
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

  const footerLinks = [
    { label: "About", href: "/about" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  return (
    <footer
      className={`relative border-t transition-all duration-300 ${
        darkMode
          ? "bg-zinc-900/50 text-zinc-400 border-zinc-800/50"
          : "bg-zinc-50 text-zinc-600 border-zinc-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Logo & Description */}
            <div className="md:col-span-5">
              <Link
                to="/"
                className="inline-flex items-center gap-3 mb-4 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-all duration-300">
                  <svg
                    className="w-5 h-5 text-white"
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
                <span
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Shorty
                </span>
              </Link>
              <p
                className={`text-sm leading-relaxed mb-6 max-w-md ${
                  darkMode ? "text-zinc-500" : "text-zinc-500"
                }`}
              >
                The simplest way to shorten links and track clicks. Free, fast,
                and secure for everyone.
              </p>

              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-2.5 rounded-lg transition-all duration-200 hover:scale-110 ${
                      darkMode
                        ? "bg-zinc-800/50 hover:bg-zinc-800 text-zinc-500 hover:text-white"
                        : "bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="md:col-span-4">
              <h4
                className={`text-sm font-semibold mb-4 ${
                  darkMode ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                Quick Links
              </h4>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {footerLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    to={href}
                    className={`text-sm transition-colors duration-200 ${
                      darkMode
                        ? "text-zinc-500 hover:text-purple-400"
                        : "text-zinc-500 hover:text-purple-600"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter or CTA */}
            <div className="md:col-span-3">
              <h4
                className={`text-sm font-semibold mb-4 ${
                  darkMode ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                Get Started
              </h4>
              <Link to="/signup">
                <button className="w-full px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md shadow-purple-500/20 hover:shadow-purple-500/30">
                  Create Free Account
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`py-6 border-t ${
            darkMode ? "border-zinc-800/50" : "border-zinc-200"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs">
              © {year} Shorty. Made with{" "}
              <FiHeart className="inline w-3 h-3 text-pink-500 animate-pulse" />{" "}
              by{" "}
              <a
                href="https://github.com/Gavinduachintha"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors ${
                  darkMode ? "hover:text-purple-400" : "hover:text-purple-600"
                }`}
              >
                Gavi
              </a>
            </p>
            <p
              className={`text-xs ${
                darkMode ? "text-zinc-600" : "text-zinc-400"
              }`}
            >
              Free & Open Source Forever
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

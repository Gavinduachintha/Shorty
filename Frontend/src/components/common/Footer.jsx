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
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const navigation = {
    links: [
      { label: "Dashboard", path: "/dashboard" },
      { label: "Pricing", path: "/pricing" },
      { label: "Features", path: "/features" },
      { label: "About", path: "/about" },
    ],
  };

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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 border-gray-800"
          : "bg-gradient-to-b from-white to-gray-50 text-gray-700 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MAIN */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* BRAND */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20">
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
                className={`text-sm leading-relaxed max-w-sm mb-6 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                A free, open-source URL shortener for developers and marketers.
                Create, manage, and track your links with confidence.
              </p>

              {/* NEWSLETTER */}
              <div className="mb-6">
                <h4
                  className={`text-sm font-semibold mb-3 ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Stay Updated
                </h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:ring-violet-500 outline-none ${
                      darkMode
                        ? "bg-gray-800/60 border-gray-700 text-white placeholder-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  />
                  <button
                    onClick={handleSubscribe}
                    className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 transition shadow-lg shadow-violet-500/30"
                  >
                    {subscribed ? "✓" : <FiArrowRight />}
                  </button>
                </div>
                {subscribed && (
                  <p className="text-xs text-green-500 mt-2">
                    Thanks for subscribing! 🎉
                  </p>
                )}
              </div>

              {/* SOCIAL */}
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
                        ? "bg-gray-800/50 hover:bg-gray-700 text-gray-300 hover:text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* NAVIGATION — FIXED ALIGNMENT */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 self-start lg:flex lg:justify-end lg:items-start lg:space-x-8">
              {Object.entries(navigation).map(([category, links]) => (
                <div key={category} className="lg:text-right">
                  <h4
                    className={`text-sm font-semibold mb-4 ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>

                  <ul className="space-y-3">
                    {links.map(({ label, path }) => (
                      <li key={label}>
                        <a
                          href={path}
                          className={`group flex items-center justify-between text-sm transition-colors ${
                            darkMode
                              ? "text-gray-300 hover:text-white"
                              : "text-gray-600 hover:text-gray-900"
                          }`}
                        >
                          <span className="group-hover:translate-x-1 transition-transform">
                            {label}
                          </span>
                          <FiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className={`py-6 border-t ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              © {year} Shorty. Made with{" "}
              <span className="text-red-500 animate-pulse">❤️</span> by{" "}
              <a
                href="https://github.com/Gavinduachintha"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-violet-400"
              >
                Gavi
              </a>
              .
            </p>

            <div className="flex gap-6 text-xs">
              <a
                href="/dashboard"
                className="text-violet-400 hover:text-violet-300 flex items-center gap-1"
              >
                Get Started <FiArrowRight className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/Gavinduachintha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 flex items-center gap-1"
              >
                <FiGithub className="w-3 h-3" /> Open Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

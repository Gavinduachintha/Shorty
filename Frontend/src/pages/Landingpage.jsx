import React, { useState } from "react";
import { Link } from "react-router-dom";
import Squares from "../components/Squares";
import { FiMoon, FiSun } from "react-icons/fi";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`relative overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-white via-gray-50 to-violet-50 text-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundImage: darkMode
              ? `
                radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
              `
              : `
                radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)
              `,
          }}
        />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative min-h-screen w-full z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300">
          <div
            className={`border-b transition-colors duration-300 ${
              darkMode
                ? "bg-gray-900/80 border-gray-700/50"
                : "bg-white/80 border-gray-200/50"
            }`}
          >
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
              {/* Logo & Title */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <img
                      src="src/assets/link.png"
                      alt="Shorty Logo"
                      className="w-6 h-6 filter brightness-0 invert"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <a href="/" className="group">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent group-hover:from-violet-500 group-hover:to-purple-500 transition-all duration-200">
                    Shorty
                  </h1>
                </a>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
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
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
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

                  <Link to="/login">
                    <button className="px-6 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-200 transform hover:scale-105">
                      Log In
                    </button>
                  </Link>
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-lg">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div
                    className={`w-full h-0.5 ${
                      darkMode ? "bg-gray-300" : "bg-gray-700"
                    } transition-all`}
                  ></div>
                  <div
                    className={`w-full h-0.5 ${
                      darkMode ? "bg-gray-300" : "bg-gray-700"
                    } transition-all`}
                  ></div>
                  <div
                    className={`w-full h-0.5 ${
                      darkMode ? "bg-gray-300" : "bg-gray-700"
                    } transition-all`}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Now available - Free & Open Source
              </div>

              <h1
                className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Shrink Your Links.
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Expand Your Reach.
                </span>
              </h1>

              <p
                className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Transform long, unwieldy URLs into concise, trackable links that
                boost your brand and provide valuable insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link to="/signup">
                  <button className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-violet-500/25 transition-all duration-300 transform hover:scale-105 text-lg">
                    Get Started Free
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </button>
                </Link>

                <Link to="/dashboard">
                  <button
                    className={`px-8 py-4 font-semibold rounded-2xl border-2 transition-all duration-300 text-lg ${
                      darkMode
                        ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50"
                        : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    View Dashboard
                  </button>
                </Link>
              </div>
            </div>

            {/* Interactive Demo Section */}
            <div className="relative max-w-4xl mx-auto">
              <div
                className={`relative rounded-3xl overflow-hidden shadow-2xl border ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700/50 backdrop-blur-sm"
                    : "bg-white/80 border-gray-200/50 backdrop-blur-sm"
                }`}
              >
                <img
                  src="src/assets/background.jpg"
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-600/10"></div>

                <div className="relative z-10 p-8 md:p-12">
                  <div className="absolute inset-0">
                    <Squares
                      dotSize={2}
                      gap={20}
                      baseColor={darkMode ? "#6366f1" : "#8b5cf6"}
                      activeColor={darkMode ? "#a855f7" : "#6366f1"}
                      proximity={100}
                      shockRadius={200}
                      shockStrength={3}
                      resistance={500}
                      returnDuration={1.2}
                    />
                  </div>

                  <div className="relative z-20 text-center">
                    <h3
                      className={`text-2xl font-bold mb-6 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      See Shorty in Action
                    </h3>

                    <div className="space-y-4 max-w-2xl mx-auto">
                      <div
                        className={`p-4 rounded-xl ${
                          darkMode ? "bg-gray-900/50" : "bg-white/70"
                        } backdrop-blur-sm`}
                      >
                        <p
                          className={`text-sm font-medium mb-2 ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Long URL:
                        </p>
                        <p
                          className={`font-mono text-sm ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          https://example.com/very/long/url/with/many/parameters?utm_source=...
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center">
                          <span className="text-white text-sm">↓</span>
                        </div>
                      </div>

                      <div
                        className={`p-4 rounded-xl ${
                          darkMode ? "bg-gray-900/50" : "bg-white/70"
                        } backdrop-blur-sm`}
                      >
                        <p
                          className={`text-sm font-medium mb-2 ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Shortened URL:
                        </p>
                        <p className="font-mono text-lg font-bold text-violet-600">
                          shorty.link/abc123
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Why Choose Shorty?
              </h2>
              <p
                className={`text-xl max-w-3xl mx-auto ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Powerful features designed to help you manage, track, and
                optimize your links
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: "🎁",
                  title: "100% Free & Open Source",
                  desc: "No hidden costs, no premium tiers. Shorty is completely free and open source forever.",
                  highlight: true,
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  desc: "Create shortened links in milliseconds with our optimized infrastructure.",
                  highlight: false,
                },
                {
                  icon: "📊",
                  title: "Detailed Analytics",
                  desc: "Track clicks, geographic data, and user engagement with comprehensive analytics.",
                  highlight: false,
                },
                {
                  icon: "🔒",
                  title: "Secure & Reliable",
                  desc: "Enterprise-grade security with 99.9% uptime guarantee for your links.",
                  highlight: false,
                },
                {
                  icon: "🎨",
                  title: "Custom Branding",
                  desc: "Personalize your links with custom domains and branded short URLs.",
                  highlight: false,
                },
                {
                  icon: "🚀",
                  title: "Easy Integration",
                  desc: "Simple API and browser extensions make integration effortless.",
                  highlight: false,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                    feature.highlight
                      ? darkMode
                        ? "bg-gradient-to-br from-violet-900/50 to-purple-900/50 border-2 border-violet-500/50"
                        : "bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-200"
                      : darkMode
                      ? "bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70"
                      : "bg-white border border-gray-200 hover:bg-gray-50 shadow-lg hover:shadow-xl"
                  }`}
                  style={{
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  {feature.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-bold rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}

                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.desc}
                  </p>

                  {/* Hover effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      darkMode
                        ? "bg-gradient-to-br from-violet-600/5 to-purple-600/5"
                        : "bg-gradient-to-br from-violet-50/50 to-purple-50/50"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div
              className={`text-center p-12 rounded-3xl ${
                darkMode
                  ? "bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50"
                  : "bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100"
              }`}
            >
              <h3
                className={`text-3xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Ready to Get Started?
              </h3>
              <p
                className={`text-lg mb-8 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Join thousands of users who trust Shorty for their link
                management needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-200 transform hover:scale-105">
                    Start Shortening Links
                  </button>
                </Link>
                <Link to="/about">
                  <button
                    className={`px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-200 ${
                      darkMode
                        ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50"
                        : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white"
                    }`}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
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
                  The free, open-source URL shortener that helps you create,
                  manage, and track your links with ease.
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
                  {["Documentation", "API", "Contact"].map((link) => (
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
      </div>
    </div>
  );
};

export default LandingPage;

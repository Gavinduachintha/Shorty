import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMoon,
  FiSun,
  FiGithub,
  FiExternalLink,
  FiCode,
  FiHeart,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-500 ${
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

      {/* Header */}
      <header className="relative z-10 backdrop-blur-md border-b transition-all duration-300">
        <div
          className={`border-b transition-colors duration-300 ${
            darkMode
              ? "bg-gray-900/80 border-gray-700/50"
              : "bg-white/80 border-gray-200/50"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
            {/* Logo & Title */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent group-hover:from-violet-500 group-hover:to-purple-500 transition-all duration-200">
                Shorty
              </h1>
            </Link>

            {/* Navigation */}
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  darkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100/50"
                }`}
              >
                Home
              </Link>

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

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-8">
            <FiHeart className="w-4 h-4 mr-2" />
            Made with passion
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Shorty
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A modern, open-source URL shortener designed to simplify link
            management while providing powerful analytics and customization
            options.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div
            className={`rounded-3xl p-12 ${
              darkMode
                ? "bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50"
                : "bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100"
            }`}
          >
            <div className="text-center mb-12">
              <h2
                className={`text-4xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Mission
              </h2>
              <p
                className={`text-lg max-w-3xl mx-auto ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                To provide a free, reliable, and feature-rich URL shortening
                service that empowers individuals and businesses to share links
                more effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FiCode className="w-8 h-8" />,
                  title: "Open Source",
                  desc: "Built transparently with community contributions welcome",
                },
                {
                  icon: <FiUsers className="w-8 h-8" />,
                  title: "User-Focused",
                  desc: "Designed with simplicity and user experience as top priorities",
                },
                {
                  icon: <FiTrendingUp className="w-8 h-8" />,
                  title: "Always Improving",
                  desc: "Continuously evolving with new features and optimizations",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`text-center p-6 rounded-2xl ${
                    darkMode
                      ? "bg-gray-800/30 hover:bg-gray-800/50"
                      : "bg-white/50 hover:bg-white/80"
                  } transition-all duration-300 hover:scale-105`}
                >
                  <div className="text-violet-500 mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Highlight */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              What Makes Shorty Special?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "⚡",
                title: "Lightning Fast",
                desc: "Optimized for speed with instant link generation",
              },
              {
                emoji: "🔒",
                title: "Secure & Private",
                desc: "Your data is protected with enterprise-grade security",
              },
              {
                emoji: "📊",
                title: "Analytics",
                desc: "Track clicks and engagement with detailed insights",
              },
              {
                emoji: "🎨",
                title: "Customizable",
                desc: "Personalize your links with custom domains and aliases",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70"
                    : "bg-white border-gray-200 hover:bg-gray-50 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Developer Section */}
        <section className="mb-20">
          <div
            className={`rounded-3xl overflow-hidden ${
              darkMode
                ? "bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50"
                : "bg-gradient-to-r from-white to-gray-50 border border-gray-200 shadow-xl"
            }`}
          >
            <div className="p-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mr-4">
                      👨‍💻
                    </div>
                    <div>
                      <h2
                        className={`text-3xl font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Meet the Developer
                      </h2>
                      <p
                        className={`text-lg ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Gavi - Full Stack Developer
                      </p>
                    </div>
                  </div>

                  <p
                    className={`text-lg mb-6 leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Hey there! I'm Gavi, a passionate developer who loves
                    merging code with creativity. Shorty was born from the need
                    for a simple, reliable URL shortener that doesn't compromise
                    on features or user experience.
                  </p>

                  <p
                    className={`text-base mb-8 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    Built with modern technologies including React, Supabase,
                    and Tailwind CSS, this project represents my commitment to
                    open-source development and community-driven innovation.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://github.com/Gavinduachintha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 font-medium"
                    >
                      <FiGithub className="w-5 h-5 mr-2" />
                      View on GitHub
                    </a>
                    <Link
                      to="/dashboard"
                      className={`flex items-center px-6 py-3 rounded-xl border-2 font-medium transition-all duration-200 ${
                        darkMode
                          ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50"
                          : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                      }`}
                    >
                      <FiExternalLink className="w-5 h-5 mr-2" />
                      Try Shorty
                    </Link>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div
                    className={`w-64 h-64 rounded-3xl ${
                      darkMode
                        ? "bg-gradient-to-br from-violet-600/20 to-purple-600/20"
                        : "bg-gradient-to-br from-violet-100 to-purple-100"
                    } flex items-center justify-center`}
                  >
                    <div className="text-8xl">🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2
              className={`text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Built With Modern Technology
            </h2>
            <p
              className={`text-lg max-w-3xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Shorty leverages cutting-edge technologies to deliver a fast,
              reliable, and scalable experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React", desc: "Frontend Framework" },
              { name: "Supabase", desc: "Backend & Database" },
              { name: "Tailwind CSS", desc: "Styling" },
              { name: "Vite", desc: "Build Tool" },
            ].map((tech, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl text-center border transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70"
                    : "bg-white border-gray-200 hover:bg-gray-50 shadow-lg hover:shadow-xl"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {tech.name}
                </h3>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div
            className={`p-12 rounded-3xl ${
              darkMode
                ? "bg-gradient-to-r from-violet-900/50 to-purple-900/50 border border-violet-500/50"
                : "bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200"
            }`}
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Start Shortening?
            </h2>
            <p
              className={`text-lg mb-8 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Join the community and start creating better links today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-200 transform hover:scale-105">
                  Get Started Free
                </button>
              </Link>
              <Link to="/">
                <button
                  className={`px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-200 ${
                    darkMode
                      ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50"
                      : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white"
                  }`}
                >
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

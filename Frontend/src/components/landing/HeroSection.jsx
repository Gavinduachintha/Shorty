import React from "react";
import { Link } from "react-router-dom";

const HeroSection = ({ darkMode }) => {
  return (
    <section className="relative py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium mb-6 transition-all duration-200 ${
              darkMode
                ? "bg-violet-500/10 border border-violet-500/30 text-violet-300"
                : "bg-violet-50 border border-violet-200 text-violet-700"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold">Free & Open Source</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Shrink Your Links.
            <br />
            <span
              className={`${darkMode ? "text-violet-400" : "text-violet-600"}`}
            >
              Expand Your Reach.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Transform long URLs into concise, trackable links. Get valuable
            insights and boost your brand.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/signup" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-200 text-base flex items-center justify-center gap-2">
                Get Started Free
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>

            <Link to="/dashboard" className="w-full sm:w-auto">
              <button
                className={`w-full sm:w-auto px-8 py-3.5 font-semibold rounded-lg border-2 transition-all duration-200 text-base ${
                  darkMode
                    ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800"
                    : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                View Dashboard
              </button>
            </Link>
          </div>
        </div>

        {/* Demo Section */}
        <div className="max-w-3xl mx-auto">
          <div
            className={`rounded-2xl border p-8 md:p-10 ${
              darkMode
                ? "bg-gray-800/60 border-gray-700/50"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-6 text-center ${
                darkMode ? "text-gray-100" : "text-gray-900"
              }`}
            >
              See How It Works
            </h3>

            <div className="space-y-5">
              <div
                className={`p-4 rounded-lg ${
                  darkMode ? "bg-gray-900/50" : "bg-gray-50"
                }`}
              >
                <p
                  className={`text-xs font-semibold mb-2 uppercase tracking-wide ${
                    darkMode ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  Long URL
                </p>
                <p
                  className={`font-mono text-sm break-all ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  https://example.com/very/long/url/with/many/parameters?utm_source=campaign
                </p>
              </div>

              <div className="flex justify-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-violet-500" : "bg-violet-600"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  darkMode
                    ? "bg-violet-500/10 border border-violet-500/30"
                    : "bg-violet-50 border border-violet-200"
                }`}
              >
                <p
                  className={`text-xs font-semibold mb-2 uppercase tracking-wide ${
                    darkMode ? "text-violet-400" : "text-violet-600"
                  }`}
                >
                  Shortened URL
                </p>
                <p
                  className={`font-mono text-base font-semibold ${
                    darkMode ? "text-violet-300" : "text-violet-600"
                  }`}
                >
                  shorty.link/abc123
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

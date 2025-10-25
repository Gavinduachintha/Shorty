import React from "react";
import { Link } from "react-router-dom";
import Squares from "../Squares";

const HeroSection = ({ darkMode }) => {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-8 transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-violet-300"
                : "bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200/50 text-violet-700"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span className="font-semibold">
              Now available - Free & Open Source
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Shrink Your Links.
            <br />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Expand Your Reach.
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 5 100 2 150 5C200 8 250 7 298 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Transform long, unwieldy URLs into concise, trackable links that
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              {" "}
              boost your brand
            </span>{" "}
            and provide valuable insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Link to="/signup" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-lg overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>

            <Link to="/dashboard" className="w-full sm:w-auto">
              <button
                className={`group relative w-full sm:w-auto px-8 py-4 font-semibold rounded-2xl border-2 transition-all duration-300 text-lg overflow-hidden ${
                  darkMode
                    ? "border-gray-600 text-gray-200 hover:border-violet-500 hover:text-white"
                    : "border-gray-300 text-gray-700 hover:border-violet-500 hover:text-gray-900"
                }`}
              >
                <span className="relative z-10">View Dashboard</span>
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode ? "bg-violet-500/10" : "bg-violet-50"
                  }`}
                ></div>
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
  );
};

export default HeroSection;

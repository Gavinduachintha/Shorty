import React from "react";
import { Link } from "react-router-dom";
import Squares from "../Squares";

const HeroSection = ({ darkMode }) => {
  return (
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
  );
};

export default HeroSection;

import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiZap, FiTrendingUp, FiShield } from "react-icons/fi";

const HeroSection = ({ darkMode }) => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium mb-8 animate-fade-in-down backdrop-blur-sm transition-all duration-300 ${
              darkMode
                ? "bg-purple-500/10 border border-purple-500/20 text-purple-300"
                : "bg-purple-50 border border-purple-200/50 text-purple-700"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Free & Open Source • No Limits</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight animate-fade-in-up ${
              darkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            Shrink Links.
            <br />
            <span className="relative">
              <span className="gradient-text">Expand Reach.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-purple-500/30"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 10C50 4 150 4 198 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-2 ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Transform lengthy URLs into powerful short links. Track every click
            with
            <span className={darkMode ? "text-cyan-400" : "text-cyan-600"}>
              {" "}
              real-time analytics
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fade-in-up stagger-3">
            <Link to="/signup" className="w-full sm:w-auto group">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-purple-400 hover:to-pink-400 text-white font-semibold rounded-xl transition-all duration-300 text-base flex items-center justify-center gap-3 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] hover:-translate-y-0.5">
                Start Free — No Card Required
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>

            <Link to="/dashboard" className="w-full sm:w-auto">
              <button
                className={`w-full sm:w-auto px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-300 text-base backdrop-blur-sm hover:scale-[1.02] hover:-translate-y-0.5 ${
                  darkMode
                    ? "border-zinc-700 text-zinc-300 hover:border-purple-500/50 hover:bg-purple-500/10"
                    : "border-zinc-300 text-zinc-700 hover:border-purple-400 hover:bg-purple-50"
                }`}
              >
                View Dashboard
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap justify-center items-center gap-8 mb-16 animate-fade-in stagger-4 ${
              darkMode ? "text-zinc-500" : "text-zinc-500"
            }`}
          >
            <div className="flex items-center gap-2">
              <FiZap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">Instant Creation</span>
            </div>
            <div className="flex items-center gap-2">
              <FiTrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-sm">Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <FiShield className="w-4 h-4 text-blue-500" />
              <span className="text-sm">SSL Secured</span>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="max-w-4xl mx-auto animate-fade-in-up stagger-5">
          <div
            className={`relative rounded-3xl p-1 ${
              darkMode
                ? "bg-gradient-to-b from-purple-500/20 via-transparent to-cyan-500/20"
                : "bg-gradient-to-b from-purple-200/50 via-transparent to-cyan-200/50"
            }`}
          >
            <div
              className={`rounded-[22px] p-8 md:p-12 backdrop-blur-xl ${
                darkMode
                  ? "bg-zinc-900/80 border border-zinc-800/50"
                  : "bg-white/90 border border-zinc-200/50 shadow-xl shadow-purple-500/5"
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  See the magic ✨
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>

              <div className="space-y-6">
                {/* Long URL */}
                <div
                  className={`p-5 rounded-xl transition-all duration-300 ${
                    darkMode ? "bg-zinc-800/50" : "bg-zinc-100/80"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        darkMode ? "bg-red-400" : "bg-red-500"
                      }`}
                    />
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        darkMode ? "text-zinc-400" : "text-zinc-500"
                      }`}
                    >
                      Before
                    </p>
                  </div>
                  <p
                    className={`font-mono text-sm break-all leading-relaxed ${
                      darkMode ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    https://example.com/products/summer-sale/2024/item?ref=marketing&utm_source=newsletter&utm_campaign=promo
                  </p>
                </div>

                {/* Arrow Animation */}
                <div className="flex justify-center">
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center ${
                      darkMode
                        ? "bg-gradient-to-br from-purple-600 to-pink-600"
                        : "bg-gradient-to-br from-purple-500 to-pink-500"
                    } shadow-lg shadow-purple-500/30 animate-bounce-subtle`}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Short URL */}
                <div
                  className={`relative p-5 rounded-xl overflow-hidden ${
                    darkMode
                      ? "bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-purple-500/20"
                      : "bg-gradient-to-r from-purple-50 via-pink-50 to-cyan-50 border border-purple-200/50"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        darkMode ? "bg-emerald-400" : "bg-emerald-500"
                      }`}
                    />
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        darkMode ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    >
                      After
                    </p>
                  </div>
                  <p
                    className={`font-mono text-lg md:text-xl font-bold ${
                      darkMode ? "text-white" : "text-zinc-900"
                    }`}
                  >
                    shorty.link/<span className="gradient-text">summer24</span>
                  </p>
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

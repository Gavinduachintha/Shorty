import React from "react";
import { Link } from "react-router-dom";
import {
  FiGift,
  FiLock,
  FiZap,
  FiBarChart2,
  FiGlobe,
  FiCode,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

const FeaturesSection = ({ darkMode }) => {
  const features = [
    {
      icon: FiGift,
      title: "100% Free Forever",
      desc: "No hidden costs, no premium tiers. Create unlimited short links without ever paying a dime.",
      gradient: "from-emerald-500 to-teal-500",
      highlight: true,
    },
    {
      icon: FiBarChart2,
      title: "Powerful Analytics",
      desc: "Track clicks, geographic data, referrers, and devices with beautiful real-time dashboards.",
      gradient: "from-blue-500 to-cyan-500",
      highlight: false,
    },
    {
      icon: FiLock,
      title: "Enterprise Security",
      desc: "Bank-level SSL encryption and 99.9% uptime guarantee protect every link you create.",
      gradient: "from-purple-500 to-pink-500",
      highlight: false,
    },
    {
      icon: FiZap,
      title: "Lightning Fast",
      desc: "Global edge network ensures your links redirect in milliseconds, anywhere in the world.",
      gradient: "from-yellow-500 to-orange-500",
      highlight: false,
    },
    {
      icon: FiGlobe,
      title: "Custom Domains",
      desc: "Use your own branded domain for a professional look that builds trust with your audience.",
      gradient: "from-pink-500 to-rose-500",
      highlight: false,
    },
    {
      icon: FiCode,
      title: "Developer API",
      desc: "RESTful API with comprehensive documentation. Integrate link shortening into any workflow.",
      gradient: "from-indigo-500 to-purple-500",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-sm ${
              darkMode
                ? "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                : "bg-purple-50 text-purple-700 border border-purple-200/50"
            }`}
          >
            <FiStar className="w-4 h-4" />
            <span className="text-sm font-semibold">Why Shorty?</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            Everything you need,
            <br />
            <span className="gradient-text">nothing you don't.</span>
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Packed with features that help you manage, track, and optimize your
            links with ease
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  feature.highlight
                    ? darkMode
                      ? "bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-cyan-500/10 border border-purple-500/30"
                      : "bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50 border border-purple-200"
                    : darkMode
                    ? "bg-zinc-900/50 border border-zinc-800/50 hover:border-purple-500/30 hover:bg-zinc-800/50"
                    : "bg-white/80 border border-zinc-200/80 hover:border-purple-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/5"
                } backdrop-blur-sm`}
              >
                {/* Highlight Badge */}
                {feature.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`inline-flex items-center px-3 py-1 text-xs font-bold rounded-full ${
                        darkMode
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                          : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                      } shadow-lg shadow-emerald-500/30`}
                    >
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-gradient-to-br ${feature.gradient} shadow-lg`}
                  style={{
                    boxShadow: `0 10px 30px -10px ${
                      feature.gradient.includes("emerald")
                        ? "rgba(16, 185, 129, 0.4)"
                        : feature.gradient.includes("blue")
                        ? "rgba(59, 130, 246, 0.4)"
                        : feature.gradient.includes("purple") &&
                          !feature.gradient.includes("indigo")
                        ? "rgba(168, 85, 247, 0.4)"
                        : feature.gradient.includes("yellow")
                        ? "rgba(234, 179, 8, 0.4)"
                        : feature.gradient.includes("pink") &&
                          !feature.gradient.includes("purple")
                        ? "rgba(236, 72, 153, 0.4)"
                        : "rgba(99, 102, 241, 0.4)"
                    }`,
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {feature.desc}
                </p>

                {/* Hover Arrow */}
                <div
                  className={`absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${
                    darkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  <FiArrowRight className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`relative overflow-hidden rounded-3xl p-1 ${
            darkMode
              ? "bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-cyan-500/50"
              : "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
          }`}
        >
          <div
            className={`rounded-[22px] p-12 md:p-16 text-center ${
              darkMode ? "bg-zinc-900" : "bg-white"
            }`}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Ready to get started?
              </h3>
              <p
                className={`text-lg md:text-xl mb-10 max-w-xl mx-auto ${
                  darkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                Join thousands of marketers, creators, and developers who trust
                Shorty
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <button className="px-10 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-purple-400 hover:to-pink-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] flex items-center justify-center gap-2">
                    Start Shortening — It's Free
                    <FiArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link to="/about">
                  <button
                    className={`px-10 py-4 font-semibold rounded-xl border-2 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] ${
                      darkMode
                        ? "border-zinc-700 text-zinc-300 hover:border-purple-500/50 hover:bg-purple-500/10"
                        : "border-zinc-300 text-zinc-700 hover:border-purple-400 hover:bg-purple-50"
                    }`}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

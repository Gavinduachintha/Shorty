import React from "react";
import { Link } from "react-router-dom";

const FeaturesSection = ({ darkMode }) => {
  const features = [
    {
      icon: "🎁",
      title: "100% Free & Open Source",
      desc: "No hidden costs, no premium tiers. Shorty is completely free and open source forever.",
      highlight: true,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Create shortened links in milliseconds with our optimized infrastructure.",
      highlight: false,
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: "📊",
      title: "Detailed Analytics",
      desc: "Track clicks, geographic data, and user engagement with comprehensive analytics.",
      highlight: false,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      desc: "Enterprise-grade security with 99.9% uptime guarantee for your links.",
      highlight: false,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: "🎨",
      title: "Custom Branding",
      desc: "Personalize your links with custom domains and branded short URLs.",
      highlight: false,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: "🚀",
      title: "Easy Integration",
      desc: "Simple API and browser extensions make integration effortless.",
      highlight: false,
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
              darkMode
                ? "bg-violet-500/10 text-violet-300"
                : "bg-violet-100 text-violet-700"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold">Features</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Why Choose Shorty?
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Powerful features designed to help you manage, track, and optimize
            your links with ease
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 card-hover ${
                feature.highlight
                  ? darkMode
                    ? "bg-gradient-to-br from-violet-900/40 to-purple-900/40 border-2 border-violet-500/40 shadow-xl shadow-violet-500/10"
                    : "bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-200/60 shadow-xl shadow-violet-200/50"
                  : darkMode
                  ? "bg-gray-800/40 border border-gray-700/50 hover:bg-gray-800/60 hover:border-gray-600/50 backdrop-blur-sm"
                  : "bg-white/80 border border-gray-200 hover:bg-white hover:border-gray-300 shadow-lg hover:shadow-2xl backdrop-blur-sm"
              }`}
              style={{
                animation: "fadeInUp 0.5s ease-out forwards",
                animationDelay: `${i * 100}ms`,
                opacity: 0,
              }}
            >
              {/* Highlight Badge */}
              {feature.highlight && (
                <div className="absolute top-5 right-5 z-10">
                  <span className="relative inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                    <span className="absolute flex h-3 w-3 -top-1 -right-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                    </span>
                    POPULAR
                  </span>
                </div>
              )}

              {/* Icon with Gradient Background */}
              <div
                className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br ${feature.gradient} p-0.5`}
              >
                <div
                  className={`w-full h-full rounded-2xl flex items-center justify-center text-3xl ${
                    darkMode ? "bg-gray-900" : "bg-white"
                  }`}
                >
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-bold mb-3 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`leading-relaxed text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {feature.desc}
              </p>

              {/* Hover Gradient Overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl ${
                  darkMode
                    ? "bg-gradient-to-br from-violet-600/10 to-purple-600/10"
                    : "bg-gradient-to-br from-violet-50/80 to-purple-50/80"
                }`}
              ></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
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
            Join thousands of users who trust Shorty for their link management
            needs
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
  );
};

export default FeaturesSection;

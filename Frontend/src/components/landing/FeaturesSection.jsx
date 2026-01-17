import React from "react";
import { Link } from "react-router-dom";

const FeaturesSection = ({ darkMode }) => {
  const features = [
    {
      icon: "🎁",
      title: "100% Free & Open Source",
      desc: "No hidden costs, no premium tiers. Shorty is completely free and open source forever.",
      highlight: true,
    },

    {
      icon: "🔒",
      title: "Secure & Reliable",
      desc: "Enterprise-grade security with 99.9% uptime guarantee for your links.",
      highlight: false,
    },

    {
      icon: "🚀",
      title: "Easy Integration",
      desc: "Simple API and browser extensions make integration effortless.",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-4 ${
              darkMode
                ? "bg-violet-500/10 text-violet-300 border border-violet-500/30"
                : "bg-violet-50 text-violet-700 border border-violet-200"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold">Features</span>
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Why Choose Shorty?
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Powerful features designed to help you manage, track, and optimize
            your links with ease
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 ${
                feature.highlight
                  ? darkMode
                    ? "bg-violet-500/10 border-2 border-violet-500/40"
                    : "bg-violet-50 border-2 border-violet-200"
                  : darkMode
                  ? "bg-gray-800/60 border border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600/50"
                  : "bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Highlight Badge */}
              {feature.highlight && (
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 text-xs font-bold rounded-full ${
                      darkMode
                        ? "bg-violet-500 text-white"
                        : "bg-violet-600 text-white"
                    }`}
                  >
                    POPULAR
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 text-2xl ${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                }`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3
                className={`text-lg font-semibold mb-2 ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center p-10 rounded-xl ${
            darkMode
              ? "bg-gray-800/50 border border-gray-700"
              : "bg-violet-50 border border-violet-100"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Ready to Get Started?
          </h3>
          <p
            className={`text-base mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of users who trust Shorty for their link management
            needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <button className="px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-all duration-200">
                Start Shortening Links
              </button>
            </Link>
            <Link to="/about">
              <button
                className={`px-8 py-3.5 font-semibold rounded-lg border-2 transition-all duration-200 ${
                  darkMode
                    ? "border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800"
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

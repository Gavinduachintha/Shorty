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
  ];

  return (
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
            Powerful features designed to help you manage, track, and optimize
            your links
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
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

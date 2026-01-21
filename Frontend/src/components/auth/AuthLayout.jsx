import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "../common/Header";
import BackgroundElements from "../common/BackgroundElements";
import { FiLink, FiTrendingUp, FiShield, FiZap } from "react-icons/fi";

const AuthLayout = ({
  darkMode,
  setDarkMode,
  children,
  title,
  subtitle,
  badge,
}) => {
  const features = [
    { icon: FiLink, text: "Unlimited Links" },
    { icon: FiTrendingUp, text: "Real Analytics" },
    { icon: FiShield, text: "SSL Secured" },
    { icon: FiZap, text: "Instant Redirects" },
  ];

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-zinc-950 text-zinc-100"
          : "bg-gradient-to-br from-zinc-50 via-white to-purple-50 text-zinc-900"
      }`}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: darkMode ? "#18181b" : "#ffffff",
            color: darkMode ? "#fafafa" : "#18181b",
            border: darkMode ? "1px solid #27272a" : "1px solid #e4e4e7",
            borderRadius: "12px",
            padding: "16px",
          },
        }}
      />

      <BackgroundElements darkMode={darkMode} />

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Welcome Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-in-left">
            <div>
              {badge && (
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm ${
                    darkMode
                      ? "bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      : "bg-purple-50 border border-purple-200/50 text-purple-700"
                  }`}
                >
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
                  {badge}
                </div>
              )}

              <h1
                className={`text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight tracking-tight ${
                  darkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                {title}
              </h1>

              <p
                className={`text-lg lg:text-xl mb-10 leading-relaxed max-w-md ${
                  darkMode ? "text-zinc-400" : "text-zinc-600"
                }`}
              >
                {subtitle}
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      darkMode
                        ? "bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                        : "bg-white text-zinc-600 border border-zinc-200 shadow-sm"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative animate-slide-in-right">
            {/* Glow Effect Behind Card */}
            <div
              className={`absolute -inset-4 rounded-[32px] blur-3xl transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-cyan-600/20"
                  : "bg-gradient-to-br from-purple-400/20 via-pink-400/10 to-cyan-400/20"
              }`}
            />

            {/* Card Container */}
            <div
              className={`relative rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${
                darkMode
                  ? "bg-zinc-900/70 border border-zinc-800/50 shadow-2xl shadow-black/20"
                  : "bg-white/80 border border-zinc-200/50 shadow-2xl shadow-purple-500/10"
              }`}
            >
              {/* Subtle gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              <div className="relative z-10 p-8 lg:p-10">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

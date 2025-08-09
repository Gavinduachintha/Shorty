import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "../common/Header";
import BackgroundElements from "../common/BackgroundElements";
import Squares from "../Squares";

const AuthLayout = ({
  darkMode,
  setDarkMode,
  children,
  title,
  subtitle,
  badge,
}) => {
  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-white via-gray-50 to-violet-50 text-gray-900"
      }`}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: darkMode ? "#1f2937" : "#ffffff",
            color: darkMode ? "#f3f4f6" : "#111827",
            border: darkMode ? "1px solid #374151" : "1px solid #e5e7eb",
          },
        }}
      />

      <BackgroundElements darkMode={darkMode} />

      {/* Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Welcome Content */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              {badge && (
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  {badge}
                </div>
              )}

              <h1
                className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {title}
              </h1>

              <p
                className={`text-xl mb-8 leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {subtitle}
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative">
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl border backdrop-blur-sm ${
                darkMode
                  ? "bg-gray-800/50 border-gray-700/50"
                  : "bg-white/80 border-gray-200/50"
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30">
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

              <div className="relative z-10 p-8 lg:p-12">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

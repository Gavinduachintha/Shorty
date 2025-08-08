import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { FiMoon, FiSun, FiEye, FiEyeOff } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import Squares from "../components/Squares";

const supabaseUrl = "https://vrsbwbsgmdsetweqxjqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjcxODIsImV4cCI6MjA2Njc0MzE4Mn0.VrrxvSzcp-2IEbkZLgMkMnwlOIIQfRFsDsM9KsNnkFY";
const supabase = createClient(supabaseUrl, supabaseKey);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.log("Login failed", error.message);
        toast.error(error.message);
      } else {
        console.log("Login success:", data.user);
        toast.success("Welcome Back!");
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

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

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundImage: darkMode
              ? `
                radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
              `
              : `
                radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)
              `,
          }}
        />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="src/assets/link.png"
                  alt="Shorty Logo"
                  className="w-6 h-6 filter brightness-0 invert"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent group-hover:from-violet-500 group-hover:to-purple-500 transition-all duration-200">
              Shorty
            </h1>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl transition-all duration-200 ${
              darkMode
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-md"
            }`}
            title="Toggle Theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Welcome Content */}
          <div className="text-center lg:text-left space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Welcome back to Shorty
              </div>

              <h1
                className={`text-4xl lg:text-6xl font-bold mb-6 leading-tight ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Ready to
                <br />
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Shorten More?
                </span>
              </h1>

              <p
                className={`text-xl mb-8 leading-relaxed ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Sign in to access your dashboard and manage all your shortened
                links with detailed analytics.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                { icon: "⚡", text: "Lightning fast link creation" },
                { icon: "📊", text: "Comprehensive analytics dashboard" },
                { icon: "🔒", text: "Secure and reliable platform" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="text-2xl">{feature.icon}</div>
                  <p
                    className={`text-lg ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Login Form */}
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

              <div className="relative z-10 p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2
                    className={`text-3xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Welcome Back
                  </h2>
                  <p
                    className={`text-lg ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Sign in to your account
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent ${
                        darkMode
                          ? "bg-gray-900/50 border-gray-600 text-gray-100 placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Password Input */}
                  <div>
                    <label
                      htmlFor="password"
                      className={`block text-sm font-medium mb-2 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={`w-full px-4 py-4 pr-12 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent ${
                          darkMode
                            ? "bg-gray-900/50 border-gray-600 text-gray-100 placeholder-gray-400"
                            : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                        }`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                          darkMode
                            ? "text-gray-400 hover:text-gray-300"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {showPassword ? (
                          <FiEyeOff size={20} />
                        ) : (
                          <FiEye size={20} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Signing In...</span>
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                {/* Sign Up Link */}
                <div className="mt-8 text-center">
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-violet-500 hover:text-violet-600 font-medium transition-colors duration-200"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

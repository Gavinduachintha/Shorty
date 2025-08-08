import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { FiMoon, FiSun, FiLogOut, FiCopy } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { IoAddSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

import Entrypage from "./Entrypage";

const supabase = createClient(
  "https://vrsbwbsgmdsetweqxjqp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjcxODIsImV4cCI6MjA2Njc0MzE4Mn0.VrrxvSzcp-2IEbkZLgMkMnwlOIIQfRFsDsM9KsNnkFY"
);

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const fetchUrls = async (userId) => {
    const { data, error } = await supabase
      .from("urls")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching URLs:", error.message);
      setError("Failed to load URLs");
    } else {
      setUrls(data);
    }
  };

  useEffect(() => {
    const getUserAndUrls = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (!user || error) {
        navigate("/");
        return;
      }

      setUser(user);
      fetchUrls(user.id);
      setLoading(false);
    };

    getUserAndUrls();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div
        className={`min-h-screen transition-all duration-300 ${
          darkMode
            ? "bg-gradient-to-br from-gray-900 via-[#121212] to-gray-800 text-gray-100"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
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
        <header
          className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
            darkMode
              ? "bg-gray-900/80 border-gray-700/50"
              : "bg-white/80 border-gray-200/50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <div>
                  <h1
                    className={`text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent`}
                  >
                    Shorty
                  </h1>
                  {user && (
                    <p
                      className={`text-xs ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Welcome back, {user.user_metadata.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                className="group relative p-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-violet-500/25"
                onClick={() => setShowPopup(true)}
                title="Create new short link"
              >
                <IoAddSharp size={18} />
                <span className="absolute -top-2 -right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-xl transition-all duration-200 ${
                  darkMode
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-md"
                }`}
                title="Toggle theme"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
              <button
                onClick={handleLogout}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  darkMode
                    ? "bg-red-600/10 text-red-400 hover:bg-red-600/20 border border-red-600/20"
                    : "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200"
                }`}
              >
                <FiLogOut size={16} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Quick Action Section */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h2
              className={`text-3xl font-bold mb-2 ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Your Links Dashboard
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Manage and track all your shortened URLs in one place
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div
              className={`relative w-full max-w-lg p-1 rounded-2xl ${
                darkMode
                  ? "bg-gradient-to-r from-violet-600/20 to-purple-600/20"
                  : "bg-gradient-to-r from-violet-100 to-purple-100"
              }`}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Paste your long URL here to shorten it..."
                  className={`w-full px-6 py-4 pr-16 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200 ${
                    darkMode
                      ? "bg-gray-800 text-gray-100 placeholder-gray-400"
                      : "bg-white text-gray-900 placeholder-gray-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPopup(true)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
                >
                  <IoMdSend size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main
          className={`max-w-7xl mx-auto px-6 pb-12 transition-all duration-300 ${
            showPopup ? "filter blur-sm" : ""
          }`}
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500 mb-4"></div>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Loading your links...
              </p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-500 text-2xl">⚠</span>
              </div>
              <p className="text-red-600 font-semibold text-lg">{error}</p>
            </div>
          ) : urls.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
                  darkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <span className="text-4xl">🔗</span>
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                No links yet
              </h3>
              <p
                className={`text-center mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Create your first shortened URL to get started
              </p>
              <button
                onClick={() => setShowPopup(true)}
                className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg font-medium"
              >
                Create Your First Link
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3
                  className={`text-xl font-semibold ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Your Links ({urls.length})
                </h3>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Sorted by newest first
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {urls.map((url, index) => (
                  <div
                    key={url.id}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-200 hover:shadow-lg ${
                      darkMode
                        ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600/50"
                        : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-violet-100"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: "fadeInUp 0.5s ease-out forwards",
                    }}
                  >
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* URL Info */}
                        <div className="flex-1 min-w-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Original URL */}
                            <div>
                              <h4
                                className={`text-xs font-medium uppercase tracking-wide mb-2 ${
                                  darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                Original URL
                              </h4>
                              <a
                                href={url.original_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block truncate text-sm hover:text-violet-500 transition-colors ${
                                  darkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                                title={url.original_url}
                              >
                                {url.original_url}
                              </a>
                            </div>

                            {/* Short URL */}
                            <div>
                              <h4
                                className={`text-xs font-medium uppercase tracking-wide mb-2 ${
                                  darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                              >
                                Short Link
                              </h4>
                              <a
                                href={url.short_code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block truncate text-sm font-medium text-violet-500 hover:text-violet-600 transition-colors"
                                title={url.short_code}
                              >
                                {url.short_code}
                              </a>
                            </div>
                          </div>

                          {/* Metadata */}
                          <div
                            className={`flex items-center space-x-4 mt-4 text-xs ${
                              darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            <span>
                              Created{" "}
                              {new Date(url.created_at).toLocaleDateString()}
                            </span>
                            <span>•</span>
                            <span>
                              {new Date(url.created_at).toLocaleTimeString()}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(url.short_code);
                              toast.success("Link copied to clipboard!");
                            }}
                            className={`p-3 rounded-xl transition-all duration-200 ${
                              darkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-700"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                            }`}
                            title="Copy link"
                          >
                            <FiCopy size={16} />
                          </button>

                          <button
                            className={`p-3 rounded-xl transition-all duration-200 ${
                              darkMode
                                ? "text-gray-400 hover:text-red-400 hover:bg-red-900/20"
                                : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                            }`}
                            title="Delete link"
                          >
                            <MdDelete size={16} />
                          </button>

                          <button
                            onClick={() =>
                              window.open(url.short_code, "_blank")
                            }
                            className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-md font-medium text-sm"
                          >
                            Visit
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect gradient */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
                        darkMode
                          ? "bg-gradient-to-r from-violet-600/5 to-purple-600/5"
                          : "bg-gradient-to-r from-violet-50/50 to-purple-50/50"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Popup Entry Form */}
        {showPopup && (
          <Entrypage
            onClose={() => setShowPopup(false)}
            user={user}
            refreshData={() => fetchUrls(user.id)}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;

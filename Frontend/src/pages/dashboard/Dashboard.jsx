import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import {
  FiMoon,
  FiSun,
  FiLogOut,
  FiCopy,
  FiLink,
  FiExternalLink,
  FiPlus,
  FiSearch,
  FiCalendar,
  FiClock,
  FiTrash2,
  FiCheck,
  FiHome,
} from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { IoMdSend } from "react-icons/io";
import Entrypage from "./Entrypage";
import { urlService } from "../../services/urlService";
import { isValidUrl, formatUrl } from "../../utils/validation";
import { openRedirectUrl, getExternalRedirectUrl } from "../../utils/urlUtils";
import useDarkMode from "../../hooks/useDarkMode";
import UrlSuccessModal from "../../components/UrlSuccessModal";
import linkIcon from "../../assets/link.png";

const Dashboard = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [urlInput, setUrlInputs] = useState("");
  const [newlyCreatedUrl, setNewlyCreatedUrl] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const navigate = useNavigate();

  const fetchUrls = async (userId) => {
    try {
      const data = await urlService.getUserUrls(userId);
      setUrls(data);
      setError("");
    } catch (error) {
      console.error("Error fetching URLs:", error.message);
      setError("Failed to load URLs");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!urlInput.trim()) {
      toast.error("Please enter a URL");
      return;
    }

    const formattedUrl = formatUrl(urlInput.trim());
    if (!isValidUrl(formattedUrl)) {
      toast.error("Please enter a valid URL");
      return;
    }

    setLoading(true);
    try {
      await urlService.createUrl(formattedUrl, user.id);
      toast.success("URL shortened successfully!");
      setUrlInputs("");
      fetchUrls(user.id);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (shortCode, id) => {
    navigator.clipboard.writeText(getExternalRedirectUrl(shortCode));
    setCopiedId(id);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async (urlId) => {
    try {
      await urlService.deleteUrl(urlId);
      toast.success("URL deleted successfully");
      fetchUrls(user.id);
    } catch (err) {
      toast.error("Error deleting URL");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const filteredUrls = urls.filter(
    (url) =>
      url.original_url.toLowerCase().includes(searchQuery.toLowerCase()) ||
      url.short_code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-zinc-950" : "bg-zinc-50"
      }`}
    >
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: darkMode ? "#18181b" : "#ffffff",
            color: darkMode ? "#fafafa" : "#111827",
            border: darkMode ? "1px solid #27272a" : "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "16px",
          },
        }}
      />

      {/* Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
          darkMode
            ? "bg-zinc-950/80 border-zinc-800"
            : "bg-white/80 border-zinc-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-600 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-all duration-300">
                <img
                  src={linkIcon}
                  alt="Shorty"
                  className="w-5 h-5 filter brightness-0 invert"
                />
              </div>
              <div>
                <h1
                  className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  Shorty
                </h1>
                <p
                  className={`text-[10px] font-medium tracking-wider uppercase ${
                    darkMode ? "text-zinc-500" : "text-zinc-500"
                  }`}
                >
                  Dashboard
                </p>
              </div>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Home Button */}
              <Link
                to="/"
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  darkMode
                    ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
                title="Go to Home"
              >
                <FiHome size={18} />
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  darkMode
                    ? "text-amber-400 hover:bg-zinc-800"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
                title="Toggle theme"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  darkMode
                    ? "text-red-400 hover:bg-red-500/10"
                    : "text-red-600 hover:bg-red-50"
                }`}
              >
                <FiLogOut size={16} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-2 ${
              darkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            Welcome back
            {user && (
              <span className="text-purple-500">
                , {user.email?.split("@")[0]}
              </span>
            )}
          </h2>
          <p className={`${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            Manage your shortened links and track their performance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div
            className={`p-5 rounded-2xl border transition-all duration-300 ${
              darkMode
                ? "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                : "bg-white border-zinc-200 hover:border-zinc-300 shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-medium ${
                    darkMode ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  Total Links
                </p>
                <p
                  className={`text-3xl font-bold mt-1 ${
                    darkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {urls.length}
                </p>
              </div>
              <div
                className={`p-3 rounded-xl ${
                  darkMode ? "bg-purple-500/10" : "bg-purple-50"
                }`}
              >
                <FiLink className="w-6 h-6 text-purple-500" />
              </div>
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border transition-all duration-300 ${
              darkMode
                ? "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                : "bg-white border-zinc-200 hover:border-zinc-300 shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-medium ${
                    darkMode ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  This Month
                </p>
                <p
                  className={`text-3xl font-bold mt-1 ${
                    darkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {
                    urls.filter((url) => {
                      const now = new Date();
                      const created = new Date(url.created_at);
                      return (
                        created.getMonth() === now.getMonth() &&
                        created.getFullYear() === now.getFullYear()
                      );
                    }).length
                  }
                </p>
              </div>
              <div
                className={`p-3 rounded-xl ${
                  darkMode ? "bg-emerald-500/10" : "bg-emerald-50"
                }`}
              >
                <FiCalendar className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border transition-all duration-300 ${
              darkMode
                ? "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                : "bg-white border-zinc-200 hover:border-zinc-300 shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-medium ${
                    darkMode ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  Last 7 Days
                </p>
                <p
                  className={`text-3xl font-bold mt-1 ${
                    darkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {
                    urls.filter((url) => {
                      const now = new Date();
                      const created = new Date(url.created_at);
                      const diffDays = Math.ceil(
                        (now - created) / (1000 * 60 * 60 * 24)
                      );
                      return diffDays <= 7;
                    }).length
                  }
                </p>
              </div>
              <div
                className={`p-3 rounded-xl ${
                  darkMode ? "bg-blue-500/10" : "bg-blue-50"
                }`}
              >
                <FiClock className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Create New Link Section */}
        <div
          className={`p-6 rounded-2xl border mb-8 ${
            darkMode
              ? "bg-zinc-900/50 border-zinc-800"
              : "bg-white border-zinc-200 shadow-sm"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
              darkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            <FiPlus className="w-5 h-5 text-purple-500" />
            Create New Short Link
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1 relative">
              <FiLink
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  darkMode ? "text-zinc-500" : "text-zinc-400"
                }`}
              />
              <input
                type="text"
                value={urlInput}
                placeholder="Paste your long URL here..."
                className={`w-full pl-12 pr-4 py-3.5 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                  darkMode
                    ? "bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-500 focus:border-purple-500"
                    : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-purple-500"
                }`}
                onChange={(e) => setUrlInputs(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading || !urlInput.trim()}
              className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              ) : (
                <>
                  <IoMdSend size={18} />
                  <span className="hidden sm:inline">Shorten</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Links Section */}
        <div
          className={`rounded-2xl border overflow-hidden ${
            darkMode
              ? "bg-zinc-900/50 border-zinc-800"
              : "bg-white border-zinc-200 shadow-sm"
          }`}
        >
          {/* Section Header */}
          <div
            className={`p-5 border-b ${
              darkMode ? "border-zinc-800" : "border-zinc-200"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3
                className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-zinc-900"
                }`}
              >
                Your Links
                <span
                  className={`ml-2 text-sm font-normal ${
                    darkMode ? "text-zinc-500" : "text-zinc-500"
                  }`}
                >
                  ({filteredUrls.length})
                </span>
              </h3>

              {/* Search */}
              {urls.length > 0 && (
                <div className="relative w-full sm:w-64">
                  <FiSearch
                    className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                      darkMode ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  />
                  <input
                    type="text"
                    placeholder="Search links..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border transition-all duration-200 focus:outline-none text-sm ${
                      darkMode
                        ? "bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-500 focus:border-purple-500"
                        : "bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-purple-500"
                    }`}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Links List */}
          <div
            className={`divide-y ${
              darkMode ? "divide-zinc-800" : "divide-zinc-100"
            }`}
          >
            {loading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="animate-spin rounded-full h-10 w-10 border-2 border-purple-500 border-t-transparent mb-4"></div>
                <p
                  className={`${darkMode ? "text-zinc-400" : "text-zinc-500"}`}
                >
                  Loading your links...
                </p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                    darkMode ? "bg-red-500/10" : "bg-red-50"
                  }`}
                >
                  <span className="text-red-500 text-xl">⚠</span>
                </div>
                <p className="text-red-500 font-medium">{error}</p>
              </div>
            ) : filteredUrls.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${
                    darkMode ? "bg-zinc-800" : "bg-zinc-100"
                  }`}
                >
                  <FiLink
                    className={`w-8 h-8 ${
                      darkMode ? "text-zinc-600" : "text-zinc-400"
                    }`}
                  />
                </div>
                <h4
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-zinc-900"
                  }`}
                >
                  {searchQuery ? "No links found" : "No links yet"}
                </h4>
                <p
                  className={`text-center mb-6 max-w-sm ${
                    darkMode ? "text-zinc-400" : "text-zinc-500"
                  }`}
                >
                  {searchQuery
                    ? "Try adjusting your search query"
                    : "Create your first shortened URL using the form above"}
                </p>
              </div>
            ) : (
              filteredUrls.map((url, index) => (
                <div
                  key={url.id}
                  className={`p-5 transition-all duration-200 ${
                    darkMode ? "hover:bg-zinc-800/50" : "hover:bg-zinc-50"
                  }`}
                  style={{
                    animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Link Info */}
                    <div className="flex-1 min-w-0">
                      {/* Short URL */}
                      <div className="flex items-center gap-2 mb-2">
                        <a
                          href={getExternalRedirectUrl(url.short_code)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-500 hover:text-purple-400 font-medium text-base truncate flex items-center gap-1.5 group"
                        >
                          {getExternalRedirectUrl(url.short_code)}
                          <FiExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </div>

                      {/* Original URL */}
                      <a
                        href={url.original_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm truncate block mb-3 hover:underline ${
                          darkMode ? "text-zinc-400" : "text-zinc-500"
                        }`}
                        title={url.original_url}
                      >
                        {url.original_url}
                      </a>

                      {/* Metadata */}
                      <div
                        className={`flex items-center gap-4 text-xs ${
                          darkMode ? "text-zinc-500" : "text-zinc-400"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <FiCalendar className="w-3.5 h-3.5" />
                          {formatDate(url.created_at)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FiClock className="w-3.5 h-3.5" />
                          {formatTime(url.created_at)}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(url.short_code, url.id)}
                        className={`p-2.5 rounded-xl transition-all duration-200 ${
                          copiedId === url.id
                            ? "bg-emerald-500 text-white"
                            : darkMode
                            ? "text-zinc-400 hover:text-white hover:bg-zinc-700"
                            : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                        }`}
                        title="Copy link"
                      >
                        {copiedId === url.id ? (
                          <FiCheck size={16} />
                        ) : (
                          <FiCopy size={16} />
                        )}
                      </button>

                      <button
                        onClick={() => openRedirectUrl(url.short_code)}
                        className={`p-2.5 rounded-xl transition-all duration-200 ${
                          darkMode
                            ? "text-zinc-400 hover:text-white hover:bg-zinc-700"
                            : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                        }`}
                        title="Visit link"
                      >
                        <FiExternalLink size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(url.id)}
                        className={`p-2.5 rounded-xl transition-all duration-200 ${
                          darkMode
                            ? "text-zinc-400 hover:text-red-400 hover:bg-red-500/10"
                            : "text-zinc-500 hover:text-red-600 hover:bg-red-50"
                        }`}
                        title="Delete link"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Popup Entry Form */}
      {showPopup && (
        <Entrypage
          onClose={() => setShowPopup(false)}
          user={user}
          refreshData={() => fetchUrls(user.id)}
        />
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

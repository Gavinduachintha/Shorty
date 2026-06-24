import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import toast, { Toaster } from "react-hot-toast";
import Entrypage from "./Entrypage";
import { urlService } from "../../services/urlService";
import { isValidUrl, formatUrl } from "../../utils/validation";
import { getExternalRedirectUrl } from "../../utils/urlUtils";
import useDarkMode from "../../hooks/useDarkMode";

import DashboardHeader from "./components/DashboardHeader";
import DashboardWelcome from "./components/DashboardWelcome";
import DashboardStatsCards from "./components/DashboardStatsCards";
import CreateShortLinkCard from "./components/CreateShortLinkCard";
import LinksSection from "./components/LinksSection";

const Dashboard = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [urlInput, setUrlInputs] = useState("");
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

      <DashboardHeader
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onLogout={handleLogout}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <DashboardWelcome darkMode={darkMode} user={user} />

        <DashboardStatsCards darkMode={darkMode} urls={urls} />

        <CreateShortLinkCard
          darkMode={darkMode}
          loading={loading}
          urlInput={urlInput}
          onUrlInputChange={(value) => setUrlInputs(value)}
          onSubmit={handleSubmit}
        />

        <LinksSection
          darkMode={darkMode}
          urls={urls}
          filteredUrls={filteredUrls}
          loading={loading}
          error={error}
          searchQuery={searchQuery}
          onSearchQueryChange={(value) => setSearchQuery(value)}
          copiedId={copiedId}
          onCopy={handleCopy}
          onDelete={handleDelete}
          formatDate={formatDate}
          formatTime={formatTime}
        />
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

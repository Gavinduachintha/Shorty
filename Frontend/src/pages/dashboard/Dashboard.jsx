import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { FiMoon, FiSun, FiLogOut, FiCopy } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { IoAddSharp } from "react-icons/io5";
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
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <Toaster />
      <header className={`sticky top-0 z-50 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md p-0.5`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
              Shorty
            </h1>
            {user && (
              <p className="text-sm text-gray-500">
                Logged in as: {user.user_metadata.name}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="p-2 rounded-full bg-violet-500 text-white hover:bg-violet-800"
              onClick={() => setShowPopup(true)}
            >
              <IoAddSharp />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-100 text-gray-600"}`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-800"
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="w-full p-4 flex justify-center">
      <div className="relative w-full max-w-md">
  <input
    type="text"
    placeholder="Enter your link..."
    required
    className="w-full px-4 py-2 pr-24 border rounded-3xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
  />
  <button
    type="submit"
    className="absolute right-1 top-1 bottom-1 px-4 bg-violet-600 text-white rounded-2xl hover:bg-violet-700 transition"
  >
    ➤
  </button>
</div>

      </div>

      <main className={`max-w-7xl mx-auto px-4 py-8 transition-filter duration-300 ${showPopup ? "filter blur-sm" : ""}`}>
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        ) : urls.length === 0 ? (
          <div className="text-center text-gray-500">No URLs created yet.</div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {urls.map((url) => (
              <div
                key={url.id}
                className={`p-4 rounded-lg shadow-sm ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
              >
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Original URL</h3>
                    <p className={`truncate ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      <a href={url.original_url} className="text-violet-600 hover:underline">
                        {url.original_url}
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">Short link</h3>
                    <p className={`truncate font-medium ${darkMode ? "text-violet-300" : "text-violet-600"}`}>
                      <a href={url.short_code} className="text-violet-600 hover:underline">
                        {url.short_code}
                      </a>
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-gray-500">
                      {new Date(url.created_at).toLocaleString()}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(url.short_code);
                          toast.success("Copied to clipboard!");
                        }}
                        className={`p-1.5 rounded-md hover:bg-gray-200 ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-500"}`}
                      >
                        <FiCopy size={16} />
                      </button>
                      <button
                        onClick={() => window.open(url.short_code, '_blank')}
                        className={`px-4 py-2 rounded-lg font-medium ${darkMode ? "bg-violet-700 text-white hover:bg-violet-600" : "bg-violet-500 text-white hover:bg-violet-600"}`}
                      >
                        Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {showPopup && (
        <Entrypage
          onClose={() => setShowPopup(false)}
          user={user}
          refreshData={() => fetchUrls(user.id)}
        />
      )}
    </div>
  );
};

export default Dashboard;

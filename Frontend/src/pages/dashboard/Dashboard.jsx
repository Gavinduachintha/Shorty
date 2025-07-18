// export default Dashboard;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { FiMoon, FiSun, FiLogOut, FiCopy } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { IoAddSharp } from "react-icons/io5";

// ✅ Initialize Supabase client
const supabase = createClient(
  "https://vrsbwbsgmdsetweqxjqp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjcxODIsImV4cCI6MjA2Njc0MzE4Mn0.VrrxvSzcp-2IEbkZLgMkMnwlOIIQfRFsDsM9KsNnkFY"
);

const notify = () => toast.success("Logged out successfully!");

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Get current user from Supabase session
  useEffect(() => {
    const getUserAndUrls = async () => {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (!user || userError) {
        navigate("/");
        return;
      }

      setUser(user);

      // ✅ Fetch URLs directly from Supabase filtered by user_id
      const { data, error } = await supabase
        .from("urls") // your table name
        .select("*")
        .eq("user_id", user.id) // filter for this user only
        .order("created_at", { ascending: false }); // newest first

      if (error) {
        console.error("Error fetching URLs:", error.message);
        setError("Failed to load URLs");
      } else {
        setUrls(data);
      }

      setLoading(false);
    };

    getUserAndUrls();
  }, [navigate]);

  // ✅ Logout function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      <Toaster />
      {/* Header */}
      <header
        className={`sticky top-0 z-50 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              URL Shortener
            </h1>
            {user && (
              <p className="text-sm text-gray-500">
                Logged in as: {user.email}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
              aria-label="Add"
            >
              <IoAddSharp />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              <FiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        ) : urls.length === 0 ? (
          <div className="text-center text-gray-500">No URLs created yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urls.map((url) => (
              <div
                key={url.id}
                className={`p-6 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">
                      Original URL
                    </h3>
                    <p className="truncate">{url.original_url}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">
                      Short URL
                    </h3>
                    <div className="flex items-center space-x-2">
                      <p className="truncate">{url.short_code}</p>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(url.short_code)
                        }
                        className="p-1.5 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                      >
                        <FiCopy size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Created time */}
                  <div className="text-sm text-gray-400">
                    Created at: {new Date(url.created_at).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;

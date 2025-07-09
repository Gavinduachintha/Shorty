import React, { useState } from "react";
import { FiMoon, FiSun, FiLogOut, FiCopy } from "react-icons/fi";
import supabase from "../../../../Backend/src/config/supabase";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Example data - replace with actual data from your backend
  const [urls] = useState([
    {
      originalUrl: "https://very-long-url.com/example",
      shortUrl: "short.ly/abc123",
      clicks: 42,
    },
    // Add more URLs here
  ]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logut failed", error.message);
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1
              className={`text-xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              URL Shortener
            </h1>
            <div className="flex items-center space-x-4">
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
                onClick={({handleLogout}) => {
                  // Add logout logic
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                <FiLogOut />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {urls.map((url, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">
                    Original URL
                  </h3>
                  <p className="truncate">{url.originalUrl}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500">
                    Short URL
                  </h3>
                  <div className="flex items-center space-x-2">
                    <p>{url.shortUrl}</p>
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(url.shortUrl)
                      }
                      className="p-1.5 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                    >
                      <FiCopy size={16} />
                    </button>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <div className="flex justify-center py-4">
                  <div className="w-32 h-32 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-sm text-gray-500">
                    QR Here
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-sm text-gray-500">
                    {url.clicks} clicks
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

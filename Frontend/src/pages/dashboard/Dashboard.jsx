import React, { useState, useEffect } from "react";
import { FiMoon, FiSun, FiLogOut, FiCopy } from "react-icons/fi";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await fetch("http://localhost:3000/searchurl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({})  // dynamic if needed
        });
  
        const result = await res.json();
        setUrls(result.url || []);
      } catch (err) {
        console.error("Fetch failed:", err);
        setError("Failed to load URLs");
      } finally {
        setLoading(false);
      }
    };
  
    fetchUrls();
  }, []);
  
  

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
                onClick={() => {
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
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600 font-semibold">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {urls.map((url, index) => (
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
                    <p className="truncate">{url.url}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500">
                      Short URL
                    </h3>
                    <div className="flex items-center space-x-2">
                      <p>{url.shorturl}</p>
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
                      {url.clicks ?? 0} clicks
                    </span>
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

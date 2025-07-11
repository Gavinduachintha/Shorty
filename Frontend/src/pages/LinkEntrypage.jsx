import React, { useState } from "react";

const LinkEntryPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = async () => {
    setError("");
    setShortUrl("");
    try {
      const response = await fetch("http://localhost:3000/addurl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ url: longUrl })
      });
      const data = await response.json();
      if (response.ok) {
        setShortUrl(data.shorturl);
      } else {
        setError(data.error || data.message || "Failed to shorten URL");
      }
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Paste Your Long URL Below
        </h2>
        <p className="text-gray-600 mb-6">
          Get a short, shareable link in one click.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="url"
            value={longUrl}
            onChange={e => setLongUrl(e.target.value)}
            placeholder="https://example.com/very/long/link"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          />
          <button
            onClick={handleShorten}
            className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-800 transition shadow-md w-full md:w-auto"
          >
            Shorten It
          </button>
        </div>
        {shortUrl && (
          <div className="mt-4 text-green-600 font-semibold">Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></div>
        )}
        {error && (
          <div className="mt-4 text-red-600 font-semibold">{error}</div>
        )}
      </div>

      {/* Footer (optional) */}
      <footer className="text-sm text-gray-500 mt-8">
        Made with ❤️ by Gavi &copy; {new Date().getFullYear()}
      </footer>
    </main>
  );
};

export default LinkEntryPage;

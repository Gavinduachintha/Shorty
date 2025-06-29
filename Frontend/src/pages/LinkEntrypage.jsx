import React from "react";

const LinkEntryPage = () => {
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
            placeholder="https://example.com/very/long/link"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          />
          <button className="bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-800 transition shadow-md w-full md:w-auto">
            Shorten It
          </button>
        </div>
      </div>

      {/* Footer (optional) */}
      <footer className="text-sm text-gray-500 mt-8">
        Made with ❤️ by Gavi &copy; {new Date().getFullYear()}
      </footer>
    </main>
  );
};

export default LinkEntryPage;

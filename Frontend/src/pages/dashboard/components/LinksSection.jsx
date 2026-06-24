import React from "react";
import { FiSearch, FiLink } from "react-icons/fi";
import UrlRow from "./UrlRow";

const LinksSection = ({
  darkMode,
  urls,
  filteredUrls,
  loading,
  error,
  searchQuery,
  onSearchQueryChange,
  copiedId,
  onCopy,
  onDelete,
  formatDate,
  formatTime,
}) => {
  return (
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
                onChange={(e) => onSearchQueryChange(e.target.value)}
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
            <p className={`${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
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
            <UrlRow
              key={url.id}
              url={url}
              index={index}
              darkMode={darkMode}
              copiedId={copiedId}
              onCopy={onCopy}
              onDelete={onDelete}
              formatDate={formatDate}
              formatTime={formatTime}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LinksSection;

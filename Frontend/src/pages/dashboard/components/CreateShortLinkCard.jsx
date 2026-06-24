import React from "react";
import { FiPlus, FiLink } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";

const CreateShortLinkCard = ({
  darkMode,
  loading,
  urlInput,
  onUrlInputChange,
  onSubmit,
}) => {
  return (
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
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
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
            onChange={(e) => onUrlInputChange(e.target.value)}
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
  );
};

export default CreateShortLinkCard;

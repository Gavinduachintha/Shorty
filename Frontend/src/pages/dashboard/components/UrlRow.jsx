import React from "react";
import {
  FiExternalLink,
  FiCheck,
  FiCopy,
  FiTrash2,
  FiCalendar,
  FiClock,
} from "react-icons/fi";
import {
  openRedirectUrl,
  getExternalRedirectUrl,
} from "../../../utils/urlUtils";

const UrlRow = ({
  url,
  index,
  darkMode,
  copiedId,
  onCopy,
  onDelete,
  formatDate,
  formatTime,
}) => {
  return (
    <div
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
            onClick={() => onCopy(url.short_code, url.id)}
            className={`p-2.5 rounded-xl transition-all duration-200 ${
              copiedId === url.id
                ? "bg-emerald-500 text-white"
                : darkMode
                ? "text-zinc-400 hover:text-white hover:bg-zinc-700"
                : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
            }`}
            title="Copy link"
            type="button"
          >
            {copiedId === url.id ? <FiCheck size={16} /> : <FiCopy size={16} />}
          </button>

          <button
            onClick={() => openRedirectUrl(url.short_code)}
            className={`p-2.5 rounded-xl transition-all duration-200 ${
              darkMode
                ? "text-zinc-400 hover:text-white hover:bg-zinc-700"
                : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
            }`}
            title="Visit link"
            type="button"
          >
            <FiExternalLink size={16} />
          </button>

          <button
            onClick={() => onDelete(url.id)}
            className={`p-2.5 rounded-xl transition-all duration-200 ${
              darkMode
                ? "text-zinc-400 hover:text-red-400 hover:bg-red-500/10"
                : "text-zinc-500 hover:text-red-600 hover:bg-red-50"
            }`}
            title="Delete link"
            type="button"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrlRow;

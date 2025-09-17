import React from "react";
import { FiCopy, FiExternalLink } from "react-icons/fi";
import { extractShortCode, isShortUrl } from "../utils/urlUtils";
import toast from "react-hot-toast";

const UrlPreview = ({ url, darkMode = false }) => {
    if (!url) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(url.short_code);
        toast.success("Short URL copied to clipboard!");
    };

    const handleVisit = () => {
        window.open(url.short_code, "_blank");
    };

    const shortCode = isShortUrl(url.short_code)
        ? extractShortCode(url.short_code)
        : url.short_code;

    return (
        <div
            className={`p-4 rounded-lg border transition-all duration-200 ${
                darkMode
                    ? "bg-gray-800 border-gray-700 hover:border-gray-600"
                    : "bg-white border-gray-200 hover:border-gray-300"
            }`}
        >
            <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                        <span
                            className={`text-xs font-medium px-2 py-1 rounded ${
                                darkMode
                                    ? "bg-violet-900/30 text-violet-300"
                                    : "bg-violet-100 text-violet-700"
                            }`}
                        >
                            SHORT URL
                        </span>
                        <span
                            className={`text-xs ${
                                darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                        >
                            Code: {shortCode}
                        </span>
                    </div>

                    <div className="mb-2">
                        <a
                            href={url.short_code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-lg font-semibold hover:underline ${
                                darkMode ? "text-violet-400" : "text-violet-600"
                            }`}
                        >
                            {url.short_code}
                        </a>
                    </div>

                    <div
                        className={`text-sm truncate ${
                            darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        → {url.original_url}
                    </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                    <button
                        onClick={handleCopy}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                            darkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-700"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                        title="Copy short URL"
                    >
                        <FiCopy size={16} />
                    </button>

                    <button
                        onClick={handleVisit}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                            darkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-700"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                        title="Visit URL"
                    >
                        <FiExternalLink size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UrlPreview;

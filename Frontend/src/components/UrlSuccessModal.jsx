import React from "react";
import { FiCopy, FiCheck, FiX } from "react-icons/fi";
import { extractShortCode } from "../utils/urlUtils";
import toast from "react-hot-toast";

const UrlSuccessModal = ({ url, darkMode = false, onClose }) => {
    if (!url) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(url.short_code);
        toast.success("Short URL copied to clipboard!");
    };

    const shortCode = extractShortCode(url.short_code);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
                className={`max-w-md w-full rounded-2xl shadow-2xl ${
                    darkMode ? "bg-gray-800" : "bg-white"
                }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                            <FiCheck
                                className="text-green-600 dark:text-green-400"
                                size={20}
                            />
                        </div>
                        <div>
                            <h3
                                className={`text-lg font-semibold ${
                                    darkMode ? "text-white" : "text-gray-900"
                                }`}
                            >
                                URL Shortened Successfully!
                            </h3>
                            <p
                                className={`text-sm ${
                                    darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                            >
                                Your short URL is ready to use
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className={`p-2 rounded-lg transition-colors ${
                            darkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-700"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        <FiX size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Short URL Display */}
                    <div
                        className={`p-4 rounded-xl border-2 border-dashed mb-4 ${
                            darkMode
                                ? "border-violet-500/30 bg-violet-900/10"
                                : "border-violet-300 bg-violet-50"
                        }`}
                    >
                        <div className="text-center">
                            <p
                                className={`text-xs font-medium mb-2 ${
                                    darkMode
                                        ? "text-violet-300"
                                        : "text-violet-700"
                                }`}
                            >
                                YOUR SHORT URL
                            </p>
                            <div
                                className={`text-xl font-bold mb-2 ${
                                    darkMode
                                        ? "text-violet-400"
                                        : "text-violet-600"
                                }`}
                            >
                                {url.short_code}
                            </div>
                            <p
                                className={`text-xs ${
                                    darkMode ? "text-gray-400" : "text-gray-500"
                                }`}
                            >
                                Code: {shortCode}
                            </p>
                        </div>
                    </div>

                    {/* Original URL */}
                    <div className="mb-6">
                        <p
                            className={`text-xs font-medium mb-2 ${
                                darkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                        >
                            ORIGINAL URL
                        </p>
                        <p
                            className={`text-sm truncate ${
                                darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                        >
                            {url.original_url}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                        <button
                            onClick={handleCopy}
                            className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl hover:from-violet-600 hover:to-purple-700 transition-all duration-200 shadow-lg font-medium"
                        >
                            <FiCopy size={16} />
                            <span>Copy Short URL</span>
                        </button>

                        <button
                            onClick={() =>
                                window.open(url.short_code, "_blank")
                            }
                            className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                                darkMode
                                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UrlSuccessModal;

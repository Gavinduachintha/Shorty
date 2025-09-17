import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

const EdgeRedirectHandler = () => {
    const { shortCode } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const handleRedirect = async () => {
            try {
                setLoading(true);

                if (!shortCode) {
                    setError("Invalid short URL");
                    return;
                }

                // Call the Supabase Edge Function
                const { data, error: functionError } =
                    await supabase.functions.invoke("catch-redirect", {
                        body: { code: shortCode },
                    });

                if (functionError) {
                    console.error("Edge function error:", functionError);
                    setError("Failed to process redirect");
                    return;
                }

                if (data.success && data.originalUrl) {
                    // Redirect to the original URL
                    window.location.replace(data.originalUrl);
                } else {
                    setError(data.error || "URL not found");
                }
            } catch (err) {
                console.error("Redirect error:", err);
                setError("Failed to redirect. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        handleRedirect();
    }, [shortCode]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-violet-600 mx-auto mb-6"></div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        🚀 Redirecting...
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Taking you to your destination
                    </p>
                    <div className="mt-4 text-sm text-gray-500">
                        Code:{" "}
                        <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                            {shortCode}
                        </code>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
                <div className="text-center max-w-md mx-auto p-8">
                    <div className="text-red-500 text-6xl mb-6">🔗</div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Link Not Found
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                        {error}
                    </p>
                    <div className="space-y-4">
                        <a
                            href="/"
                            className="inline-block bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-700 transition-colors font-medium"
                        >
                            Go to Homepage
                        </a>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            <p>
                                Short code:{" "}
                                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                                    {shortCode}
                                </code>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default EdgeRedirectHandler;

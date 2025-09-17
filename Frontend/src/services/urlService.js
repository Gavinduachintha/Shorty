import { supabase } from "../lib/supabase.js";
import {
    generateShortCode,
    createShortUrl,
    URL_CONFIG,
} from "../utils/urlUtils.js";

export const urlService = {
    // Create a new shortened URL
    async createUrl(originalUrl, userId) {
        try {
            // Generate a unique short code
            let shortCode;
            let isUnique = false;
            let attempts = 0;
            const maxAttempts = 5;

            // Ensure the short code is unique in the database
            while (!isUnique && attempts < URL_CONFIG.MAX_GENERATION_ATTEMPTS) {
                shortCode = generateShortCode();
                const shortUrl = createShortUrl(shortCode);

                // Check if this short URL already exists
                const { data: existingUrl } = await supabase
                    .from("urls")
                    .select("id")
                    .eq("short_code", shortUrl)
                    .single();

                if (!existingUrl) {
                    isUnique = true;
                } else {
                    attempts++;
                }
            }

            if (!isUnique) {
                throw new Error(
                    "Unable to generate unique short code. Please try again.",
                );
            }

            const shortUrl = createShortUrl(shortCode);

            const { data, error } = await supabase
                .from("urls")
                .insert({
                    original_url: originalUrl,
                    user_id: userId,
                    short_code: shortUrl,
                })
                .select()
                .single();

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            console.error("Error creating URL:", error.message);
            throw error;
        }
    },

    // Get all URLs for a user
    async getUserUrls(userId) {
        try {
            const { data, error } = await supabase
                .from("urls")
                .select("*")
                .eq("user_id", userId)
                .order("created_at", { ascending: false });

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            console.error("Error fetching URLs:", error.message);
            throw error;
        }
    },

    // Delete a URL
    async deleteUrl(urlId) {
        try {
            const { error } = await supabase
                .from("urls")
                .delete()
                .eq("id", urlId);

            if (error) {
                throw error;
            }

            return true;
        } catch (error) {
            console.error("Error deleting URL:", error.message);
            throw error;
        }
    },

    // Update a URL (for future use)
    async updateUrl(urlId, updates) {
        try {
            const { data, error } = await supabase
                .from("urls")
                .update(updates)
                .eq("id", urlId)
                .select()
                .single();

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            console.error("Error updating URL:", error.message);
            throw error;
        }
    },

    // Get URL by short code (for redirection)
    async getUrlByShortCode(shortCode) {
        try {
            const shortUrl = createShortUrl(shortCode);
            const { data, error } = await supabase
                .from("urls")
                .select("*")
                .eq("short_code", shortUrl)
                .single();

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            console.error("Error fetching URL by short code:", error.message);
            throw error;
        }
    },

    // Increment click count (for analytics)
    async incrementClickCount(urlId) {
        try {
            const { data, error } = await supabase.rpc(
                "increment_click_count",
                { url_id: urlId },
            );

            if (error) {
                throw error;
            }

            return data;
        } catch (error) {
            console.error("Error incrementing click count:", error.message);
            throw error;
        }
    },
};

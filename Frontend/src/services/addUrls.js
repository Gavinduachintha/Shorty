import { supabase } from "../lib/supabase.js";
import {
    generateShortCode,
    createShortUrl,
    URL_CONFIG,
} from "../utils/urlUtils.js";

export const handleSubmit = async (url, userId) => {
    try {
        // Generate a unique short code
        let shortCode;
        let isUnique = false;
        let attempts = 0;

        // Ensure the short code is unique in the database
        while (!isUnique && attempts < URL_CONFIG.MAX_GENERATION_ATTEMPTS) {
            shortCode = generateShortCode();

            // Check if this code already exists (short_code stores just the code)
            const { data: existingUrl } = await supabase
                .from("urls")
                .select("id")
                .eq("short_code", shortCode)
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

        const { data, error } = await supabase
            .from("urls")
            .insert({
                original_url: url,
                user_id: userId,
                short_code: shortCode,
            })
            .select();

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error("Error adding URL:", error.message);
        throw error;
    }
};

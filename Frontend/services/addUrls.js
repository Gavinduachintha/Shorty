import { supabase } from "../src/lib/supabase.js";

export const handleSubmit = async (url, userId) => {
    try {
        const { data, error } = await supabase
            .from("urls")
            .insert({ original_url: url, user_id: userId })
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

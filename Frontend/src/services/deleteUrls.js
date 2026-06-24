import { supabase } from "../lib/supabase.js";

export const handleDelete = async (urlId) => {
    const { error } = await supabase.from("urls").delete().eq("id", urlId);
    if (error) {
        console.error("Error deleting URL", error.message);
        throw error;
    }
    return true;
};

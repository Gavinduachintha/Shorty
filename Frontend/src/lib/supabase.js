import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://vrsbwbsgmdsetweqxjqp.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjcxODIsImV4cCI6MjA2Njc0MzE4Mn0.VrrxvSzcp-2IEbkZLgMkMnwlOIIQfRFsDsM9KsNnkFY";

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase configuration:", { supabaseUrl, supabaseAnonKey });
    throw new Error("Missing Supabase environment variables. Using fallback keys.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

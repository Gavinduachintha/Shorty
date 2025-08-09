import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://vrsbwbsgmdsetweqxjqp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjcxODIsImV4cCI6MjA2Njc0MzE4Mn0.VrrxvSzcp-2IEbkZLgMkMnwlOIIQfRFsDsM9KsNnkFY"
);

export const handleDelete = async (urlId) => {
  const { error } = await supabase.from("urls").delete().eq("id", urlId);
  if (error) {
    console.error("Error deleting URL", error.message);
    throw error;
  }
  return true;
};

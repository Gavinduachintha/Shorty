export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "No short code provided" });
  }

  try {
    // Redirect to Supabase Edge Function
    const redirectUrl = `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${code}`;
    
    // Use the hardcoded anon key or get from env
    const anonKey = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1ODA5MDUsImV4cCI6MjA0MDE0MDkwNX0.7SvnW6K_ZPVjSR7z0UB3X9bH2nXVj1-EqfzVZrKvP0E";

    const response = await fetch(redirectUrl, {
      headers: {
        apikey: anonKey,
      },
    });

    // Get the final redirect URL from the Edge Function
    if (response.status === 302 || response.status === 301) {
      const location = response.headers.get("location");
      if (location) {
        return res.redirect(302, location);
      }
    }

    // If not a redirect response, return the response as-is
    const text = await response.text();
    res.status(response.status);
    res.send(text);
  } catch (error) {
    console.error("Redirect error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

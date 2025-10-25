export default function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "No short code provided" });
  }

  // Redirect to Supabase Edge Function
  const redirectUrl = `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${code}`;

  // Perform server-side fetch to get the redirect target
  fetch(redirectUrl, {
    headers: {
      apikey: process.env.VITE_SUPABASE_ANON_KEY || "",
    },
  })
    .then((response) => {
      // Get the final redirect URL from the Edge Function
      if (response.status === 302 || response.status === 301) {
        const location = response.headers.get("location");
        if (location) {
          return res.redirect(302, location);
        }
      }
      // If not a redirect response, return the response as-is
      res.status(response.status);
      response.text().then((text) => res.send(text));
    })
    .catch((error) => {
      console.error("Redirect error:", error);
      res.status(500).json({ error: "Internal server error" });
    });
}

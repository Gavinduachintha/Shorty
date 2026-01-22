export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "No short code provided" });
  }

  try {
    const redirectUrl = `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${encodeURIComponent(
      code
    )}`;

    const anonKey = process.env.SUPABASE_ANON_KEY;
    if (!anonKey) {
      return res
        .status(500)
        .json({ error: "Missing SUPABASE_ANON_KEY on server" });
    }

    const response = await fetch(redirectUrl, {
      // Critical: do NOT follow, so we can read Location and pass it to the browser
      redirect: "manual",
      headers: {
        apikey: anonKey,
        // Supabase commonly expects Authorization as well
        authorization: `Bearer ${anonKey}`,
      },
    });

    // If Edge Function responds with a redirect, forward it to the browser
    if (response.status === 302 || response.status === 301) {
      const location = response.headers.get("location");
      if (location) {
        res.setHeader("Cache-Control", "no-store");
        return res.redirect(302, location);
      }
    }

    // Pass through non-redirect responses (e.g., 404 "Link Not Found")
    const text = await response.text();
    res.status(response.status).send(text);
  } catch (error) {
    console.error("Redirect error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

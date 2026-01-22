import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  const code = String(req.query?.code || "").trim();

  if (!code) {
    return res.status(400).json({ error: "No short code provided" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  // Domain used when storing short_code (e.g., "https://shorty" or your Vercel URL)
  const shortDomain = process.env.SHORT_DOMAIN || "https://shorty";

  if (!supabaseUrl || !serviceRoleKey) {
    return res.status(500).json({
      error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY on server",
    });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  try {
    // Query the 'urls' table with correct column names
    // short_code now stores just the code (e.g., "abc123"), not the full URL
    const { data, error } = await supabase
      .from("urls")
      .select("id, original_url, click_count")
      .eq("short_code", code)
      .maybeSingle();

    if (error) {
      console.error("DB lookup error:", error);
      return res.status(500).json({ error: "DB lookup failed" });
    }

    if (!data?.original_url) {
      return res
        .status(404)
        .send(
          `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Link Not Found</title><style>body{font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f7f7fb} .card{background:#fff;padding:28px;border-radius:12px;box-shadow:0 10px 30px rgba(2,6,23,0.08);max-width:480px;text-align:center} .code{background:#f3f4f6;padding:8px;border-radius:6px;font-family:monospace}</style></head><body><div class="card"><h1>Link Not Found</h1><p>The short link <span class="code">${code}</span> doesn't exist.</p><a href="/">Go home</a></div></body></html>`
        );
    }

    // Update click count asynchronously (don't wait)
    supabase
      .from("urls")
      .update({
        click_count: (data.click_count || 0) + 1,
        last_clicked_at: new Date().toISOString(),
      })
      .eq("id", data.id)
      .then(() => {})
      .catch((err) => console.warn("Failed to update click count:", err));

    // Ensure URL has protocol
    let redirectUrl = data.original_url;
    if (
      !redirectUrl.startsWith("http://") &&
      !redirectUrl.startsWith("https://")
    ) {
      redirectUrl = "https://" + redirectUrl;
    }

    res.setHeader("Cache-Control", "no-store");
    return res.redirect(302, redirectUrl);
  } catch (err) {
    console.error("Redirect error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

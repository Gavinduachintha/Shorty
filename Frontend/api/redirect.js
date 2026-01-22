import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  const code = String(req.query?.code || "").trim();

  if (!code) {
    return res.status(400).json({ error: "No short code provided" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return res.status(500).json({
      error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY on server",
    });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  try {
    // IMPORTANT: adjust table/column names to your actual schema
    const { data, error } = await supabase
      .from("short_links")
      .select("target_url")
      .eq("code", code)
      .maybeSingle();

    if (error) {
      return res.status(500).json({ error: "DB lookup failed" });
    }

    if (!data?.target_url) {
      return res
        .status(404)
        .send(
          `<!doctype html><html><body><h1>Link Not Found</h1><p>The short link <code>${code}</code> doesn't exist.</p></body></html>`
        );
    }

    res.setHeader("Cache-Control", "no-store");
    return res.redirect(302, data.target_url);
  } catch {
    return res.status(500).json({ error: "Internal server error" });
  }
}

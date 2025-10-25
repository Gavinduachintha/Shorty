// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response("ok", { headers: corsHeaders });

  try {
    const url = new URL(req.url);
    const pathParts = url.pathname.split("/").filter(Boolean);
    const shortCode = pathParts[pathParts.length - 1];

    if (!shortCode) {
      return new Response(JSON.stringify({ error: "No short code provided" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Prefer non-prefixed env var names (some dashboards disallow names starting with SUPABASE_)
    const projectUrl =
      Deno.env.get("PROJECT_URL") ||
      Deno.env.get("SUPABASE_URL") ||
      "https://vrsbwbsgmdsetweqxjqp.supabase.co";
    const key =
      Deno.env.get("SERVICE_ROLE_KEY") ||
      Deno.env.get("SERVICE_KEY") ||
      Deno.env.get("ANON_KEY") ||
      Deno.env.get("PUBLIC_ANON_KEY") ||
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ||
      Deno.env.get("SUPABASE_ANON_KEY");
    const shortDomain = Deno.env.get("SHORT_DOMAIN") || "https://shorty";

    const supabase = createClient(projectUrl, key ?? "");

    const shortUrl = `${shortDomain}/${shortCode}`;

    const { data: urlData, error } = await supabase
      .from("urls")
      .select("*")
      .eq("short_code", shortUrl)
      .single();

    if (error || !urlData) {
      const notFoundHtml = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Link Not Found</title><style>body{font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f7f7fb} .card{background:#fff;padding:28px;border-radius:12px;box-shadow:0 10px 30px rgba(2,6,23,0.08);max-width:480px;text-align:center} .code{background:#f3f4f6;padding:8px;border-radius:6px;font-family:monospace}</style></head><body><div class="card"><h1>Link Not Found</h1><p>The short link <span class="code">${shortCode}</span> doesn't exist.</p><a href="/">Go home</a></div></body></html>`;

      return new Response(notFoundHtml, {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "text/html" },
      });
    }

    // Update analytics asynchronously
    supabase
      .from("urls")
      .update({
        click_count: (urlData.click_count || 0) + 1,
        last_clicked_at: new Date().toISOString(),
      })
      .eq("id", urlData.id)
      .then(
        ({ error: updateError }) =>
          updateError &&
          console.warn("Failed to update click count:", updateError)
      );

    let redirectUrl = urlData.original_url;
    if (
      !redirectUrl.startsWith("http://") &&
      !redirectUrl.startsWith("https://")
    )
      redirectUrl = "https://" + redirectUrl;

    return new Response(null, {
      status: 302,
      headers: {
        ...corsHeaders,
        Location: redirectUrl,
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (err) {
    console.error("Redirect error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

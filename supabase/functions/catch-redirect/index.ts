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

    let shortCode = url.searchParams.get("code");
    if (!shortCode) {
      const pathParts = url.pathname.split("/").filter(Boolean);
      shortCode = pathParts[pathParts.length - 1];
    }

    if (!shortCode)
      return new Response(JSON.stringify({ error: "No short code provided" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });

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

    if (error || !urlData)
      return new Response(JSON.stringify({ error: "Not Found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });

    // Optionally update analytics
    supabase
      .from("urls")
      .update({
        click_count: (urlData.click_count || 0) + 1,
        last_clicked_at: new Date().toISOString(),
      })
      .eq("id", urlData.id)
      .then(() => {});

    return new Response(
      JSON.stringify({ original_url: urlData.original_url }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

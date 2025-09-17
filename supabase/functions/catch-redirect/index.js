import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Get the short code from the request
    const url = new URL(req.url);

    // Extract short code from query parameter or path
    let shortCode = url.searchParams.get("code");

    if (!shortCode) {
      // Try to get from path if not in query params
      const pathParts = url.pathname
        .split("/")
        .filter((part) => part.length > 0);
      shortCode = pathParts[pathParts.length - 1];
    }

    if (!shortCode) {
      return new Response(JSON.stringify({ error: "No short code provided" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Create the full short URL format that matches our database
    const shortUrl = `https://shorty/${shortCode}`;

    // Look up the original URL in the database
    const { data: urlData, error } = await supabase
      .from("urls")
      .select("*")
      .eq("short_code", shortUrl)
      .single();

    if (error || !urlData) {
      console.error("URL not found:", error);

      return new Response(
        JSON.stringify({
          error: "URL not found",
          shortCode: shortCode,
        }),
        {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Increment click count asynchronously
    supabase
      .from("urls")
      .update({
        click_count: (urlData.click_count || 0) + 1,
        last_clicked_at: new Date().toISOString(),
      })
      .eq("id", urlData.id)
      .then(({ error: updateError }) => {
        if (updateError) {
          console.warn("Failed to update click count:", updateError);
        }
      });

    // Ensure the original URL has a protocol
    let redirectUrl = urlData.original_url;
    if (
      !redirectUrl.startsWith("http://") &&
      !redirectUrl.startsWith("https://")
    ) {
      redirectUrl = "https://" + redirectUrl;
    }

    // Return the redirect URL as JSON for client-side handling
    return new Response(
      JSON.stringify({
        success: true,
        originalUrl: redirectUrl,
        shortCode: shortCode,
        clickCount: (urlData.click_count || 0) + 1,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Redirect error:", error);

    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

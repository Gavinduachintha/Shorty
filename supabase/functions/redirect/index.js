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
    // Get the short code from the URL path
    const url = new URL(req.url);
    const pathParts = url.pathname.split("/");
    const shortCode = pathParts[pathParts.length - 1];

    if (!shortCode || shortCode === "redirect") {
      return new Response("Invalid short code", {
        status: 400,
        headers: corsHeaders,
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

      // Return a nice 404 page
      const notFoundHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Link Not Found - Shorty</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              margin: 0;
              padding: 0;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .container {
              background: white;
              padding: 3rem;
              border-radius: 1rem;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
              text-align: center;
              max-width: 500px;
              margin: 2rem;
            }
            .icon {
              font-size: 4rem;
              margin-bottom: 1rem;
            }
            h1 {
              color: #1f2937;
              margin-bottom: 1rem;
              font-size: 2rem;
            }
            p {
              color: #6b7280;
              margin-bottom: 2rem;
              font-size: 1.1rem;
            }
            .btn {
              background: #8b5cf6;
              color: white;
              padding: 0.75rem 2rem;
              border: none;
              border-radius: 0.5rem;
              font-size: 1rem;
              font-weight: 600;
              text-decoration: none;
              display: inline-block;
              transition: background 0.2s;
            }
            .btn:hover {
              background: #7c3aed;
            }
            .code {
              background: #f3f4f6;
              padding: 0.5rem 1rem;
              border-radius: 0.25rem;
              font-family: monospace;
              color: #374151;
              margin: 1rem 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="icon">🔗</div>
            <h1>Link Not Found</h1>
            <p>This short URL doesn't exist or may have expired.</p>
            <div class="code">${shortCode}</div>
            <a href="/" class="btn">Go to Homepage</a>
          </div>
        </body>
        </html>
      `;

      return new Response(notFoundHtml, {
        status: 404,
        headers: {
          ...corsHeaders,
          "Content-Type": "text/html",
        },
      });
    }

    // Increment click count asynchronously (don't wait for it)
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

    // Return a proper HTTP redirect
    return new Response(null, {
      status: 302,
      headers: {
        ...corsHeaders,
        Location: redirectUrl,
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Redirect error:", error);

    return new Response("Internal server error", {
      status: 500,
      headers: corsHeaders,
    });
  }
});

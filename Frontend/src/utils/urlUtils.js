import { nanoid } from "nanoid";

// Configuration for URL shortening
// When deployed to Vercel, DOMAIN will be your Vercel URL
// For now, we'll use a placeholder that can be overridden by environment variable
const getVercelUrl = () => {
  // Check if running in browser
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  // Server-side fallback
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://shorty";
};

export const URL_CONFIG = {
  DOMAIN: import.meta.env.VITE_SHORT_DOMAIN || "https://shorty",
  SHORT_CODE_LENGTH: 6,
  MAX_GENERATION_ATTEMPTS: 5,
};

/**
 * Generate a random short code using nanoid
 * @param {number} length - Length of the short code (default: 6)
 * @returns {string} - Generated short code
 */
export const generateShortCode = (length = URL_CONFIG.SHORT_CODE_LENGTH) => {
  // Use nanoid with custom alphabet for URL-safe characters
  const alphabet =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return nanoid(length);
};

/**
 * Create a full short URL from a short code
 * @param {string} shortCode - The short code
 * @returns {string} - Full short URL
 */
export const createShortUrl = (shortCode) => {
  return `${URL_CONFIG.DOMAIN}/${shortCode}`;
};

/**
 * Extract short code from a full short URL
 * @param {string} shortUrl - The full short URL
 * @returns {string} - Extracted short code
 */
export const extractShortCode = (shortUrl) => {
  return shortUrl.replace(`${URL_CONFIG.DOMAIN}/`, "");
};

/**
 * Validate if a string is a valid short URL
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid short URL
 */
export const isShortUrl = (url) => {
  return url.startsWith(URL_CONFIG.DOMAIN);
};

/**
 * Convert a short code to a redirect URL (Edge Function endpoint)
 * @param {string} shortCode - The short code (e.g., "https://shorty/abc123")
 * @returns {string} - Full redirect URL with auth header
 */
export const getRedirectUrl = (shortCode) => {
  // Extract just the code part from "https://shorty/abc123"
  const code = shortCode.split("/").pop();
  // Get the anon key from environment
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  // Build URL with query params including the auth token
  const url = new URL(
    `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${code}`
  );
  // Return URL with apikey parameter (will be sent in header when opened in browser)
  return url.toString();
};

/**
 * Open a redirect URL in a new tab with proper authorization
 * @param {string} shortCode - The short code
 */
export const openRedirectUrl = (shortCode) => {
  const code = shortCode.split("/").pop();
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  // Use fetch to get the redirect and then open it
  fetch(
    `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${code}`,
    {
      headers: {
        apikey: anonKey,
      },
    }
  )
    .then((response) => {
      // Handle redirect response
      if (response.status === 302 || response.status === 301) {
        const location = response.headers.get("location");
        if (location) {
          window.open(location, "_blank");
        }
      } else {
        // If it's already redirected, use the final URL
        window.open(response.url, "_blank");
      }
    })
    .catch((error) => {
      console.error("Redirect error:", error);
      // Fallback: try opening directly anyway
      window.open(
        `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${code}`,
        "_blank"
      );
    });
};

/**
 * Get the external redirect URL that works from anywhere on the internet
 * When on Vercel: https://yourdomain.vercel.app/r/abc123
 * When local: https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/abc123
 * @param {string} shortCode - The short code (e.g., "https://shorty/abc123")
 * @returns {string} - Full external URL
 */
export const getExternalRedirectUrl = (shortCode) => {
  const code = shortCode.split("/").pop();
  
  // Check if we're in a browser environment
  if (typeof window !== "undefined") {
    // Use the Vercel domain when available
    const vercelUrl = window.location.origin;
    if (vercelUrl.includes("vercel.app") || vercelUrl.includes("yourdomain")) {
      return `${vercelUrl}/r/${code}`;
    }
  }
  
  // Fallback to Supabase Edge Function
  return `https://vrsbwbsgmdsetweqxjqp.supabase.co/functions/v1/redirect/${code}`;
};

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
  // Use Vercel domain in production, fallback for local dev
  DOMAIN:
    import.meta.env.VITE_SHORT_DOMAIN ||
    (typeof window !== "undefined" ? window.location.origin : "https://shorty"),
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
 * Get the base URL for redirects (Vercel domain)
 * @returns {string} - Base URL for redirects
 */
const getRedirectBaseUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return import.meta.env.VITE_APP_URL || "https://shorty-ten.vercel.app";
};

/**
 * Convert a short code to a redirect URL (Vercel API endpoint)
 * @param {string} shortCode - The short code (e.g., "https://shorty/abc123")
 * @returns {string} - Full redirect URL
 */
export const getRedirectUrl = (shortCode) => {
  // Extract just the code part from "https://shorty/abc123"
  const code = shortCode.split("/").pop();
  return `${getRedirectBaseUrl()}/r/${code}`;
};

/**
 * Open a redirect URL in a new tab
 * @param {string} shortCode - The short code
 */
export const openRedirectUrl = (shortCode) => {
  const code = shortCode.split("/").pop();
  const redirectUrl = `${getRedirectBaseUrl()}/r/${code}`;
  window.open(redirectUrl, "_blank");
};

/**
 * Get the external redirect URL that works from anywhere on the internet
 * Uses Vercel /r/:code route which handles the redirect server-side
 * @param {string} shortCode - The short code (e.g., "https://shorty/abc123")
 * @returns {string} - Full external URL (e.g., "https://shorty-ten.vercel.app/r/abc123")
 */
export const getExternalRedirectUrl = (shortCode) => {
  const code = shortCode.split("/").pop();
  return `${getRedirectBaseUrl()}/r/${code}`;
};

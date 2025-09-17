import { nanoid } from "nanoid";

// Configuration for URL shortening
export const URL_CONFIG = {
    DOMAIN: "https://shorty",
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

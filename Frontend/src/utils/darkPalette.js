// Theme palettes used across the app.
// This file contains a light and dark palette expressed as CSS variable values
// that the `useDarkMode` hook will apply to `:root` (documentElement).

export const DARK_PALETTE = {
  // core surfaces
  "bg": "#0f1115",           // deep charcoal / dark gray
  "surface": "#1a1d23",      // slightly lighter surface

  // accents
  "primary": "#6366f1",      // cool violet (primary accent)
  "primary-variant": "#4f46e5",
  "secondary": "#14b8a6",    // muted teal

  // text
  "text-primary": "#e5e7eb",  // off-white
  "text-secondary": "#9ca3af",

  // borders / dividers
  "border": "rgba(156,163,175,0.12)",

  // focus / interactive outline
  "focus": "#6366f1",

  // typography
  "font-sans": "Inter, Poppins, ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial",
};

export const LIGHT_PALETTE = {
  "bg": "#f8fafc",
  "surface": "#f3f4f6",
  "primary": "#4f46e5",
  "primary-variant": "#6366f1",
  "secondary": "#0ea5a4",
  "text-primary": "#111827",
  "text-secondary": "#6b7280",
  "border": "rgba(17,24,39,0.06)",
  "focus": "#4f46e5",
  "font-sans": "Inter, Poppins, ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial",
};

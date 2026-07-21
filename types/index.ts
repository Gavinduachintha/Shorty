// ─── Link ────────────────────────────────────────────────────────────────────

export interface Link {
  id: string;
  user_id: string;
  slug: string;
  destination: string;
  title?: string;
  clicks: number;
  active: boolean;
  created_at: string;
}

export interface AddLinkFormData {
  destinationUrl: string;
  slug: string;
  label: string;
}

// ─── Analytics ───────────────────────────────────────────────────────────────

export interface ClicksByDay {
  day: string;
  clicks: number;
}

export interface TopLink {
  slug: string;
  clicks: number;
}

export interface TopCountry {
  country: string;
  pct: number;
}

// ─── User / Auth ──────────────────────────────────────────────────────────────

export interface UserMetadata {
  full_name?: string;
  name?: string;
  avatar_url?: string;
}

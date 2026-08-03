// Utility for fetching the authenticated user in Server Components and Route Handlers.
// For logout, use the `logout` server action in app/action/auth.ts.

import { createClient } from "@/lib/supabase/server";

export async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // WRONG: throwing on error means any Supabase network hiccup will crash the
  // entire page render with an unhandled exception instead of gracefully
  // redirecting to login. Consider returning `null` on error (same as no user)
  // and let the caller decide what to do, e.g.:
  //   if (error) return null;
  if (error) {
    throw error;
  }

  return user;
}

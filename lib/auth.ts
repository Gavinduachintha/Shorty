// Utility for fetching the authenticated user in Server Components and Route Handlers.
// For logout, use the `logout` server action in app/action/auth.ts.

import { createClient } from "@/lib/supabase/server";

export async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  return user;
}

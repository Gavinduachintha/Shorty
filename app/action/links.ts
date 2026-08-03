"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/auth";
import type { AddLinkFormData } from "@/components/dashboard/links/AddLinkModal";

// Generates a random 6-char alphanumeric short code when the user leaves the field blank.
function generateShortCode(): string {
  return Math.random().toString(36).slice(2, 8);
}

// Adds https:// if the user omitted the protocol.
function normaliseUrl(raw: string): string {
  return raw.startsWith("http") ? raw : `https://${raw}`;
}

export async function createLink(data: AddLinkFormData): Promise<void> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  const supabase = await createClient();

  const short_code = data.slug.trim() || generateShortCode();
  const original_url = normaliseUrl(data.destinationUrl.trim());

  const { error } = await supabase.from("urls").insert({
    user_id: user.id,
    short_code,
    original_url,
  });

  if (error) {
    // 23505 = unique_violation — the short code is already taken
    if (error.code === "23505") {
      throw new Error(
        `The slug "${short_code}" is already taken. Try a different one.`,
      );
    }
    throw new Error(error.message);
  }

  revalidatePath("/dashboard/links");
  revalidatePath("/dashboard/overview");
}

export async function deleteLink(linkId: string): Promise<void> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  const supabase = await createClient();

  // .eq("user_id") ensures a user can only delete their own rows.
  const { error } = await supabase
    .from("urls")
    .delete()
    .eq("id", linkId)
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);

  revalidatePath("/dashboard/links");
  revalidatePath("/dashboard/overview");
}

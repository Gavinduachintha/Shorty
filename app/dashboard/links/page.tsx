import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/auth";
import LinksTableClient, {
  type LinkRow,
} from "@/components/dashboard/links/LinksTableClient";

export default async function LinksPage() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-[#71717A]">
          Unable to load your session. Please refresh the page.
        </p>
      </div>
    );
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("urls")
    .select("id, short_code, original_url, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <p className="text-sm font-medium text-[#F4F4F5]">
          Failed to load links.
        </p>
        <p className="text-xs text-[#71717A]">{error.message}</p>
      </div>
    );
  }

  const links: LinkRow[] = data ?? [];

  return <LinksTableClient initialLinks={links} />;
}

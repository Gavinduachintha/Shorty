import { createClient } from "@/lib/supabase/server";

interface RecentLinksProps {
  userId: string;
}

const RecentLinks = async ({ userId }: RecentLinksProps) => {
  const supabase = await createClient();

  const { data: links } = await supabase
    .from("urls")
    .select("id, short_code, original_url, created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <section className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-5">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
          Recent Links
        </p>
        <p className="mt-1 text-base font-semibold text-[#F4F4F5]">
          Latest created
        </p>
      </div>

      <div className="mt-4 space-y-2">
        {!links || links.length === 0 ? (
          <p className="py-4 text-center text-sm text-[#71717A]">
            No links yet. Create your first one!
          </p>
        ) : (
          links.map((link) => (
            <div
              key={link.id}
              className="flex items-start justify-between gap-4 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate font-mono text-sm font-medium text-[#F4F4F5]">
                  shorty.sh/
                  <span className="text-[#8B5CF6]">{link.short_code}</span>
                </p>
                <p className="mt-0.5 truncate font-mono text-xs text-[#71717A]">
                  {link.original_url}
                </p>
              </div>
              <p className="shrink-0 text-xs text-[#71717A]">
                {new Date(link.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default RecentLinks;

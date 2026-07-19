import { createClient } from "@/lib/supabase/server";

interface TopPerformingLinksProps {
  userId: string;
}

const TopPerformingLinks = async ({ userId }: TopPerformingLinksProps) => {
  const supabase = await createClient();

  const { data: links } = await supabase
    .from("links")
    .select("id, title, slug, clicks")
    .eq("user_id", userId)
    .order("clicks", { ascending: false })
    .limit(5);

  return (
    <section className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-5">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
          Top Performing
        </p>
        <p className="mt-1 text-base font-semibold text-[#F4F4F5]">
          Most clicked
        </p>
      </div>

      <div className="mt-4 space-y-2">
        {!links || links.length === 0 ? (
          <p className="text-sm text-[#71717A] text-center py-4">
            No data yet. Share your links to start tracking clicks!
          </p>
        ) : (
          links.map((link) => (
            <div
              key={link.id}
              className="flex items-center justify-between gap-4 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[#F4F4F5]">
                  {link.title ?? link.slug}
                </p>
                <p className="mt-0.5 truncate font-mono text-xs text-[#71717A]">
                  shorty.sh/{link.slug}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-mono text-base font-semibold text-[#F4F4F5]">
                  {(link.clicks ?? 0).toLocaleString()}
                </p>
                <p className="text-xs text-[#71717A]">clicks</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TopPerformingLinks;

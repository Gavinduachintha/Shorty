import { MousePointerClick } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

interface TotalClicksProps {
  userId: string;
}

const TotalClicks = async ({ userId }: TotalClicksProps) => {
  const supabase = await createClient();

  // Sum all clicks across the user's links
  const { data } = await supabase
    .from("links")
    .select("clicks")
    .eq("user_id", userId);

  const total = data?.reduce((sum, link) => sum + (link.clicks ?? 0), 0) ?? 0;

  return (
    <div className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
          Total Clicks
        </p>
        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#2A2A2E] bg-[#0D0D0D] text-[#8B5CF6]">
          <MousePointerClick className="h-3.5 w-3.5" />
        </span>
      </div>
      <p className="mt-3 font-mono text-3xl font-semibold text-[#F4F4F5]">
        {total.toLocaleString()}
      </p>
    </div>
  );
};

export default TotalClicks;

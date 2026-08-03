import { Link2 } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

interface TotalLinksProps {
  userId: string;
}

const TotalLinks = async ({ userId }: TotalLinksProps) => {
  const supabase = await createClient();

  const { count } = await supabase
    .from("urls")
    .select("*", { count: "exact", head: true })
    .eq("user_id", userId);

  return (
    <div className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
          Total Links
        </p>
        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#2A2A2E] bg-[#0D0D0D] text-[#8B5CF6]">
          <Link2 className="h-3.5 w-3.5" />
        </span>
      </div>
      <p className="mt-3 font-mono text-3xl font-semibold text-[#F4F4F5]">
        {count ?? 0}
      </p>
    </div>
  );
};

export default TotalLinks;

import { Users } from "lucide-react";

const TotalUsers = () => {
  return (
    <div className="rounded-xl border border-[#2A2A2E] bg-[#131316] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-[#71717A]">
          Total Users
        </p>
        <span className="flex h-7 w-7 items-center justify-center rounded-md border border-[#2A2A2E] bg-[#0D0D0D] text-[#8B5CF6]">
          <Users className="h-3.5 w-3.5" />
        </span>
      </div>
      <p className="mt-3 font-mono text-3xl font-semibold text-[#F4F4F5]">
        64
      </p>
    </div>
  );
};

export default TotalUsers;

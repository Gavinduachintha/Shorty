import React from "react";

const StatusIndicator = () => {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2A2A2E] bg-[#131316] px-4 py-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B5CF6] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B5CF6]" />
      </span>
      <span className="text-xs font-medium text-[#F4F4F5]">
        Free · Open Source · Production Ready
      </span>
    </div>
  );
};

export default StatusIndicator;

import React from "react";

const StatusIndicator = () => {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2A2A2E]  px-4 py-2.5">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8B5CF6] opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
      </span>
      <span className="text-sm  text-[#F4F4F5]">Free & Open Source</span>
    </div>
  );
};

export default StatusIndicator;
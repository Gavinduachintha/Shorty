import React from "react";
import { LogIn } from "lucide-react";

const SignInButton = () => {
  return (
    <button className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#7C4DE8] active:bg-[#6D3FD9]">
      Sign In <LogIn className="h-4 w-4" />
    </button>
  );
};

export default SignInButton;

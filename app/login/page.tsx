import React from "react";
import LoginBox from "./loginBox";
const LoginPage = () => {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#0D0D0D] overflow-hidden">
      <div className="flex items-center justify-center px-4 lg:px-6">
        <LoginBox />
      </div>
      <div className="hidden lg:flex flex-col items-start justify-center border-l border-[#2A2A2E] px-16 text-[#F4F4F5]">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#A1A1AA]">
          Shorty
        </p>
        <h1 className="mt-4 max-w-md text-5xl font-semibold tracking-tight">
          Welcome back to your workspace.
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-[#A1A1AA]">
          A calm sign in screen with consistent spacing, dark surfaces, and no
          unnecessary visual effects.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

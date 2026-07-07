import React from "react";
import LoginBox from "./loginBox";
const LoginPage = () => {
  return (
    <div className="h-full min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#0D0D0D] overflow-hidden">
      {" "}
      {/* Left Section */}
      <div className="flex items-center justify-center">
        <LoginBox />
      </div>
      {/* Right Section */}
      <div className="hidden lg:flex items-center justify-center bg-[#6C47FF]">
        {/* Hero Image / Illustration / Branding */}
        <h1 className="text-5xl font-bold text-white">Welcome Back</h1>
      </div>
    </div>
  );
};

export default LoginPage;

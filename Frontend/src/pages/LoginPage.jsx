import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 bg-black p-4 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-blue-50 underline tracking-wide">Welcome Back</h1>
        </div>
        <div className="w-1/2 bg-amber-50 p-4 flex items-center justify-center">Right side</div>
      </div>
    </>
  );
};

export default LoginPage;

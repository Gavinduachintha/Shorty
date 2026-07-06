import React from "react";

const LoginBox = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle submit
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4">
      <div className="flex flex-col items-center w-full max-w-md bg-[#27272A] rounded shadow-[0_20px_70px_rgba(0,0,0,0.4)] p-10 text-[#F4F4F5]">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-[#6C47FF] rounded-2xl flex items-center justify-center mb-4">
            <span className="text-white text-3xl font-bold">C</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Sign in to your account
          </h2>
          <p className="text-[#A1A1AA] text-sm mt-2 text-center">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form className="w-full space-y-6">
          <div className="space-y-4 ">
            {/* Email Field */}
            <label className="block">
              <span className="text-sm text-[#A1A1AA] font-medium">
                Email address
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full px-4 py-3 bg-[#18181B] border border-[#3F3F46] rounded text-[#E4E4E7] placeholder:text-[#71717A] focus:outline-none focus:border-[#6C47FF] focus:ring-4 focus:ring-[#6C47FF]/20 transition-all"
              />
            </label>

            {/* Password Field */}
            <label className="block">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#A1A1AA] font-medium">
                  Password
                </span>
                <a
                  href="#"
                  className="text-xs text-[#6C47FF] hover:text-[#7C5FFF] transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                className="mt-2 w-full px-4 py-3 bg-[#18181B] border border-[#3F3F46] rounded text-[#E4E4E7] placeholder:text-[#71717A] focus:outline-none focus:border-[#6C47FF] focus:ring-4 focus:ring-[#6C47FF]/20 transition-all"
              />
            </label>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full mt-2 px-4 py-3.5 bg-[#6C47FF] hover:bg-[#5B3BE6] active:bg-[#4A2ECC] rounded font-semibold text-white  transition-all duration-200 text-base"
          >
            Continue
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[#71717A] text-sm mt-8">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-[#6C47FF] hover:text-[#7C5FFF] font-medium transition-colors"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginBox;

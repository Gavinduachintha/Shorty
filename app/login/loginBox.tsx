import React from "react";
const LoginBox = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle submit
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md rounded-3xl border border-[#3F3F46] bg-[#27272A] px-8 py-8 text-[#F4F4F5]">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3F3F46] bg-[#18181B]">
            <span className="text-xl font-semibold text-[#6C47FF]">C</span>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#A1A1AA]">
            Welcome back
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#F4F4F5]">
            Sign in to your account
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-[#A1A1AA]">
            Enter your credentials to continue into your workspace.
          </p>
        </div>

        <form className="mt-7 space-y-5">
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-[#D4D4D8]">
                Email address
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-[#3F3F46] bg-[#18181B] px-4 py-3 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#6C47FF]"
              />
            </label>

            <label className="block">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium text-[#D4D4D8]">
                  Password
                </span>
                <a
                  href="#"
                  className="text-xs font-medium text-[#6C47FF] transition-colors hover:text-[#7C5FFF]"
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
                className="mt-2 w-full rounded-xl border border-[#3F3F46] bg-[#18181B] px-4 py-3 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#6C47FF]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#6C47FF] px-4 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#5B3BE6] active:bg-[#4A2ECC]"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#3F3F46]" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#71717A]">
            or
          </span>
          <div className="h-px flex-1 bg-[#3F3F46]" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#3F3F46] bg-[#18181B] px-4 py-3 text-sm font-medium text-[#F4F4F5] transition-colors hover:bg-[#1f1f23] active:bg-[#1f1f23]">
            <img
              src="/google.svg"
              alt=""
              aria-hidden="true"
              className="h-5 w-5"
            />
            <span>Google</span>
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#3F3F46] bg-[#18181B] px-4 py-3 text-sm font-medium text-[#F4F4F5] transition-colors hover:bg-[#1f1f23] active:bg-[#1f1f23]">
            <img
              src="/github.svg"
              alt=""
              aria-hidden="true"
              className="h-5 w-5"
            />
            <span>GitHub</span>
          </button>
        </div>

        <p className="mt-7 text-center text-sm text-[#71717A]">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="font-medium text-[#6C47FF] transition-colors hover:text-[#7C5FFF]"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginBox;

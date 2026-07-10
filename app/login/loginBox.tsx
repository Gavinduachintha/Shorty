import React from "react";

const LoginBox = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle submit
  };

  return (
    <div className="w-full rounded-2xl border border-[#2A2A2E] bg-[#131316] px-6 py-7 text-[#F4F4F5]">
      <form className="space-y-5" >
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
              className="mt-2 w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-3 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
            />
          </label>

          <label className="block">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-[#D4D4D8]">
                Password
              </span>
              <a
                href="#"
                className="text-xs font-medium text-[#8B5CF6] transition-colors hover:text-[#A78BFA]"
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
              className="mt-2 w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-3 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#8B5CF6] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7C4DE8] active:bg-[#6D3FD9]"
        >
          Continue
        </button>
      </form>

      <div className="mt-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#2A2A2E]" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#71717A]">
          or
        </span>
        <div className="h-px flex-1 bg-[#2A2A2E]" />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-sm font-medium text-[#F4F4F5] transition-colors hover:bg-[#1A1A1D] active:bg-[#1A1A1D]"
        >
          <img src="/google.svg" alt="" aria-hidden="true" className="h-4 w-4" />
          <span>Google</span>
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-sm font-medium text-[#F4F4F5] transition-colors hover:bg-[#1A1A1D] active:bg-[#1A1A1D]"
        >
          <img src="/github.svg" alt="" aria-hidden="true" className="h-4 w-4" />
          <span>GitHub</span>
        </button>
      </div>

      <p className="mt-7 text-center text-sm text-[#71717A]">
        Don&apos;t have an account?{" "}
        <a
          href="#"
          className="font-medium text-[#8B5CF6] transition-colors hover:text-[#A78BFA]"
        >
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginBox;
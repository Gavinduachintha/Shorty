"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";

const LoginBox = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Email or password required");
      toast.error("Email or password required");
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
        toast.error(signInError.message);
      } else {
        toast.success("Welcome back!");
        router.push("/dashboard");
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = async (provider: "google" | "github") => {
    setLoading(true);
    const supabase = createClient();

    const { error: oauthError } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (oauthError) {
      setError(oauthError.message);
      toast.error(oauthError.message);
      setLoading(false);
    }
    // On success the browser is redirected — no need to reset loading
  };

  return (
    <div className="w-full rounded-2xl border border-[#2A2A2E] bg-[#131316] px-6 py-7 text-[#F4F4F5]">
      <form className="space-y-5" onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-[#D4D4D8]">
                Password
              </span>
              <Link
                href="#"
                className="text-xs font-medium text-[#8B5CF6] transition-colors hover:text-[#A78BFA]"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              placeholder="Enter your password"
              className="mt-2 w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-3 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#8B5CF6] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7C4DE8] disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Continue"}
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
          onClick={() => handleOAuth("google")}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-sm font-medium text-[#F4F4F5] transition-colors hover:bg-[#1A1A1D] active:bg-[#1A1A1D]"
        >
          <img
            src="/google.svg"
            alt=""
            aria-hidden="true"
            className="h-4 w-4"
          />
          <span>Google</span>
        </button>
        <button
          type="button"
          onClick={() => handleOAuth("github")}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-sm font-medium text-[#F4F4F5] transition-colors hover:bg-[#1A1A1D] active:bg-[#1A1A1D]"
        >
          <img
            src="/github.svg"
            alt=""
            aria-hidden="true"
            className="h-4 w-4"
          />
          <span>GitHub</span>
        </button>
      </div>

      <p className="mt-7 text-center text-sm text-[#71717A]">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-[#8B5CF6] transition-colors hover:text-[#A78BFA]"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginBox;

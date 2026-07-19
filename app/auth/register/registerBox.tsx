"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import {useRouter} from "next/navigation";

const RegisterBox = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      setLoading(false);
      return;
    }

    const supabase = createClient();

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name, // Store name in user metadata
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      alert("Check your email to confirm your account!");
      // Optionally reset form
      setName(""); setEmail(""); setPassword("");
      router.push("/dashboard"); // Redirect to login page after successful signup
      
    }

    setLoading(false);
  };

  // OAuth Sign up
  const handleOAuth = async (provider: "google" | "github") => {
    setLoading(true);
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-[#2A2A2E] bg-[#131316] px-6 py-7 text-[#F4F4F5]">
      <form onSubmit={handleSignup} className="space-y-5">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-[#D4D4D8]">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="mt-2 w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-3 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#D4D4D8]">
              Email address
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-3 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#D4D4D8]">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              placeholder="Create a password"
              className="mt-2 w-full rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-3 text-[#F4F4F5] placeholder:text-[#71717A] outline-none transition-colors focus:border-[#8B5CF6]"
            />
          </label>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#8B5CF6] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#7C4DE8] active:bg-[#6D3FD9] disabled:opacity-70"
        >
          {loading ? "Creating account..." : "Continue"}
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
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-sm font-medium text-[#F4F4F5] transition-colors hover:bg-[#1A1A1D]"
        >
          <img src="/google.svg" alt="Google" className="h-4 w-4" />
          <span>Google</span>
        </button>

        <button
          type="button"
          onClick={() => handleOAuth("github")}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#2A2A2E] bg-[#0D0D0D] px-4 py-2.5 text-sm font-medium text-[#F4F4F5] transition-colors hover:bg-[#1A1A1D]"
        >
          <img src="/github.svg" alt="GitHub" className="h-4 w-4" />
          <span>GitHub</span>
        </button>
      </div>

      <p className="mt-7 text-center text-sm text-[#71717A]">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-[#8B5CF6] transition-colors hover:text-[#A78BFA]"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default RegisterBox;
// export default LoginPage;
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
const supabaseUrl = "Your supabase url";
const supabaseKey =
  "Your supabase key";
const supabase = createClient(supabaseUrl, supabaseKey);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.log("Login failed", error.message);
      } else {
        console.log("Login success:", data.user);

        // ✅ Store user in localStorage to access it later
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 gap-4">
      {/* Left Side Content */}
      <div className="hidden md:flex w-1/2 bg-white items-center justify-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-violet-500 font-bold">✔</span>
              <p className="ml-2 text-gray-600">Shorten links in seconds.</p>
            </li>
            <li className="flex items-center">
              <span className="text-violet-500 font-bold">✔</span>
              <p className="ml-2 text-gray-600">Track link performance.</p>
            </li>
            <li className="flex items-center">
              <span className="text-violet-500 font-bold">✔</span>
              <p className="ml-2 text-gray-600">Easy to use and free.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Login Form */}
      <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-4xl font-extrabold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to your account
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-violet-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-violet-500"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-violet-500 text-white font-semibold rounded-lg hover:bg-violet-700"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-violet-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

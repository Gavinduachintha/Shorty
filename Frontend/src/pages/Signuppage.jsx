import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabaseUrl = "https://vrsbwbsgmdsetweqxjqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjcxODIsImV4cCI6MjA2Njc0MzE4Mn0.VrrxvSzcp-2IEbkZLgMkMnwlOIIQfRFsDsM9KsNnkFY";
const supabase = createClient(supabaseUrl, supabaseKey);

const Signuppage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          name,
          email,
          password,
          // Optional: Add custom user metadata
        },
        {
          data: { name },
        }
      );
      if (error) {
        if (error) {
          // setErrorMessage(error.message); // Display error to the user
        }
      } else {
        console.log("Signup successful:", data);
        navigate("/dashboard");
        // Optionally redirect the user or show a success message
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
    // try {
    //   const response = await fetch("http://localhost:3000/api/signup", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name, email, password }),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     console.log("Signup successful:", data);
    //     // Optional: Redirect or clear form
    //   } else {
    //     console.error("Signup failed:", data.message);
    //   }
    // } catch (error) {
    //   console.error("Error during signup:", error);
    // }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Left Side Content */}
        <div className="hidden md:flex w-1/2 bg-white text-white items-center justify-center">
          <div className="space-y-6 text-center px-8">
            <h1 className="text-5xl font-bold text-black">
              Welcome to Shorty!
            </h1>
            <p className="text-lg text-black">
              Join us and start simplifying your links today. It's fast, easy,
              and free!
            </p>
          </div>
        </div>

        {/* Right Side Sign-Up Form */}
        <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900">
                Hey There!
              </h2>
              <p className="mt-2 text-sm text-gray-600">Create your account</p>
            </div>
            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
              method="post"
            >
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Enter your full name"
                />
              </div>
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Enter your email"
                />
              </div>
              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  placeholder="Create a password"
                />
              </div>
              {/* Sign Up Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300 transition duration-300"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-violet-500 hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signuppage;

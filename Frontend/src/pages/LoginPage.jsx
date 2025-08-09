import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

const supabaseUrl = "https://vrsbwbsgmdsetweqxjqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjcxODIsImV4cCI6MjA2Njc0MzE4Mn0.VrrxvSzcp-2IEbkZLgMkMnwlOIIQfRFsDsM9KsNnkFY";
const supabase = createClient(supabaseUrl, supabaseKey);

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.log("Login failed", error.message);
        toast.error(error.message);
      } else {
        console.log("Login success:", data.user);
        toast.success("Welcome Back!");
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      title={
        <>
          Ready to
          <br />
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Shorten More?
          </span>
        </>
      }
      subtitle="Sign in to access your dashboard and manage all your shortened links with detailed analytics."
      badge="Welcome back to Shorty"
    >
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        loading={loading}
        onSubmit={handleSubmit}
        darkMode={darkMode}
      />
    </AuthLayout>
  );
};

export default LoginPage;

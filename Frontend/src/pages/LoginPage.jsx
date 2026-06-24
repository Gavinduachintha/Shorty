import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";
import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import useDarkMode from "../hooks/useDarkMode";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode();
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
      setDarkMode={toggleDarkMode}
      title={
        <>
          Ready to
          <br />
          <span className="gradient-text">Shorten More?</span>
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

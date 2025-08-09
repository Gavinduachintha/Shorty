import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/auth/SignupForm";

const supabaseUrl = "https://vrsbwbsgmdsetweqxjqp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyc2J3YnNnbWRzZXR3ZXF4anFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNjcxODIsImV4cCI6MjA2Njc0MzE4Mn0.VrrxvSzcp-2IEbkZLgMkMnwlOIIQfRFsDsM9KsNnkFY";
const supabase = createClient(supabaseUrl, supabaseKey);

const Signuppage = () => {
  const [name, setName] = useState("");
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
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
        },
      });

      if (error) {
        console.error("Signup error:", error.message);
        toast.error(error.message);
      } else {
        console.log("Signup successful:", data);
        toast.success("Account created successfully! Welcome to Shorty!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
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
          Start Your
          <br />
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Link Journey
          </span>
        </>
      }
      subtitle="Create your free account and unlock the power of professional link management with detailed analytics."
      badge="Join thousands of users"
    >
      <SignupForm
        name={name}
        setName={setName}
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

export default Signuppage;

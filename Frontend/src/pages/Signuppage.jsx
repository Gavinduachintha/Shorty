import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import toast from "react-hot-toast";
import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/auth/SignupForm";
import useDarkMode from "../hooks/useDarkMode";

const Signuppage = () => {
  const [name, setName] = useState("");
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
        navigate("/login");
        toast.success("Sign Up successfull. Pls login");
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
      setDarkMode={toggleDarkMode}
      title={
        <>
          Start Your
          <br />
          <span className="gradient-text">Link Journey</span>
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

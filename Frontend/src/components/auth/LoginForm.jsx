import React from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import FormInput from "../forms/FormInput";
import FormButton from "../forms/FormButton";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  loading,
  onSubmit,
  darkMode,
}) => {
  return (
    <>
      <div className="text-center mb-8">
        <h2
          className={`text-2xl lg:text-3xl font-bold mb-3 ${
            darkMode ? "text-white" : "text-zinc-900"
          }`}
        >
          Welcome Back
        </h2>
        <p
          className={`text-base ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          Sign in to continue to your dashboard
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <FormInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          placeholder="you@example.com"
          required
          darkMode={darkMode}
          icon={FiMail}
        />

        <FormInput
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="••••••••"
          required
          darkMode={darkMode}
          icon={FiLock}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`p-1 rounded-lg transition-colors ${
                darkMode
                  ? "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700/50"
                  : "text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          }
        />

        <div className="pt-2">
          <FormButton
            type="submit"
            loading={loading}
            loadingText="Signing In..."
            darkMode={darkMode}
          >
            <span className="flex items-center justify-center gap-2">
              Sign In
              <FiArrowRight className="w-4 h-4" />
            </span>
          </FormButton>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p
          className={`text-sm ${darkMode ? "text-zinc-500" : "text-zinc-600"}`}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            className={`font-semibold transition-colors duration-200 ${
              darkMode
                ? "text-purple-400 hover:text-purple-300"
                : "text-purple-600 hover:text-purple-700"
            }`}
          >
            Create one free
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;

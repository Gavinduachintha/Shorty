import React from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
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
          className={`text-3xl font-bold mb-2 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome Back
        </h2>
        <p
          className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Sign in to your account
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <FormInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          placeholder="Enter your email address"
          required
          darkMode={darkMode}
        />

        <FormInput
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          placeholder="Enter your password"
          required
          darkMode={darkMode}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-gray-300"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          }
        />

        <FormButton type="submit" loading={loading} loadingText="Signing In...">
          Sign In
        </FormButton>
      </form>

      <div className="mt-8 text-center">
        <p
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-violet-500 hover:text-violet-600 font-medium transition-colors duration-200"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;

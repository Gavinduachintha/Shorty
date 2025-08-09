import React from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock } from "react-icons/fi";
import FormInput from "../forms/FormInput";
import FormButton from "../forms/FormButton";

const SignupForm = ({
  name,
  setName,
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
          Create Account
        </h2>
        <p
          className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          Join Shorty and start shortening links
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <FormInput
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Full Name"
          placeholder="Enter your full name"
          required
          darkMode={darkMode}
          icon={FiUser}
        />

        <FormInput
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email Address"
          placeholder="Enter your email address"
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
          placeholder="Create a secure password"
          required
          darkMode={darkMode}
          icon={FiLock}
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

        {/* Terms & Conditions */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="terms"
            required
            className="mt-1 w-4 h-4 text-violet-600 border-gray-300 rounded focus:ring-violet-500"
          />
          <label
            htmlFor="terms"
            className={`text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I agree to the{" "}
            <a
              href="#"
              className="text-violet-500 hover:text-violet-600 font-medium"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-violet-500 hover:text-violet-600 font-medium"
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <FormButton
          type="submit"
          loading={loading}
          loadingText="Creating Account..."
        >
          Create Account
        </FormButton>
      </form>

      <div className="mt-8 text-center">
        <p
          className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-violet-500 hover:text-violet-600 font-medium transition-colors duration-200"
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignupForm;

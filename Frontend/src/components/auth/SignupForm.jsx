import React from "react";
import { Link } from "react-router-dom";
import {
  FiEye,
  FiEyeOff,
  FiUser,
  FiMail,
  FiLock,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
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
          className={`text-2xl lg:text-3xl font-bold mb-3 ${
            darkMode ? "text-white" : "text-zinc-900"
          }`}
        >
          Create Your Account
        </h2>
        <p
          className={`text-base ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          Start shortening links in seconds
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <FormInput
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Full Name"
          placeholder="John Doe"
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

        {/* Terms & Conditions */}
        <div className="flex items-start space-x-3">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id="terms"
              required
              className={`peer w-5 h-5 rounded-md appearance-none cursor-pointer transition-all ${
                darkMode
                  ? "bg-zinc-800 border-2 border-zinc-700 checked:bg-purple-600 checked:border-purple-600"
                  : "bg-white border-2 border-zinc-300 checked:bg-purple-600 checked:border-purple-600"
              }`}
            />
            <FiCheck className="absolute w-3 h-3 text-white left-1 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
          <label
            htmlFor="terms"
            className={`text-sm leading-relaxed ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            I agree to the{" "}
            <a
              href="#"
              className={`font-medium transition-colors ${
                darkMode
                  ? "text-purple-400 hover:text-purple-300"
                  : "text-purple-600 hover:text-purple-700"
              }`}
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className={`font-medium transition-colors ${
                darkMode
                  ? "text-purple-400 hover:text-purple-300"
                  : "text-purple-600 hover:text-purple-700"
              }`}
            >
              Privacy Policy
            </a>
          </label>
        </div>

        <div className="pt-2">
          <FormButton
            type="submit"
            loading={loading}
            loadingText="Creating Account..."
            darkMode={darkMode}
          >
            <span className="flex items-center justify-center gap-2">
              Create Account
              <FiArrowRight className="w-4 h-4" />
            </span>
          </FormButton>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p
          className={`text-sm ${darkMode ? "text-zinc-500" : "text-zinc-600"}`}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className={`font-semibold transition-colors duration-200 ${
              darkMode
                ? "text-purple-400 hover:text-purple-300"
                : "text-purple-600 hover:text-purple-700"
            }`}
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignupForm;

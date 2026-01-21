import React from "react";

const FormButton = ({
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  loadingText = "Loading...",
  children,
  variant = "primary",
  className = "",
  darkMode = true,
  ...props
}) => {
  const baseClasses =
    "w-full py-4 font-semibold rounded-xl transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden";

  const variants = {
    primary: `bg-purple-600 hover:bg-purple-700 
              text-white shadow-lg shadow-purple-500/25 
              hover:shadow-purple-500/40 hover:scale-[1.02] hover:-translate-y-0.5
              active:scale-[0.98]`,
    secondary: darkMode
      ? "bg-zinc-800 border-2 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:border-zinc-600"
      : "bg-white border-2 border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <span className="relative z-10">
        {loading ? (
          <span className="flex items-center justify-center gap-3">
            <svg
              className="animate-spin h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>{loadingText}</span>
          </span>
        ) : (
          children
        )}
      </span>
    </button>
  );
};

export default FormButton;

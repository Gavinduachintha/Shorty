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
  ...props
}) => {
  const baseClasses =
    "w-full py-4 font-semibold rounded-xl shadow-lg transition-all duration-200 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white hover:shadow-violet-500/25 hover:scale-105",
    secondary:
      "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-800/50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          <span>{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default FormButton;

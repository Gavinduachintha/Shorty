import React from "react";

const FormInput = ({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  required = false,
  darkMode,
  icon: Icon,
  rightElement,
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium ${
            darkMode ? "text-zinc-300" : "text-zinc-700"
          }`}
        >
          {label}
        </label>
      )}
      <div className="relative group">
        {/* Subtle glow on focus */}
        <div
          className={`absolute -inset-0.5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur ${
            darkMode
              ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20"
              : "bg-gradient-to-r from-purple-400/20 to-pink-400/20"
          }`}
        />

        <div className="relative">
          <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className={`w-full px-4 py-3.5 ${Icon ? "pl-11" : ""} ${
              rightElement ? "pr-12" : ""
            } rounded-xl border-2 transition-all duration-200 focus:outline-none ${
              darkMode
                ? "bg-zinc-800/50 border-zinc-700/50 text-white placeholder-zinc-500 focus:border-purple-500/50 focus:bg-zinc-800/80"
                : "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:border-purple-400 focus:bg-white"
            }`}
            placeholder={placeholder}
            {...props}
          />
          {Icon && (
            <Icon
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors ${
                darkMode
                  ? "text-zinc-500 group-focus-within:text-purple-400"
                  : "text-zinc-400 group-focus-within:text-purple-500"
              }`}
              size={18}
            />
          )}
          {rightElement && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {rightElement}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormInput;

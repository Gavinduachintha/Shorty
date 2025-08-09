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
    <div>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full px-4 py-4 ${Icon ? "pl-12" : ""} ${
            rightElement ? "pr-12" : ""
          } rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent ${
            darkMode
              ? "bg-gray-900/50 border-gray-600 text-gray-100 placeholder-gray-400"
              : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
          }`}
          placeholder={placeholder}
          {...props}
        />
        {Icon && (
          <Icon
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
            size={18}
          />
        )}
        {rightElement && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;

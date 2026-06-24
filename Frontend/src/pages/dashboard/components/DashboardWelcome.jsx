import React from "react";

const DashboardWelcome = ({ darkMode, user }) => {
  return (
    <div className="mb-8">
      <h2
        className={`text-2xl sm:text-3xl font-bold mb-2 ${
          darkMode ? "text-white" : "text-zinc-900"
        }`}
      >
        Welcome back
        {user && (
          <span className="text-purple-500">, {user.email?.split("@")[0]}</span>
        )}
      </h2>
      <p className={`${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
        Manage your shortened links and track their performance
      </p>
    </div>
  );
};

export default DashboardWelcome;

import React, { useState } from "react";

export default function AboutMe() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen w-full relative transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: darkMode
            ? `
              radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
              radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
              radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
            `
            : `
              radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
              radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
              radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
            `,
        }}
      />

      {/* Toggle Button */}
      <div className="relative z-10 p-6 flex justify-end">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-full text-sm shadow-md ${
            darkMode
              ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-100"
          }`}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          About Shorty
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Shorty is a sleek and efficient URL shortener designed to turn long, messy links
          into clean and shareable URLs. Built with speed, simplicity, and modern UI in mind,
          Shorty helps users track, copy, and manage their links in real-time.
        </p>

        <div className="bg-opacity-50 bg-white dark:bg-black p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">👨‍💻 Developer</h2>
          <p className="text-base mb-2">Hey! I’m Gavi, a passionate developer about merging code with creativity.</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This project is open-source and built using the Supabase and react.
          </p>
        </div>
      </div>
    </div>
  );
}

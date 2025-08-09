import React from "react";

const BackgroundElements = ({ darkMode }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: darkMode
            ? `
              radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
            `
            : `
              radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.06) 0%, transparent 50%)
            `,
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>
    </div>
  );
};

export default BackgroundElements;

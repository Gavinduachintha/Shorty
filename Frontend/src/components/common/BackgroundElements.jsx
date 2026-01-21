import React from "react";

const BackgroundElements = ({ darkMode }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Mesh Background */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          backgroundImage: darkMode
            ? `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(34, 211, 238, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 50% 80%, rgba(244, 114, 182, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 100% 100% at 50% 0%, rgba(124, 58, 237, 0.05) 0%, transparent 40%)
            `
            : `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(124, 58, 237, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(6, 182, 212, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 50% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse 100% 100% at 50% 0%, rgba(124, 58, 237, 0.03) 0%, transparent 40%)
            `,
        }}
      />

      {/* Animated Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full animate-float-slow"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-float"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full animate-pulse-glow"
        style={{
          background: darkMode
            ? "radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(236, 72, 153, 0.04) 0%, transparent 70%)",
          filter: "blur(30px)",
          animationDelay: "4s",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: darkMode
            ? `linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)`
            : `linear-gradient(rgba(124, 58, 237, 0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(124, 58, 237, 0.02) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
        }}
      />

      {/* Accent Lines */}
      <div
        className="absolute top-0 left-1/4 w-px h-96 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
        style={{ transform: "rotate(15deg)" }}
      />
      <div
        className="absolute top-20 right-1/3 w-px h-64 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"
        style={{ transform: "rotate(-20deg)" }}
      />

      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />
    </div>
  );
};

export default BackgroundElements;

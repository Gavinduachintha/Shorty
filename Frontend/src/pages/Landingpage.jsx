import React, { useState } from "react";
import { Link } from "react-router-dom";
import Squares from "../components/Squares";
import { FiMoon, FiSun } from "react-icons/fi";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "bg-[#121212] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Dynamic Background Gradient */}
      <div
        className="absolute inset-0 z-0 transition-all duration-500"
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

      <div className="relative min-h-screen w-full z-10">
        {/* Header */}
        <header
          className={` top-0 z-50 bg-transparent transition-colors duration-300 ${
            darkMode ? "bg-transparent border-gray-700" : " border-gray-200"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
            {/* Logo & Title */}
            <div className="flex items-center space-x-3">
              <img
                src="src/assets/link.png"
                alt="Shorty Logo"
                className="w-10 h-10"
              />
              <a href="/">
                <h1
                  className={`text-2xl font-semibold tracking-tight ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Shorty
                </h1>
              </a>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex items-center space-x-5">
              <a
                href="https://github.com/Gavinduachintha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src="src/assets/github.png"
                  alt="GitHub"
                  className="w-7 h-7"
                />
              </a>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full border transition ${
                  darkMode
                    ? "bg-gray-800 text-yellow-400 border-gray-700"
                    : "bg-gray-100 text-gray-700 border-gray-300"
                } hover:shadow-md`}
                title="Toggle Theme"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {["Pricing", "About", "Dashboard"].map((label, i) => (
                <Link
                  key={i}
                  to={`/${label.toLowerCase()}`}
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } hover:text-violet-500 font-medium transition`}
                >
                  {label}
                </Link>
              ))}

              <Link to="/login">
                <button className="bg-violet-600 hover:bg-violet-800 text-white font-medium px-4 py-2 rounded-lg shadow transition">
                  Log In
                </button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center w-[90vw] h-[60vh] mx-auto my-6 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="src/assets/background.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
          <div className="absolute inset-0 z-0">
            <Squares
              dotSize={3}
              gap={15}
              baseColor="#FFFFFF"
              activeColor="#5227FF"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
          <div className="z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Shrink Your Links. Expand Your Reach.
            </h1>
            <p className="text-lg md:text-2xl text-white mt-4 drop-shadow">
              Transform long unwieldy URLs into concise, trackable links
            </p>
            <Link to="/signup">
              <button className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-full text-lg hover:bg-violet-800 transition shadow-md">
                Try Shorty Now
              </button>
            </Link>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90vw] mx-auto my-10">
          {[
            {
              title: "Pricing",
              desc: "Guess what? It’s open source!🎁.",
            },
            {
              title: "About",
              desc: "Learn how Shorty helps individuals and businesses.",
            },
            {
              title: "Get Started",
              desc: "Create short links in seconds with our easy-to-use platform.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`${
                darkMode ? "bg-[#1a1a1a] text-white" : "bg-white text-gray-800"
              } rounded-xl shadow-md hover:shadow-lg p-6 text-center transition`}
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer
          className={`w-full py-4 mt-10 text-center ${
            darkMode
              ? "bg-transparent text-gray-400  border-gray-700"
              : "bg-transparent text-gray-600  border-gray-300"
          }`}
        >
          <p className="text-sm">
            Made with love ❤️ by Gavi &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;

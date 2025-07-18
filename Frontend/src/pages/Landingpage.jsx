import React, { useState } from "react";
import { Link } from "react-router-dom";
import Squares from "../components/Squares";
import { FiMoon, FiSun } from "react-icons/fi";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={`${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
        {/* Grid Background */}
        <div className="min-h-screen w-full relative">
          {/* Header */}
          <header
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-md sticky top-0 z-50`}
          >
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
              <div className="flex items-center">
                <img
                  src="src/assets/link.png"
                  alt="Logo"
                  className="w-10 h-10 mr-2"
                />
                <a href="/">
                  <p
                    className={`text-2xl font-bold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Shorty
                  </p>
                </a>
              </div>

              <nav className="hidden md:flex gap-4 items-center">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 text-yellow-400"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                </button>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } font-medium px-4 py-2 rounded hover:bg-violet-100 cursor-pointer transition`}
                >
                  Pricing
                </p>
                <Link to="/about">
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } font-medium px-4 py-2 rounded hover:bg-violet-100 cursor-pointer transition`}
                  >
                    About
                  </p>
                </Link>
                <Link to="/dashboard">
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } font-medium px-4 py-2 rounded hover:bg-violet-100 cursor-pointer transition`}
                  >
                    Get Started
                  </p>
                </Link>
                <Link to="/login">
                  <button className="bg-violet-600 text-white px-4 py-2 rounded-lg shadow hover:bg-violet-800 transition">
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
            <div className="z-10 text-center px-4 ">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                Shrink Your Links. Expand Your Reach.
              </h1>
              <p className="text-lg md:text-2xl text-white mt-4 drop-shadow">
                Transform long unwieldy URLs into concise, trackable links
              </p>
              <Link to="/signup">
                <button className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-full text-lg hover:bg-violet-800 transition shadow-md ">
                  Try Shorty Now
                </button>
              </Link>
            </div>
          </section>

          {/* Feature Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90vw] mx-auto my-10">
            <div
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              } rounded-xl shadow-md hover:shadow-lg p-6 text-center transition`}
            >
              <h3 className="text-xl font-semibold mb-2">Pricing</h3>
              <p>Guess what? It’s open source!🎁.</p>
            </div>

            <div
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              } rounded-xl shadow-md hover:shadow-lg p-6 text-center transition`}
            >
              <h3 className="text-xl font-semibold mb-2">About</h3>
              <p>Learn how Shorty helps individuals and businesses.</p>
            </div>

            <div
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white"
              } rounded-xl shadow-md hover:shadow-lg p-6 text-center transition`}
            >
              <h3 className="text-xl font-semibold mb-2">Get Started</h3>
              <p>
                Create short links in seconds with our easy-to-use platform.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer
            className={`${
              darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"
            } text-center shadow-inner py-4 mt-10`}
          >
            <p className="text-sm">
              Made with love ❤️ by Gavi &copy; {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

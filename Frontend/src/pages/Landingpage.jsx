import React from "react";
import { Link } from "react-router-dom";
import Squares from "../components/Squares";

const LandingPage = () => {
  return (
    <>
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <img
              src="src/assets/link.png"
              alt="Logo"
              className="w-10 h-10 mr-2"
            />
            <a href="/">
              {" "}
              <p className="text-2xl font-bold text-gray-800 cursor-pointer">
                Shorty
              </p>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-4">
            <p className="text-gray-700 font-medium px-4 py-2 rounded hover:bg-violet-100 cursor-pointer transition">
              Pricing
            </p>
            <Link to="/about">
              <p className="text-gray-700 font-medium px-4 py-2 rounded hover:bg-violet-100 cursor-pointer transition">
                About
              </p>
            </Link>
            <p className="text-gray-700 font-medium px-4 py-2 rounded hover:bg-violet-100 cursor-pointer transition">
              Get Started
            </p>
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
        {/* Background image */}
        <img
          src="src/assets/background.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay */}
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
        {/* Content */}
        <div className="z-10 text-center px-4 ">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Shrink Your Links. Expand Your Reach.
          </h1>
          <p className="text-lg md:text-2xl text-white mt-4 drop-shadow">
            Transform long unwieldy URLs into concise, trackable links
          </p>
          <Link to="signup">
            <button className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-full text-lg hover:bg-violet-800 transition shadow-md ">
              Try Shorty Now
            </button>
          </Link>
        </div>
      </section>

      {/* Bottom Feature Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90vw] mx-auto my-10 ">
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Pricing</h3>
          <p className="text-gray-600">Guess what? It’s open source!🎁.</p>
        </div>

        <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">About</h3>
          <p className="text-gray-600">
            Learn how Shorty helps individuals and businesses.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Get Started
          </h3>
          <p className="text-gray-600">
            Create short links in seconds with our easy-to-use platform.
          </p>
        </div>
      </section>
      <footer className="bg-white text-center shadow-inner py-4 mt-10">
        <p className="text-gray-700 text-sm">
          Made with love ❤️ by Gavi &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default LandingPage;

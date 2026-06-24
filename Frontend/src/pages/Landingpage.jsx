import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "../components/common/Header";
import BackgroundElements from "../components/common/BackgroundElements";
import Footer from "../components/common/Footer";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ContactModal from "../components/modals/ContactModal";
import useDarkMode from "../hooks/useDarkMode";

const LandingPage = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div
      className={`relative overflow-hidden transition-all duration-500 ${
        darkMode ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"
      }`}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: darkMode ? "#18181b" : "#ffffff",
            color: darkMode ? "#fafafa" : "#18181b",
            border: darkMode ? "1px solid #27272a" : "1px solid #e4e4e7",
            borderRadius: "12px",
            padding: "16px",
          },
        }}
      />

      <BackgroundElements darkMode={darkMode} />

      <div className="relative min-h-screen w-full z-10">
        <Header
          darkMode={darkMode}
          setDarkMode={toggleDarkMode}
          showNavigation={true}
        />

        <HeroSection darkMode={darkMode} />
        <FeaturesSection darkMode={darkMode} />

        <Footer
          darkMode={darkMode}
          onContactClick={() => setShowContactForm(true)}
        />
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactModal
          darkMode={darkMode}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};

export default LandingPage;

import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "../components/common/Header";
import BackgroundElements from "../components/common/BackgroundElements";
import Footer from "../components/common/Footer";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ContactModal from "../components/modals/ContactModal";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div
      className={`relative overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-[#0a0a0a] to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-white via-gray-50 to-violet-50 text-gray-900"
      }`}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: darkMode ? "#1f2937" : "#ffffff",
            color: darkMode ? "#f3f4f6" : "#111827",
            border: darkMode ? "1px solid #374151" : "1px solid #e5e7eb",
          },
        }}
      />

      <BackgroundElements darkMode={darkMode} />

      <div className="relative min-h-screen w-full z-10">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
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

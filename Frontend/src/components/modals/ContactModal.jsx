import React, { useState } from "react";
import { FiX, FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";
import toast from "react-hot-toast";
import Squares from "../Squares";
import FormInput from "../forms/FormInput";
import FormButton from "../forms/FormButton";

const ContactModal = ({ darkMode, onClose }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully! We'll get back to you soon.");
      setContactForm({ name: "", email: "", subject: "", message: "" });
      onClose();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-2xl rounded-3xl shadow-2xl border backdrop-blur-sm ${
          darkMode
            ? "bg-gray-800/90 border-gray-700/50"
            : "bg-white/90 border-gray-200/50"
        }`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 rounded-3xl overflow-hidden">
          <Squares
            dotSize={2}
            gap={20}
            baseColor={darkMode ? "#6366f1" : "#8b5cf6"}
            activeColor={darkMode ? "#a855f7" : "#6366f1"}
            proximity={100}
            shockRadius={200}
            shockStrength={3}
            resistance={500}
            returnDuration={1.2}
          />
        </div>

        <div className="relative z-10 p-8 lg:p-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2
                className={`text-3xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Get in Touch
              </h2>
              <p
                className={`text-lg ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We'd love to hear from you. Send us a message!
              </p>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-xl transition-all duration-200 ${
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleInputChange}
                label="Your Name"
                placeholder="Enter your name"
                required
                darkMode={darkMode}
                icon={FiUser}
              />

              <FormInput
                id="email"
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleInputChange}
                label="Email Address"
                placeholder="Enter your email"
                required
                darkMode={darkMode}
                icon={FiMail}
              />
            </div>

            <FormInput
              id="subject"
              name="subject"
              value={contactForm.subject}
              onChange={handleInputChange}
              label="Subject"
              placeholder="What's this about?"
              required
              darkMode={darkMode}
            />

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-4 pl-12 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none ${
                    darkMode
                      ? "bg-gray-900/50 border-gray-600 text-gray-100 placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Tell us more about your inquiry..."
                />
                <FiMessageSquare
                  className={`absolute left-4 top-6 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                  size={18}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <FormButton
                type="button"
                onClick={onClose}
                variant="secondary"
                className="sm:w-auto px-6 py-3"
              >
                Cancel
              </FormButton>
              <FormButton
                type="submit"
                loading={isSubmitting}
                loadingText="Sending..."
                className="sm:w-auto px-8 py-3 flex items-center justify-center space-x-2"
              >
                <FiSend size={18} />
                <span>Send Message</span>
              </FormButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

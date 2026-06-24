import { useState, useEffect } from "react";
import { DARK_PALETTE, LIGHT_PALETTE } from "../utils/darkPalette";

const applyPalette = (palette) => {
  if (!document || !document.documentElement) return;
  const root = document.documentElement;
  Object.entries(palette).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
};

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("shorty-dark-mode");
      if (savedTheme !== null) return JSON.parse(savedTheme);
    } catch (e) {
      // ignore
    }
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    // toggle class for utilities that rely on `.dark`
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");

    // apply CSS variables for palette
    applyPalette(darkMode ? DARK_PALETTE : LIGHT_PALETTE);

    try {
      localStorage.setItem("shorty-dark-mode", JSON.stringify(darkMode));
    } catch (e) {
      // ignore
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;

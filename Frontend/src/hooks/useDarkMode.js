import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("shorty-dark-mode");
        if (savedTheme !== null) {
            return JSON.parse(savedTheme);
        }
        // If no saved preference, check system preference
        return (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
    });

    useEffect(() => {
        localStorage.setItem("shorty-dark-mode", JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return [darkMode, toggleDarkMode];
};

export default useDarkMode;

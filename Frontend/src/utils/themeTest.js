// Simple test to verify localStorage theme functionality
export const testThemeStorage = () => {
    console.log("Testing theme storage...");

    // Test saving theme
    localStorage.setItem("shorty-dark-mode", JSON.stringify(true));
    const saved = localStorage.getItem("shorty-dark-mode");
    console.log("Saved theme:", saved);

    // Test retrieving theme
    const retrieved = JSON.parse(saved);
    console.log("Retrieved theme:", retrieved);

    // Test system preference detection
    const systemPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log("System prefers dark mode:", systemPrefersDark);

    // Clean up
    localStorage.removeItem("shorty-dark-mode");

    return {
        canSave: saved === "true",
        canRetrieve: retrieved === true,
        systemPrefersDark,
    };
};

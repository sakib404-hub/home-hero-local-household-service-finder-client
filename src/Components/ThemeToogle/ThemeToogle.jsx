import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light"); // default theme

    // Load theme from localStorage if exists
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.className = savedTheme; // add class to html
        }
    }, []);

    const handleToggle = (e) => {
        const newTheme = e.target.checked ? "dark" : "light"; // or "synthwave"
        setTheme(newTheme);
        document.documentElement.className = newTheme; // add class to <html>
        localStorage.setItem("theme", newTheme); // save preference
    };

    return (
        <label className="toggle text-base-content">
            <input
                type="checkbox"
                checked={theme === "dark"} // checked if dark
                onChange={handleToggle}
                className="theme-controller"
            />
            {/* Sun Icon */}
            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
            </svg>
            {/* Moon Icon */}
            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
            </svg>
        </label>
    );
};

export default ThemeToggle;

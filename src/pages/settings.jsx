import { useState, useEffect } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [font, setFont] = useState(
    localStorage.getItem("font") || "Poppins"
  );

  const fonts = [
    "Poppins", "Roboto", "Montserrat", "Oswald", "Lato",
    "Raleway", "Nunito", "Ubuntu", "Merriweather",
    "Open Sans", "Playfair Display", "Inter",
    "Fira Sans", "Source Sans Pro", "PT Sans", "Work Sans",
    "Times New Roman", "Comic Sans MS", "Courier New"
  ];

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("font", font);
    document.body.style.setProperty("--font-family", font);
  }, [font]);

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <div className="setting-item">
        <h3>Theme</h3>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode ☀" : "Switch to Dark Mode 🌙"}
        </button>
      </div>

      <div className="setting-item">
        <h3>Font Style</h3>
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          {fonts.map((f, i) => (
            <option key={i} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Settings;
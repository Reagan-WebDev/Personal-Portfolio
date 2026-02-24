import { useState, useEffect } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [font, setFont] = useState(
    localStorage.getItem("font") || "Poppins"
  );

  const [themeColor, setThemeColor] = useState(
  localStorage.getItem("themeColor") || "#4f46e5"
);

  const fonts = [
    "Poppins", "Roboto", "Montserrat", "Oswald", "Lato",
    "Raleway", "Nunito", "Ubuntu", "Merriweather",
    "Open Sans", "Playfair Display", "Inter",
    "Fira Sans", "Source Sans Pro", "PT Sans", "Work Sans",
    "Times New Roman", "Comic Sans MS", "Courier New"
  ];

  const themes = [
  { name: "Indigo", color: "#4f46e5" },
  { name: "Emerald", color: "#10b981" },
  { name: "Rose", color: "#f43f5e" },
  { name: "Amber", color: "#f59e0b" },
  { name: "Cyan", color: "#06b6d4" },
  { name: "Grey", color: "#6b7280" }
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

  useEffect(() => {
  localStorage.setItem("themeColor", themeColor);
  document.documentElement.style.setProperty("--primary-color", themeColor);
}, [themeColor]);

return (
  <div className="settings-wrapper">
    <div className="settings-card">
      <h1>⚙ Settings</h1>

      {/* THEME */}
      <div className="setting-row">
        <div>
          <h3>Dark Mode</h3>
          <p>Switch between light and dark theme</p>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
      </div>

      {/* FONT */}
      <div className="setting-row">
        <div>
          <h3>Font Style</h3>
          <p>Select your preferred font</p>
        </div>

        <select value={font} onChange={(e) => setFont(e.target.value)}>
          {fonts.map((f, i) => (
            <option key={i} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

                <div className="setting-row column">
  <div>
    <h3>Theme Color</h3>
    <p>Choose your favorite color theme</p>
  </div>

  <div className="theme-options">
    {themes.map((t, i) => (
      <div
        key={i}
        className={`theme-circle ${
          themeColor === t.color ? "active" : ""
        }`}
        style={{ backgroundColor: t.color }}
        onClick={() => setThemeColor(t.color)}
      />
    ))}
  </div>
</div>

    </div>
  </div>
);
}

export default Settings;
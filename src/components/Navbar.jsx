import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const location = useLocation();

  /* ================= DARK MODE ================= */

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  /* ================= FONT ================= */

  const [font, setFont] = useState(() => {
    return localStorage.getItem("font") || "Poppins";
  });

  useEffect(() => {
    localStorage.setItem("font", font);
    document.body.style.setProperty("--font-family", font);
  }, [font]);

  const changeFont = (e) => {
    setFont(e.target.value);
  };

  /* ================= MENU ================= */

  const [menuOpen, setMenuOpen] = useState(false);

  const fonts = [
    "Poppins", "Roboto", "Montserrat", "Oswald", "Lato",
    "Raleway", "Nunito", "Ubuntu", "Merriweather",
    "Open Sans", "Playfair Display", "Inter",
    "Fira Sans", "Source Sans Pro", "PT Sans", "Work Sans",
    "Times New Roman", "Comic Sans MS", "Webdings", "Wingdings", "Courier New"
  ];

  /* ================= SMOOTH SCROLL ================= */

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Reagan.dev</h2>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        
        {/* HOME */}
        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("home")}>Home</a>
        ) : (
          <Link to="/">Home</Link>
        )}

        {/* ABOUT */}
        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("about")}>About</a>
        ) : (
          <Link to="/about">About</Link>
        )}

        {/* SKILLS */}
        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("skills")}>Skills</a>
        ) : (
          <Link to="/skills">Skills</Link>
        )}

        {/* PROJECTS */}
        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("projects")}>Projects</a>
        ) : (
          <Link to="/projects">Projects</Link>
        )}

        {/* CONTACT BUTTON */}
        <Link to="/contact" className="contact-btn">
          Contact
        </Link>

        {/* TOGGLES */}
        <div className="toggles">
          <button onClick={toggleDarkMode} className="toggle-btn">
            {darkMode ? "☀" : "🌙"}
          </button>

          <select value={font} onChange={changeFont}>
            {fonts.map((f, i) => (
              <option key={i} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;

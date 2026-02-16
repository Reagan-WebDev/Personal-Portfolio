import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [font, setFont] = useState("Poppins");
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const fonts = [
    "Poppins", "Roboto", "Montserrat", "Oswald", "Lato",
    "Raleway", "Nunito", "Ubuntu", "Merriweather",
    "Open Sans", "Playfair Display", "Inter",
    "Fira Sans", "Source Sans Pro", "PT Sans"
  ];

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const changeFont = (e) => {
    document.body.style.setProperty("--font-family", e.target.value);
    setFont(e.target.value);
  };

  // Smooth scroll for homepage sections
  const handleScroll = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
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
              <option key={i}>{f}</option>
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

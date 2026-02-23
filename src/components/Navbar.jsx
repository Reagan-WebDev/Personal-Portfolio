import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
        
        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("home")}>Home</a>
        ) : (
          <Link to="/">Home</Link>
        )}

        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("about")}>About</a>
        ) : (
          <Link to="/about">About</Link>
        )}

        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("skills")}>Skills</a>
        ) : (
          <Link to="/skills">Skills</Link>
        )}

        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("projects")}>Projects</a>
        ) : (
          <Link to="/projects">Projects</Link>
        )}

        <Link to="/contact" className="contact-btn">
          Contact
        </Link>

        {/* NEW SETTINGS BUTTON */}
        <Link to="/settings" className="settings-btn">
            <FiSettings size={20} />
        </Link>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
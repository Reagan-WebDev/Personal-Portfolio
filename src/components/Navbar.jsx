import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  /*const [menuOpen, setMenuOpen] = useState(false);*/
  const [isOpen, setIsOpen] = useState(false);
  const [showHobbyPopup, setShowHobbyPopup] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    /*<nav className={isOpen ? "nav-links active" : "nav-links"}>*/
    <nav className="navbar">
      <h2 className="logo">Reagan.dev</h2>

      <div nav className={isOpen ? "nav-links active" : "nav-links"}>
        
        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("home")}>Home</a>
        ) : (
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        )}

        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("about")}>About</a>
        ) : (
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        )}

      
      
        <a
          onClick={() => {
            setShowHobbyPopup(true);
            setIsOpen(false); // closes mobile navbar
          }}
        >
          Hobbies
        </a>
        

        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("skills")}>Skills</a>
        ) : (
          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
        )}

        {location.pathname === "/" ? (
          <a onClick={() => handleScroll("projects")}>Projects</a>
        ) : (
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        )}

        <Link to="/contact" className="contact-btn" onClick={() => setIsOpen(false)}>
          Contact
        </Link>

        {/* NEW SETTINGS BUTTON */}
        <Link to="/settings" className="settings-btn" onClick={() => setIsOpen(false)}>
            <FiSettings size={20} />
        </Link>
      </div>
      {showHobbyPopup && (
  <div className="hobby-popup">
    <p>Continue to Hobbies page?</p>

    <div className="popup-buttons">
      <button
        className="popup-close"
        onClick={() => setShowHobbyPopup(false)}
      >
        Close
      </button>

      <button
        className="popup-yes"
        onClick={() => {
          setShowHobbyPopup(false);
          navigate("/hobbies");
        }}
      >
        Yes
      </button>
    </div>
  </div>
)}

     <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
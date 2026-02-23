import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings"; // 🔥 NEW

function App() {
  useEffect(() => {
  const savedTheme = localStorage.getItem("darkMode") === "true";
  const savedFont = localStorage.getItem("font") || "Poppins";

  // Apply dark mode
  if (savedTheme) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // Apply font
  document.body.style.setProperty("--font-family", savedFont);

}, []);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} /> {/* 🔥 NEW */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
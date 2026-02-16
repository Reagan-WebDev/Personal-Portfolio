import "../styles/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">MyPortfolio</h2>
          <p>
            Passionate Frontend Developer building modern and responsive web applications.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Me</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a href="https://github.com/Reagan-WebDev" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/reagan-oluoch-52ab1331a/" target="_blank">LinkedIn</a>
            <a href="https://x.com/ReaganOluo57915" target="_blank">Twitter</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {year} MyPortfolio | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

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
            <a href="https://github.com/Reagan-WebDev" target="_blank"><i class="fa-brands fa-square-github"></i></a>
            <a href="https://www.linkedin.com/in/reagan-oluoch-52ab1331a/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://x.com/ReaganOluo57915" target="_blank"><i class="fa-brands fa-square-twitter"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100093963591572" target="_blank"><i class="fa-brands fa-square-facebook"></i></a>
            <a href="https://www.instagram.com/reaganoluochotieno/" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {year} ReaganOT | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

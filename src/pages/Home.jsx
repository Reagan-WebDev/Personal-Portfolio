import { Link } from "react-router-dom";

function Home() {
  return (
    <>

   

      {/* HERO SECTION */}
      <section id="home" className="hero">

         <div className="myImage">
            <img src="public/MyProfilePic.jpg" alt="MyProfilePic" />
          </div>

        <h1>Hi, I'm Reagan Otieno</h1>
        <p>
          Telecommunications & IT Student passionate about building
          interactive web applications with React.
        </p>
        <Link to="/projects" className="primary-btn animated-border">
          View My Work
        </Link>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a developer who enjoys solving real-world problems
          and building scalable web applications.
        </p>
        <Link to="/about" className="read-more">
          Read More →
        </Link>
      </section>

      {/* SKILLS PREVIEW */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="home-skills-grid">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
        </div>

        <Link to="/skills" className="read-more">
          Read More →
        </Link>
      </section>

      {/* PROJECTS PREVIEW */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="home-projects-grid">
          <div className="project-card">Location Tracker</div>
          <div className="project-card">Valentines Proposal Surprise</div>
          <div className="project-card">To-Do-List App</div>
        </div>

        <Link to="/projects" className="read-more">
          Read More →
        </Link>
      </section>

      {/* CONTACT PREVIEW */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Let’s build something amazing together.</p>
        <Link to="/contact" className="primary-btn animated-border">
          Contact Me
        </Link>
      </section>

    </>
  );
}

export default Home;


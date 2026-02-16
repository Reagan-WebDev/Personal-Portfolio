import Footer from "../components/Footer";

function Projects() {
  return (
    <div className="projects-page">

      {/* COMPLETED PROJECTS */}
      <section className="section">
        <h1>My Projects</h1>

        <div className="projects-grid">

          <a href="https://github.com/Reagan-WebDev" className="project-card">
            <h3>Location Tracker</h3>
            <p>Track and monitor locations dynamically.</p>
          </a>

          <a href="https://github.com/Reagan-WebDev" className="project-card">
            <h3>My Portfolio</h3>
            <p>Personal portfolio built using React.</p>
          </a>

          <a href="https://github.com/Reagan-WebDev" className="project-card">
            <h3>Valentines Proposal Surprise</h3>
            <p>Interactive React-based proposal website.</p>
          </a>

          <a href="https://github.com/Reagan-WebDev" className="project-card">
            <h3>Counter Machine</h3>
            <p>Simple counter application using React.</p>
          </a>

          <a href="https://github.com/Reagan-WebDev" className="project-card">
            <h3>Calculator</h3>
            <p>Functional calculator built with JavaScript.</p>
          </a>

          <a href="https://github.com/Reagan-WebDev" className="project-card">
            <h3>To-Do-List App</h3>
            <p>Task management app with dynamic updates.</p>
          </a>

        </div>
      </section>

      {/* CURRENTLY DOING */}
      <section className="section current-section">
        <h2>Currently Working On</h2>

        <div className="projects-grid">

          <a href="#" className="project-card current">
            <h3>Full Stack Login Form</h3>
            <p>Authentication system using MERN stack.</p>
          </a>

        </div>
      </section>

      <Footer />

    </div>



  );
}

export default Projects;

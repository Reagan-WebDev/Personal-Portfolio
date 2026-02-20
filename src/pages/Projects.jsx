

function Projects() {
  return (
    <div className="projects-page">

      {/* COMPLETED PROJECTS */}
      <section className="section">
        <h1>My Projects</h1>

        <div className="projects-grid">

          <a href="https://github.com/Reagan-WebDev" className="project-card" target="_blank">
            <h3>Location Tracker</h3>
            <p>Track and monitor locations dynamically.</p>
          </a>

          <a href="https://github.com/Reagan-WebDev" className="project-card" target="_blank">
            <h3>My Portfolio</h3>
            <p>Personal portfolio built using React.</p>
          </a>

          <a href="https://requestaudiliavalentines.netlify.app/" className="project-card" target="_blank">
            <h3>Valentines Proposal Surprise</h3>
            <p>Interactive React-based proposal website.</p>
          </a>

          <a href="https://counterappreagan.netlify.app/" className="project-card" target="_blank">
            <h3>Counter Machine</h3>
            <p>Simple counter application using React.</p>
          </a>

          <a href="https://github.com/Reagan-WebDev" className="project-card" target="_blank">
            <h3>Calculator</h3>
            <p>Functional calculator built with JavaScript.</p>
          </a>

          <a href="https://todolistappreagan.netlify.app/" className="project-card" target="_blank">
            <h3>To-Do-List App</h3>
            <p>Task management app with dynamic updates.</p>
          </a>

           <a href="https://agecalculatorreagan.netlify.app/" className="project-card" target="_blank">
            <h3>Age Calculator</h3>
            <p>Calculates the age when you enter your birth year.</p>
          </a>

           <a href="https://expensetrackerreagan.netlify.app/" className="project-card" target="_blank">
            <h3>Expense Tracker</h3>
            <p>Helps Track and manage personal expenses.</p>
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

    </div>



  );
}

export default Projects;

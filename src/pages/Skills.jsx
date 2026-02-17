

function Skills() {
  return (
    <div className="skills-page">

      {/* MAIN SKILLS */}
      <section className="section">
        <h1>My Skills</h1>

        <div className="skills-grid">

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            className="skill-box"
          >
            HTML
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            className="skill-box"
          >
            CSS
          </a>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            className="skill-box"
          >
            JavaScript
          </a>

          <a
            href="https://react.dev/"
            target="_blank"
            className="skill-box"
          >
            React
          </a>

          <a
            href="https://www.mysql.com/"
            target="_blank"
            className="skill-box"
          >
            MySQL
          </a>

          <a
            href="https://www.mongodb.com/"
            target="_blank"
            className="skill-box"
          >
            MongoDB
          </a>

        </div>
      </section>


      {/* CURRENTLY LEARNING */}
      <section className="section learning-section">
        <h2>Currently Learning</h2>

        <div className="skills-grid">

          <a
            href="https://nodejs.org/"
            target="_blank"
            className="skill-box learning"
          >
            NodeJS
          </a>

          <a
            href="https://expressjs.com/"
            target="_blank"
            className="skill-box learning"
          >
            ExpressJS
          </a>

        </div>
      </section>

    </div>
  );
}

export default Skills;

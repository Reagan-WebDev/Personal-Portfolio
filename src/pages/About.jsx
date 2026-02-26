

function About() {
  return (
    <>
      <section className="about-page section">

        <h1 className="page-title">About Me</h1>

        <div className="about-container">

          <div className="about-text">
            <h2>Hello, I'm Reagan 👋</h2>
            <p>
              I am a passionate Frontend Developer who loves building
              clean, modern and responsive web applications using
              React and modern web technologies.
            </p>

            <p>
              My goal is to create user-friendly digital experiences
              that solve real-world problems and look visually appealing.
            </p>
          </div>

          <div className="about-highlights">

            <div className="highlight-card">
              <h3>💼 Experience</h3>
              <p>
                Built multiple responsive projects using React, CSS,
                and modern UI principles.
              </p>
            </div>

            <div className="highlight-card">
              <h3>🎓 Education</h3>
              <p>
                Continuously learning web development, UI/UX design,
                and best coding practices.
              </p>
            </div>

            <div className="highlight-card">
              <h3>🚀 Goals</h3>
              <p>
                To become a full-stack developer and contribute to
                impactful tech solutions.
              </p>
            </div>

          </div>
            <a
                href="public/ReaganCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn animated-border"
              >
                View My CV
              </a>
        </div>

      </section>

    </>
  );
}

export default About;

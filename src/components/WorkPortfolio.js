function WorkPortfolio() {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 style={{ marginTop: "65px" }} className="text-center project-item">
          PORTFOLIO
        </h1>
        <p className="portfolio-sub-description">
          Below are some examples of my work. Stay tuned for more!{" "}
        </p>
        <hr className="divider-line" />

        <div className="row">
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://mighty-cliffs-23244.herokuapp.com/">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/score-social.jpg`}
                  alt="ScoreSocial application"
                />
                <p>ScoreSocial</p>
              </a>
              <a
                href="https://github.com/dianavw8/ScoreSocial"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://floating-dusk-47990.herokuapp.com/">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/book-search-engine.jpg`}
                  alt="Image of Book Search Engine"
                />
                <p>Book Search Engine</p>
              </a>
              <a
                href="https://github.com/vargasdm/Book-Search-Engine"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://jatechallenge.herokuapp.com/">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/jate.jpg`}
                  alt="Image of Text Editor"
                />
                <p>Text Editor</p>
              </a>
              <a
                href="https://github.com/vargasdm/Text-Editor"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://vargasdm.github.io/New-Portfolio/">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/portfolio.jpg`}
                  alt="Image of Portfolio"
                />
                <p>Portfolio</p>
              </a>
              <a
                href="https://github.com/vargasdm/New-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://github.com/vargasdm/Employee-Tracker">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/employee-tracker.jpg`}
                  alt="Image of Employee Tracker"
                />
                <p>Employee Tracker</p>
              </a>
              <a
                href="https://github.com/vargasdm/Employee-Tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project-item">
              <a href="https://vargasdm.github.io/Daily-Planner/">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/daily-planner.jpg`}
                  alt="Image of Daily Planner"
                />
                <p>Daily Planner</p>
              </a>
              <a
                href="https://github.com/vargasdm/Daily-Planner"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="project-item">
                <a href="https://vargasdm.github.io/In-or-Out/">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/in-or-out.jpg`}
                    alt="Image of In or Out"
                  />
                  <p>In or Out</p>
                </a>
                <a
                  href="https://github.com/vargasdm/In-or-Out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="project-item">
                <a href="https://guarded-forest-85262.herokuapp.com/">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/tech-blog.jpg`}
                    alt="Image of Tech Blog application"
                  />
                  <p>Tech Blog</p>
                </a>
                <a
                  href="https://github.com/vargasdm/Tech-Blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPortfolio;

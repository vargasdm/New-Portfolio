function AboutMe() {
  return (
    <div className="AboutMe">
      <div id="about">
        <div className="container">
          <div className="text-center">
            <h1 style={{ marginTop: "65px" }}>ABOUT ME</h1>
            <hr className="divider-line" />
            <img
              className="not-grey big-img"
              src={`${process.env.PUBLIC_URL}/assets/profile-pic2.jpg`}
              alt="avatar"
            />
            <hr className="divider-line" />
            <div className="about-text">
              <p>
                I'm Daniel Vargas, a 24-year old Research Technician from
                Raleigh who is looking to make a switch to back-end software
                developing. I graduated from UNC Chapel Hill in 2021 with a B.S.
                in Bology and a minor in Chemistry. Since then I have been
                working in a genetic research laboratory at UNC Chapel Hill,
                where I study the effects of pollutants on the respiratory
                system. While working I have been working to make the change to
                Software Development and am currently completing a Full-Stack
                Web Development bootcamp At UNC Charlotte where I have been able
                to develop and practice new skills. I will be a full-stack
                developer, but my strengths lean more towards back-end design.
                I'll be graduating in April and am looking forward to my new
                future career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

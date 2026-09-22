
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am currently a <b>Software Engineer</b> at
      <a href="https://www.moslinetravel.com/"> Mosline</a>, where I help build
      and maintain digital platform that supports the company.{" "}
      <a href="https://www.chinamall.co.ke/"> China Square</a> and{" "}
      <a href="https://xgamertechnologies.com/"> Xgamer Technologies.</a>
    </p>
  );
  const two = (
    <p>
      In my free time, I enjoy exploring new technologies, building personal projects, and contributing to open-source software.
      i also enjoy photography and creating content.
    </p>
  );

  const techStack = [
    "Python",
    "Typescript",
    "React.js",
    "Next.js",
    "Javascript ES7+",
    "MERN Stack",
    "REST APIs",
    "PostgreSQL",
    "Prisma ORM",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Linda" src={"/assets/me2.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;


import "../styles/About.css";
import profileImage from "../assets/me2.png";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am currently a <b>Software Engineer/Graphic Designer </b> at{" "}
      <a href="https://www.moslinetravel.com/">Mosline</a>, where I created and launched the website and
      maintain digital experiences that support business operations and customer
      engagement across the company and creation of graphic design i.e posters,flyers,bronchure, previously worked with{" "}
      <a href="https://www.chinamall.co.ke/">China Square</a> and{" "}
      <a href="https://xgamertechnologies.com/">Xgamer Technologies</a>.
    </p>
  );
  const two = (
    <p>
      Outside of work, I enjoy exploring new technologies, building personal
      projects, and creating content around design, software, and digital
      experiences.
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
    "Node.js",
    "supabase",
    "Tailwind CSS",
    "Material UI",
    "Git & GitHub",
    "Docker",
    "AWS",
    "Linux",
    "Firebase",
    "Figma",
    "MongoDB",
    "Canva",
    "Figma",
    "Adobe illustrator "
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
            <img alt="Linda" src={profileImage} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;

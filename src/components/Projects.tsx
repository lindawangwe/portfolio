import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Carousel } from "react-bootstrap";
import ExternalLinks from "./ExternalLinks";
import mamaUncleImage from "../assets/mamauncle.png";
import veiImage from "../assets/vei.png";
import businessConsultantImage from "../assets/businesscons.png";
import portfolioImage from "../assets/prompttile.png";

interface SpotlightProject {
  title: string;
  desc: string;
  techStack: string;
  link: string;
  open?: string;
  image: string;
}

interface Project {
  title: string;
  desc: string;
  techStack: string;
  link: string;
  open?: string;
}

const spotlightProjects: Record<string, SpotlightProject> = {
  Stores: {
    title: "Mama Uncle Stores",
    desc: "A full-stack e-commerce platform for browsing and purchasing products in a clean, conversion-focused shopping experience.",
    techStack: "MERN Stack",
    link: "https://github.com/lindawangwe/mama-uncle-stores",
    open: "https://mama-uncle-stores.vercel.app/",
    image: mamaUncleImage,
  },
  vei: {
    title: "VEI Platform",
    desc: "A digital ecosystem combining corporate marketing, user authentication, media, networking, learning, events, and opportunity discovery in one platform.",
    techStack: "Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Supabase, Auth.js",
    link: "https://github.com/lindawangwe/vei-platform",
    image: veiImage,
  },
  consultant: {
    title: "Business Consultant",
    desc: "A responsive consulting website focused on clear messaging, SEO, performance, and user engagement for a modern service brand.",
    techStack: "React.js, Bootstrap, Node.js, Express.js, MongoDB",
    link: "https://github.com/lindawangwe/business-consultant",
    open: "https://business-consultant-six.vercel.app/",
    image: businessConsultantImage,
  },
  Prompttile: {
    title: "Prompttile",
    desc: "An AI-powered platform for generating, organizing, and managing prompts in a streamlined creative workflow.",
    techStack: "Next.js, TypeScript, Full-stack",
    link: "https://github.com/lindawangwe/my-portfolio",
    open: "https://next-js-prompttile.vercel.app/",
    image: portfolioImage,
  },
};

const projects: Record<string, Project> = {
  "mama-uncle-stores": {
    title: "Mama Uncle Stores",
    desc: "A full-stack e-commerce app designed for browsing products and delivering a smooth online shopping experience.",
    techStack: "MERN Stack",
    link: "https://github.com/lindawangwe/mama-uncle-stores",
    open: "https://mama-uncle-stores.vercel.app/",
  },
  "vei-platform": {
    title: "VEI Platform",
    desc: "A scalable digital ecosystem unifying brand presence, community tools, learning experiences, and business opportunities in one product.",
    techStack: "Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Supabase, Auth.js",
    link: "https://github.com/lindawangwe/vei-platform",
  },
  "business-consultant": {
    title: "Business Consultant",
    desc: "A responsive business website built to improve visibility, engagement, and conversion through strong UX and clean front-end architecture.",
    techStack: "React.js, Bootstrap, Node.js, Express.js, MongoDB",
    link: "https://github.com/lindawangwe/business-consultant",
    open: "https://business-consultant-six.vercel.app/",
  },
};

const Projects: React.FC = () => {
  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ projects</span>

        <a
          href="https://github.com/lindawangwe"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>

      <div className="spotlight-projects-desktop">
        <Carousel interval={null}>
          {Object.keys(spotlightProjects).map((key) => (
            <Carousel.Item key={key}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key].image}
                alt={key}
              />

              <Carousel.Caption>
                <h3>{spotlightProjects[key].title}</h3>

                <div>
                  {spotlightProjects[key].desc}
                  <div className="techStack">
                    {spotlightProjects[key].techStack}
                  </div>
                </div>

                <ExternalLinks
                  githubLink={spotlightProjects[key].link}
                  openLink={spotlightProjects[key].open}
                />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="spotlight-projects-mobile">
        {Object.keys(spotlightProjects).map((key, i) => (
          <FadeInSection key={key} delay={`${(i + 1) * 100}ms`}>
            <div className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                </div>

                <ExternalLinks
                  githubLink={spotlightProjects[key].link}
                  openLink={spotlightProjects[key].open}
                />
              </div>

              <a
                href={
                  spotlightProjects[key].open ||
                  spotlightProjects[key].link
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="card-title">
                  {spotlightProjects[key].title}
                </div>

                <div className="spotlight-mobile-image">
                  <img src={spotlightProjects[key].image} alt={key} />
                </div>
              </a>

              <div className="card-desc">
                {spotlightProjects[key].desc}
              </div>
              <div className="card-tech">
                {spotlightProjects[key].techStack}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={key} delay={`${(i + 1) * 100}ms`}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                  </div>

                  <ExternalLinks
                    githubLink={projects[key].link}
                    openLink={projects[key].open}
                  />
                </div>

                <div className="card-title">{projects[key].title}</div>
                <div className="card-desc">{projects[key].desc}</div>
                <div className="card-tech">{projects[key].techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
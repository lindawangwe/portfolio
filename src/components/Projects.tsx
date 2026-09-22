import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Carousel } from "react-bootstrap";
import ExternalLinks from "./ExternalLinks";

interface SpotlightProject {
  title: string;
  desc: string;
  techStack: string;
  link: string;
  open?: string;
  image: string;
}

interface Project {
  desc: string;
  techStack: string;
  link: string;
  open?: string;
}

const spotlightProjects: Record<string, SpotlightProject> = {
  Stores: {
    title: "mama uncle stores",
    desc: "A fullstack e-commerce application that allows users to browse and purchase products from a variety of products",
    techStack: "MERN Stack",
    link: "https://github.com/lindawangwe/mama-uncle-stores",
    image: "/assets/blob.png",
  },
  "vei": {
    title: "vei-platform",
    desc: "A full digital ecosystem built combining a corporate website, authenticated user platform, media, business networking, academy, events, and international opportunities into one scalable web application",
    techStack: "Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Supabase, Auth.js",
    link: "https://github.com/lindawangwe/vei-platform",
    image: "/assets/nomansland.png",
  },
  "consultant": {
    title: "Business Consultant",
    desc: "Built a responsive business consulting platform using modern web technologies, with an emphasis on performance, scalability, SEO, and user engagement.",
    techStack: "React.js, Bootstrap, Node.js, Express.js, MongoDB",
    link: "https://github.com/lindawangwe/business-consultant",
    open: "https://talltales.herokuapp.com/",
    image: "/assets/talltales.png",
  },
  Portfolio: {
    title: "portfolio.js",
    desc: "A small JS library that helps with clear and succinct data presentation.",
    techStack: "NODE.JS (EXPRESS.JS)",
    link: "https://github.com/lindawangwe/my-portfolio",
    open: "https://afternoon-ocean-92382.herokuapp.com/",
    image: "/assets/portfolio.png",
  },
};

const projects: Record<string, Project> = {
  "mama-uncle-stores": {
    desc: "A fullstack e-commerce application that allows users to browse and purchase products from a variety of products.",
    techStack: "MERN Stack",
    link: "https://github.com/lindawangwe/mama-uncle-stores",
    open: "https://mama-uncle-stores.herokuapp.com/",
  },
  "vei-platform": {
    desc: "A full digital ecosystem built combining a corporate website, authenticated user platform, media, business networking, academy, events, and international opportunities into one scalable web application",
    techStack: "Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Supabase, Auth.js",
    link: "https://github.com/lindawangwe/vei-platform",
  
  },
  "business-consultant": {
    desc: "Built a responsive business consulting platform using modern web technologies, with an emphasis on performance, scalability, SEO, and user engagement.",
    techStack: "React.js, Bootstrap, Node.js, Express.js, MongoDB",
    link: "https://github.com/lindawangwe/business-consultant",
    open: "https://talltales.herokuapp.com/",
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

                <div className="card-title">{key}</div>
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
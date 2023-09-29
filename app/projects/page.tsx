import React from "react";
import classes from "./projects.module.css";
import { projectsData } from "@/app/projects/projects-data";
import ProjectCard from "@/app/projects/_project-card/project-card";

const Projects = () => {
  return (
    <div className={classes.projectsContainer}>
      <h2>Projects</h2>
      <div className={classes.projectsGrid}>
        {projectsData?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

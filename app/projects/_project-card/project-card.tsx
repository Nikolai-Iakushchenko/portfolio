import React from "react";
import classes from "./project-card.module.css";
import { ProjectData } from "@/app/projects/projects-data";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={classes.projectCard}>
      <div className={classes.projectHeader}>
        <i className="fa-regular fa-folder-open folder-icon"></i>
        <div className={classes.smallIcons}>
          <a href={project.gitHubLink}>
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;

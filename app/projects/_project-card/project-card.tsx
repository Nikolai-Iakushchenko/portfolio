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
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className={classes.githublink}> <a href={project.gitHubLink}>
               {project.gitHubLink}
      </a></p>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import classes from "./project-card.module.css";
import { ProjectData } from "@/app/projects/projects-data";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={classes.projectCard}>
      <a target="_blank" href={project.hostingLink}>
        {project.imgPath && (
          <div className={classes.imageContainer}>
            <Image
              src={project.imgPath}
              alt={project.title}
              width={240}
              height={150}
              unoptimized = {true}
            />
          </div>
        )}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </a>
      <p className={classes.githublink}>
        <a target="_blank" href={project.gitHubLink}>
          {project.gitHubLink}
        </a>
      </p>
    </div>
  );
};

export default ProjectCard;

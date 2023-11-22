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
      {project.imgLink && <Image src={project.imgLink} alt={project.title} width={240} height={150}/>}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className={classes.githublink}> <a href={project.gitHubLink}>
               {project.gitHubLink}
      </a></p>
    </div>
  );
};

export default ProjectCard;

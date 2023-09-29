import React from "react";
import classes from "./about.module.css";

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <h2>About Me</h2>
      <div className={classes.flexAbout}>
        <div className={classes.aboutText}>
          <p>
            As a developer, I have always been passionate about creating elegant
            and effective solutions to complex problems. I have a strong
            foundation in software development, with a focus on web technologies
            such as React, JavaScript, and CSS. I enjoy working on front-end of
            applications, and I am always looking for ways to optimize
            performance, improve user experience, and ensure the highest level
            of code quality.
          </p>
          <p>
            Throughout my career, I have worked on a wide range of projects,
            from simple static websites to complex enterprise-level
            applications. I am always eager to learn and explore new
            technologies, and I am constantly seeking out opportunities to
            improve my skills and knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

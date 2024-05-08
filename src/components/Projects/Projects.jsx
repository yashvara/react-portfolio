import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../assets/projects/projects.json";
import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}> Recent Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <div key={id} className={styles.projectCard}>
              <Lottie options={defaultOptions} height={200} width={200} />
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

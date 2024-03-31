import React from "react";
import ProjectsAnimations from "../../../assets/projects/projects.json";
import Lottie from "lottie-react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, description, skills, source },
}) => {
  return (
    <div className={styles.container}>
      <Lottie animationData={ProjectsAnimations} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          Source Code
        </a>
      </div>
    </div>
  );
};

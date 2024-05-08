import React from "react";
import AboutAnimation from "../../../assets/about/about_animation.json";
import Lottie from "lottie-react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <Lottie
          loop={true}
          speed={3}
          style={{ width: 550, height: 550 }}
          animationData={AboutAnimation}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I bring expertise in crafting responsive and optimized projects,
                ensuring seamless user experiences across various devices.{" "}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                With proficiency in developing and optimized backend
                systems and APIs, I empower applications with robust
                functionality and performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I specialize in designing captivating landing pages that capture
                attention and drive engagement, enhancing user interaction and
                brand presence.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import Resume from "../../../assets/hero/Resume.pdf";

export const Hero = () => {
  const handleDownloadResume = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = Resume;
    downloadLink.download = "Resume.pdf";
    downloadLink.click();
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Greetings! I'm Yash Vara</h1>
        <p className={styles.description}>
          I'm an aspiring software developer, deeply invested in creating
          innovative solutions. Currently, I'm exploring ICT at Marwadi
          University and have served as the IEEEXtreme 17.0 SB Ambassador.
          Additionally, I lead the Pseudo Committee at the Competitive
          Programming Club, fostering excellence and collaboration in software
          development.
        </p>
        <div className={styles.links}>
          <a className={styles.link} onClick={handleDownloadResume}>
            My Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

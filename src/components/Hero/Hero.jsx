import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash Vara</h1>
        <p className={styles.description}>
          I am an aspiring software developer currently studying ICT at Marwadi
          University. Additionally, I proudly represent my university as an
          IEEEXtreme 17.0 SB Ambassador and serve as the Convener of Pseudo
          Committee within the Competitive Programming Club.
        </p>
        <a href="mailto:yashvara3378@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
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

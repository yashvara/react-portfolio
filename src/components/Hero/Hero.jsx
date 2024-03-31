import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Greetings! I'm Yash Vara</h1>
        <p className={styles.description}>
          A budding software developer with a passion for crafting innovative
          solutions. Currently, I'm immersing myself in the world of ICT at
          Marwadi University, I'm really proud to be the IEEEXtreme 17.0 SB
          Ambassador for my university. Moreover, I take on the role of Convener
          of the Pseudo Committee within the Competitive Programming Club, where
          I contribute to fostering a culture of excellence and collaboration in
          software development.
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

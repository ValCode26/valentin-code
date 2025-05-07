import React from "react";
import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome</h1>
        <p className={styles.description}>
          In the dance of light and shadow, photography gives voice to untold
          stories of the soul.
        </p>
        <a className={styles.ctaBtn} href="#Galleries">
          EXPLORE MORE
        </a>
      </div>
      <img className={styles.heroImg} src="/hero2.jpg" alt="hero-image" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t("about.AboutMe")}</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src="/about.image.icon.png"
          alt="image about me"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/camera.image.png" alt="image camera" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.title")}</h3>
              <p>{t("about.paragraph1")}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/photoshop.image.png" alt="image photoshop" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.photoEditingTitle")}</h3>
              <p>{t("about.paragraph2")}</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/website.developer.png" alt="website developer" />
            <div className={styles.aboutItemText}>
              <h3>{t("about.webDesignTitle")}</h3>
              <p>{t("about.webDesignDescription")}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

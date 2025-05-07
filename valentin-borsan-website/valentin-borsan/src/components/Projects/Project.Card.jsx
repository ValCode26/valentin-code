import React from "react";
import styles from "./Project.Card.module.css";

export const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, explore } = project;

  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={`Image of ${title}`} className={styles.Image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a
          className={styles.link}
          href={explore}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./GalleryPreview.module.css";

const images = [
  { src: "/gallery/gallery1.jpg", alt: "Imagine 1" },
  { src: "/gallery/gallery2.jpg", alt: "Imagine 2" },
  { src: "/gallery/gallery3.jpg", alt: "Imagine 3" },
  { src: "/gallery/gallery4.jpg", alt: "Imagine 4" },
  { src: "/gallery/gallery5.jpg", alt: "Imagine 5" },
  { src: "/gallery/gallery6.jpg", alt: "Imagine 6" },
  { src: "/gallery/gallery7.jpg", alt: "Imagine 7" },
  { src: "/gallery/gallery8.jpg", alt: "Imagine 8" },
];

const GalleryPreview = () => {
  return (
    <section className={styles.GalleryPreview}>
      <h2 className={styles.GalleryTitle}>Gallery Preview</h2>
      <div className={styles.GalleryGgrid}>
        {images.map((img, index) => (
          <div key={index} className={styles.GalleryIitem}>
            <img src={img.src} alt={img.alt} className={styles.GalleryImage} />
          </div>
        ))}
      </div>
      <div className={styles.GalleryButtonWrapper}>
        <a href="#" className={styles.GalleryButton}>
          Explore Gallery
        </a>
      </div>
    </section>
  );
};

export default GalleryPreview;

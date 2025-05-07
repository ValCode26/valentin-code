import { useState } from "react";
import React from "react";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="#">
        {t("navbar.title")} {/* Traducerea titlului */}
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "/closeicon.png" : "/menuicon.png"}
          alt="menu icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <li onClick={() => setMenuOpen(false)}>
            <a href="#about">{t("navbar.about")}</a>{" "}
            {/* Traducerea link-ului "About" */}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#projects">{t("navbar.projects")}</a>{" "}
            {/* Traducerea link-ului "Projects" */}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#galleries">{t("navbar.galleries")}</a>{" "}
            {/* Traducerea link-ului "Galleries" */}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#shop">{t("navbar.shop")}</a>{" "}
            {/* Traducerea link-ului "Shop" */}
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">{t("navbar.contact")}</a>{" "}
            {/* Traducerea link-ului "Contact" */}
          </li>
        </ul>
      </div>
      <div className={styles.languageSwitcher}>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("it")}>IT</button>
      </div>
    </nav>
  );
};

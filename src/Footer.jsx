import React from "react";
import styles from "./Footer.module.css";

export const Footer=()=> {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3 className={styles.logo}>MyWebsite</h3>
        <p className={styles.tagline}>
          Crafting awesome web experiences 🚀
        </p>
      </div>

      <div className={styles.links}>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} MyWebsite — All Rights Reserved.
      </p>
    </footer>
  );
};

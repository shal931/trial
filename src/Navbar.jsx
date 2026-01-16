import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar=()=> {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyWebsite</div>

      <ul className={`${styles.navLinks} ${open ? styles.open : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      {/* Hamburger for mobile */}
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={open ? styles.barOpen : styles.bar}></div>
        <div className={open ? styles.barOpen : styles.bar}></div>
        <div className={open ? styles.barOpen : styles.bar}></div>
      </div>
    </nav>
  );
};

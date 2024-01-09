import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        LA
      </a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ? "Images/Navbar/Iconclose.png" : "Images/Navbar/Iconmenu.png"} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#hobby">Hobby</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

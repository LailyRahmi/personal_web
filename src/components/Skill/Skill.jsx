import React from "react";

import styles from "./Skill.module.css";

export const Skill = () => {
  return (
    <section className={styles.container} id="skill">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <img src={"Images/Skills/gambar(1).png"} alt="Me sitting with a laptop" className={styles.skillImage} />
        <ul className={styles.skillItems}>
          <li className={styles.skillItem}>
            <img src={"Images/Skills/cursorIcon.png"} alt="Cursor icon" />
            <div className={styles.skillItemText}>
              <h3>Bahasa Pemrograman</h3>
              <p>Menguasai bahasa pemrograman Java, C, HTML, CSS</p>
            </div>
          </li>
          <li className={styles.skillItem}>
            <img src={"Images/Skills/uiIcon.png"} alt="ui icon" />
            <div className={styles.skillItemText}>
              <h3>Bahasa</h3>
              <p>Menguasai Bahasa Inggsris dan Bahasa Indonesia</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

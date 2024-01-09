import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"Images/Contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:lailyaulia4@gmail.com">email</a>
        </li>
        <li className={styles.link}>
          <img src={"Images/Contact/linkedinIcon.png"} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/laily-aulia-a3a333277/">linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={"Images/Contact/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/LailyRahmi">github</a>
        </li>
      </ul>
    </footer>
  );
};

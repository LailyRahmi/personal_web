import React from "react";
import styles from "./Hobby.module.css";

export const Hobby = () => {
  return (
    <section className={styles.container} id="hobby">
      <h2 className={styles.title}>Hobby</h2>
      <div className={styles.content}>
        <ul className={styles.hobbyItems}>
          <li className={styles.hobbyItem}>
            <img src={"Images/Hobby/hobby1.png"} alt="myhobby1" className={styles.hobbyImage} />
            <div className={styles.hobbyItemText}>
              <p>Drawing Random Things</p>
              <p>Saya menikmati menghabiskan waktu untuk membuat karya seni yang menggambarkan imajinasi serta memperlihatkan keindahan dari berbagai sudut pandang.</p>
            </div>
          </li>

          <li className={styles.hobbyItem}>
            <img src={"Images/Hobby/hobby2.png"} alt="myhobby2" className={styles.hobbyImage} />
            <div className={styles.hobbyItemText}>
              <p>Listening to Music</p>
              <p>Saya menikmati mendengarkan lagu karena dapat menjadi sumber inspirasi dan membuat suasana menjadi lebih hidup.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

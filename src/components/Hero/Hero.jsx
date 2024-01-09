import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, Saya Laily</h1>
        <p className={styles.description}>Mahasiswa Jurusan Informatika di Universitas Muhammadiyah Malang</p>
        <a href="mailto:lailyaulia4@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img src={"Images/Hero/heroImage.png"} alt="Hero" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

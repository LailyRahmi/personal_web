import React, { useState } from "react";
import styles from "./About.module.css";

export const About = () => {
  const [editedText, setEditedText] = useState(""); // State untuk menyimpan teks yang diubah

  const handleEditClick = () => {
    const newParagraph = prompt("Masukkan teks yang baru :"); // Menggunakan prompt sebagai contoh; bisa diganti dengan input form

    if (newParagraph !== null) {
      // Jika pengguna memasukkan teks baru
      setEditedText(newParagraph); // Update state dengan teks yang diubah
      // Lakukan permintaan ke backend PHP untuk menyimpan teks baru ke database
      fetch("editParagraf.php", {
        method: "POST",
        body: JSON.stringify({ newText: newParagraph }), // Kirim data teks baru ke PHP
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle respons dari PHP (jika ada)
          console.log(data); // Tindakan lanjutan bisa ditambahkan di sini
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src={"Images/About/aboutImage.png"} alt="Me sitting with a laptop" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Hello</h3>
              <p>
                {editedText
                  ? editedText
                  : "Saya Laily Aulia Rahmi, mahasiswa Informatika yang sedang menempuh pendidikan di Universitas Muhammadiyah Malang. Saya sangat senang bisa berbagi sedikit cerita tentang diri saya, minat saya, dan perjalanan pendidikan saya. Selamat datang di halaman saya!"}
              </p>
              <button className={styles.editBtn} onClick={handleEditClick}>
                Edit text
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

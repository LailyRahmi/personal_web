import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./About.module.css";

export const About = () => {
  const [editedText, setEditedText] = useState("");

  const fetchDataFromServer = async () => {
    try {
      const response = await axios.get("http://localhost/personal-website/src/components/About/editParagraf.php");
      const data = response.data;

      if (data.status === "success" && typeof data.text === "string") {
        setEditedText(data.text);
        sessionStorage.setItem("editedText", data.text); // Store in session storage
      } else {
        console.error("Response tidak sesuai format yang diharapkan");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const storedText = sessionStorage.getItem("editedText"); // Retrieve from session storage
    if (storedText) {
      setEditedText(storedText);
    } else {
      fetchDataFromServer();
    }
  }, []);

  const handleEditClick = async () => {
    const newParagraph = prompt("Masukkan teks yang baru :");

    if (newParagraph !== null) {
      try {
        const response = await axios.post(
          "http://localhost/personal-website/src/components/About/editParagraf.php",
          { newText: newParagraph },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data;

        if (data.status === "success") {
          setEditedText(newParagraph);
          sessionStorage.setItem("editedText", newParagraph); // Update session storage after edit
        } else {
          console.error("Gagal memperbarui teks:", data.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }
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
                {editedText ||
                  "Nama Saya Laily Aulia Rahmi. Saat ini, saya berkuliah di Universitas Muhammadiyah Malang jurusan Informatika. Disini saya akan berbagi pengalaman saya selama kuliah di jurusan informatika. Selamat datang di website saya!"}
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

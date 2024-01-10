import React, { useState, useEffect } from "react";
import styles from "./About.module.css";

export const About = () => {
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/personal-website/src/components/About/editParagraf.php", {
          method: "GET",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();

        if (responseData.status === "success") {
          const combinedTexts = responseData.texts.join("\n");
          setEditedText(combinedTexts);
        } else {
          console.error("Error fetching data:", responseData.message);
        }
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    const newParagraph = prompt("Masukkan teks yang baru :");

    if (newParagraph !== null) {
      setEditedText(newParagraph);
      fetch("http://localhost/personal-website/src/components/About/editParagraf.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newText: newParagraph }),
        mode: "no-cors",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.status === "success") {
            console.log("Teks berhasil diubah :", data.text);
          } else {
            throw new Error(data.message || "Failed to update data");
          }
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
                {editedText ||
                  "Saya Laily, mahasiswa Informatika yang sedang menempuh pendidikan di Universitas Muhammadiyah Malang. Saya sangat senang bisa berbagi sedikit cerita tentang diri saya, minat saya, dan perjalanan pendidikan saya. Selamat datang di halaman saya, di mana saya berbagi perjalanan saya dalam menjelajahi dunia informatika!"}
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

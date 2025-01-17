import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Let's Connect !!</h1>
        <div className={styles.headerUnderline}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <img
            src="/assets/contact.png" // Ganti dengan URL gambar Anda
            alt="contact"
            className={styles.image}
          />
        </div>
        <div className={styles.contactInfo}>
          <h2 className={styles.title}>Contact Information</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.icon}>🐙</span>
              <a href="https://github.com/riyouuyt" className={styles.link}>
                github.com/riyouuyt
              </a>
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>✉️</span>
              <a
                href="mailto:bagusariobimoworkspace@gmail.com"
                className={styles.link}
              >
                bagusariobimoworkspace@gmail.com
              </a>
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>🔗</span>
              <a
                href="https://linkedin.com/in/bagus-ariobimo"
                className={styles.link}
              >
                linkedin.com/in/bagus ariobimo
              </a>
            </li>
            <li className={styles.listItem}>
              <span className={styles.icon}>📞</span>
              <a href="tel:+62881010698976" className={styles.link}>
                 +62881010698976
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;

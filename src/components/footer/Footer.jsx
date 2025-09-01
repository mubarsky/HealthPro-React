// src/components/Footer.jsx
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} HealthPro. All rights reserved.</p>
        <div className={styles.links}>
          <a href="/about">About</a>
          <a href="/appointment">Appointments</a>
          <a href="/doctors">Doctors</a>
          <a href="/health-library">Health Library</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

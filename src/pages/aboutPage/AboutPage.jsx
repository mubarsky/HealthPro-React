// src/pages/About.jsx
import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <h2 className={styles.heading}>About Us</h2>
      <p className={styles.text}>
        Welcome to <span className={styles.highlight}>HealthPro</span>, where we
        are committed to delivering the best healthcare services. Our mission is
        to ensure quality medical care with compassion, innovation, and
        integrity.
      </p>
      <p className={styles.text}>
        This page is{" "}
        <span className={styles.inProgress}>still in progress</span> 🚧 and will
        be updated with more details soon.
      </p>
    </section>
  );
};

export default About;

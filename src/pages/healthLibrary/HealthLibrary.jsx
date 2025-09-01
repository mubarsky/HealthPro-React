// src/pages/HealthLibrary.jsx
import React from "react";
import styles from "./healthLibrary.module.css";

const HealthLibrary = () => {
  return (
    <section className={styles.library}>
      <h2 className={styles.heading}>Health Library (AI Assistant)</h2>
      <p className={styles.subtext}>
        🚧 This page is still in progress. Soon, you’ll be able to interact with
        our AI-powered health assistant, ask medical-related questions, and
        receive instant answers and guidance.
      </p>
    </section>
  );
};

export default HealthLibrary;

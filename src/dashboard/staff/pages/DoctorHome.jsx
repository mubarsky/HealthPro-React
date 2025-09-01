// src/dashboard/doctor/pages/DoctorHome.jsx
import React from "react";
import styles from "./doctorHome.module.css";

const DoctorHome = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Doctor Dashboard</h2>
      <p className={styles.text}>
        Welcome to your doctor dashboard. 🩺 This page is{" "}
        <span className={styles.highlight}>still in progress </span>
         and will be available soon.
      </p>
      <p className={styles.note}>⚙️ Features under production...</p>
    </div>
  );
};

export default DoctorHome;

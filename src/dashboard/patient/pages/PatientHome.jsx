// src/dashboard/patient/pages/PatientHome.jsx
import React from "react";
import DashboardLayout from "../../DashboardLayout";
import styles from "./patientHome.module.css";

const PatientHome = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Patient Dashboard</h2>
      <p className={styles.text}>
        Welcome to your patient dashboard. 🚑 This page is{" "}
        <span className={styles.highlight}> still in progress </span>
        and will be available soon.
      </p>
      <p className={styles.note}>⚙️ Features under production...</p>
    </div>
  );
};

export default PatientHome;

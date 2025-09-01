// src/dashboard/admin/pages/AdminHome.jsx
import React from "react";
import styles from "./adminHome.module.css";

const AdminHome = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Admin Dashboard</h2>
      <p className={styles.text}>
        Welcome to your admin dashboard. 🛠️ This page is{" "}
        <span className={styles.highlight}>still in progress </span>
        and will be updated with new features soon.
      </p>
      <p className={styles.note}>⚙️ Management tools under production...</p>
    </div>
  );
};

export default AdminHome;

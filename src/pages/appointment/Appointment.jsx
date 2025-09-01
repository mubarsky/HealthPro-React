// src/pages/Appointment.jsx
import React from "react";
import styles from "./appointment.module.css";

const Appointment = () => {
  return (
    <section className={styles.appointmentContainer}>
      <h2 className={styles.heading}>Book an Appointment</h2>
      <p className={styles.subtext}>
        Schedule a consultation with one of our doctors. This page is{" "}
        <span className={styles.inProgress}>still in progress</span> 🚧
      </p>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className={styles.formGroup}>
          <label>Preferred Date</label>
          <input type="date" />
        </div>

        <div className={styles.formGroup}>
          <label>Department</label>
          <select>
            <option>General Medicine</option>
            <option>Cardiology</option>
            <option>Dermatology</option>
            <option>Pediatrics</option>
          </select>
        </div>

        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Appointment;

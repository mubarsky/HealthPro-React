// src/pages/Doctors.jsx
import React from "react";
import styles from "./doctor.module.css";

const Doctors = () => {
  const doctorsList = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      img: "/images/doctor1.jpg",
    },
    {
      id: 2,
      name: "Dr. Michael Lee",
      specialty: "Dermatologist",
      img: "/images/doctor2.jpg",
    },
    {
      id: 3,
      name: "Dr. Aisha Bello",
      specialty: "Pediatrician",
      img: "/images/doctor3.jpg",
    },
  ];

  return (
    <section className={styles.doctorsContainer}>
      <h2 className={styles.heading}>Our Doctors</h2>
      <p className={styles.subtext}>
        Meet our team of highly qualified doctors dedicated to your health.
        <br />
        <span className={styles.inProgress}>Page still in progress 🚧</span>
      </p>

      <div className={styles.cardGrid}>
        {doctorsList.map((doctor) => (
          <div className={styles.card} key={doctor.id}>
            <img
              src={doctor.img}
              alt={doctor.name}
              className={styles.doctorImg}
            />
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <button className={styles.btn}>Book Appointment</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;

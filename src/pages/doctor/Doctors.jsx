// src/pages/Doctors.jsx
import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styles from "./doctor.module.css";

const Doctors = () => {

    const navigate = useNavigate();
   const handleBookAppointment = () => {
   
     toast.info("Please login first", {
       position: "top-center",
       autoClose: 2000,
     });

     setTimeout(() => {
       navigate("/auth/login");
     }, 2000);
   };

  const doctorsList = [
    {
      id: 1,
      name: "Dr. Rajesh Patel",
      specialty: "Neurology",
      img: "/images/p-9.jpg",
    },
    {
      id: 2,
      name: "Dr. Emily Carter",
      specialty: "Cardiology",
      img: "/images/doctor-test-1.jpg",
    },
    {
      id: 3,
      name: "Dr. Sophia Alvarez",
      specialty: "Pediatrics",
      img: "/images/p-2.jpg",
    },
    {
      id: 4,
      name: "Dr. Aisha Khan",
      specialty: "Dermatology",
      img: "/images/p-1.jpg",
    },
    {
      id: 5,
      name: "Dr. Sarah",
      specialty: "Radiology",
      img: "/images/p-5.jpg",
    },
    {
      id: 6,
      name: "Dr. Ahmed",
      specialty: "Obstetrics",
      img: "/images/p-3.jpg",
    },
    {
      id: 7,
      name: "Dr. Benjamin",
      specialty: "Psychiatry",
      img: "/images/p-4.jpg",
    },
    {
      id: 8,
      name: "Dr. Donna",
      specialty: "Oncology",
      img: "/images/p-11.jpg",
    },
    {
      id: 9,
      name: "Dr. David",
      specialty: "Gynecology",
      img: "/images/p-6.jpg",
    },
    {
      id: 10,
      name: "Dr. Carlos",
      specialty: "Pulmonology",
      img: "/images/p-7.jpg",
    },
    {
      id: 11,
      name: "Dr. Olivia",
      specialty: "Nephrology",
      img: "/images/p-8.jpg",
    },
    {
      id: 12,
      name: "Dr. Samuel",
      specialty: "Urology",
      img: "/images/doctor-test-1.jpg",
    },
  ];

  return (
    <section className={styles.doctorsContainer}>
      <h2 className={styles.heading}>Our Doctors</h2>
      <p className={styles.subtext}>
        Meet our team of highly qualified doctors dedicated to your health.
        <br />
        <span className={styles.inProgress}></span>
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
            <button onClick={handleBookAppointment} className={styles.btn}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;

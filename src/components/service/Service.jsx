import React from 'react'
import styles from "./service.module.css"
import { toast } from "react-toastify";
const Service = () => {

    const handleAppointment = (e) => {
      e.preventDefault(),
      toast.info("Please login first", {
        position: "top-center",
        autoClose:2000,
  
      });
  
      // setTimeout(() => {
      //   navigate("/auth/login")
      // }, 2000);
    };
  
  return (
    <>
      <section className={styles.serviceContainer}>
        <div className={styles.serviceCard}>
          <div className={styles.serviceImg}>
            <img src="/images/find-a-doctor-card.jpg" alt="" />
          </div>
          <div className={styles.serviceDesc}>
            <h2>Our Providers</h2>
            <p>Search by name, specialty, location and more.</p>
            <button onClick={handleAppointment}>Find a Provider</button>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.serviceImg}>
            <img src="/images/locations-card.jpg" alt="" />
          </div>
          <div className={styles.serviceDesc}>
            <h2>Locations & directions</h2>
            <p>Find any of our 300+ locations</p>
            <button onClick={handleAppointment}>Get directions</button>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <div className={styles.serviceImg}>
            <img src="/images/appointments-card.jpg" alt="" />
          </div>
          <div className={styles.serviceDesc}>
            <h2>Appointments</h2>
            <p>Get the in person or virtual care you need.</p>
            <button onClick={handleAppointment}>Schedule now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service
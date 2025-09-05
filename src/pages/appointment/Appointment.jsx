// src/pages/Appointment.jsx
import React from "react";
import styles from "./appointment.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Appointment = () => {
  const navigate = useNavigate();

  const handleAppointment = (e) => {
    e.preventDefault(),
    toast.info("Please login first", {
      position: "top-center",
      autoClose:2000,

    });

    setTimeout(() => {
      navigate("/auth/login")
    }, 2000);
  };

  return (
    <>
      <section className={styles.secondContainer}>
        {/* Left Side */}
        <section className={styles.leftContainer}>
          <div>
            <img src="/images/doctor-appointment.jpg" alt="" />
          </div>
        </section>

        {/* Right Side */}
        <section className={styles.rightContainer}>
          <div className={styles.rightDiv1}>
            <h1>Appointments</h1>
          </div>

          <div className={styles.rightContainerBtn}>
            <button
              onClick={handleAppointment}
              id={styles.requestApp}
              className={styles.rightBtn1}
            >
              Request an Appointment
            </button>
            <button
              onClick={handleAppointment}
              id={styles.scheduleApp}
              className={styles.rightBtn2}
            >
              Schedule in MyChart
            </button>
          </div>

          <div className={styles.request}>
            <h1>Start your appointment request here!!</h1>
          </div>
        </section>
      </section>

      {/* Middle Section */}
      <section className={styles.middleContainer}>
        <p>
          At Healthpro Hospital, we're here when you need us most. That's why
          we're bringing you more ways to get the care you need than ever
          before.
        </p>
      </section>

      <section className={styles.connectWithUsContainer}>
        <h1>Connect with Health-pro Hospital</h1>
        <section className={styles.connectWithUs}>
          <div className={styles.connectCard}>
            <div className={styles.connectCardImg}>
              <img src="/images/appointments-virtual-visits.jpg" alt="" />
            </div>
            <div className={styles.connectCardDesc}>
              <h1>Virtual Visits</h1>
              <p>
                Get the care your child needs — right when they need it. See a
                Health-Pro pediatric provider online with a pediatric primary
                care virtual visit.
              </p>
            </div>
          </div>
          <div className={styles.connectCard}>
            <div className={styles.connectCardImg}>
              <img src="/images/appointments-mychart-sm.jpg" alt="" />
            </div>
            <div className={styles.connectCardDesc}>
              <h1>Manage Your Health Online</h1>
              <p>
                MyChart is your online health management tool for scheduling
                appointments, keeping track of test results and staying in touch
                with your healthcare provider, all in one place.
              </p>
            </div>
          </div>
          <div className={styles.connectCard}>
            <div className={styles.connectCardImg}>
              <img src="/images/appointments-second-opinion-sm.jpg" alt="" />
            </div>
            <div className={styles.connectCardDesc}>
              <h1>Get a Virtual Second Opinion</h1>
              <p>
                Need a second opinion? Virtual Second Opinions connect you
                online with top Cleveland Clinic specialists who can review your
                diagnosis and offer additional consultation, quickly and
                securely.
              </p>
            </div>
          </div>
        </section>
      </section>

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
              <option>Neurology</option>
              <option>Cardiology</option>
              <option>Pediatrics</option>
              <option>Dermatology</option>
              <option>Radiology</option>
              <option>Obstetrics</option>
              <option>Psychiatry</option>
              <option>Oncology</option>
              <option>Gynecology</option>
              <option>Pulmonology</option>
              <option>Nephrology</option>
              <option>Urology</option>
              <option>General Medicine</option>
            </select>
          </div>

          <button onClick={handleAppointment} className={styles.btn}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Appointment;

import React from "react";
import styles from ".//about.module.css";
import { useNavigate } from "react-router-dom";

const BiographySection = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.thirdContainer}>
      {/* Left image section */}
      <section className={styles.thirdLeft}>
        <img src="/images/boxing-boy-2.jpg" alt="HealthPro history" />
      </section>

      {/* Right text section */}
      <section className={styles.thirdRight}>
        <section className={styles.rightTexts}>
          <h2>Who We Are</h2>
          <p>
            Nestled in the heart of the bustling city of Elmsworth, HealthPro
            General Hospital has stood as a beacon of hope, healing, and
            humanity for over a century. Founded in 1912 by Dr. Elias Whitmore,
            a visionary physician, and philanthropist Margaret Florence, the
            hospital was initially a modest 20-bed facility designed to serve
            the growing industrial workforce of the city. Its mission was simple
            yet profound: to provide compassionate care to all, regardless of
            their ability to pay.
          </p>
          <p>
            The early years were fraught with challenges. The hospital survived
            the Spanish Flu pandemic of 1918, where its halls were filled to
            capacity with patients battling the deadly virus. The staff, though
            overwhelmed, worked tirelessly, embodying the spirit of resilience
            that would come to define St. Florence. By the 1930s, the hospital
            had expanded, adding a maternity ward and a surgical wing, thanks to
            generous donations from the community.
          </p>
          <p>We’re here when you need us – for every care in the world.</p>
        </section>

        {/* Navigate with React Router instead of <a href> */}
        <button onClick={() => navigate("/about")}>Learn more</button>
      </section>
    </section>
  );
};

export default BiographySection;

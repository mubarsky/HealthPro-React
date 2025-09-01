import React from "react";
import styles from "./hero.module.css";

const HeroSection = () => {
  return (
    <section className={styles.secondContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.overlayText}>
        <h1>We're here when you need us – for every care in the world.</h1>
      </div>
    </section>
  );
};

export default HeroSection; 

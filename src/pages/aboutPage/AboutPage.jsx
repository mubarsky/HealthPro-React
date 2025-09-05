import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      {/* Years / Who we are */}
      <section className={styles.secondContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.overlayText}>
          <div className={styles.years}>
            <div className={styles.years1}>
              <h1>100</h1>
            </div>
            <div className={styles.years2}>
              <p
                style={{
                  fontSize: "3rem",
                  fontWeight: "bold",
                  borderBottom: "solid 1px white",
                }}
              >
                YEARS
              </p>
              <p>EST. 1921</p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className={styles.thirdContainer}>
        <div className={styles.history}>
          <h1>HealthPro Hospital: A Centennial History</h1>
          <h2>100 Years of HealthPro Hospital</h2>
          <p>
            HealthPro Hospital was at the forefront of modern medicine when it
            was first organized as a multi-specialty group practice in 1921.
            From a small outpatient hospital, it has grown to become the world’s
            first integrated international health system. With more than 65,000
            caregivers worldwide, HealthPro Hospital has almost 6 million
            patient visits per year, at more than 200 locations.
          </p>
        </div>
      </section>

      {/* Awards */}
      <section className={styles.fifthSection}>
        <h1>Awards</h1>

        <div className={styles.award}>
          <h2>2025</h2>
          <div className={styles.awardee}>
            <li>Digital Health Awards,</li>
            <p> Gold, Health System, Consumer Audience</p>
          </div>
        </div>

        <div className={styles.award}>
          <h2>2024</h2>
          <div className={styles.awardee}>
            <li>eHealthCare Leadership Awards,</li>
            <p> Gold, Best Overall Internet Site, Healthcare System</p>
          </div>
        </div>

        <div className={styles.award}>
          <h2>2023</h2>
          <div className={styles.awardee}>
            <li>Digital Health Awards,</li>
            <p> Gold, Web-Based Digital Health, Consumer Audience</p>
          </div>
        </div>

        <div className={styles.awards}>
          <h2>2022</h2>
          <div className={styles.awardee2}>
            <li>Digital Health Awards,</li>
            <p> Silver, Web-Based Digital Health Portal</p>
          </div>
        
        </div>

        <div className={styles.award}>
          <h2>2021</h2>
          <div className={styles.awardee}>
            <li>eHealthCare Leadership Awards,</li>
            <p> Platinum, Best Overall Internet Site, Healthcare System</p>
          </div>
        </div>
      </section>

      {/* Policy */}
      <section className={styles.sixthSection}>
        <h1>Health Information Policy</h1>
        <div className={styles.policy}>
          <p>
            HealthPro Hospital's mission is to inspire hope and promote health.
            We provide health information to help you make informed decisions
            about your health.
          </p>
          <p>Health information includes:</p>
        </div>

        <div className={styles.policyList}>
          <li>Diseases and conditions</li>
          <li>Symptoms</li>
          <li>Tests and procedures</li>
          <li>Drugs and supplements</li>
          <li>Healthy lifestyle</li>
          <p>
            HealthPro Hospital is committed to providing health information that
            is:
          </p>
          <li>
            Accurate and actionable. We write to inform, educate and empower you
            to make informed decisions about your health.
          </li>
          <li>
            Easily understood. We write in plain language that is quickly and
            easily understood by those of all literacy levels.
          </li>
          <li>
            Inclusive and diverse. We use words and images that reflect a global
            community, inclusive of all ages, races, genders and ability levels.
          </li>
          <li>
            Evidence based. Our content is based on the medical literature and
            HealthPro Hospital expert opinion. We list our sources at the end of
            articles.
          </li>
        </div>
      </section>
    </>
  );
};

export default About;

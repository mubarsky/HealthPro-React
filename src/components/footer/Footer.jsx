import styles from './footer.module.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <section className={styles.footerContainer}>
        <section className={styles.footer}>
          <div className={styles.footer1}>
            <div className={styles.footer1Content}>
              <div className={styles.footer1ContentHeader}>
                <img src="/images/healthPro-logo.png" alt="" />
              </div>
              <p>
                Health-Pro provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </p>
              <p>©Health-Pro PTY LTD 2020. All rights reserved</p>
            </div>
          </div>
          <div className={styles.footer2}>
            <h1>Company</h1>
            <ul>
              <Link to="/AboutPage">
                <li>About</li>
              </Link>
              <Link to="/Appointment">
                <li>Appointment</li>
              </Link>
              <Link to="/doctor-page">
                <li>Doctor</li>
              </Link>
              <Link to="/HealthLibrary">
                <li>Health Library</li>
              </Link>
            </ul>
          </div>
          <div className={styles.footer2}>
            <h1>Region</h1>
            <ul>
              <li>Indonesia</li>
              <li>Singapore</li>
              <li>Hongkong</li>
              <li>Canada</li>
            </ul>
          </div>
          <div className={styles.footer2}>
            <h1>Help</h1>
            <ul>
              <li>Help center</li>
              <li>Contact support</li>
              <li>Instructons</li>
              <li>How it works</li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}

export default Footer
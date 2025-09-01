import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./navbar.module.css";
import { NavbarData, NavbarData2 } from "../../../utils/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/images/healthPro-logo.png" alt="HealthPro Logo" />
        </div>

        {/* Nav links (desktop + mobile toggle) */}
        <ul className={`${styles.navLists} ${isOpen ? styles.active : ""}`}>
          {NavbarData.map((item) => (
            <li className={styles.navItem} key={item.id}>
              <Link to={item.url} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}

          {/* Auth links also inside toggle for mobile */}
          <div className={styles.authWrapper}>
            {NavbarData2.map((item) => (
              <li className={styles.navItem} key={item.id}>
                <Link to={item.url} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
        </ul>

        {/* Hamburger Icon */}
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  );
};

export default Navbar;

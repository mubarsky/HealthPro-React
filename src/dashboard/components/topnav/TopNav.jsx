import React, { useState, useEffect } from "react";
import styles from "./topNav.module.css";
import {Link} from "react-router-dom"

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(`.${styles.utilities}`) &&
        !event.target.closest(`.${styles.adminProfile}`)
      ) {
        setIsUserDropdownOpen(false);
        setIsAdminDropdownOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section className={styles.navBar}>
      {/* Left Nav */}
      <section className={styles.leftNav}>
        {isMenuOpen && (
          <div className={styles.leftNavMenu}>
            <h2>Menu</h2>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        )}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.toggleBtn}
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
      </section>

      {/* Middle Nav */}
      <section className={styles.middleNav}>
        <img src="/images/healthpro - Copy.png" alt="logo" />
        <h2>HealthPro Hospital</h2>
      </section>

      {/* Right Nav */}
      <section className={styles.rightNav}>
        {/* Users Online Dropdown */}
        <section
          className={styles.utilities}
          onClick={(e) => {
            e.stopPropagation();
            setIsUserDropdownOpen(!isUserDropdownOpen);
            setIsAdminDropdownOpen(false);
          }}
        >
          <section className={styles.usersIcon}>
            <div>
              <i className="fa-regular fa-circle-user"></i>
            </div>
          </section>
          {isUserDropdownOpen && (
            <section className={`${styles.dropdownContent2} ${styles.show}`}>
              <section className={styles.userContainer}>
                <section className={styles.usersOnline}>
                  <h2>Users Online</h2>
                  <p>Recent Account Activity Overview</p>
                </section>
                <section className={styles.chartContainer}>
                  <canvas id="myLineChart"></canvas>
                  <div className={styles.overlay}>
                    <div className={styles.counter} id="counter">
                      12
                    </div>
                    <div className={styles.label}>Total users</div>
                  </div>
                </section>
                <section className={styles.list}>
                  <button className={styles.settingsBtn}>
                    <i className="fas fa-cog spin"></i>
                    <p>Refresh list</p>
                  </button>
                </section>
              </section>
            </section>
          )}
        </section>

        {/* Admin Profile Dropdown */}
        <section
          className={styles.adminProfile}
          onClick={(e) => {
            e.stopPropagation();
            setIsAdminDropdownOpen(!isAdminDropdownOpen);
            setIsUserDropdownOpen(false);
          }}
        >
          <section className={styles.adminImage}>
            <div>
              <img
                src="/images/WhatsApp Image 2024-12-03 at 11.21.27_3b8336e3.jpg"
                alt="Admin"
              />
            </div>
            <div className={styles.adminAngledown}>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </section>

          {isAdminDropdownOpen && (
            <section className={`${styles.dropdownContent} ${styles.show}`}>
              <section className={styles.innerProfile}>
                <section className={styles.innerProfileTop}>
                  <div className={styles.img}>
                    <img
                      src="/images/WhatsApp Image 2024-12-03 at 11.21.27_3b8336e3.jpg"
                      alt="Admin"
                    />
                  </div>
                  <div className={styles.name}>
                    <p className={styles.d1}>Ismail Mubarak</p>
                    <p>A short profile description</p>
                  </div>
                  <div className={styles.button}>
                    <Link to="/auth/login">
                      <button id="logoutbtn">Log out</button>
                    </Link>
                  </div>
                </section>

                <section className={styles.innerProfileActivity}>
                  <div className={styles.activity}>
                    <p>ACTIVITY</p>
                  </div>
                  <div className={styles.chat}>
                    <p className={styles.c1}>Chat</p>
                    <p className={styles.p2}>8</p>
                  </div>
                  <div className={styles.password}>
                    <p>Recover password</p>
                  </div>
                  <div className={styles.account}>
                    <p>MY ACCOUNT</p>
                  </div>
                  <div className={styles.settings}>
                    <p className={styles.s1}>Settings</p>
                    <p className={styles.p2}>NEW</p>
                  </div>
                  <div className={styles.messages}>
                    <p className={styles.m1}>Messages</p>
                    <p className={styles.p2}>512</p>
                  </div>
                  <div className={styles.logs}>
                    <p>Logs</p>
                  </div>
                </section>

                <section className={styles.innerProfileInbox}>
                  <div className={styles.box1}>
                    <i className="fa-solid fa-envelopes-bulk"></i>
                    <p>message inbox</p>
                  </div>
                  <div className={styles.box2}>
                    <i className="fa-solid fa-ticket"></i>
                    <p>Support Tickets</p>
                  </div>
                </section>

                <section className={styles.openMessages}>
                  <button>Open messages</button>
                </section>
              </section>
            </section>
          )}
        </section>
      </section>
    </section>
  );
};

export default Navbar;

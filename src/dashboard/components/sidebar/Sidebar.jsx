import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import {
  FaGaugeHigh,
  FaUserGroup,
  FaBriefcaseMedical,
  FaHouseChimney,
  FaSyringe,
  FaHouseMedical,
  FaUserInjured,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const sidebarClass = `
    ${styles.sidebar} 
    ${isExpanded ? styles.showFull : styles.showMini} 
    ${!isExpanded && isHovered ? styles.hovered : ""}
  `;

  return (
    <section
      className={sidebarClass}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => !isExpanded && setIsHovered(false)}
    >
      {/* FULL SIDEBAR */}
      <section className={styles.sidebarFull}>
        <ul className={styles.sideBarList}>
          <Link to="/patient">
            <li>
              <FaGaugeHigh /> Dashboard
            </li>
          </Link>
          <Link to="/pharmacy">
            <li>
              <FaHouseMedical /> Pharmacy
            </li>
          </Link>
          <Link to="/staff">
            <li>
              <FaUserGroup /> Staff
            </li>
          </Link>
          <Link to="/lab">
            <li>
              <FaBriefcaseMedical /> Lab
            </li>
          </Link>
          <Link to="/ward">
            <li>
              <FaHouseChimney /> Ward
            </li>
          </Link>
          <Link to="/treatment">
            <li>
              <FaSyringe /> Treatment
            </li>
          </Link>
          <Link to="/patient-info">
            <li>
              <FaUserInjured /> Patient
            </li>
          </Link>
        </ul>
      </section>

      {/* MINI SIDEBAR */}
      <section className={styles.sidebarMini}>
        <div>
          <FaGaugeHigh />
        </div>
        <div>
          <FaHouseMedical />
        </div>
        <div>
          <FaUserGroup />
        </div>
        <div>
          <FaBriefcaseMedical />
        </div>
        <div>
          <FaHouseChimney />
        </div>
        <div>
          <FaSyringe />
        </div>
        <div>
          <FaUserInjured />
        </div>
      </section>

      {/* Collapse Button */}
      <button onClick={toggleSidebar} className={styles.toggleBtn}>
        {isExpanded ? "hide" : "show"}
      </button>
    </section>
  );
};

export default Sidebar;

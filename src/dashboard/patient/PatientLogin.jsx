import React from "react";
import { Link } from "react-router-dom";

const PatientLogin = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h2>Patient Login Page</h2>
      <p>
        This is where patients will log in before accessing their dashboard.
      </p>

      {/* Temporary link to dashboard */}
      <Link
        to="/patient"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        Go to Patient Dashboard
      </Link>

     
    </div>
  );
};

export default PatientLogin;

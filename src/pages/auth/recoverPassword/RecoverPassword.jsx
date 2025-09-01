import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./recoverPassword.module.css";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
      return;
    }

    console.log("Recover password request for:", email);
      alert("OTP sent to your email ✅");
    navigate("/otp-verification"); // later will call API
  };

  return (
    <section className={styles.recoverContainer}>
      {/* Left side (image) */}
      <section className={styles.leftRecover}>
        <div className={styles.overlay}></div>
        <div className={styles.overlayText}>
          <h1>Don’t worry, we’ll help you recover it!</h1>
        </div>
      </section>

      {/* Right side (form) */}
      <section className={styles.rightRecover}>
        <section className={styles.content}>
          <div className={styles.rightLogo}>
            <img src="/images/healthPro-logo.png" alt="HealthPro Logo" />
          </div>

          <div className={styles.right1}>
            <p style={{ color: "#6f6d6d", fontSize: "1.4rem" }}>Recover</p>
            <div className={styles.right1Inner}>
              <p>Enter your</p>
              <p style={{ color: "green" }}> email </p>
              <p>to reset password</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <section className={styles.form}>
              <div className={styles.form1}>
                <p>Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email here..."
                  autoComplete="email"
                  required
                />
              </div>
            </section>

            <div className={styles.btns}>
              <div>
                <Link to="/auth/login">
                  <p>Remembered your password?</p>
                  <p style={{ color: "#2a78c2" }}>Log In</p>
                </Link>
              </div>

              <button type="submit" className={styles.btn2}>
                Recover Password
              </button>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};

export default RecoverPassword;

import { Link } from "react-router-dom";
import styles from "./doctorLogin.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DoctorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    console.log("Doctor Login attempt:", { email, password });
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Navigate to Doctor dashboard
    navigate("/doctor");

    // FUTURE: replace with API call
    /*
    const loginData = { email, password };
    const res = await fetch("/api/doctor/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });
    */
  };

  return (
    <section className={styles.loginContainer}>
      <div className={styles.leftLogin}>
        <div className={styles.overlay}></div>
        <div className={styles.overlayText}>
          <h1>Your body hear's everything your mind says .</h1>
        </div>
      </div>

      <div className={styles.rightLogin}>
        <section className={styles.content}>
          {/* Logo */}
          <div className={styles.rightLogo}>
            <img src="/images/healthPro-logo.png" alt="HealthPro Logo" />
          </div>

          {/* Welcome message */}
          <div className={styles.right1}>
            <p style={{ color: "#6f6d6d", fontSize: "1.5rem" }}>
              Welcome back,
            </p>
            <p>Please sign in to your doctor account.</p>
          </div>

          <div className={styles.goBack}>
            <Link to="/">⬅ Go Back Home</Link>
          </div>

          {/* Signup option */}
          <div className={styles.right2}>
            <p>No account?</p>
            <p style={{ color: "rgb(104, 104, 234)" }}>
              <Link to="/auth/doctor-register">Sign up now</Link>
            </p>
          </div>

          {/* Login type switch buttons */}
          <div className={styles.signInTopButton}>
            <div className={styles.topButton1}>
              <Link to="/auth/login">
                <button>Patient</button>
              </Link>
            </div>
            <div className={styles.topButton2}>
              <Link to="/auth/doctor-login">
                <button>Doctor</button>
              </Link>
            </div>
            <div className={styles.topButton3}>
              <Link to="/auth/admin-login">
                <button>Admin</button>
              </Link>
            </div>
          </div>

          {/* Login form */}
          <form onSubmit={handleLogin}>
            <section className={styles.form}>
              <div className={styles.form1}>
                <p>Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email here..."
                  required
                />
              </div>
              <div className={styles.form1}>
                <p>Password</p>
                <div className={styles.passwordWrapper}>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password here..."
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={styles.toggleBtn}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
            </section>

            {/* Remember me */}
            <div className={styles.form3}>
              <input type="checkbox" />
              <p>Keep me logged in</p>
            </div>

            {/* Buttons */}
            <div className={styles.btns}>
              <Link to="/recover-password">
                <button className={styles.btn1} type="button">
                  Recover Password
                </button>
              </Link>
              <button type="submit" className={styles.btn2}>
                Login
              </button>
            </div>

            {/* Error */}
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}
          </form>
        </section>
      </div>
    </section>
  );
};

export default DoctorLogin;

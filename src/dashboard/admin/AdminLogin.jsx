import { Link } from "react-router-dom";
import styles from "./adminLogin.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    console.log("Admin Login attempt:", { email, password });
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Navigate to Admin dashboard for now
    navigate("/admin");

    // FUTURE: replace with API
    /*
    const loginData = { email, password };
    const res = await fetch("/api/admin/login", {
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
          <h1>The greatest wealth is health</h1>
        </div>
      </div>

      <div className={styles.rightLogin}>
        <section className={styles.content}>
          <div className={styles.rightLogo}>
            <img src="/images/healthPro-logo.png" alt="HealthPro Logo" />
          </div>

          <div className={styles.right1}>
            <p style={{ color: "#6f6d6d", fontSize: "1.5rem" }}>
              Welcome back,
            </p>
            <p>Please sign in to your admin account.</p>
          </div>

          <div className={styles.goBack}>
            <Link to="/">⬅ Go Back Home</Link>
          </div>

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

            <div className={styles.form3}>
              <input type="checkbox" />
              <p>Keep me logged in</p>
            </div>

            <div className={styles.btns}>
              <Link to="/recover-password">
                <button className={styles.btn1} type="button">
                  Recover Password
                </button>
              </Link>
              <button className={styles.btn2} type="submit">
                Login
              </button>
            </div>

            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}
          </form>
        </section>
      </div>
    </section>
  );
};

export default AdminLogin;

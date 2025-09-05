import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import styles from "./login.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // optional: simple error state
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    if (!email || !password) {
      notify.warning("Please enter both email and password ⚠️");
      return;
    }

    // prepare data for backend
    const loginData = { email, password };

    try {
      // TODO: replace with your API endpoint
      const res = await fetch(
        "https://backend-api-zbhj.onrender.com/api/v1/user/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        toast.success("Login successful 🎉");
        setTimeout(() => {
          navigate("/patient");
        }, 1000);
      } else {
        toast.error(data.message || "Login failed ❌");
      }
      console.log(loginData);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false); // ✅ reset after success OR failure
    }
  };

  return (
    <>
      <section className={styles.loginContainer}>
        <div className={styles.leftLogin}>
          <div className={styles.overlay}></div>
          <div className={styles.overlayText}>
            <h1>Health is not valued till sickness comes. </h1>
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
              <p>Please sign in to your account.</p>
            </div>

            <div className={styles.goBack}>
              <Link to="/">⬅ Go Back Home</Link>
            </div>

            {/* Signup option */}
            <div className={styles.right2}>
              <p>No account?</p>
              <p style={{ color: "rgb(104, 104, 234)" }}>
                <Link to="/auth/register">Sign up now</Link>
              </p>
            </div>

            {/* Login type buttons */}
            <div className={styles.signInTopButton}>
              <div className={styles.topButton1}>
                <Link to="/auth/patient-login">
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

            {/* Form fields */}
            <form onSubmit={handleLogin}>
              <section className={styles.form}>
                <div className={styles.form1}>
                  <p>Email</p>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email here..."
                    autoComplete="your email"
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
                  <button className={styles.btn1}>Recover Password</button>
                </Link>

                <button
                  type="submit"
                  className={styles.btn2}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};

export default Login;

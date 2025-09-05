import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import styles from "./register.module.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  //  const [message,setMessage]useState="",
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

   

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
     setLoading(true);
    try {
      const res = await fetch(
        "https://backend-api-zbhj.onrender.com/api/v1/user/create-user",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData), // ✅ fixed here
        }
      );

      const data = await res.json();
      if (res.ok) {
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        toast.success("Account created successfully 🎉");
        setTimeout(() => {
          navigate("/patient");
        }, 1000);
      } else {
        toast.error(data.message || "Account creation failed ❌");
      }
      console.log(data); // check server response
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false); // ✅ reset after success OR failure
    }
  };

  return (
    <section className={styles.logInContainer}>
      {/* 🔹 Form Side (Now Left) */}
      <section className={styles.rightContainer}>
        <section className={styles.content}>
          <div className={styles.rightLogo}>
            <img src="/images/healthPro-logo.png" alt="HealthPro Logo" />
          </div>

          <div className={styles.right1}>
            <p style={{ color: "#6f6d6d", fontSize: "1.4rem" }}>
              Start your healthy journey
            </p>
            <div className={styles.right1Inner}>
              <p>
                It only takes a{" "}
                <span style={{ color: "green" }}>few seconds</span> to create
                your account!!
              </p>
            </div>
          </div>

          <div className={styles.right2}>
            <div className={styles.goBack}>
              <Link to="/">⬅ Go Back Home</Link>
            </div>
            <div className={styles.goBack}>
              <Link to="/auth/doctor-register">Register as a doctor ?</Link>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <section className={styles.form}>
              <div className={styles.form1}>
                <p>First Name</p>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  placeholder="First Name here..."
                />
              </div>
              <div className={styles.form1}>
                <p>Last Name</p>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  placeholder="Last Name here..."
                />
              </div>
            </section>

            <section className={styles.form}>
              <div className={styles.form1}>
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email here..."
                />
              </div>
              <div className={styles.form1}>
                <p>Number</p>
                <input
                  type="tel"
                  name="number"
                  pattern="[0-9]{10,15}"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  placeholder="Number here..."
                />
              </div>
            </section>

            <section className={styles.form}>
              <div className={styles.form1}>
                <p>Password</p>
                <div className={styles.passwordWrapper}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password here..."
                    autoComplete="password"
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
              <div className={styles.form1}>
                <p>Repeat Password</p>
                <div className={styles.passwordWrapper}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repeat Password here..."
                    autoComplete="password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={styles.toggleBtn}
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>
            </section>

            <div className={styles.form3}>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <div>
                <p>Accept our </p>
                <p style={{ color: "rgb(108, 108, 234)" }}>
                  Terms and Conditions
                </p>
              </div>
            </div>

            <div className={styles.btns}>
              <div>
                <p>Already have an account?</p>
                <Link to="/auth/login">
                  <p style={{ color: "rgb(108, 108, 234)" }}>Log In</p>
                </Link>
              </div>
              <button type="submit" className={styles.btn2} disabled={loading}>
                {loading ? "Signing up..." : "Sign up"}
              </button>
            </div>
          </form>
        </section>
      </section>

      {/* 🔹 Background Image Side (Now Right) */}
      <section className={styles.leftContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.overlayText}>
          <h1>A healthy outside starts from the inside</h1>
        </div>
      </section>
    </section>
  );
};

export default Register;

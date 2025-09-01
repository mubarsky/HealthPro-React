import React, { useState } from "react";
import styles from "./doctorRegister.module.css";
import { Link, useNavigate } from "react-router-dom";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    specialization: "",
    license: "",
    experience: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Doctor form submitted:", formData);
    navigate("/doctor"); // 🔹 Later you’ll replace with API call
  };

  return (
    <section className={styles.logInContainer}>
      {/* 🔹 Form Side (Right side for Doctor) */}
      <section className={styles.rightContainer}>
        <section className={styles.content}>
          <div className={styles.rightLogo}>
            <img src="/images/healthPro-logo.png" alt="HealthPro Logo" />
          </div>

          <div className={styles.right1}>
            <p style={{ color: "#6f6d6d", fontSize: "1.4rem" }}>
              Join HealthPro as a Doctor
            </p>
            <div className={styles.right1Inner}>
              <p>
                Let’s get you <span style={{ color: "green" }}>registered</span>{" "}
                to start your journey
              </p>
            </div>
          </div>

          <div className={styles.right2}>
            <div className={styles.goBack}>
              <Link to="/">⬅ Go Back Home</Link>
            </div>
            <div className={styles.goBack}>
              <Link to="/auth/register">Register as a patient ?</Link>
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
                  placeholder="First Name..."
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
                  placeholder="Last Name..."
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
                  placeholder="Email..."
                />
              </div>
              <div className={styles.form1}>
                <p>Phone Number</p>
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  placeholder="Phone..."
                />
              </div>
            </section>

            <section className={styles.form}>
              <div className={styles.form1}>
                <p>Specialization</p>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Cardiologist"
                />
              </div>
              <div className={styles.form1}>
                <p>License No.</p>
                <input
                  type="text"
                  name="license"
                  value={formData.license}
                  onChange={handleChange}
                  required
                  placeholder="Medical License..."
                />
              </div>
            </section>

            <section className={styles.form}>
              <div className={styles.form1}>
                <p>Years of Experience</p>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="Years..."
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
                    required
                    placeholder="Password..."
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
                    required
                    placeholder="Repeat Password..."
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
                <Link to="/auth/doctor-login">
                  <p style={{ color: "rgb(108, 108, 234)" }}>Log In</p>
                </Link>
              </div>
              <button type="submit" className={styles.btn2}>
                Create Account
              </button>
            </div>
          </form>
        </section>
      </section>

      {/* 🔹 Background Image Side */}
      <section className={styles.leftContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.overlayText}>
          <h1>Healing hands, caring hearts 💚</h1>
        </div>
      </section>
    </section>
  );
};

export default DoctorRegister;

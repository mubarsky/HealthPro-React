import React, { useState } from "react";
import styles from "./resetPassword.module.css";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
 const [loading,setLoading]= useState(false)
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("email");

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    if (!email) {
      toast.error("No email found, please restart the reset process ❌");
      navigate("/recover-password");
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters ❌");
      return;
    }
    setLoading(true)
    try {
      
      const res = await fetch(
        "https://backend-api-zbhj.onrender.com/api/v1/user/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, newPassword: formData.password }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        localStorage.removeItem("email");
        toast.success("Password reset successful ✅");
        setTimeout(() => {
          navigate("/auth/login"); // ✅ better to go login after reset
        }, 1000);
      } else {
        toast.error(data.message || "Failed to reset password ❌");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again ❌");
    } finally {
      setLoading(false);
    }

    

     
  };

  return (
    <section className={styles.resetContainer}>
      {/* Form side */}
      <section className={styles.rightContainer}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/images/healthPro-logo.png" alt="HealthPro Logo" />
          </div>

          <h2>Reset Your Password 🔑</h2>
          <p style={{ color: "#6f6d6d" }}>
            Please enter and confirm your new password
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <p>New Password</p>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  required
                  autoComplete="new-password"
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

            <div className={styles.formGroup}>
              <p>Confirm Password</p>
              <div className={styles.passwordWrapper}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat new password"
                  required
                  autoComplete="new-password"
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

            <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? "Resetting Password..." : "Reset Password"}
            </button>
          </form>
          <Link to="/auth/login">
            <p className={styles.toLogin}>login</p>
          </Link>
        </div>
      </section>

      {/* Background side */}
      <section className={styles.leftContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.overlayText}>
          <h1>Secure your account with a strong password 🔒</h1>
        </div>
      </section>
    </section>
  );
};

export default ResetPassword;

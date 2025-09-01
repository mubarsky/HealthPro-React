import React, { useState, useRef } from "react";
import { useNavigate,Link } from "react-router-dom";
import styles from "./otpVerification.module.css";

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (/[^0-9]/.test(value)) return; // allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input automatically
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    console.log(otpCode);

    if (otpCode.length < 6) {
      alert("Please enter all 6 digits");
      return;
    }

    console.log("OTP entered:", otpCode);
      alert("OTP verified successfully ✅");
    navigate("/reset-password"); // next page after verifying
  };

  return (
    <section className={styles.otpContainer}>
      {/* Left side */}
      <section className={styles.leftOtp}>
        <div className={styles.overlay}></div>
        <div className={styles.overlayText}>
          <h1>Check your email 📧</h1>
          <p>Enter the 6-digit code we sent to verify your account</p>
        </div>
      </section>

      {/* Right side */}
      <section className={styles.rightOtp}>
        <section className={styles.content}>
          <div className={styles.rightLogo}>
            <img src="/images/healthPro-logo.png" alt="HealthPro Logo" />
          </div>

          <h2 className={styles.title}>OTP Verification</h2>

          <form onSubmit={handleSubmit} className={styles.otpForm}>
            <div className={styles.otpInputs}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={styles.otpBox}
                  required
                />
              ))}
            </div>

            <button type="submit" className={styles.btn}>
              Verify OTP
            </button>
          </form>
          <div>
            <p className={styles.resend}>
              Didn’t get the code?{" "}
              <span onClick={() => alert("Resend OTP clicked!")}>Resend</span>
            </p>
            <Link to="/auth/login">
              <p className={styles.toLogin}>login</p>
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
};

export default OtpVerification;

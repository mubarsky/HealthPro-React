import styles from "./contact.module.css";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import clsx from "clsx";
import { useState } from "react";
import { toast } from "react-toastify";
const Contact = ({ theme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");   
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => { 
    e.preventDefault();
  
      
        toast.info("Message Sent", {
          position: "top-center",
          autoClose:2000,
    
        });
    
    
  }
  return (
    <section
      id="contact"
      className={clsx(
        styles.contactContainer,
        theme === "dark" && styles.darkEducation
      )}
    >
      <h1>Get In Touch</h1>
      <p
        style={{
          color: "#566666",
        }}
      >
        "Have a question? Send us a message and our team will get back to you
        promptly."
      </p>
      <div className={styles.contactContent}>
        <div className={styles.leftContact}>
          <div className={styles.contactForm}>
            <p className={styles.contact}>Contact Information</p>
            <div className={styles.contactInfo}>
              <MdMailOutline className={styles.mail} />
              <div>
                <p
                  style={{
                    fontWeight: "500",
                  }}
                >
                  Email:
                </p>
                <p
                  style={{
                    color: "#566666",
                  }}
                >
                  Ismailmubarak1221@gmail.com
                </p>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <FiPhone className={styles.mail} />
              <div className={styles.contactbla}>
                <p
                  style={{
                    fontWeight: "500",
                  }}
                >
                  Phone:
                </p>
                <p
                  style={{
                    color: "#566666",
                  }}
                >
                  08026742697{" "}
                </p>
              </div>
            </div>
            <div className={styles.contactInfo}>
              <IoLocationOutline className={styles.mail} />
              <div>
                <p
                  style={{
                    fontWeight: "500",
                  }}
                >
                  Location:
                </p>
                <p
                  style={{
                    color: "#566666",
                  }}
                >
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContact}>
          <form onSubmit={handleSubmit}>
            <section className={styles.form1}>
              <div className={styles.form1left}>
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className={styles.form1right}>
                <p>Email</p>
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </section>
            <section className={styles.form2}>
              <p>Subject</p>
              <input
                type="text"
                placeholder=" Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </section>
            <section className={styles.form3}>
              <p>Message</p>
              <textarea
                placeholder="Type your message here"
                rows="5"
                cols="50"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </section>
            <div className={styles.sendBtnContainer}>
              <button className={styles.sendBtn}>
                <LuSend className={styles.sendIcon} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

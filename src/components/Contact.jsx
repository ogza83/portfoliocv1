import React from "react";
import Fade from "react-reveal/Fade";
import ScrollArrow from "./ScrollArrow";
import styles from "./styles/Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <Fade bottom>
        <h2>Contact</h2>
        <p>Email: ogi@grba.pro</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ogrba/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/ogrba
          </a>
        </p>
        <p>Phone: +385995269484</p>
      </Fade>
      <ScrollArrow direction="up" targetId="projects" />
    </section>
  );
};

export default Contact;

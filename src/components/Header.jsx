import React from "react";
import Typical from "react-typical";
import styles from "./styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Typical
          steps={["Ogi Grba", 2000, "Product Leader", 2000]}
          loop={Infinity}
          wrapper="p"
        />
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

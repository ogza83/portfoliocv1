import React from "react";
import styles from "./styles/ScrollArrow.module.css";

const ScrollArrow = ({ direction, targetId }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${styles.scrollArrow} ${
        direction === "up" ? styles.up : styles.down
      }`}
      onClick={handleClick}
    >
      {direction === "up" ? "↑" : "↓"}
    </div>
  );
};

export default ScrollArrow;

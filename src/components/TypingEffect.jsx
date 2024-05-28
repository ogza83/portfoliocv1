import React, { useState, useEffect } from "react";
import styles from "./styles/TypingEffect.module.css";

const TypingEffect = ({ text = "", speed }) => {
  // Provide a default empty string value for text
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, displayedText]);

  useEffect(() => {
    const caretInterval = setInterval(() => {
      setShowCaret((prevShowCaret) => !prevShowCaret);
    }, 500); // Adjust the blinking speed here
    return () => clearInterval(caretInterval);
  }, []);

  return (
    <p className={styles.typing}>
      {displayedText}
      <span className={showCaret ? styles.caret : ""}></span>
    </p>
  );
};

export default TypingEffect;

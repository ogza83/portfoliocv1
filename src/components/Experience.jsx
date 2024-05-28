import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Fade from "react-reveal/Fade";
import TypingEffect from "./TypingEffect";
import ScrollArrow from "./ScrollArrow";
import styles from "./styles/Experience.module.css";
import experienceItems from "../data/experienceItems";

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && currentIndex < experienceItems.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, experienceItems[currentIndex].description.length * 10 + 300);
      return () => clearTimeout(timeout);
    }
  }, [inView, currentIndex]);

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <Fade bottom when={inView}>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <h2>Experience</h2>
          </div>
          <div className={styles.rightColumn}>
            <ul>
              {experienceItems.slice(0, currentIndex + 1).map((item, index) => (
                <li key={index}>
                  <h3>{item.title}</h3>
                  <h4>{item.company}</h4>
                  <p>
                    {item.location} | {item.date}
                  </p>
                  <TypingEffect text={item.description} speed={5} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Fade>
      <div className={styles.scrollArrows}>
        <ScrollArrow direction="up" targetId="about" />
        <ScrollArrow direction="down" targetId="projects" />
      </div>
    </section>
  );
};

export default Experience;

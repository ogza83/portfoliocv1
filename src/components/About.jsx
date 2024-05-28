import React from "react";
import Fade from "react-reveal/Fade";
import TypingEffect from "./TypingEffect";
import styles from "./styles/About.module.css";
import ScrollArrow from "./ScrollArrow";

const aboutMeText =
  "Dynamic and visionary Product Leader with over 20 years of experience, specialized in driving strategic innovation and digital transformation across global tech industries. Proven track record of leading companies through pivotal growth phases, from concept development to market leadership, through agile leadership and customer-centric product design.Committed to leveraging extensive operational expertise and strategic insight to deliver exceptional results and sustainable growth.";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <Fade bottom>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <h2>About Me</h2>
          </div>
          <div className={styles.rightColumn}>
            <TypingEffect text={aboutMeText} speed={5} />
          </div>
        </div>
      </Fade>
      <ScrollArrow direction="down" targetId="experience" />
    </section>
  );
};

export default About;

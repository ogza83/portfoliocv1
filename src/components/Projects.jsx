import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import ScrollArrow from "./ScrollArrow";
import styles from "./styles/Projects.module.css";
import projects from "../data/projects";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    if (inView && currentIndex < projects.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, (projects[currentIndex].experience?.length || 0) * 20 + 500);
      return () => clearTimeout(timeout);
    }
  }, [inView, currentIndex]);

  const openModal = (image) => {
    setModalImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage("");
  };

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <Fade bottom when={inView}>
        <div className={styles.container}>
          <div className={styles.leftColumn}>
            <h2>Projects</h2>
          </div>
          <div className={styles.centerColumn}>
            <ul>
              {projects.slice(0, currentIndex + 1).map((project, index) => (
                <Fade bottom key={index}>
                  <li>
                    <h3>{project.title}</h3>
                    <p>
                      <strong>Type:</strong> {project.type}
                    </p>
                    <p>
                      <strong>Role:</strong> {project.role}
                    </p>
                    <p>
                      <strong>Date:</strong> {project.date}
                    </p>
                    <p>
                      <strong>Skills:</strong> {project.skills.join(", ")}
                    </p>
                    <p>
                      <strong>Experience:</strong> {project.experience}
                    </p>
                    <p>
                      <strong>Problem:</strong> {project.problem}
                    </p>
                    <p>
                      <strong>Contributions:</strong> {project.contributions}
                    </p>
                    <p>
                      <strong>Outcomes:</strong> {project.outcomes}
                    </p>
                  </li>
                </Fade>
              ))}
            </ul>
          </div>
          <div className={styles.rightColumn}>
            {projects.slice(0, currentIndex + 1).map((project, index) => (
              <div key={index} className={styles.images}>
                {project.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                    onClick={() => openModal(image)}
                    className={styles.thumbnail}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Fade>
      <div className={styles.scrollArrows}>
        <ScrollArrow direction="up" targetId="experience" />
        <ScrollArrow direction="down" targetId="contact" />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <img
          src={modalImage}
          alt="Project screenshot"
          className={styles.modalImage}
        />
        <button onClick={closeModal} className={styles.closeButton}>
          Close
        </button>
      </Modal>
    </section>
  );
};

export default Projects;

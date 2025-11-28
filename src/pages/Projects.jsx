import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A modern online store with cart, checkout, and product management.",
  },
  {
    title: "Portfolio Website",
    description: "Showcasing my skills, projects, and resume with animations.",
  },
  {
    title: "Calculator App",
    description: "A fully functional calculator built with React.",
  },
];

export default function ProjectsHorizontal() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.8,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="projects-horizontal-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-horizontal-container">
        {projects.map((project, i) => (
          <div
            className="project-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

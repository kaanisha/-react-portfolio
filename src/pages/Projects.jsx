import React, { useRef, useEffect } from "react";
import Prism from "../components/Aurora";
import "./Projects.css";
import { gsap } from "gsap";

export default function ProjectsPage() {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A responsive e-commerce website built using HTML, CSS, and JavaScript. Features include product listings, a functional shopping cart, and interactive UI elements, all handled on the frontend without backend integration.",
    },
    {
      title: "Calculator App",
      description: "A modern, responsive calculator built using HTML, CSS, and JavaScript. Supports basic arithmetic operations with an intuitive user interface and clean design.",
    },
    {
      title: "Portfolio Website",
      description: "An interactive and responsive personal portfolio website built with React. Showcases projects, skills, and contact information with smooth animations and reusable components for a modern UI/UX",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2, 
      }
    );
  }, []);

  return (
    <div className="projects-page">
      <div className="prism-background">
        <Prism
          animationType="rotate"
          timeScale={0} 
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>
      <div className="projects-container">
        <h1 className="projects-title" ref={titleRef}>
          Projects
        </h1>

        <div className="projects-row">
          {projects.map((p, index) => (
            <div
              key={index}
              className="project-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

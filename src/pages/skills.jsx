import React, { useRef, useEffect } from "react";
import Prism from "../components/Aurora";
import "./Skills.css";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaPython, 
  FaJava, 
  FaGitAlt, 
  FaGithub, 
  FaFigma, 
  FaCuttlefish 
} from "react-icons/fa";
import { gsap } from "gsap";

export default function Skills() {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Python", icon: <FaPython color="#FFD43B" /> },
    { name: "Java", icon: <FaJava color="#f89820" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="#e0d9d9ff" /> },
    { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
    { name: "C", icon: <FaCuttlefish color="#A8B9CC" /> },
  ];

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: index * 0.2, ease: "power3.out" }
      );
    });
  }, []);

  return (
    <div className="skills-page">
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

      <div className="skills-container">
        <h2 className="skills-title" ref={titleRef}>
          My Skills
        </h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-box"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

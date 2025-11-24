import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiFigma, SiGithub } from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <div className="icons">
            <FaJava className="icon java" />
            <FaPython className="icon python" />
            <FaJs className="icon js" />
          </div>
        </div>
        <div className="skill-card">
          <h3>Frontend Development</h3>
          <div className="icons">
            <FaHtml5 className="icon html" />
            <FaCss3Alt className="icon css" />
            <FaJs className="icon js" />
            <FaReact className="icon react" />
          </div>
        </div>
        <div className="skill-card">
          <h3>Backend Development</h3>
          <div className="icons">
             <FaJava className="icon java" />
            <FaPython className="icon python" />
          </div>
        </div>
        <div className="skill-card">
          <h3>Tools & Platforms</h3>
          <div className="icons">
            <FaGitAlt className="icon git" />
            <SiGithub className="icon github" />
            <SiFigma className="icon figma" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;


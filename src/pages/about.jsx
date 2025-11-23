import React from "react";
import "./About.css";

import aboutVideo from "../assets/Girl working on about me page.mp4";

function About() {
  return (
    <section className="about" id="about">
      <video
        className="about-bg-video"
        src={aboutVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am an engineering student with a strong passion for web development, UI/UX design, and building smooth, modern digital experiences. I enjoy turning ideas into interactive, visually appealing interfaces using clean and efficient code.
I love learning new technologies and constantly improving my skills through hands-on projects, team collaborations, and real-world problem solving. My goal is to become a full-stack developer and create impactful solutions that combine functionality, design, and user-centered thinking.
        </p>
      </div>
    </section>
  );
}

export default About;







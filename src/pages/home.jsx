import React, { useEffect, useRef } from "react";
import Prism from "../components/Aurora";
import "./Home.css";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(SplitText);

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const split1 = new SplitText(titleRef.current, { type: "chars" });
    gsap.from(split1.chars, {
      duration: 1,
      opacity: 0,
      y: 60,
      ease: "power3.out",
      stagger: 0.04,
    });

    const split2 = new SplitText(subtitleRef.current, { type: "chars" });
    gsap.from(split2.chars, {
      duration: 1,
      opacity: 0,
      y: 40,
      ease: "power3.out",
      stagger: 0.02,
      delay: 0.4,
    });
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000000", 
      }}
    >
      <Prism
        animationType="rotate"
        timeScale={0.5}
        height={3.5}
        baseWidth={5.5}
        scale={3.6}
        hueShift={0}
        colorFrequency={1}
        noise={0.5}
        glow={1}
      />

      <div
        className="hero"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 20,
          color: "#FFFFFF", 
        }}
      >
        <h1 className="hero-title" ref={titleRef}>
          Hi there, I'm Kaanisha
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          Frontend Developer
        </p>
        <div
          className="home-buttons"
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "15px",
          }}
        >
          <Link to="/about" className="btn">
            About Me
          </Link>
          <a
            className="btn"
            href="/Kaanisha-Resume.docx.pdf"
            download="Kaanisha-Resume.docx.pdf"
          >
            Download CV
          </a>
        </div>
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "25px",
            fontSize: "1.8rem",
          }}
        >
          <a
            href="https://github.com/kaanisha"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e7dedeff", transition: "transform 0.3s" }}
            className="social-icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kaanisha-s"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0A66C2", transition: "transform 0.3s" }}
            className="social-icon"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kaanisha03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#c5832cf3", transition: "transform 0.3s" }}
            className="social-icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

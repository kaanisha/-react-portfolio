import React, { useEffect, useRef } from "react";
import Prism from "../components/Aurora";
import "./Home.css";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom";

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
        }}
      >
        <h1 className="hero-title" ref={titleRef}>
          Hi there, I'm Kaanisha
        </h1>

        <p className="hero-subtitle" ref={subtitleRef}>
          Frontend Developer
        </p>

        <div className="home-buttons">
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
      </div>
    </div>
  );
}


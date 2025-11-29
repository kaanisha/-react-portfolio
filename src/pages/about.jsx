import React, { useEffect, useRef } from "react";
import Prism from "../components/Aurora";
import "./About.css";
import { gsap } from "gsap";
import profileImg from "../assets/profile.jpg";

export default function AboutPage() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );

    // Text animation
    gsap.to(textRef.current, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });

    // Image animation (fixed - now works)
    gsap.to(imgRef.current.querySelector("img"), {
      opacity: 1,
      x: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out",
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

      <div className="about-container">
        <h1 className="about-title" ref={titleRef}>
          About Me
        </h1>

        <div className="about-content">
          <div className="about-text" ref={textRef}>
            <p>
              I’m Kaanisha, a creative and detail-focused individual who enjoys
              turning ideas into simple, modern, and visually meaningful
              experiences. I love crafting clean layouts, thoughtful
              interactions, and designs that feel smooth and enjoyable to use.
              I’m always exploring new ways to grow, improve my style, and bring
              more clarity and purpose into the work I create.
            </p>
          </div>

          <div className="about-profile" ref={imgRef}>
            <img src={profileImg} alt="Kaanisha" />
          </div>
        </div>
      </div>
    </div>
  );
}

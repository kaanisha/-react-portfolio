import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-left">
        <h1 className="title">
          Hi there,<br />
          I'm <span className="highlight">Kaanisha</span>
        </h1>

        <h2 className="subtitle">Frontend Developer</h2>

        <p className="description">
          I create high-quality, responsive web interfaces with clean design and smooth user interactions.
        </p>

        <Link to="/about" className="btn primary">About Me</Link>
      </div>

      <div className="home-right">
        <div className="profile-wrapper">
          <img
            src="/src/assets/profile.jpg"
            alt="profile"
            className="profile"
          />
        </div>
      </div>
      <div class="el">
    </div>
    </section>


    
  );
}

export default Home;

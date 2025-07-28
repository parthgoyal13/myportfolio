import React from "react";
import ReactIcon from "./ReactIcon";

function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="hero-name">N Parth Goyal</h1>
            <div className="hero-icon-container">
              <ReactIcon size="large" />
            </div>
          </div>
          
          <div className="hero-center">
            <div className="hero-circle">
              <h2 className="hero-greeting">Hi, I'm</h2>
              <p className="hero-subtitle">
                A Full-Stack Developer specializing in
              </p>
              <h1 className="hero-specialty">React.js</h1>
              <button className="hero-btn" onClick={scrollToProjects}>View Portfolio</button>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="hero-icon-container">
              <ReactIcon size="large" />
            </div>
            <h1 className="hero-projects">Projects</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

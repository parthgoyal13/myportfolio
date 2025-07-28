import React from 'react';
import ReactIcon from './ReactIcon';

function About() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    // You can replace this with your actual resume link
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">
              <ReactIcon size="small" />
            </div>
            <h3 className="card-title">About Me</h3>
            <p className="card-subtitle">Full-Stack Developer</p>
            <p className="card-text">
              Passionate Full-Stack Developer with experience in MERN stack development. 
              Currently working at CozmoTec, Ireland as a Junior Software Developer, 
              handling both frontend and backend development of internal tools and legacy applications.
            </p>
            <button className="card-btn" onClick={() => scrollToSection('contact')}>Read More</button>
          </div>
          
          <div className="about-card">
            <div className="card-icon">
              <ReactIcon size="small" />
            </div>
            <h3 className="card-title">Experience</h3>
            <p className="card-subtitle">2+ Years Experience</p>
            <p className="card-text">
              Junior Software Developer at CozmoTec, Ireland (2025-Present). 
              Previously interned at Xavient Software Solutions and completed 
              Full-Stack Development training at neoG Camp.
            </p>
            <button className="card-btn" onClick={() => scrollToSection('projects')}>View Work</button>
          </div>
          
          <div className="about-card">
            <div className="card-icon">
              <ReactIcon size="small" />
            </div>
            <h3 className="card-title">Education</h3>
            <p className="card-subtitle">Computer Engineering</p>
            <p className="card-text">
              Bachelor's in Computer Engineering from Smt. Kashibai Navale College 
              of Engineering, Pune. Graduated in July 2023 with CGPA of 7.31.
            </p>
            <button className="card-btn" onClick={openResume}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 
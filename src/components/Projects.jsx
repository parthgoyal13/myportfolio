import React from 'react';
import projects from '../projectData';

function Projects() {
  const openLink = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      // If no link is provided, you can show an alert or handle it differently
      alert('Link not available yet. Please check back later!');
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <button 
                    className="project-btn primary"
                    onClick={() => openLink(project.demoLink)}
                  >
                    Live Demo
                  </button>
                  <button 
                    className="project-btn secondary"
                    onClick={() => openLink(project.sourceCodeLink)}
                  >
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

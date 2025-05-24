import projectData from "../projectData";

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row g-4">
          {projectData.map((project) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={project.name}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>

                  {/* Technologies as badges */}
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="badge bg-secondary me-1 mb-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons aligned at the bottom */}
                  <div className="mt-auto">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary me-2 mb-2"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.sourceCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-secondary mb-2"
                    >
                      Source Code
                    </a>
                  </div>
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

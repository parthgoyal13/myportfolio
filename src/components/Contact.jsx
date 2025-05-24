function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact</h2>
        <div className="row justify-content-center text-center">
          <div className="col-md-3">
            <div className="card p-3">
              <h5>GitHub</h5>
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/your-profile
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3">
              <h5>LinkedIn</h5>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/your-profile
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3">
              <h5>Resume</h5>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;

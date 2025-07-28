import React from "react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3 className="contact-title">Email</h3>
            <a href="mailto:goyalnparth@gmail.com" className="contact-link">
              goyalnparth@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <h3 className="contact-title">Phone</h3>
            <a href="tel:+917725972272" className="contact-link">
              +91 7725972272
            </a>
          </div>

          <div className="contact-card">
            <h3 className="contact-title">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/nparthgoyal13072001"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import React from 'react';

function Technologies() {
  return (
    <section className="technologies-section" id="technologies">
      <div className="technologies-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="technologies-grid">
          <div className="tech-category">
            <h3 className="tech-category-title">Programming & Frameworks</h3>
            <ul className="tech-list">
              <li>C</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>REST APIs</li>
            </ul>
          </div>
          
          <div className="tech-category">
            <h3 className="tech-category-title">Core JavaScript</h3>
            <ul className="tech-list">
              <li>Vanilla JS</li>
              <li>OOP Concepts</li>
              <li>ES6</li>
              <li>Structuring & Destructuring</li>
            </ul>
          </div>
          
          <div className="tech-category">
            <h3 className="tech-category-title">Backend & Architecture</h3>
            <ul className="tech-list">
              <li>MERN Stack</li>
              <li>REST</li>
              <li>WSDL</li>
              <li>MVC</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;

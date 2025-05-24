function Technologies() {
  return (
    <section id="technologies" className="py-3 mb-2">
      <h2 className="mb-4">Technologies</h2>
      <div className="row">
        <div className="col-md-4">
          <h5>Frontend</h5>
          <ul className="list-unstyled">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Backend</h5>
          <ul className="list-unstyled">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Tools & Other</h5>
          <ul className="list-unstyled">
            <li>Git & GitHub</li>
            <li>Bootstrap</li>
            <li>Redux Toolkit</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Technologies;

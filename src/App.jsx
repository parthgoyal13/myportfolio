import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="browser-frame">
        <div className="content-area">
          <Hero />
          <About />
          <Projects />
          <Technologies />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

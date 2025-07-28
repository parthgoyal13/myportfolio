import React from 'react';
import { FaReact } from "react-icons/fa";

function ReactIcon({ size = "large" }) {
  const sizeClass = size === "large" ? "react-icon-large" : "react-icon-small";
  
  return (
    <div className={`react-icon ${sizeClass}`}>
      <FaReact />
    </div>
  );
}

export default ReactIcon; 
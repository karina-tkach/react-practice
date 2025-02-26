import React from 'react';
import "../assets/css/ProcessStep.css"

const ProcessStep = ({ title, description }) => (
  <div className="step-container">
    <div className="circle-line">
      <div className="circle"></div>
      <div className="dotted-line"></div>
    </div>
    <div className="process-step">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default ProcessStep;

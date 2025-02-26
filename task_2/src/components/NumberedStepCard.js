import React from "react";
import "../assets/css/NumberedStepCard.css";

const NumberedStepCard = ({ number, title, description }) => {
  return (
    <div className="step">
      <span className="step-number">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default NumberedStepCard;

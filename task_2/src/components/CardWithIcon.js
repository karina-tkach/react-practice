import React from "react";
import "../assets/css/CardWithIcon.css";

const CardWithIcon = ({ img, alt, title, text }) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={img} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default CardWithIcon;

import React from "react";
import "../assets/css/Section.css";

const LeftImageSection = ({ className = "", headingStyle = "", title, heading, text, image, alt }) => {
  return (
    <section className={className}>
      <div className="content">
        <h3>{title}</h3>
        <h2 className={headingStyle}>{heading}</h2>
        <p>{text}</p>
      </div>
      <img src={image} alt={alt} />
    </section>
  );
};

export default LeftImageSection;

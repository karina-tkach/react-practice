import React from "react";
import "../assets/css/Section.css";

const RightImageSection = ({ className = "", headingStyle ="", title, heading, text, image, alt }) => {
  return (
    <section className={`section ${className}`}>
      <img src={image} alt={alt} />
      <div className="content">
        <h3>{title}</h3>
        <h2 className={headingStyle}>{heading}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default RightImageSection;

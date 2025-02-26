import React from 'react';
import "../assets/css/WhoWeAre.css"
import image from "../assets/img/work.jpg"

const WhoWeAreContent = ({ title, description }) => (
  <div className="who-we-are-content">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const WhoWeAreSection = () => {
  return (
    <section className="who-we-are">
      <div className="description">
        <h3>Who we are</h3>
        <div className="who-we-are-container">
          <WhoWeAreContent
            title="Goal Focused"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <WhoWeAreContent
            title="Continuous Improvement"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div>
      <img src={image} alt="Who We Are" />
    </section>
  );
};

export default WhoWeAreSection;

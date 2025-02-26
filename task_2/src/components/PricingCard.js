import React from 'react';
import "../assets/css/PricingCard.css"

const PricingCard = ({ price, tag, description, title, features, buttonText, buttonClass, highlight }) => {
  return (
    <div className={`pricing-card ${highlight ? 'highlight' : ''}`}>
      <div>
        <h3>
          <span className="price">{price}</span> <span className="tag">{tag}</span>
        </h3>
        <p className="pricing-title">{title}</p> 
        <p className="pricing-description">{description}</p>
      </div>
      <div>
        <ul className="features">
          {features.map((feature, index) => (
            <li key={index} className={feature.inactive ? 'inactive' : ''}>
              {feature.text}
            </li>
          ))}
        </ul>
        <div className="button-container">
          <a href="#" className={`button ${buttonClass}`}>{buttonText}</a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

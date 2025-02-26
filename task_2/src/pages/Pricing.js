import React from "react";
import PricingCard from '../components/PricingCard';
import "../assets/css/Pricing.css"

const Pricing = () => {
  const pricingPlans = [
    {
      price: "$299",
      tag: "Per Design",
      title: "Landing Page",
      description: "When you’re ready to go beyond prototyping in Figma.",
      features: [
        { text: "All limited links" },
        { text: "Own analytics platform" },
        { text: "Chat support" },
        { text: "Optimize hashtags", inactive: true },
        { text: "Unlimited users", inactive: true },
      ],
      buttonText: "Get started",
      buttonClass: "primary",
      highlight: false,
    },
    {
      price: "$399",
      tag: "Multi Design",
      title: "Website Page",
      description: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
      features: [
        { text: "All limited links" },
        { text: "Own analytics platform" },
        { text: "Chat support" },
        { text: "Optimize hashtags" },
        { text: "Unlimited users" },
      ],
      buttonText: "Get started",
      buttonClass: "secondary",
      highlight: true,
    },
    {
      price: "$499+",
      tag: "Per Design",
      title: "Complex Project",
      description: "When you’re ready to go beyond prototyping in Figma.",
      features: [
        { text: "All limited links" },
        { text: "Own analytics platform" },
        { text: "Chat support" },
        { text: "Optimize hashtags" },
        { text: "Unlimited users" },
        { text: "Assist and Help" },
      ],
      buttonText: "Contact us",
      buttonClass: "primary",
      highlight: false,
    },
  ];

  return (
    <main className="pricing-section">
      <div className="pricing-heading">
        <h2>Our Pricing Plans</h2>
        <p>When you're ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
      </div>
      <div className="pricing-container">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            price={plan.price}
            tag={plan.tag}
            title={plan.title}
            description={plan.description}
            features={plan.features}
            buttonText={plan.buttonText}
            buttonClass={plan.buttonClass}
            highlight={plan.highlight}
          />
        ))}
      </div>
    </main>
  );
};

export default Pricing;

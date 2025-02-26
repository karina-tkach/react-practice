import React from "react";
import Button from "./Button";
import NumberedStepCard from "./NumberedStepCard";
import "../assets/css/HowWeWork.css";

const steps = [
    { number: "01", title: "Strategy", description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." },
    { number: "02", title: "Wireframing", description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." },
    { number: "03", title: "Design", description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." },
    { number: "04", title: "Development", description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam." }
];

const HowWeWork = () => {
    return (
        <section className="how-we-work">
            <div className="how-we-work-content">
                <h2>How we work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <Button to="/contact" className="cta" content="Get in touch with us &nbsp;&nbsp;→" />
            </div>
            <div className="work-steps">
                {steps.map((step, index) => (
                    <NumberedStepCard
                        key={index}
                        number={step.number}
                        title={step.title}
                        description={step.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default HowWeWork;

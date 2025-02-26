import React from "react";
import illustration from "../assets/img/Illustration.png";
import Button from "./Button";
import "../assets/css/InfoSection.css";

const InfoSection = ({ title, description }) => {
    return (
        <section className="info">
            <div className="info-content">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="buttons">
                <Button to="/about" className="primary-button" content="View our work"/>
                <Button to="/pricing" className="pricing-link" content="View Pricing &nbsp;&nbsp;→"/>
                </div>
            </div>
            <div className="info-image">
                <img src={illustration} alt="Web development illustration" />
            </div>
        </section>
    );
};

export default InfoSection;

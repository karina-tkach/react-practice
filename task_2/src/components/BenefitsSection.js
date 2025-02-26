import React from "react";
import "../assets/css/Benefits.css";
import Logos from "./Logos";
import CardWithIcon from "./CardWithIcon";
import customizeIcon from "../assets/img/icon1.png";
import responsiveIcon from "../assets/img/icon2.png";
import supportIcon from "../assets/img/icon3.png";

const cardData = [
  {
    img: customizeIcon,
    alt: "Customize Icon",
    title: "Customize with ease",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
  },
  {
    img: responsiveIcon,
    alt: "Responsive Icon",
    title: "Perfectly Responsive",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
  },
  {
    img: supportIcon,
    alt: "Support Icon",
    title: "Friendly Support",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
  }
];

const BenefitsSection = ({ heading, top }) => {
  return (
    <section className="benefits">
      <div className="benefits-container">
        {top && <Logos />}
        <h2 className="title">{heading}</h2>
        <div className="grid">
          {cardData.map((card, index) => (
            <CardWithIcon key={index} {...card} />
          ))}
        </div>
        {!top && <Logos />}
      </div>
    </section>
  );
};

export default BenefitsSection;

import React, { useState } from "react";
import "../assets/css/QAItem.css";

const QAItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`} onClick={toggleAnswer}>
      <div className="faq-question">
        <span className="faq-number">{number}</span>
        <span className="question">{question}</span>
        <span className="faq-toggle">{isOpen ? "X" : "+"}</span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default QAItem;

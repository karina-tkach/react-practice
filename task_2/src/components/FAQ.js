import React from "react";
import { Link } from "react-router-dom";
import QAItem from "./QAItem";
import "../assets/css/FAQ.css";

const faqs = [
    { number: "01", question: "How much time does it take?", answer: "It depends on the project complexity. Typically, it takes between 2-6 weeks." },
    { number: "02", question: "What is your class naming convention?", answer: "We follow BEM (Block Element Modifier) naming convention for consistency and scalability." },
    { number: "03", question: "How do you communicate?", answer: "We use Slack, email, and scheduled Zoom calls to ensure smooth communication." },
    { number: "04", question: "I have a bigger project. Can you handle it?", answer: "Yes, we have experience handling large-scale projects with dedicated teams." }
];

const FAQ = () => {

    return (
        <section id="faq" className="faq-section">
            <div>
                <h2 className="faq-header">Frequently asked questions</h2>
                <Link to="/contact" className="faq-contact">Contact us for more info</Link>
            </div>
            <div className="faq-list">
            {faqs.map((faq, index) => (
          <QAItem key={index} number={faq.number} question={faq.question} answer={faq.answer} />
        ))}
            </div>
        </section>
    );
};

export default FAQ;

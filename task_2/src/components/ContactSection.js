import React from "react";
import Button from "./Button";
import "../assets/css/ContactSection.css";

const ContactSection = () => {
    return (
        <section className="contacts">
            <div className="section-container">
                <div className="left-section">
                    <div className="left-content">
                        <h1>Building stellar websites for early startups</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
                <div className="right-section">
                    <form className="form-container">
                        <h2>Send inquiry</h2>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Paste your Figma design URL" />
                        <button type="submit">Send an Inquiry</button>
                        <div className="contact-link"><Button to="/contact" className="white-link" content="Get in touch with us &nbsp;&nbsp;→"/></div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

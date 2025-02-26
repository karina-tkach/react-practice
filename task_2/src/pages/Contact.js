import React, { useState } from "react";
import "../assets/css/Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    context: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

    return (
        <main className="contact-section">
      <div className="contact-heading">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="context">Context</label>
              <input
                type="text"
                id="context"
                placeholder="Provide context"
                value={formData.context}
                onChange={handleChange}
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="Select Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact-form-group full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Write your question here"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="contact-submit-btn">Send Message</button>
        </form>
      </div>
    </main>
    );
}

export default Contact;
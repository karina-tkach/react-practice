import React from "react";
import Nav from "./Nav";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="logo-footer">Finsweet</h2>
          <p>We are always open to discuss your project and improve your online presence.</p>
          <div className="contact-box">
            <div className="contact-item">
              <p className="heading-contacts">Email me at</p>
              <p>contact@website.com</p>
            </div>
            <div className="contact-item">
              <p className="heading-contacts">Call us</p>
              <p>0927 6277 28525</p>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <h2>Let’s Talk!</h2>
          <p>
            We are always open to discuss your project, improve your online presence, and help
            with your UX/UI design challenges.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2025, Finsweet.com</p>
        <Nav className="footer-nav" />
      </div>
    </footer>
  );
};

export default Footer;

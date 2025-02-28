import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope, FaGooglePlus } from "react-icons/fa";
import { MdOutlineContactMail, MdOutlineSubscriptions } from "react-icons/md";
import { BiParty, BiRefresh } from "react-icons/bi";
import "../assets/css/HomeFooter.css";

const HomeFooter = () => {
  return (
    <footer className="home-footer">
      <div className="footer-section">
        <h3>SHARE</h3>
        <ul>
          <li><a href="#"><FaEnvelope /> Send via e-mail</a></li>
          <li><a href="#"><FaTwitter /> Share on Twitter</a></li>
          <li><a href="#"><FaFacebook /> Share on Facebook</a></li>
          <li><a href="#"><FaGooglePlus /> Share on Google Plus</a></li>
          <li><a href="#"><FaLinkedin /> Share on LinkedIn</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>MORE</h3>
        <ul>
          <li><a href="#"><MdOutlineContactMail /> Contact Me</a></li>
          <li><a href="#"><MdOutlineSubscriptions /> Subscribe</a></li>
          <li><a href="#"><BiParty /> Submit</a></li>
          <li><a href="#"><BiRefresh /> Replay Onboarding</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>ABOUT</h3>
        <p>
          Flat UI Colors 2 brought to you by Karina Tkach.<br />
          <a href="https://twitter.com/">Follow me on Twitter</a> or <a href="#">Subscribe</a> to be the first to know when I launch new products.
        </p>
        <p>
          Read the <a href="https://medium.com/">article on Medium</a> to learn more.
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;

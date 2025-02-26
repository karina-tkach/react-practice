import React from "react";
import Nav from "./Nav";
import Button from "./Button";
import "../assets/css/Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Button to="/" className="logo" content="{Finsweet"/>
        <Nav className="nav-links" />
        <Button to="/contact" className="contact-btn" content="Contact us"/>
      </div>
    </nav>
  );
};

export default Header;

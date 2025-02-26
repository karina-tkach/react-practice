import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ className }) => {
  const location = useLocation();

  return (
    <ul className={className}>
      <li><Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
      <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About us</Link></li>
      <li><Link to="/features" className={location.pathname === "/features" ? "active" : ""}>Features</Link></li>
      <li><Link to="/pricing" className={location.pathname === "/pricing" ? "active" : ""}>Pricing</Link></li>
      <li><Link to="/#faq">FAQ</Link></li>
      <li><Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link></li>
    </ul>
  );
};

export default Nav;

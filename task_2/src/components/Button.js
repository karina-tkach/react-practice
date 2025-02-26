import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Button.css";

const Button = ({ to, className, content }) => {
  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  );
};

export default Button;

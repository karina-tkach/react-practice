import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="home-button">Go Home</Link>
        </div>
    );
};

export default NotFound;

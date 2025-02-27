import React from "react";
import "../assets/css/NotFound.css";

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Page Not Found</p>
        <a href="/" className="not-found-button">Go Home</a>
      </div>
    </div>
  );
}

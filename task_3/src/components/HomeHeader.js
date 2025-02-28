import React from "react";
import "../assets/css/HomeHeader.css";

const HomeHeader = () => {
  return (
    <header className="home-header">
      <div className="header-left">
        <a href="/"><h1>FLAT UI COLORS 2</h1></a>
      </div>
      <div className="header-right">
        <a href="#" className="header-link">Designer Inspiration</a>
        <a href="#" className="header-link">Subscribe</a>
      </div>
    </header>
  );
};

export default HomeHeader;
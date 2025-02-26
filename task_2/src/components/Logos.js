import React from "react";
import "../assets/css/Logos.css";
import logo1 from "../assets/img/Logo 1.png"
import logo2 from "../assets/img/Logo 2.png"
import logo3 from "../assets/img/Logo 3.png"
import logo4 from "../assets/img/Logo 4.png"
import logo5 from "../assets/img/Logo 5.png"

const Logos = () => {
    return (
      <div className="logos" >
        <div className="users-info">
          <h3>100.00+</h3>
          <p>Figma users</p>
        </div>
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo5} alt="Logo 5" />
      </div>
    );
  };

export default Logos;
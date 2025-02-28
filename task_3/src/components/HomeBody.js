import React from "react";
import PaletteCard from "./PaletteCard";
import palettes from "../assets/data/pallete.json";
import "../assets/css/HomeBody.css"

const HomeBody = () => {
  return (
    <div className="palettes-container">
      {palettes.map((palette) => (
        <PaletteCard palette={palette} />
      ))}
    </div>
  );
};

export default HomeBody;
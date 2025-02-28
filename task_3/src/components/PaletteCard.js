import React from "react";
import "../assets/css/PaletteCard.css";

const PaletteCard = ({ palette }) => {
  return (
    <a href={`/palette/${palette.id}`} className="palette-card">
      <div className="palette-grid">
        {palette.colors.slice(0, 20).map((color) => (
          <div
            className="palette-color"
            style={{ backgroundColor: color.color }}
          />
        ))}
      </div>

      <div className="palette-item-footer">
        <span className="palette-name">{palette.paletteName}</span>
        <span className="palette-emoji">{palette.emoji}</span>
      </div>
    </a>
  );
};

export default PaletteCard;

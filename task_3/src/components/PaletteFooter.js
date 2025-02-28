import React from 'react';
import "../assets/css/PaletteFooter.css"

const PaletteFooter = ({palette}) => {
    const name = palette.paletteName;
    return (
        <footer className="palette-footer">
            <span>{name}</span>
        </footer>
    );
}
export default PaletteFooter;
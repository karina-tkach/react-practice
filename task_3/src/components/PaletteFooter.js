import React from 'react';
import palettes from "../assets/data/pallete.json"
import {useParams} from 'react-router-dom';
import "../assets/css/PaletteFooter.css"

const PaletteFooter = () => {
    let {id} = useParams();
    const palette = palettes.find((palette) => palette.id === id);
    const name = palette ? palette.paletteName : [];
    return (
        <footer className="palette-footer">
            <span>{name}</span>
        </footer>
    );
}
export default PaletteFooter;
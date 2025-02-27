import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import NotFound from "../pages/NotFound"
import notify from "../assets/data/src_notify.mp3"
import palettes from "../assets/data/pallete.json"

function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

const PaletteBody = ({ format, soundOn }) => {
    const [clickSound] = useState(new Audio(notify));
    let { id } = useParams();
    const palette = palettes.find((palette) => palette.id === id);

    if (!palette) {
        return <NotFound />;
    }

    const colors = palette.colors;
    const copyToClipboard = (color) => {
        navigator.clipboard.writeText(color)
            .then(() => {
                if (soundOn) clickSound.play();
                alert(`Copied: ${color}`);
            })
            .catch((error) => console.error("Error copying color to clipboard:", error));
    };

    const formatColor = (hex) => {
        if (format.includes("RGB")) {
            let rgb = hexToRgb(hex);
            return format.includes("RGBA") ? rgb.replace("rgb", "rgba").replace(")", ",1.0)") : rgb;
        }
        return format.includes("#AA1923") ? hex : hex.replace("#", "");
    };

    return (
        <div className="palette-body">
            {colors.map((color) => (
                <button
                    key={color.name}
                    className="color-tile"
                    style={{ backgroundColor: color.color }}
                    onClick={() => copyToClipboard(formatColor(color.color))}
                >
                    {color.name}
                </button>
            ))}
        </div>
    );
}

export default PaletteBody;

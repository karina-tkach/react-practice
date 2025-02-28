import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import NotFound from "../pages/NotFound"
import notify from "../assets/data/src_notify.mp3"
import palettes from "../assets/data/pallete.json"
import "../assets/css/PaletteBody.css"

function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

const copiedMessages = ["COPIED!", "SAVED!", "CLONED!", "DUPLICATED!", "GRABBED!"];

const PaletteBody = ({ format, soundOn }) => {
    const [activeColor, setActiveColor] = useState(null);
    const [activeColorHex, setActiveColorHex] = useState(null);
    const [randomMessage, setRandomMessage] = useState("");
    const [showOverlay, setShowOverlay] = useState(false);
    let { id } = useParams();
    const palette = palettes.find((palette) => palette.id === id);

    useEffect(() => {
        if (activeColor !== null) {
            const randomIndex = Math.floor(Math.random() * copiedMessages.length);
            setRandomMessage(copiedMessages[randomIndex]);
            setShowOverlay(true);

            setTimeout(() => {
                setShowOverlay(false);
            }, 800);
        }
    }, [activeColor]);

    if (!palette) {
        return <NotFound />;
    }

    const colors = palette.colors;

    const formatColor = (hex) => {
        if (format.includes("RGB")) {
            let rgb = hexToRgb(hex);
            return format.includes("RGBA") ? rgb.replace("rgb", "rgba").replace(")", ",1.0)") : rgb;
        }
        return format.includes("#AA1923") ? hex : hex.replace("#", "");
    };

    const copyToClipboard = (color) => {
        let copiedColor = formatColor(color);
        navigator.clipboard.writeText(copiedColor)
            .then(() => {
                if (soundOn) {
                    let sound = new Audio(notify);
                    sound.currentTime = 0;
                    sound.play().catch((err) => console.error("Audio play error:", err));

                }
                setActiveColorHex(color);
                setActiveColor(copiedColor);
                setTimeout(() => {setActiveColor(null); setActiveColorHex(null);}, 1600);
            })
            .catch((error) => console.error("Error copying color to clipboard:", error));
    };
    

    return (
        <div className="palette-body">
            {colors.map((color) => (
                <button
                    key={color.name}
                    className="color-tile"
                    style={{ backgroundColor: color.color }}
                    onClick={() => copyToClipboard(color.color)}
                >
                    <div className="copy-overlay">COPY</div>
                    <span className="color-name">{color.name}</span>
                    
                </button>
            ))}
            {activeColor && (
                <div
                    className={`fullscreen-overlay ${showOverlay ? "show-overlay" : "hide-overlay"}`}
                    style={{ backgroundColor: activeColorHex }}
                >
                    <span class="copied-text">{randomMessage}</span>
                    <span class="color-code">{activeColor}</span>
                </div>
            )}
        </div>
    );
}

export default PaletteBody;
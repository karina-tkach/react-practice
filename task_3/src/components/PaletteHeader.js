import {React, useState} from 'react';
import "../assets/css/PaletteHeader.css"

const PaletteHeader = ({ format, setFormat, formats, soundOn, setSoundOn }) => {
    const [showOptions, setShowOptions] = useState(false);
  
    return (
      <header className="palette-header">
        <a href="/">←&nbsp;&nbsp;Back</a>
        <div className="format-selector">
          <button className="format-button" onClick={() => setShowOptions(!showOptions)}>
            Copy Format: {format} {showOptions ? "▲" : "▼"}
          </button>
          {showOptions && (
            <ul className={`format-options ${showOptions ? "show" : ""}`}>
              {formats.map((option) => (
                <li key={option} onClick={() => { setFormat(option); setShowOptions(false); }} className="format-option">
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="sound-toggle" onClick={() => setSoundOn(!soundOn)}>
          {soundOn ? "Sound On 🔊" : "Sound Off 🔇"}
        </button>
      </header>
    );
  }

export default PaletteHeader;
import {React, useState} from 'react';
import PaletteHeader from "../components/PaletteHeader";
import PaletteBody from "../components/PaletteBody";
import PaletteFooter from "../components/PaletteFooter";

const Palette = () => {
    const [format, setFormat] = useState("HEX (#AA1923)");
    const [soundOn, setSoundOn] = useState(true);
    const formats = ["HEX (#AA1923)", "HEX (AA1923)", "RGB - (1,2,3)", "RGBA - (1,2,3,1.0)"];

  return (
    <main className="palette-container">
      <PaletteHeader format={format} setFormat={setFormat} formats={formats} soundOn={soundOn} setSoundOn={setSoundOn} />
      <PaletteBody format={format} soundOn={soundOn} />
      <PaletteFooter/>
    </main>
  );
}

export default Palette;

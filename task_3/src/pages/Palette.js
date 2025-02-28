import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import PaletteHeader from "../components/PaletteHeader";
import PaletteBody from "../components/PaletteBody";
import PaletteFooter from "../components/PaletteFooter";
import NotFound from './NotFound';
import palettes from "../assets/data/pallete.json"

const Palette = () => {
    const [format, setFormat] = useState("HEX (#AA1923)");
    const [soundOn, setSoundOn] = useState(true);
    const formats = ["HEX (#AA1923)", "HEX (AA1923)", "RGB - (1,2,3)", "RGBA - (1,2,3,1.0)"];

    let { id } = useParams();
    const palette = palettes.find((palette) => palette.id === id);

    if (!palette) {
        return <NotFound />;
    }

  return (
    <main className="palette-container">
      <PaletteHeader format={format} setFormat={setFormat} formats={formats} soundOn={soundOn} setSoundOn={setSoundOn} />
      <PaletteBody palette={palette} format={format} soundOn={soundOn} />
      <PaletteFooter palette={palette}/>
    </main>
  );
}

export default Palette;

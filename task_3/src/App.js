import React from "react";
import Home from "./pages/Home";
import Palette from "./pages/Palette";
import NotFound from "./pages/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/palette/:id" element={<Palette/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
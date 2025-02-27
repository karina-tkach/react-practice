import React from "react";
import Home from "./pages/Home";
import Palette from "./pages/Palette";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/palette/:id'} element={<Palette/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
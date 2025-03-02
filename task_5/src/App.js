import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RegistrationPage/>}/>
            {/*<Route path="/profileInfo" element={<ProfileInfoPage/>}/>*/}
            {/*<Route path="*" element={<NotFound/>} />*/}
        </Routes>
      </BrowserRouter>
  );
};

export default App;

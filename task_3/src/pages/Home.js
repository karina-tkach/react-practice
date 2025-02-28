import React from "react";
import HomeFooter from "../components/HomeFooter";
import HomeHeader from "../components/HomeHeader";
import "../assets/css/Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <HomeHeader/>
            <HomeFooter/>
        </div>
        
    );
};

export default Home;

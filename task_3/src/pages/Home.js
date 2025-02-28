import React from "react";
import HomeFooter from "../components/HomeFooter";
import HomeHeader from "../components/HomeHeader";
import "../assets/css/Home.css"
import HomeBody from "../components/HomeBody";

const Home = () => {
    return (
        <div className="home-container">
            <HomeHeader/>
            <HomeBody/>
            <HomeFooter/>
        </div>
        
    );
};

export default Home;

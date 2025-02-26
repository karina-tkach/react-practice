import React from "react";
import InfoSection from "../components/InfoSection";
import HowWeWork from "../components/HowWeWork";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";

const Home = () => {
    return (
        <main>
            <InfoSection title="Building stellar websites for early startups" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."/>
            <HowWeWork />
            <Projects />
            <FAQ />
            <ContactSection />
        </main>
    );
};

export default Home;

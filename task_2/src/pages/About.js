import React from "react";
import RightImageSection from "../components/RightImageSection";
import LeftImageSection from "../components/LeftImageSection";
import WhoWeAreSection from "../components/WhoWeAreSection";
import BenefitsSection from "../components/BenefitsSection";
import ProcessSection from "../components/ProcessSection";
import TeamSection from "../components/TeamSection";
import people from "../assets/img/people.jpg";
import manImage from "../assets/img/man.jpg";
import womenImage from "../assets/img/women.png";

const About = () => {
    return (
        <main>
            <RightImageSection
                className="background-white"
                headingStyle="bigger-heading"
                title="About us"
                heading="Our designs solve problems"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                image={people}
                alt="People"
            />
            <WhoWeAreSection/>
            <ProcessSection/>
            <RightImageSection
                title="Our mission"
                heading="Inspire, Innovate, Share"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                image={manImage}
                alt="Man"
            />
            <LeftImageSection
                title="Our vision"
                heading="Laser focus"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                image={womenImage}
                alt="Woman"
            />
            <BenefitsSection heading="The benefits of working with us" top={false}/>
            <TeamSection/>

        </main>
    );
};

export default About;

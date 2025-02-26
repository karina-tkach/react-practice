import React from "react";
import RightImageSection from "../components/RightImageSection";
import people from "../assets/img/people.jpg";

const About = () => {
    return (
        <main>
            <RightImageSection
          headingStyle="bigger-heading"
          title="About us"
          heading="Our designs solve problems"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          image={people}
          alt="People"
        />

        </main>
    );
};

export default About;

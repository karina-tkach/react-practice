import React from "react";
import InfoSection from "../components/InfoSection"
import RightImageSection from "../components/RightImageSection"
import LeftImageSection from "../components/LeftImageSection"
import clientImage from "../assets/img/client-first.jpg"
import manImage from "../assets/img/man-working.jpg"
import supportImage from "../assets/img/support-image.jpg"
import laptopImage from "../assets/img/delivery-image.jpg"
import BenefitsSection from "../components/BenefitsSection";

const Features = () => {
    return (
        <main>
            <InfoSection title="All the features you need"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
            <BenefitsSection heading="The benefits of working with our team" top={true}/>
            <RightImageSection
                className="background-white"
                title="Use Client-first"
                heading="Top agencies and freelancers around the world use Client-first"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                image={clientImage}
                alt="Man talking"
            />
            <LeftImageSection
                title="Free Revision Rounds"
                heading="Get free Revisions and one week of free maintenance"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                image={manImage}
                alt="Man working at desk"
            />
            <RightImageSection
                className="background-white"
                title="24/7 Support"
                heading="Working with us, you will be getting 24/7 priority support"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                image={supportImage}
                alt="Support agent on call"
            />
            <LeftImageSection
                className="background-yellow"
                title="Quick Delivery"
                heading="Guaranteed 1 week delivery for standard five pager website"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                image={laptopImage}
                alt="Laptop with coding session"
            />

        </main>
    );
}

export default Features;
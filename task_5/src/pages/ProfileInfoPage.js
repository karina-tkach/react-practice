import React, { useState } from "react";
import Header from "../components/Header";
import ProfileInfoFirstStep from "../components/ProfileInfoFirstStep";
import ProfileInfoSecondStep from "../components/ProfileInfoSecondStep";
import ProfileInfoThirdStep from "../components/ProfileInfoThirdStep";

const ProfileInfoPage = () => {
    const [activeStep, setActiveStep] = useState(1);

    const handleNextStep = () => {
        setActiveStep((prev) => Math.min(prev + 1, 3));
    };

    return (
        <div>
            <Header activeStep={activeStep} />
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-md md:max-w-lg text-center md:text-left px-6 md:px-0 pt-0 md:pt-20">
                    <h1 className="text-3xl font-bold">Profile info</h1>
                    <p className="text-gray-600 py-4 md:pr-20">
                        Fill in the data for profile. It will take a couple of minutes.
                        You only need a passport.
                    </p>
                </div>
                {activeStep === 1 && <ProfileInfoFirstStep onNext={handleNextStep} />}
                {activeStep === 2 && (
                    <ProfileInfoSecondStep onNext={handleNextStep}/>
                )}
                {activeStep === 3 && <ProfileInfoThirdStep/>}
            </div>
        </div>
    );
};

export default ProfileInfoPage;

import React, { useState } from "react";
import Header from "../components/Header";
import RegistrationFirstStep from "../components/RegistrationFirstStep";
import RegistrationSecondStep from "../components/RegistrationSecondStep";
import RegistrationThirdStep from "../components/RegistrationThirdStep";

const RegistrationPage = () => {
    const [activeStep, setActiveStep] = useState(1);

    const handleNextStep = () => {
        setActiveStep((prev) => Math.min(prev + 1, 3));
    };

    const handlePreviousStep = () => {
        setActiveStep((prev) => Math.max(1, prev - 1));
      };

    return (
        <div>
            <Header activeStep={activeStep} />
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-md md:max-w-lg text-center md:text-left px-6 md:px-0 pt-0 md:pt-20">
                    <h1 className="text-3xl font-bold">Registration</h1>
                    <p className="text-gray-600 py-4 md:pr-20">
                        Fill in the registration data. It will take a couple of minutes.
                        All you need is a phone number and e-mail.
                    </p>
                </div>
                {activeStep === 1 && <RegistrationFirstStep onNext={handleNextStep} />}
                {activeStep === 2 && (
                    <RegistrationSecondStep onNext={handleNextStep}  onPrevious={handlePreviousStep} />
                )}
                {activeStep === 3 && <RegistrationThirdStep onNext={handleNextStep}/>}
            </div>
        </div>
    );
};

export default RegistrationPage;

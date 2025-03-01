import React, { useState } from "react";
import Header from "../components/Header";
import RegistrationFirstStep from "../components/RegistrationFirstStep";

const RegistrationPage = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div>
      <Header activeStep={activeStep}/>
      <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-md md:max-w-lg text-center md:text-left px-6 md:px-0 pt-0 md:pt-20">
        <h1 className="text-3xl font-bold">Registration</h1>
        <p className="text-gray-600 py-4 md:pr-20">
          Fill in the registration data. It will take a couple of minutes.
          All you need is a phone number and e-mail.
        </p>
      </div>
      <RegistrationFirstStep/>
      <div className="p-6 flex justify-center space-x-2">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => setActiveStep(Math.max(activeStep - 1, 1))}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setActiveStep(Math.min(activeStep + 1, 3))}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

export default RegistrationPage;

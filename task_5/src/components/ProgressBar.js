import React from "react";

const ProgressBar = ({ activeStep }) => {
  return (
    <div className="flex items-center space-x-4">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center space-x-4">
          <div
            className={`w-4 h-4 rounded-full ${
              step <= activeStep ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
          {step < 3 && <div className={`w-10 h-0.5 ${step < activeStep ? "bg-blue-500" : "bg-gray-300"}`}></div>}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;

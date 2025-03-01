import React from "react";
import ProgressBar from "./ProgressBar";

const Header = ({ activeStep }) => {
  return (
    <div className="p-4 flex flex-col md:flex-row items-center md:justify-between w-full relative">
      <div className="flex items-center space-x-2 w-full md:w-auto">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
          C
        </div>
        <span className="font-bold text-gray-800 text-lg">COMPANY NAME</span>
      </div>
      <div className="w-[43vw] flex justify-center md:justify-start pt-10 md:pt-0 pb-10 md:pb-0">
        <ProgressBar activeStep={activeStep} />
      </div>
      <button
        className="absolute z-10 right-4 md:static text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer w-10 h-10 flex items-center justify-center text-2xl"
        aria-label="Close"
      >
        ✖
      </button>

      
    </div>
  );
};

export default Header;

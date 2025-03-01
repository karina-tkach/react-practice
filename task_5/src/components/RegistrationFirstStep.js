import React from "react";

const RegistrationFirstStep = () => {
  return (
    <>
      <div className="w-full max-w-md md:max-w-lg bg-gray-100 p-4 mt-4 md:rounded-md flex items-start space-x-3">
        <span className="text-gray-400 text-lg">🔒</span>
        <p className="text-sm text-gray-700 flex-1">
          We take privacy issues seriously. You can be sure that your personal data is securely protected.
        </p>
        <button className="text-gray-400">✖</button>
      </div>
      <div className="w-full max-w-md md:max-w-lg bg-white p-7 mt-0 md:mt-6 rounded-md md:border md:border-gray-300">
        <label className="block text-sm font-medium text-gray-700 mb-2 pb-5">
          Enter your phone number
        </label>
        <div className="flex items-center pb-2">
          <select className="bg-transparent focus:outline-none border-b h-10">
            <option value="+1">+1</option>
          </select>
          <input
            type="text"
            className="flex-1 bg-transparent focus:outline-none ml-6 border-b h-10"
            placeholder="555 555-1234"
          />
        </div>
      </div>
      <div className="w-full max-w-md md:max-w-lg md:mt-6 flex md:justify-start justify-center">
        <button className="bg-white text-black px-6 py-2 rounded-md border border-gray-300 font-semibold hover:bg-blue-500 hover:text-white">
          Send Code
        </button>
      </div>
    </>
  );
};

export default RegistrationFirstStep;
//headless ui
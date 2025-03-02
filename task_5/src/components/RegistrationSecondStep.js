import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useStorage } from "./StorageProvider"
import button from "../assets/img/button.svg"

const RegistrationSecondStep = ({ onNext, onPrevious }) => {
  const [verificationCode, setVerificationCode] = useState("");
  const { getValue } = useStorage();
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const correctCode = "1234";

  const onSubmit = (data) => {
    if (data.verificationCode === correctCode) {
      onNext();
    } else {
      setError("verificationCode", {
        type: "manual",
        message: "Invalid code. Please try again.",
      });
    }
  }

  const handleVerificationCodeChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) return;
    setVerificationCode(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md md:max-w-lg">
      
      <div className="w-full max-w-md md:max-w-lg bg-blue-100 md:bg-white md:border md:border-gray-300 p-5 mt-4 md:rounded-md flex justify-between space-x-3">
          <div>
            <p className="text-lg font-medium">{getValue("phoneCode")} {getValue("phoneNumber")}</p>
            <p className="text-sm text-gray-500">Number not confirmed yet</p>
          </div>
        
          <button type="button" onClick={onPrevious} className="text-blue-500 text-sm font-medium">
          🖊️
          </button>
        
      </div>

      <div className="md:mt-6 p-8 md:p-0">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Confirmation code
        </label>
        <div className="flex md:items-center md:justify-between md:flex-row flex-col items-start">
          <div>
          <input
            {...register("verificationCode")}
            value={verificationCode}
            onChange={handleVerificationCodeChange}
            type="text"
            className={`w-full border-b border-gray-400 focus:outline-none text-lg py-1 ${
              errors.verificationCode ? "border-red-500" : ""
            }`}
            placeholder="____"
          />
          <p className="text-gray-500 text-xs mt-1">Confirm phone number with code from SMS message</p>
          </div>
          <button type="button" className="text-blue-500 text-sm font-medium pt-5 md:pt-0">
            <img src={button} alt="Send again button" className="h-[20px]"/>
          </button>
        </div>
        {errors.verificationCode && <p className="text-red-500 text-xs mt-1">{errors.verificationCode.message}</p>}
        
      </div>

      <div className="w-full max-w-md md:max-w-lg md:mt-6 flex md:justify-start justify-center">
        <button
          type="submit"
          className={`px-6 py-2 rounded-md border font-semibold ${
            verificationCode?.length === 4
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={verificationCode?.length !== 4}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default RegistrationSecondStep;
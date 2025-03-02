import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStorage } from "./StorageProvider"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import countryPhones from "../data/countryPhones.json";

const RegistrationFirstStep = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(countryPhones[228]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { setValue } = useStorage();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const phoneCode = selectedCountry.phone;
    setValue("phoneCode", phoneCode);
    setValue("phoneNumber", data.phoneNumber);
    onNext();
  }


  useEffect(() => {
    setPhoneNumber("");
  }, [selectedCountry]);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");

    const phoneLength = selectedCountry.phoneLength;
    const maxLength = Array.isArray(phoneLength) ? Math.max(...phoneLength) : phoneLength;

    if (value.length > maxLength) return;
    setPhoneNumber(value);
  };

  const isValidPhoneLength = () => {
    const phoneLength = selectedCountry.phoneLength;
    return Array.isArray(phoneLength) ? phoneLength.includes(phoneNumber.length) : phoneNumber.length === phoneLength;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md md:max-w-lg">
      {isOpen && <div className="w-full max-w-md md:max-w-lg bg-gray-100 p-4 mt-4 md:rounded-md flex items-start space-x-3">
        <span className="text-gray-400 text-lg">🔒</span>
        <p className="text-sm text-gray-700 flex-1">
          We take privacy issues seriously. You can be sure that your personal data is securely protected.
        </p>
        <button onClick={() => setIsOpen(false)} className="text-gray-400">✖</button>
      </div>}
      <div className="w-full max-w-md md:max-w-lg bg-white p-7 mt-0 md:mt-6 rounded-md md:border md:border-gray-300">
        <label className="block text-sm font-medium text-gray-700 mb-2 pb-5">
          Enter your phone number
        </label>
        <div className="flex items-center pb-2 text-[14px]">
          <Listbox value={selectedCountry} onChange={setSelectedCountry}>
            <div className="relative w-20">
              <ListboxButton className="flex items-center justify-around bg-transparent focus:outline-none border-b h-10 w-full px-2">
                {selectedCountry.phone}
                <span>&#9662;</span>
              </ListboxButton>
              <ListboxOptions className="absolute w-full mt-1 bg-white shadow-md rounded-md border z-10 max-h-[150px] overflow-y-auto">
                {countryPhones.map((country, index) => (
                  <ListboxOption
                    key={index}
                    value={country}
                    className="cursor-pointer p-2 hover:bg-gray-200"
                  >
                    {country.phone}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
          <input
          {...register("phoneNumber")}
            type="text"
            className="flex-1 bg-transparent focus:outline-none ml-6 border-b h-10"
            placeholder="555 555-1234"
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
        </div>
      </div>
      <div className="w-full max-w-md md:max-w-lg md:mt-6 flex md:justify-start justify-center">
        <button
          type="submit"
          className={`px-6 py-2 rounded-md border font-semibold ${isValidPhoneLength()
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          disabled={!isValidPhoneLength()}
        >
          Send Code
        </button>
      </div>
    </form>
  );
};

export default RegistrationFirstStep;
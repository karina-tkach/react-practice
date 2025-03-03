import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStorage } from "./StorageProvider"
import { fetchData } from "../utils/apiCountriesCities"

const ProfileInfoThirdStep = () => {
  const { setValue, getStorage } = useStorage();
  const { register, handleSubmit, setValue: setFormValue, clearErrors, formState: { errors } } = useForm();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await fetchData();
        if (Array.isArray(countriesData)) {
          setCountries(countriesData);
        } else {
          console.error("Invalid data received");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);
    setSelectedCity("");
    const country = countries.find((c) => c.country === countryName);
    setCities(country.cities);
    handleInputChange("deliveryCountry", countryName);
  };

  const onSubmit = () => {
        console.clear();
        console.log(getStorage());
  };

  const handleInputChange = (field, value) => {
    setValue(field, value);
    setFormValue(field, value);
    clearErrors(field);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md md:max-w-lg">
      <div className="bg-white p-7 rounded-md md:border border-t border-gray-300">
        <h2 className="text-lg font-semibold text-gray-900">Delivery address</h2>
        <p className="text-sm text-gray-500 mb-10">Used for shipping orders</p>
        <label className="block text-sm font-medium text-gray-700 pb-4">
          Address
        </label>
        <input
          type="text"
          className="w-full border-b focus:outline-none text-lg py-2"
          placeholder="Enter your address"
          {...register("deliveryAddress", {
            required: "Address is required",
            maxLength: { value: 55, message: "Address cannot exceed 55 characters" }
          })}
          onChange={(e) => handleInputChange("deliveryAddress", e.target.value)}
        />
        {errors.deliveryAddress && <p className="text-red-500 text-sm">{errors.deliveryAddress.message}</p>}


        <div className="w-full mt-9">
          <label className="block text-sm font-medium text-gray-700 pb-4">City</label>
          <select
            {...register("deliveryCity", { required: "City is required" })}
            className="w-full border-b focus:outline-none text-lg py-2"
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              handleInputChange("deliveryCity", e.target.value);
            }}
            disabled={!selectedCountry || cities.length === 0}
          >
            <option value="" disabled >Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.deliveryCity && <p className="text-red-500 text-sm mt-1 mb-5">{errors.deliveryCity.message}</p>}
        </div>


        <div className="flex items-center md:space-x-4 mt-4">
          <div className="w-1/2 h-full mt-8 md:mt-0 flex flex-col justify-between">
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <select
              {...register("deliveryCountry", { required: "Country is required" })}
              className="w-full border-b focus:outline-none text-lg pb-2 pt-3"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="" disabled>Select a country</option>
              {countries.map((country) => (
                <option key={country.country} value={country.country}>
                  {country.country}
                </option>
              ))}
            </select>
            {errors.deliveryCountry && <p className="text-red-500 text-sm mt-1 mb-5">{errors.deliveryCountry.message}</p>}
          </div>

          <div className="w-1/2 mt-8 md:mt-0 ml-5 flex flex-col justify-between">
            <label className="block text-sm font-medium text-gray-700">Zip code</label>
            <input
              type="text"
              className="w-full border-b focus:outline-none text-lg py-2"
              placeholder="Enter a zip code"
              {...register("zipCode", {
                required: "Zip Code is required",
                minLength: { value: 5, message: "Zip Code must be at least 5 characters" },
                maxLength: { value: 16, message: "Zip Code cannot exceed 16 characters" }
              })}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
            />
            {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
          </div>
        </div>
        <label className="block text-sm font-medium text-gray-700 pb-4 mt-9">
          Optional
        </label>
        <input
          type="text"
          className="w-full border-b focus:outline-none text-lg py-2"
          placeholder="Optional information"
          defaultValue=""
          {...register("optional", {
            maxLength: { value: 100, message: "Optional info cannot exceed 100 characters" }
          })}
          onChange={(e) => handleInputChange("optional", e.target.value)}
        />
        {errors.optional && <p className="text-red-500 text-sm">{errors.optional.message}</p>}

      </div>

      <div className="w-full max-w-md md:max-w-lg flex md:justify-start justify-center mb-10 md:mt-10">
        <button
          type="submit"
          className="px-6 py-2 rounded-md border font-semibold bg-blue-500 text-white hover:bg-blue-600"
        >
          ✓ Save
        </button>
      </div>
    </form>
  );
};

export default ProfileInfoThirdStep;
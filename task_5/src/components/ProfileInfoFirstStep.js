import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fetchData } from "../utils/apiCountriesCities"
import { useStorage } from "./StorageProvider"
import { format } from "date-fns";


const ProfileInfoFirstStep = ({ onNext }) => {
    const { register, handleSubmit, setValue: setFormValue, clearErrors, formState: { errors } } = useForm();
    const [dob, setDob] = useState(null);
    const [agreed, setAgreed] = useState(false);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const { setValue } = useStorage();

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
        setFormValue("country", countryName);
        clearErrors("country");
    };

    const onSubmit = (data) => {
        setValue("firstName", data.firstName);
        setValue("secondName", data.secondName);
        setValue("dateOfBirth", format(data.dob, "dd-MM-yyyy"));
        setValue("country", data.country);
        setValue("city", data.city);
        setValue("itin", data.itin);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md md:max-w-lg">
            <div className="flex items-center md:justify-start justify-center space-x-2 text-sm text-gray-700 pb-4 my-5">
                <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="font-bold">
                    I agree with <a href="#" className="text-blue-600">Terms of use</a>
                </label>
            </div>

            <div className="bg-white p-7 rounded-md md:border border-t border-gray-300">
                <h2 className="text-lg font-semibold text-gray-900">Personal data</h2>
                <p className="text-sm text-gray-500 mb-10">Specify exactly as in your passport</p>

                <label className="block text-sm font-medium text-gray-700">First name</label>
                <input
                    {...register("firstName", {
                        required: "First name is required",
                        pattern: {
                            value: /^[A-Z][a-zA-Z-]*$/,
                            message: "Must start with a capital letter and contain only letters or dashes",
                        },
                        maxLength: {
                            value: 30,
                            message: "Must be 30 characters or less",
                        },
                    })}
                    type="text"
                    className="w-full border-b focus:outline-none text-lg py-2 mb-4"
                    placeholder="Alexander"
                />
                <p className="text-red-500 text-sm mb-5">{errors.firstName?.message}</p>


                <label className="block text-sm font-medium text-gray-700">Second name</label>
                <input
                    {...register("secondName", {
                        required: "Second name is required",
                        pattern: {
                            value: /^[A-Z][a-zA-Z-]*$/,
                            message: "Must start with a capital letter and contain only letters or dashes",
                        },
                        maxLength: {
                            value: 30,
                            message: "Must be 30 characters or less",
                        },
                    })}
                    type="text"
                    className="w-full border-b focus:outline-none text-lg py-2 mb-4"
                    placeholder="Smith"
                />
                <p className="text-red-500 text-sm mb-5">{errors.secondName?.message}</p>

                <div className="w-full mt-4">
                    <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <DatePicker
                        {...register("dob", { required: "Date of birth is required" })}
                        selected={dob}
                        onChange={(date) => {
                            setDob(date);
                            setFormValue("dob", date);
                            clearErrors("dob");
                        }}
                        wrapperClassName="w-full"
                        className="w-full border-b focus:outline-none text-lg py-2 cursor-pointer"
                        placeholderText="Select Date"
                        dateFormat="dd.MM.yyyy"
                        showYearDropdown
                        scrollableYearDropdown
                        yearDropdownItemNumber={100}
                    />

                    {errors.dob && <p className="text-red-500 text-sm mt-1 mb-5">{errors.dob.message}</p>}
                </div>

                <div className="flex md:flex-row flex-col md:space-x-4 mt-4">
                    <div className="md:w-1/2 w-full mt-9 md:mt-0">
                        <label className="block text-sm font-medium text-gray-700">Country</label>
                        <select
                            {...register("country", { required: "Country is required" })}
                            className="w-full border-b focus:outline-none text-lg py-2"
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
                        {errors.country && <p className="text-red-500 text-sm mt-1 mb-5">{errors.country.message}</p>}
                    </div>

                    <div className="md:w-1/2 w-full mt-9 md:mt-0">
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <select
                            {...register("city", { required: "City is required" })}
                            className="w-full border-b focus:outline-none text-lg py-2"
                            value={selectedCity}
                            onChange={(e) => {
                                setSelectedCity(e.target.value);
                                setFormValue("city", e.target.value);
                                clearErrors("city");
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
                        {errors.city && <p className="text-red-500 text-sm mt-1 mb-5">{errors.city.message}</p>}
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-col justify-start bg-blue-100 md:bg-white py-2 px-5 rounded-md md:border md:border-gray-300">
                <input
                    {...register("itin", {
                        required: "ITIN is required",
                        pattern: {
                            value: /^9\d{2}-\d{2}-\d{4}$/,
                            message: "Invalid ITIN format (Example: 912-34-5678)",
                        },
                    })}
                    type="text"
                    className="w-1/2 flex-1 bg-transparent border-b border-gray-300 focus:outline-none text-lg py-1 mb-3"
                    placeholder="923-45-5678"
                />
                {errors.itin && <p className="text-red-500 text-sm mt-1 mb-5">{errors.itin.message}</p>}
                <span className="text-gray-500 text-sm">✓ Your ITIN</span>
            </div>

            <div className="w-full max-w-md md:max-w-lg flex md:justify-start justify-center my-10">
                <button
                    type="submit"
                    className={`px-6 py-2 rounded-md border font-semibold ${agreed ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    disabled={!agreed}
                >
                    Go Next →
                </button>
            </div>
        </form>
    );
};

export default ProfileInfoFirstStep;

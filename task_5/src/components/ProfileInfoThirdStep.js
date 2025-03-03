import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { useStorage } from "./StorageProvider"

const ProfileInfoThirdStep = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setValue, getValue } = useStorage();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setValue("email", data.email);
    setValue("password", data.password);
    navigate("/profileInfo")
  };

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[0-9])(?=.*[\W_]).{8,}$/.test(password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md md:max-w-lg">

      <div className="w-full max-w-md md:max-w-lg bg-blue-100 md:bg-white md:border md:border-gray-300 p-5 mt-4 md:rounded-md flex justify-between space-x-3">
        <div>
          <p className="text-lg font-medium">{getValue("phoneCode")} {getValue("phoneNumber")}</p>
          <p className="text-sm text-gray-500 pt-3">✓ Number confirmed</p>
        </div>
      </div>

      <div className="w-full max-w-md md:max-w-lg bg-white p-7 mt-0 md:mt-6 rounded-md md:border md:border-gray-300">
        <label className="block text-sm font-medium text-gray-700 pb-4">
          Enter your email
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full flex-1 bg-transparent focus:outline-none font-medium text-lg border-b h-10 px-6"
          placeholder="example@gmail.com"
          maxLength={60}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!validateEmail(email) && email.length > 0 && (
          <p className="text-red-500 text-xs mt-1">Invalid email format</p>
        )}
        <label className="block text-sm font-medium text-gray-700 pb-4 mt-8">
          Set a password
        </label>
        <input
          {...register("password")}
          type="password"
          className="w-full flex-1 bg-transparent focus:outline-none font-medium text-lg border-b h-10 px-6"
          placeholder="********"
          maxLength={20}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {validatePassword(password) && password.length > 0 ? (
          <p className="text-green-500 text-xs mt-1">Good password!</p>
        ) : (
          <p className="text-red-500 text-xs mt-1">
            Password must be at least 8 characters, contain 1 digit, and 1 special character.
          </p>
        )}

      </div>
      <div className="w-full max-w-md md:max-w-lg md:mt-6 flex md:justify-start justify-center pb-10">
        <button
          type="submit"
          className={`px-6 py-2 rounded-md border font-semibold ${validateEmail(email) && validatePassword(password)
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          disabled={!validateEmail(email) || !validatePassword(password)}
        >
          Register Now
        </button>
      </div>
    </form>
  );
};

export default ProfileInfoThirdStep;
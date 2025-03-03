import { React } from "react";
import { useForm } from "react-hook-form";
import { Listbox, ListboxOptions, ListboxOption, ListboxButton } from "@headlessui/react";
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaTelegram, FaSkype } from "react-icons/fa";
import { useStorage } from "./StorageProvider"


const ProfileInfoSecondStep = ({ onNext }) => {
    const socialNetworkIcons = {
        Facebook: <FaFacebook className="text-black md:text-gray-500 w-[25px] h-[25px]" />,
        Skype: <FaSkype className="text-black md:text-gray-500 w-[25px] h-[25px]" />,
        Telegram: <FaTelegram className="text-black md:text-gray-500 w-[25px] h-[25px]" />,
        Twitter: <FaTwitter className="text-black md:text-gray-500 w-[25px] h-[25px]" />
    };

    const availableNetworks = ["Facebook", "Skype", "Telegram", "Twitter"];

    const { register, handleSubmit, setValue: setFormValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            socialNetworks: [{ platform: "Facebook", username: "" }]
        }
    });
    const socialNetworks = watch("socialNetworks");


    const addSocialNetwork = () => {
        if (socialNetworks.length < 4) {
            const remainingNetworks = availableNetworks.filter(n => !socialNetworks.some(s => s.platform === n));
            setFormValue("socialNetworks", [...socialNetworks, { platform: remainingNetworks[0] || "", username: "" }]);
        }
    };

    const handlePlatformChange = (index, platform) => {
        const updatedNetworks = [...socialNetworks];
        updatedNetworks[index].platform = platform;
        setFormValue("socialNetworks", updatedNetworks);
    };


    const { setValue, getValue } = useStorage();

    const onSubmit = (data) => {
        setValue("socialNetworks", data.socialNetworks);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md md:max-w-lg">
            <div className="bg-white p-7 rounded-md md:border border-t border-gray-300">
                <h2 className="text-lg font-semibold text-gray-900">Contacts</h2>
                <p className="text-sm text-gray-500 mb-10">These contacts are used to inform about orders</p>

                <div className="flex items-center space-x-2 mb-4">
                    <FaEnvelope className="text-gray-500" />
                    <input
                        type="email"
                        className="w-full border-b focus:outline-none text-lg py-2"
                        value={getValue("email") || ""}
                        readOnly
                    />
                </div>
                <div className="flex items-center space-x-2 mb-4">
                    <FaPhoneAlt className="text-gray-500" />
                    <input
                        type="tel"
                        className="w-full border-b focus:outline-none text-lg py-2"
                        value={`${getValue("phoneCode")}${getValue("phoneNumber")}` || ""}
                        readOnly
                    />
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mt-7">Social network</h2>
                <p className="text-sm text-gray-500 mb-10">Indicate the desired communication method</p>

                {socialNetworks.map((network, index) => (
                    <div key={index} className="flex space-x-4 items-start mb-4">
                        
                        <Listbox value={network.platform} onChange={(platform) => handlePlatformChange(index, platform)}>
                            <ListboxButton className="w-[30px] md:w-1/3 flex items-center border-b focus:outline-none text-lg py-2">{socialNetworkIcons[network.platform]}<span className="hidden md:inline md:ml-2">{network.platform}</span></ListboxButton>
                            <ListboxOptions className="absolute mt-1 w-40 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {availableNetworks.filter(n => !socialNetworks.some(s => s.platform === n) || n === network.platform).map(n => (
                                    <ListboxOption key={n} value={n} className="cursor-pointer select-none relative py-2 px-4">
                                        <div className="flex items-center">
                                            {socialNetworkIcons[n]} <span className="ml-2">{n}</span>
                                        </div>
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Listbox>
                        <div className="w-full md:w-2/3">
                            <input
                                type="text"
                                className="w-full border-b focus:outline-none text-lg py-2"
                                placeholder="@profile"
                                {...register(`socialNetworks.${index}.username`, { required: "Username is required" })}
                            />
                            {errors.socialNetworks?.[index]?.username && (
                                <p className="text-red-500 text-sm">{errors.socialNetworks[index].username.message}</p>
                            )}
                        </div>
                    </div>
                ))}

                {socialNetworks.length < 4 && (
                    <button type="button" onClick={addSocialNetwork} className="text-blue-500 text-md font-bold my-6">
                        + Add More
                    </button>
                )}
            </div>

            <div className="w-full max-w-md md:max-w-lg flex md:justify-start justify-center mb-10 md:mt-10">
                <button
                    type="submit"
                    className="px-6 py-2 rounded-md border font-semibold bg-blue-500 text-white hover:bg-blue-600"
                >
                    Go Next →
                </button>
            </div>
        </form>
    );
};

export default ProfileInfoSecondStep;

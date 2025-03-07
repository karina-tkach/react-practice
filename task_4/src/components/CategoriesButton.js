import React from "react";
import { useNavigate } from "react-router-dom";

const CategoriesButton = () => {
    const navigate = useNavigate();

    return (
        <button
        onClick={() => {
            navigate("/categories");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }}
            className="relative flex items-center border space-x-6 border-gray-300 bg-gray-100/60 rounded-lg pr-4 py-2 shadow-sm text-gray-700 font-medium overflow-hidden"
        >
            <div>
                <div className="absolute left-0 inset-y-0 bg-white border border-gray-300 rounded-lg w-[86px] z-0"></div>

                <span className="relative z-10 bg-white text-black font-semibold rounded-lg ml-4">
                    View all
                </span>
            </div>

            <div className="space-x-7 md:space-x-5 flex">
                <span className="relative z-10 text-gray-500">Design</span>
                <span className="relative z-10 text-gray-500">Product</span>
                <span className="relative z-10 text-gray-500 inline md:hidden">Software</span>
                <span className="relative z-10 text-gray-500 hidden md:inline">Software Engineering</span>
                <span className="relative z-10 text-gray-500 hidden md:inline">Customer Success</span>
            </div>
        </button>
    );
};

export default CategoriesButton;

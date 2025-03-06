import React from "react";
import PlaneImage from "../assets/img/plane.png"

const NewsletterCard = () => {
  return (
    <div className="border p-8 rounded-lg shadow-sm bg-gray-100 flex flex-col justify-between">
        <div className="bg-white border rounded-md border-gray-300 p-2 w-fit self-start">
            <img className="w-[45px] h-[45px]" src={PlaneImage} alt="Plane icon"/>
        </div>
        
        <h2 className="text-xl font-bold mt-10">Weekly newsletter</h2>
        <p className="text-gray-600 mt-2 mb-6">
          No spam, just the latest releases and tips, interesting articles, and exclusive interviews in your inbox every week.
        </p>
        
        <div className="mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2 rounded-md w-full text-sm"
          />
          <p className="text-gray-600 mt-2">Read about our <a href="#" className="underline">privacy policy</a></p>
          <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded-md w-full">
            Subscribe
          </button>
        </div>
    </div>
  );
};

export default NewsletterCard;

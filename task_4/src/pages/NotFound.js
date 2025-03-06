import React from "react";

const NotFound = () => {
    return (
        <div className="bg-gray-50 h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="mt-12">
        <h2 className="text-4xl font-bold text-gray-900">Page Not Found</h2>
        <p className="text-gray-600 mt-4">Sorry, the page you are looking for does not exist or has been moved.</p>
        <a href="/" className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-md">Go Home</a>
      </div>
      </div>
    );
  }
  export default NotFound;
  
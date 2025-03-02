import React from "react";

const NotFound = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-blue-600">404</h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            You may have mistyped the address or the page has been removed.
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }
  export default NotFound;
  
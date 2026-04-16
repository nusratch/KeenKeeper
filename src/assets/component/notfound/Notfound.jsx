import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Page not found
      </p>

      <Link
        to="/"
        className="px-5 py-2 bg-green-900 text-white rounded-lg hover:bg-green-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
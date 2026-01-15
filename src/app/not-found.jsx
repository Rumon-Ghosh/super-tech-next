import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-green-500 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

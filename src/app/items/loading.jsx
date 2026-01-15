import React from "react";

const Loading = () => {
  return (
    <section className="bg-gray-900 min-h-screen py-16 animate-pulse">
      <div className="container mx-auto px-6">
        {/* Heading Skeleton */}
        <div className="h-8 w-72 bg-gray-700 rounded mx-auto mb-4"></div>
        <div className="h-4 w-96 bg-gray-700 rounded mx-auto mb-10"></div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-5"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>

              {/* Title */}
              <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>

              {/* Category */}
              <div className="h-3 bg-gray-700 rounded w-1/2 mb-4"></div>

              {/* Price + Rating */}
              <div className="flex justify-between mb-4">
                <div className="h-4 bg-gray-700 rounded w-16"></div>
                <div className="h-4 bg-gray-700 rounded w-12"></div>
              </div>

              {/* Button */}
              <div className="h-10 bg-gray-700 rounded-lg w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;

import React from "react";

const Loading = () => {
  return (
    <section className="bg-gray-900 min-h-screen py-16 animate-pulse">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 items-start">

        {/* Image Skeleton */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-100 bg-gray-700 rounded-xl"></div>
        </div>

        {/* Details Skeleton */}
        <div className="md:w-1/2 space-y-5">
          {/* Title */}
          <div className="h-10 bg-gray-700 rounded w-3/4"></div>

          {/* Category */}
          <div className="h-4 bg-gray-700 rounded w-1/3"></div>

          {/* Price + Rating */}
          <div className="flex items-center gap-6">
            <div className="h-8 bg-gray-700 rounded w-24"></div>
            <div className="h-6 bg-gray-700 rounded w-16"></div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          </div>

          {/* Button */}
          <div className="h-12 bg-gray-700 rounded-lg w-40 mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
